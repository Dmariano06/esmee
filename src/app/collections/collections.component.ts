import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TableauService } from '../tableau.service';

@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.scss']
})
export class CollectionsComponent implements OnInit {
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
