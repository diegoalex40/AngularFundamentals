import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHigthLigth]'
})
export class HigthLigthDirective {

  @HostListener('mouseenter') onMouseEnter(){
    this.element.nativeElement.style.backgroundColor = 'blue';
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.element.nativeElement.style.backgroundColor = '';
  }

  constructor(
    private element: ElementRef
  ) {
    //this.element.nativeElement.style.backgroundColor = 'red';
  }
}