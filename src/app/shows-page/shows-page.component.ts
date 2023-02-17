import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { State } from '../app.model';
import { DataLoader } from '../../assets/data/data';
import { Gig } from 'src/assets/data/data.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-shows-page',
  templateUrl: './shows-page.component.html',
  styleUrls: ['./shows-page.component.scss']
})
export class ShowsPageComponent implements OnInit {
  @Output() back: EventEmitter<State> = new EventEmitter<State>();
  @Input() dataLoader!: DataLoader;

  public gigs$!: Observable<Gig[]>;

  ngOnInit() {
    this.gigs$ = this.dataLoader.getGigs();
  }

  goBack(): void {
    this.back.emit(State.shows);
  }
}
