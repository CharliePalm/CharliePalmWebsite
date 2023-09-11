import { AfterViewInit, Component, EventEmitter, HostListener, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { DataLoader } from '../../assets/data/data';
import { State } from '../app.model';

@Component({
  selector: 'app-title-page',
  templateUrl: './title-page.component.html',
  styleUrls: ['./title-page.component.scss']
})
export class TitlePageComponent implements OnInit {
  @Output() public goToState: EventEmitter<State> = new EventEmitter<State>();
  @Input() public dataLoader!: DataLoader;
  public state = State;
  public isCollapsed = false;

  navigate(state: State) {
    this.goToState.emit(state);
  }
  
  ngOnInit() {
    this.windowSizeCheck();
  }

  public goToShows() {
    console.log('test');
  }

  public scroll(el: HTMLElement) {
    console.log('test');
    el.scrollIntoView();
  }

  @HostListener("window:resize", []) windowSizeCheck() {
    if (window.innerWidth <= 800) {
      this.isCollapsed = true;
    } else {
      this.isCollapsed = false;
    }
  }
}
