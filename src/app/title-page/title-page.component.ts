import { AfterViewInit, Component, EventEmitter, HostListener, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { DataLoader } from 'src/assets/data/data';
import { State } from '../app.model';
import { fromEvent, Observable, Subscription } from "rxjs";
import { MenuComponent } from '../menu/menu.component';

@Component({
  selector: 'app-title-page',
  templateUrl: './title-page.component.html',
  styleUrls: ['./title-page.component.scss']
})
export class TitlePageComponent implements OnInit, AfterViewInit {
  @Output() public goToState: EventEmitter<State> = new EventEmitter<State>();
  @Input() public dataLoader!: DataLoader;
  @ViewChild(MenuComponent) public menu: MenuComponent = new MenuComponent();

  public state = State;
  public isCollapsed = false;
  public fromEvent!: Subscription;

  images = {
    terrace: document.getElementById('terrace'),
    greenMill: document.getElementById('green-mill'), 
    lincolnHall: document.getElementById('lincoln-hall'),
  }

  navigate(state: State) {
    this.goToState.emit(state);
  }
  
  ngOnInit() {
    this.windowSizeCheck();
    //this.fromEvent = fromEvent(window, "scroll", { capture: true }).subscribe(e => {
    //  this.imageFader();
    //});
  }

  toggleMenu() {
    this.menu.toggle()
  }
  
  ngAfterViewInit() {
  }

  public goToShows() {
    console.log('test');
  }

  public scroll(el: HTMLElement) {
    console.log('test');
    el.scrollIntoView();
  }

  @HostListener("window:resize", []) windowSizeCheck() {
    console.log(window.innerWidth);
    if (window.innerWidth <= 980) {
      this.isCollapsed = true;
    } else {
      this.isCollapsed = false;
      this.menu.opened = false;
    }
  }

  imageFader() {
    // TODO: implement image fade
  }
}
