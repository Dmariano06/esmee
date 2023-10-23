import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8081'; 

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    const body = { username, password };
    return this.http.post<any>(`${this.apiUrl}/login`, body).pipe(
      tap(response => {
        console.log('Login successful', response);
      }),
      catchError(error => {
        console.error('Login error', error);
        return of(null);
      })
    );
  }

  register(username: string, password: string): Observable<any> {
    const body = { username, password };
    return this.http.post<any>(`${this.apiUrl}/register`, body).pipe(
      tap(response => {
        console.log('Registration successful', response);
      }),
      catchError(error => {
        console.error('Registration error', error);
        return of(null);
      })
    );
  }
}