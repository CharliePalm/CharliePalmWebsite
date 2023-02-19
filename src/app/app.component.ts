import { state } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { State } from './app.model';
import { DataLoader } from 'src/assets/data/data';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Charlie Palm';
  public state = State;
  public currentState: State = this.state.title;
  public dataLoader: DataLoader;

  constructor(
    private http: HttpClient,
  ) {
    this.dataLoader = new DataLoader(this.http);
    this.currentState = this.state.title;
  }

  public goToPage(state: State): void {
    this.currentState = state;
  }

  public back(fromState: State): void {
    this.currentState = State.title;
  }
}
