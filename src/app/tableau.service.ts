import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Tableau } from './tableau';

@Injectable({
  providedIn: 'root'
})
export class TableauService {
  getTableauById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }
  private scrollTrigger = new Subject<boolean>();

  setScrollTrigger(trigger: boolean) {
    this.scrollTrigger.next(trigger);
  }

  getScrollTrigger() {
    return this.scrollTrigger.asObservable();
  }
  private apiUrl = 'https://backend-web-service-8mf2.onrender.com/tableau';

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
  private scrollPosition = new Subject<number>();

  setScrollPosition(position: number) {
    this.scrollPosition.next(position);
  }

  getScrollPosition() {
    return this.scrollPosition.asObservable();
  }
}
