import { Component, OnInit } from '@angular/core';
import app from "./app";

import "../styles.css";

const TAG_NAME : string = "app-root";

const TEMPLATE : string = `
<mat-menu #appMenu="matMenu">
  <button mat-menu-item>Settings</button>
  <button mat-menu-item>Help</button>
</mat-menu>

<button mat-icon-button [matMenuTriggerFor]="appMenu">
  <mat-icon>more_vert</mat-icon>
</button>

<game-board></game-board>
`;

const STYLES : string = `
game-board {
    display: block;
    width: 100%;
    height: 100%;
}
`; 

@Component({selector: TAG_NAME, template: TEMPLATE, styles: [STYLES]})
export class AppComponent implements OnInit {
  ngOnInit() {
      app.init();
  }
}


