import { Component } from '@angular/core';

const SELECTOR: string = "app-root";

const TEMPLATE: string = `
<toolbar (onNewGame)="board.reset($event)"></toolbar>
<app-board #board></app-board>
`;

const STYLES: string = "";

@Component({ selector: SELECTOR, template: TEMPLATE, styles: [STYLES] })
export class AppComponent {
}
