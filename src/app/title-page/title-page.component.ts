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
export class TitlePageComponent implements AfterContentInit {
  @Output() public goToState: EventEmitter<State> = new EventEmitter<State>();
  
  public eventSubscription!: Subscription;
  public images = document.getElementsByClassName('bg-img');
  public state = State;
  public isCollapsed = false;
  public baseShowsHeight = 700;
  public showsHeight = 700;
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
  
  ngOnInit() {
    // TODO: fade in animation here
    // can't add a host listener because of the overflow-x property
    //document.querySelector('.parallax-container')?.addEventListener('wheel', (e) => {
    //    this.onWindowScroll();
    //});
  }

  ngAfterContentInit(): void {
    this.windowSizeCheck();
    this.store.getCalendarEvents().pipe(
      tap((gigs) => {
        this.showsHeight = this.baseShowsHeight + gigs.length * 40;
      }),
    ).subscribe();
  }

  getShowsBlockHeight(): number {
    return this.showsHeight;
  }

  @HostListener("window:resize", []) windowSizeCheck() {
    // add edit to shows height here
    this.isCollapsed = window.outerWidth <= 1090 || window.innerWidth <= 1090;
  }

  scroll(option: Option) {
    const targetElement = this.elementRef.nativeElement.querySelector(this.optionMap.get(option));
    targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
  
  onWindowScroll() {
    for (let i = 0; i < this.images.length; i++) {
      const image = this.images.item(i);
      const rect = image?.getBoundingClientRect();
      const isVisible = ((rect?.top ?? 0) >= 0 && (rect?.bottom ?? 0) <= window.innerHeight);
      if (isVisible) {
        image?.classList.add('visible');
      }
    }
  }
}