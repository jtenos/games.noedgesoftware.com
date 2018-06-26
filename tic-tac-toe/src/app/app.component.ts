import { Component } from '@angular/core';

const SELECTOR: string = "app-root";

const TEMPLATE: string = `
<toolbar (onNewGame)="newGame()"></toolbar>
<app-board></app-board>
`;

const STYLES: string = "";

@Component({ selector: SELECTOR, template: TEMPLATE, styles: [STYLES] })
export class AppComponent {
  
  newGame() {
    console.log("newGame() from AppComponent");
  }
  
}
