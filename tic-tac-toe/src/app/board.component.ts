import { Component, OnInit, Input } from '@angular/core';

const SELECTOR: string = "app-board";

const TEMPLATE: string = `
<mat-grid-list cols="{{ dimension }}" rowHeight="1:1" style="max-width: calc(100vh - 154px); max-height: calc(100vh); margin: 10px auto 0 auto;">
  <mat-grid-tile
    *ngFor="let square of squares; let i = index"
    [style.border-top]="square.border.top"
    [style.border-right]="square.border.right"
    [style.border-bottom]="square.border.bottom"
    [style.border-left]="square.border.left"
  >
    <img
      [src]="square.imgSrc"
      style="width: 100%; height: 100%;"
      (click)="squareClicked(i)"
    >
  </mat-grid-tile>

</mat-grid-list>

<img src="assets/x-wins.png" class="result-image" [style.display]="xWinsDisplay" (click)="reset(this.dimension)">
<img src="assets/o-wins.png" class="result-image" [style.display]="oWinsDisplay" (click)="reset(this.dimension)">
<img src="assets/tie.png" class="result-image" [style.display]="tieDisplay" (click)="reset(this.dimension)">
`;

const STYLES: string = `
  .result-image { position: fixed; left: 0; top: 0; width: 100%; height: 100%; }
`;

@Component({ selector: SELECTOR, template: TEMPLATE, styles: [STYLES] })
export class BoardComponent implements OnInit {

  public dimension: number;

  public squares;
  private turn: string;
  private winner: string;

  public xWinsDisplay: string = "none";
  public oWinsDisplay: string = "none";
  public tieDisplay: string = "";

  constructor() { }

  ngOnInit() {
    this.reset(3);
  }

  reset(dimension) {
    this.dimension = dimension;
    this.squares = [];
    this.turn = "X";
    this.winner = "";
    this.xWinsDisplay = this.oWinsDisplay = this.tieDisplay = "none";

    let numSquares = this.dimension * this.dimension;
    for (let i = 0; i < numSquares; ++i) {
      let square = {
        rowNum: -1,
        colNum: -1,
        border: { top: "", right: "", bottom: "", left: "" },
        value: "",
        imgSrc: "assets/empty.png"
      };

      const BORDER_STYLE: string = "2px solid #000";
      switch (Math.floor(i / this.dimension)) {
        case 0: square.border.bottom = BORDER_STYLE; break;
        case this.dimension - 1: square.border.top = BORDER_STYLE; break;
        default: square.border.bottom = square.border.top = BORDER_STYLE; break;
      }

      switch (i % this.dimension) {
        case 0: square.border.right = BORDER_STYLE; break;
        default:
          switch ((i + 1) % this.dimension) {
            case 0: square.border.left = BORDER_STYLE; break;
            default: square.border.right = square.border.left = BORDER_STYLE; break;
          }
      }
  
      this.squares.push(square);
    }

    let idx = 0;
    for (let row = 0; row < this.dimension; ++row) {
      for (let col = 0; col < this.dimension; ++col) {
        let square = this.squares[idx++];
        square.rowNum = row;
        square.colNum = col;
      }
    }
  }

  squareClicked(squareNum: number) {
    let square = this.squares[squareNum];
    if (square.value) {
      return;
    }
    if (this.winner) {
      return;
    }

    square.value = this.turn;
    square.imgSrc = `assets/${square.value.toLowerCase()}.png`;
    this.turn = this.turn == "X" ? "O" : "X";
    this.checkForWinner();
  }

  checkForWinner() {

    let check = squares => {
      if (squares.every(x => x.value == "X")) {
        return this.playerWins("X");
      } else if (squares.every(x => x.value == "O")) {
        return this.playerWins("O");
      }
    };

    for (let i = 0; i < this.dimension; ++i) {
      // for each row
      let result = check(this.squares.filter(x => x.rowNum == i));
      if (result) {
        return result;
      }

      // for each column
      result = check(this.squares.filter(x => x.colNum == i));
      if (result) {
        return result;
      }
    }

    // top-left to bottom-right
    let squares = [];
    for (let row = 0; row < this.dimension; ++row) {
      this.squares.filter(x => x.rowNum == row && x.colNum == row).forEach(x => squares.push(x));
    }
    let result = check(squares);
    if (result) {
      return result;
    }

    // top right to bottom-left
    squares = [];
    for (let row = 0; row < this.dimension; ++row) {
      this.squares.filter(x => x.rowNum == row && x.colNum == this.dimension - row - 1).forEach(x => squares.push(x));
    }
    result = check(squares);
    if (result) {
      return result;
    }
    
    // tie
    if (this.squares.every(x => x.value)) {
      this.tieDisplay = "block";
    }
  }

  playerWins(player: string) {
    this.winner = player;
    console.log(`Player ${player} wins!`);
    this[`${player.toLowerCase()}WinsDisplay`] = "block";
    
    return true;
  }
}
