import { Component, OnInit } from '@angular/core';
import app from "./app";

const TAG_NAME : string = "app-root";

const TEMPLATE : string = `
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


