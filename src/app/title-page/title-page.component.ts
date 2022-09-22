import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { State } from '../app.model';

@Component({
  selector: 'app-title-page',
  templateUrl: './title-page.component.html',
  styleUrls: ['./title-page.component.css']
})
export class TitlePageComponent implements OnInit {
  @Output() public goToState: EventEmitter<State> = new EventEmitter<State>();
  public state = State;
  ngOnInit() {

  }

  navigate(state: State) {
    this.goToState.emit(state);
  }
}
