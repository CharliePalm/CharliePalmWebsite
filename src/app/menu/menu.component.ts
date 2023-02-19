import { AfterViewInit, Component, Injectable, ViewChild } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  public opened = false;
  constructor() {}

  toggle() {
    this.opened = !this.opened;
  }
}
