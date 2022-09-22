import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { State } from '../app.model';
import { DataLoader } from '../../assets/data/data';
import { Gig } from 'src/assets/data/data.model';

@Component({
  selector: 'app-shows-page',
  templateUrl: './shows-page.component.html',
  styleUrls: ['./shows-page.component.css']
})
export class ShowsPageComponent {
  @Output() back: EventEmitter<State> = new EventEmitter<State>();
  public data: DataLoader = new DataLoader();
  public gigs = this.data.getGigs();

  goBack(): void {
    this.back.emit(State.shows);
  }
}
