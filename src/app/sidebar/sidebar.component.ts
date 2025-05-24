import { Component, EventEmitter, Host, HostListener, Input, OnInit, Output } from '@angular/core';
import { Option } from '../utilities/model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  expanded = false;
  options = Object.keys(Option);
  toggleSidebar = () => this.expanded = !this.expanded;
}
