import { Component } from '@angular/core';

const TAG_NAME : string = "game-board";

const TEMPLATE : string = `
    <board-row rowPosition="top"></board-row>
    <board-row rowPosition="middle"></board-row>
    <board-row rowPosition="bottom"></board-row>
`;

const STYLES : string = `
    board-row {
        display: block;
    }
`; 

@Component({selector: TAG_NAME, template: TEMPLATE, styles: [STYLES]})
export class BoardComponent {
  
}
