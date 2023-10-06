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
    });
    this.tableaux = [
      { nom: 'Tableau 1', description: 'Description 1', prix: 100, collection: 'Collection 1', image: '0187.jpeg' },
      { nom: 'Tableau 2', description: 'Description 2', prix: 150, collection: 'Collection 2', image: '0250.jpeg' },
      // Ajoutez d'autres objets tableau selon vos besoins
    ];
    
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