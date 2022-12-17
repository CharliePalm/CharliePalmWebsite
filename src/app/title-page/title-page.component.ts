import { Component, EventEmitter, Output } from '@angular/core';
import { State } from '../app.model';

@Component({
  selector: 'app-title-page',
  templateUrl: './title-page.component.html',
  styleUrls: ['./title-page.component.scss']
})
export class TitlePageComponent {
  @Output() public goToState: EventEmitter<State> = new EventEmitter<State>();
  public state = State;
  navigate(state: State) {
    this.goToState.emit(state);
  }
}
