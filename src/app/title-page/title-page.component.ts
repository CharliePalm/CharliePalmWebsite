import { AfterViewInit, Component, EventEmitter, HostListener, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { DataLoader } from '../../assets/data/data';
import { State } from '../app.model';
import { Subscription, fromEvent } from 'rxjs';
import { trigger } from '@angular/animations';

@Component({
  selector: 'app-title-page',
  templateUrl: './title-page.component.html',
  styleUrls: ['./title-page.component.scss'],
})
export class TitlePageComponent implements OnInit, AfterViewInit {
  @Output() public goToState: EventEmitter<State> = new EventEmitter<State>();
  @Input() public dataLoader!: DataLoader;
  public eventSubscription!: Subscription;
  public images = document.getElementsByClassName('bg-img');
  public state = State;
  public isCollapsed = false;

  navigate(state: State) {
    this.goToState.emit(state);
  }
  
  ngOnInit() {
    document.querySelector('.parallax-container')?.addEventListener('wheel', (e) => {
        //e.preventDefault(); // Prevent default scroll behavior
        this.onWindowScroll();
    });
    this.windowSizeCheck();
  }

  ngAfterViewInit(): void {
    this.onWindowScroll();
    this.windowSizeCheck();
  }

  public goToShows() {
    console.log('test');
  }

  public viewElement(el: HTMLElement) {
    console.log('test');
    el.scrollIntoView();
  }

  @HostListener("window:resize", []) windowSizeCheck() {
    if (window.innerWidth <= 800) {
      this.isCollapsed = true;
    } else {
      this.isCollapsed = false;
    }
  }

  onWindowScroll() {
    for (let i = 0; i < this.images.length; i++) {
      const image = this.images.item(i);
      const rect = image?.getBoundingClientRect();
      console.log(rect);
      const isVisible = ((rect?.top ?? 0) >= 0 && (rect?.bottom ?? 0) <= window.innerHeight);
      console.log(isVisible);
      if (isVisible) {
        image?.classList.add('visible');
      }
    }
  }
}