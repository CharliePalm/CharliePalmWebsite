import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
import { State } from '../app.model';
import { OtherDataType } from '../../assets/data/data.model';
import { map, Observable } from 'rxjs';
import { Store } from 'src/assets/data/store';
import { getS3PathFromImage } from 'src/assets/data/api.service';
import { environment } from 'src/environments/environment';

@Component({
    selector: 'app-bio-page',
    templateUrl: './bio-page.component.html',
    styleUrls: ['./bio-page.component.scss'],
    standalone: false
})

export class BioPageComponent {
  public loaded = false;
  constructor(private store: Store) {}

  public bio$: Observable<string[]> = this.store.getOtherData().pipe(
    map((data) => data.find((dat) => dat.title === OtherDataType.Bio)!.value.split('\n\n')),
  );
  public bioImage$ = this.store.getImages().pipe(
    map((imgs) => environment.production ? getS3PathFromImage(imgs.find((img) => img.location === OtherDataType.Bio))! : imgs.find((img) => img.location === OtherDataType.Bio)!.value),
  );

  onload(): void {
    this.loaded = true;
  }
}
