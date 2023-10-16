import { AfterViewInit, Component, ElementRef, HostListener, ViewChild} from '@angular/core';
import { TableauService } from '../tableau.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements AfterViewInit {
  tableaux: any[] = [
  ];


  private scrollTriggerThreshold = 200; 


  @ViewChild('targetDiv') targetDiv: ElementRef | undefined;

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event): void {
    const targetDivPosition = this.targetDiv!.nativeElement.getBoundingClientRect().top;
    const trigger = targetDivPosition <= this.scrollTriggerThreshold;
    this.tableauService.setScrollTrigger(trigger);
  }

  ngOnDestroy() {

  }
  ngAfterViewInit() {
  
    this.tableauService.getAllTableaux().subscribe(data => {
      this.tableaux = data;
    });
  
  }
  ajouterAuBackend(tableau: any) {
    this.tableauService.addTableau(tableau).subscribe(response => {
      console.log('Ajout réussi', response);
    });
  }
  tableau: any;
  constructor(private route: ActivatedRoute, private tableauService: TableauService, private router: Router) {}
ngOnInit() {
  this.route.paramMap.subscribe(params => {
    const tableauId = params.get('id');

    if (tableauId) {
      this.tableauService.getTableauById(Number(tableauId)).subscribe(
        data => {
          this.tableau = data;
          // Additional logic if needed
        },
        error => {
          console.error('Error fetching tableau details:', error);
        }
      );
    } else {
      console.error('Tableau ID is undefined.');
    }
  });
}
goToTableauDetail(tableauId: number) {
  this.router.navigate(['/tableau', tableauId]);
}
  

}
