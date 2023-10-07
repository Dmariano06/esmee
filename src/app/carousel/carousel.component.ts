import { Component, ElementRef} from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent {

  constructor(private el: ElementRef) {}
  ngAfterViewInit() {
    const video = this.el.nativeElement.querySelector('#my-video') as HTMLVideoElement;
    const video1 = this.el.nativeElement.querySelector('#my-video1') as HTMLVideoElement;
    const video2 = this.el.nativeElement.querySelector('#my-video2') as HTMLVideoElement;

   
    if (video || video) {
      video.muted = true;
      video1.muted = true;
      video.autoplay = false;
      video1.autoplay = false;
      video.loop = false;
      video1.loop = false;
      video.pause();
      video1.pause();
    }
  

    if (video) {
      video.addEventListener('mouseenter', () => {
        video.play();
      });
    }
    if (video1) {
      video1.addEventListener('mouseenter', () => {
        video1.play();
      });
    }
    if (video2) {
      video2.addEventListener('mouseenter', () => {
        video2.play();
      });
    }
  
      video.addEventListener('mouseleave', () => {
        video.pause();
      });
      video1.addEventListener('mouseleave', () => {
        video1.pause();
      });
      video2.addEventListener('mouseleave', () => {
        video2.pause();
      });
    }
    
    }
    

