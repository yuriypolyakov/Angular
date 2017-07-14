import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appClick]'
})
export class ClickDirective {
  @Input('appClick') color: string;
  private el: HTMLElement;

  constructor(el: ElementRef) {
    this.el = el.nativeElement;
  }

  @HostListener('click') onClick() {
    this.highlight(this.color || 'lightgreen');

  }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.color || 'lightgreen');

  }
  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }
  private highlight(color: string) {
    this.el.style.backgroundColor = color;
  }
}
