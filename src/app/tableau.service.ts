import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Tableau } from './tableau';

@Injectable({
  providedIn: 'root'
})
export class TableauService {

  private apiUrl = 'https://backend-web-service-8mf2.onrender.com/tableau'; // Assurez-vous que c'est l'URL correcte pour votre backend

  constructor(private http: HttpClient) { }

  getAllTableaux(): Observable<Tableau[]> {
    return this.http.get<Tableau[]>(`${this.apiUrl}`);
  }
  
  addTableau(tableau: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, tableau);
  }

  updateTableau(tableauId: number, tableau: any): Observable<any> {
    const url = `${this.apiUrl}/${tableauId}`;
    return this.http.put<any>(url, tableau);
  }

  deleteTableau(tableauId: number): Observable<any> {
    const url = `${this.apiUrl}/${tableauId}`;
    return this.http.delete<any>(url);
  }
}