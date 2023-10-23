import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CollectionService } from '../collection.service';
import { TableauService } from '../tableau.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
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
    this.collectionService.getCollections().subscribe(collections => {
      this.collections = collections;
      this.loadTableaux();
    });
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
      },
      (error) => {
        console.error('Error deleting tableau:', error);
      }
    );
  }
  getCollectionCssClass(collectionName: string): string {
    if (collectionName === 'Bleu Profond') {
      return 'bleu-profond';
    } else if (collectionName === 'Lune Spéctrale') {
      return 'lune-spectrale';
    }
    else if (collectionName === 'Les Têrres Brûlées') {
      return 'terre-bruler';
    }
    return '';
  }
}
