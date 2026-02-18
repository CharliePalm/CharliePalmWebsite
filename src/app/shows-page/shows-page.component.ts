import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { State } from '../app.model';
import { CalendarEvent } from '../../assets/data/data.model';
import { Observable } from 'rxjs';
import { Store } from 'src/assets/data/store';

@Component({
    selector: 'app-shows-page',
    templateUrl: './shows-page.component.html',
    styleUrls: ['./shows-page.component.scss'],
    standalone: false
})
export class ShowsPageComponent {
  @Output() back: EventEmitter<State> = new EventEmitter<State>();
  public gigs$: Observable<CalendarEvent[]> = this.store.getCalendarEvents();

  constructor(
    private store: Store,
  ) {}


  goBack(): void {
    this.back.emit(State.shows);
  }
}
