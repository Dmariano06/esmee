import { Component, OnInit } from '@angular/core';
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
}