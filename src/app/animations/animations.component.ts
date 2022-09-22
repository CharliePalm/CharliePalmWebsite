import { Component, OnInit } from '@angular/core';
import { State } from '../app.model';

@Component({
  selector: 'app-animations-component',
  templateUrl: './animations.component.html',
  styleUrls: ['./animations.component.css']
})
export class AnimationsComponent {
  public animate(layerName: string): void {
    const layers = document.querySelectorAll(layerName);
    layers.forEach((layer) => {
      layer.classList.toggle("active");
    });
  }
}
