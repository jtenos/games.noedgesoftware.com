import { Component } from '@angular/core';

const SELECTOR: string = "app-root";

const TEMPLATE: string = `
<toolbar (onNewGame)="board.reset($event)"></toolbar>
<app-board #board></app-board>
<iframe style="margin-top: 25px; width: 100%; border: 0; height: 90px;" src="https://ads.noedgesoftware.com/ads-728x90/index.html"></iframe>
`;

const STYLES: string = "";

@Component({ selector: SELECTOR, template: TEMPLATE, styles: [STYLES] })
export class AppComponent {
}
