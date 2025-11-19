import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appHoverHighlight]'
})
export class HoverHighlightDirective {

  @Input() appHoverHighlight = '';

  constructor(private el: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.appHoverHighlight || 'gray');
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('');
    this.el.nativeElement.style.textDecoration = ""
  }
  private highlight(color: string) {
    this.el.nativeElement.style.color = color;
    this.el.nativeElement.style.textDecoration = "underline"
  }

}
