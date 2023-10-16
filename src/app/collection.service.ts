import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Tableau } from './tableau';
import { Collection } from './collection';

@Injectable({
  providedIn: 'root'
})
export class CollectionService {


 private apiUrl = 'https://backend-web-service-8mf2.onrender.com/api/collections';
  constructor(private http: HttpClient) { }

 
  getCollections(): Observable<any> {
    return this.http.get(`${this.apiUrl}`);
  }
  addTableauToCollection(collectionId: number, tableau: Tableau): Observable<Tableau> {
    return this.http.post<Tableau>(`${this.apiUrl}/${collectionId}/tableaux`, tableau);
  }
  deleteCollection(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url);
  }
  updateCollection(id: number, updatedCollection: any): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put(url, updatedCollection);
  }
  getCollectionById(id: number): Observable<Collection> {
    return this.http.get<Collection>(`${this.apiUrl}/${id}`);
  }

  addCollection(collection: Collection): Observable<Collection> {
    return this.http.post<Collection>(this.apiUrl, collection);
  }
}
