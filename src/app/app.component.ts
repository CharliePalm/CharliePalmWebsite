import { Component } from "@angular/core";
import { Store } from "src/assets/data/store";
import {
  BehaviorSubject,
  combineLatest,
  filter,
  map,
  switchMap,
  timer,
} from "rxjs";
import { Option } from "./utilities/model";
import { Router } from "@angular/router";
import { inject } from "@vercel/analytics";
import { environment } from "src/environments/environment";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  standalone: false,
})
export class AppComponent {
  title = "Charlie Palm";
  public loaded = false;
  public fullyLoaded = false;
  public options = Object.keys(Option);
  public option = Option;
  public selectedPage: Option | "" = "";
  Option = Option;
  imageLoaded = [new BehaviorSubject(false), new BehaviorSubject(false)];

  constructor(
    private store: Store,
    private router: Router,
  ) {
    if (environment.production) {
      inject();
    }
    this.store
      .getCalendarEvents()
      .pipe(
        switchMap((_) => timer(400)),
        switchMap((_) =>
          combineLatest(this.imageLoaded).pipe(
            filter((v) => v.every((v) => !!v)),
          ),
        ),
        map((_) => (this.loaded = true)),
        switchMap((_) => timer(400)),
      )
      .subscribe((_) => (this.fullyLoaded = true));

    this.router.events.subscribe(() => {
      const page = this.router.url.slice(1) as Option | "";
      if (page === "" || page === Option.Contact) {
        document
          .getElementById("body")
          ?.classList.add("overflow-y-hidden", "no-scroll");
        window.scroll({
          top: 0,
          left: 0,
          behavior: "smooth",
        });
      } else {
        document
          .getElementById("body")
          ?.classList.remove("overflow-y-hidden", "no-scroll");
      }
      this.selectedPage = page;
    });
  }
}
