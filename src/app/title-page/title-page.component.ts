import { AfterViewInit, Component, EventEmitter, HostListener, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { DataLoader } from 'src/assets/data/data';
import { State } from '../app.model';
import * as parallax from 'ngx-parallax-scroll';
@Component({
  selector: 'app-title-page',
  templateUrl: './title-page.component.html',
  styleUrls: ['./title-page.component.scss']
})
export class TitlePageComponent implements OnInit {
  @Output() public goToState: EventEmitter<State> = new EventEmitter<State>();
  @Input() public dataLoader!: DataLoader;
  public state = State;
  public isCollapsed = false;
  public images = ['../../assets/images/terrace-bass.jpg', '../../assets/images/greenMill.jpg', '../../assets/images/IMG_0078.jpg'];
  public loading = true;
  public loaded = 0;
  public bgParallax: parallax.IParallaxScrollConfig = {
      parallaxSpeed: .4,
      parallaxSmoothness: 0,
      parallaxTimingFunction: 'ease'
  }

  public fgParallax: parallax.IParallaxScrollConfig = {
    parallaxSpeed: 0,
    parallaxTimingFunction: 'ease',
    parallaxSmoothness: 1,
}

  navigate(state: State) {
    this.goToState.emit(state);
  }
  
  ngOnInit() {
    this.windowSizeCheck();    
    this.images.forEach((imageUrl) => {
      const img = new Image();
      img.onload = () => this.loaded++;
      img.src = imageUrl;
    });
  }

  public goToShows() {
    console.log('test');
  }

  public scroll(el: HTMLElement) {
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
}
