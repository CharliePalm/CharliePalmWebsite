import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
import { State } from '../app.model';
import { OtherDataType } from '../../assets/data/data.model';
import { map, Observable } from 'rxjs';
import { Store } from 'src/assets/data/store';
import { getS3PathFromImage } from 'src/assets/data/api.service';

@Component({
  selector: 'app-bio-page',
  templateUrl: './bio-page.component.html',
  styleUrls: ['./bio-page.component.scss']
})

export class BioPageComponent implements OnInit {
  @Output() back: EventEmitter<State> = new EventEmitter<State>();

  constructor(private store: Store) {}

  innerWidth = 0;
  public bio$: Observable<string[]> = this.store.getOtherData().pipe(
    map((data) => data.find((dat) => dat.title === OtherDataType.Bio)!.value.split('\n\n')),
  );
  public bioImage$ = this.store.getImages().pipe(
    map((imgs) => getS3PathFromImage(imgs.find((img) => img.location === OtherDataType.Bio))!),
  );
  
  ngOnInit(): void {
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
    return this.innerWidth < 1285; 
  }

  getBottomColSpan(): number {
    return this.singleColumn() ? 1 : 2 ;
  }
}
