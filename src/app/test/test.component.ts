import { AfterViewInit, Component} from '@angular/core';
import { TableauService } from '../tableau.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements AfterViewInit {
  tableaux: any[] = [
  ];

  constructor(private tableauService: TableauService) { }

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
  

}
