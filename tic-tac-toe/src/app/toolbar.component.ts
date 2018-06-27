import { Component, Output, EventEmitter } from '@angular/core';

const SELECTOR: string = "toolbar";

const TEMPLATE: string = `
<mat-toolbar color="primary">
  <span>Tic-Tac-Toe</span>
  <span class="fill-remaining-space"></span>
  <button mat-icon-button [matMenuTriggerFor]="menu">
    <mat-icon>more_vert</mat-icon>
  </button>
  <mat-menu #menu="matMenu">
    <button mat-menu-item (click)="newGame(3)">
      <mat-icon>games</mat-icon>
      <span>New 3X3 Game</span>
    </button>
    <button mat-menu-item (click)="newGame(4)">
      <mat-icon>games</mat-icon>
      <span>New 4X4 Game</span>
    </button>
    <button mat-menu-item (click)="newGame(5)">
      <mat-icon>games</mat-icon>
      <span>New 5X5 Game</span>
    </button>
  </mat-menu>
</mat-toolbar>
`;

const STYLES: string = "";

@Component({ selector: SELECTOR, template: TEMPLATE, styles: [STYLES] })
export class ToolbarComponent {
  
  @Output() onNewGame: EventEmitter<number> = new EventEmitter<number>();
  
  newGame(dimension) {
    this.onNewGame.emit(dimension);
  }
  
}
