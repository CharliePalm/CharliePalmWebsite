import { state } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { State } from './app.model';
import { AnimationsComponent } from './animations/animations.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Charlie Palm';
  public state = State;
  public currentState: State = this.state.title;
  public animationsComponent = new AnimationsComponent();
  ngOnInit(): void {
    this.currentState = this.state.title;
  }

  public goToPage(state: State): void {


    const layerName = '.' + this.getLayerState(state) + '-layer';
    this.animationsComponent.animate(layerName);
    this.currentState = state;
  }

  public back(fromState: State): void {
    const layerName = '.' + this.getLayerState(fromState) + '-layer';
    this.animationsComponent.animate(layerName);
    this.currentState = State.title;
  }

  private getLayerState(state: State): string {
    let layerId: string = '';
    switch (state) {
      case State.bio:
        layerId = 'right';
        break;
      case State.booking:
        layerId = 'left';
        break;
      case State.shows:
        layerId = 'bottom';
        break;
    }
    return layerId;
  }
}
