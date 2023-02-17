import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements AfterViewInit {
  @ViewChild(MatSidenav) sidenav!: MatSidenav;
  isCollapsed = true;
  toggleSidebar() {
    this.sidenav.opened ? this.sidenav.close() : this.sidenav.open();
  }
  
  ngAfterViewInit() {
    this.sidenav.opened = false;
  }
}
