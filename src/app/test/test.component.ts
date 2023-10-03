import { AfterViewInit, Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements AfterViewInit {
  @ViewChildren('slide') slides: QueryList<ElementRef> | undefined;
  items: string[] = [
    '47zazia/IMG_2012.jpeg',
    '47zazia/IMG_2031.jpeg',
    '47zazia/IMG_2023.jpeg',
    '47zazia/IMG_2034.jpeg',
    '47zazia/IMG_2012.jpeg',
    '47zazia/IMG_2031.jpeg',
    '47zazia/IMG_2031.jpeg',

    // ... add other image names
  ];

  ngAfterViewInit() {
    // Initiate the slider after the view has been initialized
    this.initSlider();
  }

  initSlider() {
    // Calculate total width of all slides
    const totalWidth = this.slides?.reduce((acc, slide) => acc + slide.nativeElement.clientWidth, 0);

    // Set the total width to the slider container
    const sliderContainer = document.getElementById('slider-container');
    sliderContainer!.style.width = totalWidth + 'px';
  }

  scroll(direction: string) {
    const sliderContainer = document.getElementById('slider-container');
    const scrollAmount = 300; // You can adjust this value based on your design

    if (direction === 'left') {
      sliderContainer!.scrollLeft -= scrollAmount;
    } else {
      sliderContainer!.scrollLeft += scrollAmount;
    }
  }
}
