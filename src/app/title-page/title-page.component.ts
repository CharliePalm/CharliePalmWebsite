import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { DataLoader } from 'src/assets/data/data';
import { State } from '../app.model';

@Component({
  selector: 'app-title-page',
  templateUrl: './title-page.component.html',
  styleUrls: ['./title-page.component.scss']
})
export class TitlePageComponent {
  @Output() public goToState: EventEmitter<State> = new EventEmitter<State>();
  @Input() public dataLoader!: DataLoader;
  public state = State;
  navigate(state: State) {
    this.goToState.emit(state);
  }

  public goToShows() {
    console.log('test');
  }

  public scroll(el: HTMLElement) {
    console.log('test');
    el.scrollIntoView();
  }
}
