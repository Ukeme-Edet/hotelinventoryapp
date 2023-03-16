import { Directive, ElementRef, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective implements OnInit {

  @Input() appHover: string = "red";

  constructor(private element: ElementRef, private renderer: Renderer2) {
    console.log(this.element.nativeElement);
  }

  ngOnInit(): void {
    // this.element.nativeElement.style.color = this.color;
    this.renderer.setStyle(this.element.nativeElement, "color", this.appHover);
  }

  @HostListener("mouseenter") onMouseEnter() {
    this.renderer.setStyle(this.element.nativeElement, "background", this.appHover);
  }

  @HostListener("mouseleave") onMouseLeave() {
    this.renderer.setStyle(this.element.nativeElement, "background", "white");
  }
}
