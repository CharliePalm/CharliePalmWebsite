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

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.scss"],
})
export class SidebarComponent {
  expanded = false;
  options = Object.keys(Option);
  toggleSidebar = () => (this.expanded = !this.expanded);

  constructor(private router: Router) {}
  public get selectedPage(): Option | "" {
    return this.router.url.slice(1) as Option | "";
  }
}
