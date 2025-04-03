import { AfterContentInit, Component, ElementRef, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
import { Store } from '../../assets/data/store';
import { State } from '../app.model';
import { Subscription, tap } from 'rxjs';
import { Option } from '../utilities/model';

@Component({
  selector: 'app-title-page',
  templateUrl: './title-page.component.html',
  styleUrls: ['./title-page.component.scss'],
})
export class TitlePageComponent {
  @Output() public goToState: EventEmitter<State> = new EventEmitter<State>();
  
  public eventSubscription!: Subscription;
  public state = State;
  public optionMap = new Map<Option, string>([
    [Option.about, '#about'],
    [Option.shows, '#shows'],
    [Option.contact, '#contact'],
  ]);

  navigate(state: State) {
    this.goToState.emit(state);
  }

  constructor(   
    private elementRef: ElementRef,
    private store: Store,
  ) {}

  scroll(option: Option) {
    const targetElement = this.elementRef.nativeElement.querySelector(this.optionMap.get(option));
    targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}