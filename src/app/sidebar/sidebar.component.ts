import {
  Component,
  EventEmitter,
  Host,
  HostListener,
  Input,
  OnInit,
  Output,
} from "@angular/core";
import { Option } from "../utilities/model";
import { Router } from "@angular/router";
import { timer } from "rxjs";

@Component({
    selector: "app-sidebar",
    templateUrl: "./sidebar.component.html",
    styleUrls: ["./sidebar.component.scss"],
    standalone: false
})
export class SidebarComponent {
  expanded = false;
  options = Object.keys(Option);
  toggleSidebar = () => {
    this.expanded = !this.expanded;
    // timer(100).subscribe(() =>
    //   document.getElementById("body")?.classList.toggle("bg-[#4d3e28]"),
    // );
  };

  constructor(private router: Router) {}
  public get selectedPage(): Option | "" {
    return this.router.url.slice(1) as Option | "";
  }
}
