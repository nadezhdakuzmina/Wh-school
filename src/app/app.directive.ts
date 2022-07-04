import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appColor]'
})
export class ColorDirective {
  @Input('color') color: string;
  @Input('fontSize') fontSize: string;

  constructor(private element: ElementRef, private render: Renderer2) {}

  ngOnInit(): void {
    this.render.setStyle(this.element.nativeElement, 'color', this.color);
    this.render.setStyle(this.element.nativeElement, 'font-size', this.fontSize);
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.changeStyle();
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.resetStyle();
  }

  changeStyle() {
    this.render.setStyle(this.element.nativeElement, 'color', 'pink');
    this.render.setStyle(this.element.nativeElement, 'font-size', '25px');
  }

  resetStyle() {
    this.render.setStyle(this.element.nativeElement, 'color', this.color);
    this.render.setStyle(this.element.nativeElement, 'font-size', this.fontSize);
  }
}
