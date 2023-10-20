import { Component, EventEmitter, Host, HostListener, Input, OnInit, Output } from '@angular/core';
import { Option } from '../utilities/model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  @Output() scrollOutput: EventEmitter<Option> = new EventEmitter<Option>();
  isMobile: boolean = false;
  expanded = false;
  options = Option;

  ngOnInit(): void {
    this.windowSizeCheck();
  }

  toggleSidebar() {
    this.expanded = !this.expanded;
    document.body.classList.toggle('no-scroll', this.expanded && this.isMobile);
    document.getElementById('parallax-container')?.classList.toggle('sidebar', this.expanded && this.isMobile);
    //document.getElementById('parallax-container')?.classList.toggle('no-scroll', !(this.expanded && this.isMobile));
  }

  scroll(option: Option) {
    this.toggleSidebar();
    this.scrollOutput.emit(option);
  }

  @HostListener("window:resize", []) windowSizeCheck() {
    if (this.expanded) this.toggleSidebar();
    this.isMobile = window.outerWidth <= 850 || window.innerWidth <= 850;
  }
}
