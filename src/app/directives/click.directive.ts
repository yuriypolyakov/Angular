import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appClick]'
})
export class ClickDirective {
  @Input('appClick') size: string;
  private el: HTMLElement;

  constructor(el: ElementRef) {
    this.el = el.nativeElement;
  }

  @HostListener('click') onClick() {
    this.highlight(this.size);
  }
  
  private highlight(size: string) {
    this.el.style.fontSize=size;
  }
}
