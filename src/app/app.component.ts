import { Component } from '@angular/core';
import { State } from './app.model';
import { HttpClient } from '@angular/common/http';
import { Store } from 'src/assets/data/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Charlie Palm';
  public state = State;
  public currentState: State = this.state.title;
  public loaded = false;

  constructor(
    private http: HttpClient,
    private store: Store,
  ) {
    this.store.getCalendarEvents().subscribe((event) => this.loaded = true);
    this.currentState = this.state.title;
  }

  public goToPage(state: State): void {
    this.currentState = state;
  }

  public back(fromState: State): void {
    this.currentState = State.title;
  }
}
