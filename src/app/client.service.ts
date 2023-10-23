import { HttpClient } from "@angular/common/http";
import { Injectable, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Client } from "./client";
@Injectable({
    providedIn: 'root'
  })
  export class ClientService {
  
    private baseUrl = 'http://localhost:8081/api/v1'; // Remplacez par l'URL de votre backend
  
    constructor(private http: HttpClient) { }
  
    getAllClients(): Observable<any[]> {
      return this.http.get<any[]>(`${this.baseUrl}/clients`);
    }
    
      getClientById(id: number): Observable<Client> {
        return this.http.get<Client>(`${this.baseUrl}/${id}`);
      }
    
      saveClient(client: Client): Observable<Client> {
        return this.http.post<Client>(this.baseUrl, client);
      }
    
      deleteClient(id: number |undefined): Observable<void> {
        return this.http.delete<void>(`${this.baseUrl}/${id}`);
      }
  }