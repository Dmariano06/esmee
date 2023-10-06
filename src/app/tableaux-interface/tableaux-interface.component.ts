import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TableauService } from '../tableau.service';
import { Tableau } from '../tableau';

@Component({
  selector: 'app-tableaux-interface',
  templateUrl: './tableaux-interface.component.html',
  styleUrls: ['./tableaux-interface.component.scss']
})
export class TableauxInterfaceComponent implements OnInit {

   
  tableaux: any = [];
 
  tableauForm: FormGroup; // Pour le formulaire d'ajout/mise à jour

  constructor(private tableauService: TableauService, private fb: FormBuilder) {
    this.tableauForm = this.fb.group({
      nom: ['', Validators.required],
      description: [''],
      prix: [''],
      collection:[''],
      id:['']
    });
  }

  ngOnInit() {
    this.loadTableaux();
  }

  loadTableaux() {
    this.tableauService.getAllTableaux().subscribe(data => {
      this.tableaux = data;
    });
  }

  addTableau() {
    const newTableau = this.tableauForm.value;
    this.tableauService.addTableau(newTableau).subscribe(() => {
      this.loadTableaux(); // Recharger la liste après l'ajout
      this.resetForm();
    });
  }

  updateTableau(tableauId: number) {
    const updatedTableau = this.tableauForm.value;
    this.tableauService.updateTableau(tableauId, updatedTableau).subscribe(() => {
      this.loadTableaux(); // Recharger la liste après la mise à jour
      this.resetForm();
    });
  }

  deleteTableau(tableauId: number) {
    this.tableauService.deleteTableau(tableauId).subscribe(() => {
      this.loadTableaux();
    });
  }

  resetForm() {
    this.tableauForm.reset();
  }
}
