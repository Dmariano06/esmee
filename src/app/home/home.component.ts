import { Component, Renderer2, ElementRef } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(private renderer: Renderer2, private el: ElementRef) {}

  ngAfterViewInit() {
    const videoContainer = this.el.nativeElement.querySelector('.col');
    const videoContainer1 = this.el.nativeElement.querySelector('#col');
    const videoContainer2 = this.el.nativeElement.querySelector('#col1');
    const video = this.el.nativeElement.querySelector('#my-video') as HTMLVideoElement;
    const video1 = this.el.nativeElement.querySelector('#my-video1') as HTMLVideoElement;
    const video2 = this.el.nativeElement.querySelector('#my-video2') as HTMLVideoElement;

    // Mettez en pause la vidéo au chargement de la page
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

    // Au survol, démarrez la vidéo
    if (videoContainer && video) {
      videoContainer.addEventListener('mouseenter', () => {
        video.play();
      });
    }
    if (videoContainer1 && video1) {
      videoContainer1.addEventListener('mouseenter', () => {
        video1.play();
      });
    }
    if (videoContainer2 && video2) {
      videoContainer2.addEventListener('mouseenter', () => {
        video2.play();
      });
    }
      // À la sortie de la souris, mettez en pause la vidéo
      videoContainer.addEventListener('mouseleave', () => {
        video.pause();
      });
      videoContainer1.addEventListener('mouseleave', () => {
        video1.pause();
      });
      videoContainer2.addEventListener('mouseleave', () => {
        video2.pause();
      });
    }
    
}

