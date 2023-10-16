import { Component,OnInit} from '@angular/core';
import { TableauService } from '../tableau.service';
import { CollectionService } from '../collection.service';
import { Tableau } from '../tableau';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-tableaux',
  templateUrl: './tableaux.component.html',
  styleUrls: ['./tableaux.component.scss']
})
export class TableauxComponent implements OnInit {
  tableaux: any[] = [];
  collections: any[] = [];
  newCollectionForm: FormGroup;
  newTableauForm: FormGroup;
  updatedCollectionForm: FormGroup;

  constructor(
    private tableauService: TableauService,
    private collectionService: CollectionService,
    private formBuilder: FormBuilder
  ) {
    this.newCollectionForm = this.formBuilder.group({
      nom: ['', Validators.required],
      description: [''],
    });

    this.newTableauForm = this.formBuilder.group({
      nom: ['', Validators.required],
      description: [''],
      prix: [0],
      taille: [''],
      image: [''],
    });

    this.updatedCollectionForm = this.formBuilder.group({
      nom: [''],
      description: [''],
    });
  }

  ngOnInit() {
    this.loadTableaux();
    this.loadCollections();
  }

  loadTableaux() {
    this.tableauService.getAllTableaux().subscribe(data => {
      this.tableaux = data;
    });
  }

  loadCollections() {
    this.collectionService.getCollections().subscribe(collections => {
      this.collections = collections;
    });
  }

  addCollection() {
    this.collectionService.addCollection(this.newCollectionForm.value).subscribe(
      () => {
        this.loadCollections();
        this.newCollectionForm.reset();
      },
      (error) => {
        console.error('Error adding collection:', error);
      }
    );
  }

  updateCollection(id: number) {
    this.collectionService.updateCollection(id, this.updatedCollectionForm.value).subscribe(
      () => {
        this.loadCollections();
        this.updatedCollectionForm.reset();
      },
      (error) => {
        console.error('Error updating collection:', error);
      }
    );
  }

  deleteCollection(id: number) {
    this.collectionService.deleteCollection(id).subscribe(
      () => {
        this.loadCollections();
      },
      (error) => {
        console.error('Error deleting collection:', error);
      }
    );
  }

  addTableauToCollection(collectionId: number) {
    this.collectionService.addTableauToCollection(collectionId, this.newTableauForm.value).subscribe(
      () => {
        this.loadCollections();
        this.newTableauForm.reset();
      },
      (error) => {
        console.error('Error adding tableau to collection:', error);
      }
    );
  } 
  deleteTableau(tableauId: number) {
    this.tableauService.deleteTableau(tableauId).subscribe(
      () => {
        this.loadTableaux();
        // Vous pouvez également ajouter une logique pour mettre à jour les collections
      },
      (error) => {
        console.error('Error deleting tableau:', error);
      }
    );
  }
}