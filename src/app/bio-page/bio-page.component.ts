import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { State } from '../app.model';
import { DataLoader } from '../../assets/data/data';

@Component({
  selector: 'app-bio-page',
  templateUrl: './bio-page.component.html',
  styleUrls: ['./bio-page.component.css']
})
export class BioPageComponent {
  @Output() back: EventEmitter<State> = new EventEmitter<State>();
  public data: DataLoader = new DataLoader();

  loadBio(): string {
    return this.data.getBio();
  }

  goBack(): void {
    this.back.emit(State.bio);
  }
}
