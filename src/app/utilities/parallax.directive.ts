import { Directive, Input, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appParallax]'
})
export class ParallaxDirective {

  @Input('ratio') parallaxRatio : number = 1;
  @Input('zIndex') zIndex: number = -20;
  @Input('top') top: number = 0;
  initialTop: number = 0

  constructor(private eleRef : ElementRef) {
    this.initialTop = this.top || this.eleRef.nativeElement.getBoundingClientRect().top
    this.eleRef.nativeElement.style.position = 'absolute';
    this.eleRef.nativeElement.style['z-index'] = `${this.zIndex}`;
  }

  @HostListener("window:scroll", ["$event"])
  onWindowScroll(_: any){
    this.eleRef.nativeElement.style.top = (this.initialTop - (window.scrollY * this.parallaxRatio)) + 'px'
  }
}
