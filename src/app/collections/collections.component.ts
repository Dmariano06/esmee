import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TableauService } from '../tableau.service';

@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.scss']
})
export class CollectionsComponent implements OnInit {
    
  tableaux: any[] = [
  ];
    constructor(private tableauService: TableauService) {}
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
}
