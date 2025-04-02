import { Component } from '@angular/core';
import { State } from './app.model';
import { HttpClient } from '@angular/common/http';
import { Store } from 'src/assets/data/store';
import { map, switchMap, timer } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: false,
})
export class AppComponent {
  title = 'Charlie Palm';
  public state = State;
  public currentState: State = this.state.title;
  public loaded = false;
  public fullyLoaded = false;

  constructor(
    private store: Store,
  ) {
    this.store.getCalendarEvents().pipe(
      switchMap((_) => timer(200)),
      map((_) => this.loaded = true),
      switchMap((_) => timer(400)),
    ).subscribe((_) => this.fullyLoaded = true);
    this.currentState = this.state.title;
  }

  public goToPage(state: State): void {
    this.currentState = state;
  }

  public back(fromState: State): void {
    this.currentState = State.title;
  }
}
