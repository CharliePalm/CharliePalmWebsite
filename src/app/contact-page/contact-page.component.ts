import { Component, EventEmitter, Output } from '@angular/core';
import { State } from '../app.model';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent {
  @Output() back: EventEmitter<State> = new EventEmitter<State>();

  goBack(): void {
    this.back.emit(State.booking);
  }
}
