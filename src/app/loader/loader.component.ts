import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent {
  @Input() size?: 'sm' | 'md' | 'lg';
  @Input() loading?: boolean = true;
  @Input() useLight = false;
}
