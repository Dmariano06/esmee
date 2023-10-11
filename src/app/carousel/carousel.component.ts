import { Component, ElementRef} from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent {

  isHovered = false;
  constructor(private el: ElementRef) {}
  ngAfterViewInit() {
    
    const video = this.el.nativeElement.querySelector('#my-video') as HTMLVideoElement;
    const video1 = this.el.nativeElement.querySelector('#my-video1') as HTMLVideoElement;
    const video2 = this.el.nativeElement.querySelector('#my-video2') as HTMLVideoElement;
    
    function setupVideo(videoElement: HTMLVideoElement) {
      if (videoElement) {
        videoElement.muted = true;
        videoElement.addEventListener('mouseenter', () => {
          videoElement.play();
        });
    
        videoElement.addEventListener('mouseleave', () => {
          videoElement.pause();
        });
      }
    }
    
    setupVideo(video);
    setupVideo(video1);
    setupVideo(video2);
    }
  }

