import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bg-img',
  templateUrl: './background-img.component.html',
  styleUrls: ['./background-img.component.css']
})
export class BgImgComponent {
  @Input() public imgSrc: string | undefined;
  ngOnInit() {

  }
}
