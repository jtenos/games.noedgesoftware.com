import { Component, OnInit, Input } from '@angular/core';

const TAG_NAME : string = "board-row";

const TEMPLATE : string = `
  <board-square [ngStyle]="getBorderStyle()"></board-square>
  <board-square [ngStyle]="getBorderStyle()"></board-square>
  <board-square [ngStyle]="getBorderStyle()"></board-square>
  <div style="clear: both;"></div>
`;

const STYLES : string = `
  board-square {
    display: block;
    float: left;
    width: 33%;
    text-align: center;
  }
  board-square {
  }
  board-square:first-of-type {
    border-right: 1px solid #000;
  }
  board-square:last-of-type {
    border-left: 1px solid #000;
  }
`; 

@Component({selector: TAG_NAME, template: TEMPLATE, styles: [STYLES]})
export class RowComponent implements OnInit {
  
    @Input() public rowPosition: string = "";
  
    ngOnInit() {
      console.log(this.rowPosition);
    }
    
    getBorderStyle() {
      var result = {};
      switch (this.rowPosition) {
        case "top": return {
          "border-bottom": "1px solid #000"
        };
        case "bottom": return {
          "border-top": "1px solid #000"
        };
      }
      return {};
    }
}
/*
    board-row:first-of-type {
        border-bottom: 1px solid #000;
    }
    board-row:last-of-type {
        border-top: 1px solid #000;
    }

*/

