import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { TableauService } from '../tableau.service';


@Component({
  selector: 'app-tableaux',
  templateUrl: './tableaux.component.html',
  styleUrls: ['./tableaux.component.scss']
})
export class TableauxComponent implements OnInit {
  
  tableaux: any[] = [
  ];

  constructor(private tableauService: TableauService) { }
ngOnInit() {
    this.tableauService.getAllTableaux().subscribe(data => {
      this.tableaux = data;
      this.loadTableaux();
    });
    
}
loadTableaux() {
  this.tableauService.getAllTableaux().subscribe(data => {
    this.tableaux = data;
  });
}

deleteTableau(tableauId: number) {
  this.tableauService.deleteTableau(tableauId).subscribe(() => {
    this.loadTableaux();
  });
}
@ViewChild('videoPlayer') videoPlayer!: ElementRef;

videos = [
  { src: 'assets/Desert1.mp4', title: 'Video 1' },
  { src: 'assets/Desert2.mp4', title: 'Video 2' },
  { src: 'assets/Desert3.mp4', title: 'Video 3' }
];

playVideo(video: any) {
  const videoElement = this.videoPlayer.nativeElement as HTMLVideoElement;
  videoElement.src = video.src;
  videoElement.play();
}

pauseVideo(video: any) {
  const videoElement = this.videoPlayer.nativeElement as HTMLVideoElement;
  videoElement.pause();
}
}