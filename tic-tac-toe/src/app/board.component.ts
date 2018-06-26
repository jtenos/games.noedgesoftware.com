import { Component, OnInit } from '@angular/core';

const SELECTOR: string = "app-board";

const TEMPLATE: string = `
<mat-grid-list cols="3" rowHeight="1:1">
  <mat-grid-tile>1</mat-grid-tile>
  <mat-grid-tile>2</mat-grid-tile>
  <mat-grid-tile>3</mat-grid-tile>
  <mat-grid-tile>4</mat-grid-tile>
  <mat-grid-tile>5</mat-grid-tile>
  <mat-grid-tile>6</mat-grid-tile>
  <mat-grid-tile>7</mat-grid-tile>
  <mat-grid-tile>8</mat-grid-tile>
  <mat-grid-tile>9</mat-grid-tile>
</mat-grid-list>
`;

const STYLES: string = "";

@Component({ selector: SELECTOR, template: TEMPLATE, styles: [STYLES] })
export class BoardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}