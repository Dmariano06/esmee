import { AfterViewInit, Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';
import { TableauService } from '../tableau.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements AfterViewInit {
  tableaux: any[] = [
    'IMG_0187', 'IMG_1990', 'IMG_002', /* ... */, 'IMG_045', 'IMG_046'
  ];

  constructor(private tableauService: TableauService) { }

  @ViewChildren('slide') slides: QueryList<ElementRef> | undefined;
  items: any[] = [
    { image: '47zazia/IMG_2012.jpeg'},
    '47zazia/IMG_2031.jpeg',
    '47zazia/IMG_2023.jpeg',
    '47zazia/IMG_2034.jpeg',
    '47zazia/IMG_2012.jpeg',
    '47zazia/IMG_2031.jpeg',
    '47zazia/IMG_2031.jpeg',

    // ... add other image names
  ];

  ngAfterViewInit() {
  
    this.tableauService.getAllTableaux().subscribe(data => {
      this.tableaux = data;
    });
    // Initiate the slider after the view has been initialized
    this.initSlider();
  }
  ajouterAuBackend(tableau: any) {
    this.tableauService.addTableau(tableau).subscribe(response => {
      console.log('Ajout réussi', response);
      // Ajoutez ici tout code supplémentaire après l'ajout réussi
    });
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
