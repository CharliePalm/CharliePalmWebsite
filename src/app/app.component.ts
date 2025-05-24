import { Component } from '@angular/core';
import { State } from './app.model';
import { HttpClient } from '@angular/common/http';
import { Store } from 'src/assets/data/store';
import { map, switchMap, timer } from 'rxjs';
import { Option } from './utilities/model';
import { Router } from '@angular/router';

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
  public options = Object.keys(Option);
  public option = Option;

  public get selectedPage(): Option | '' {
    console.log(this.router.url.slice(1) as Option || '');
    return this.router.url.slice(1) as Option || '';
  }

  constructor(
    private store: Store,
    private router: Router,
  ) {
    this.store.getCalendarEvents().pipe(
      switchMap((_) => timer(400)),
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
