import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { State } from '../app.model';
import { DataLoader } from '../../assets/data/data';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent {
  @Output() back: EventEmitter<State> = new EventEmitter<State>();
  @Input() dataLoader!: DataLoader;

  goBack(): void {
    this.back.emit(State.booking);
  }
}
