import { Component, ElementRef, HostListener, Renderer2} from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent {

  isHovered = false;
  constructor(private renderer: Renderer2, private el: ElementRef) {}
  @HostListener('click') scrollToBottom() {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth'
    });
  }

}
