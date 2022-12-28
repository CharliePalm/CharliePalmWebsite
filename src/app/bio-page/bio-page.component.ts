import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
import { State } from '../app.model';
import { DataLoader } from '../../assets/data/data';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-bio-page',
  templateUrl: './bio-page.component.html',
  styleUrls: ['./bio-page.component.scss']
})

export class BioPageComponent implements OnInit {
  @Output() back: EventEmitter<State> = new EventEmitter<State>();
  @Input() dataLoader!: DataLoader;
  innerWidth = 0;

  public bio$!: Observable<string[]>;
  
  ngOnInit(): void {
    this.bio$ = this.dataLoader.getBio();
    this.innerWidth = window.innerWidth;
  }

  goBack(): void {
    this.back.emit(State.bio);
  }

  @HostListener('window:resize', ['$event'])
  onResize(_event: any) {
    this.innerWidth = window.innerWidth;
  }

  singleColumn(): boolean {
    return this.innerWidth < 1250 
  }

  getBottomColSpan(): number {
    return this.singleColumn() ? 1 : 2 
  }
}
