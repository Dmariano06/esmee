import { Component } from '@angular/core';
import { ClientService } from '../client.service';
import { Client } from '../client';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent {
  clients: Client[] = [];
  selectedClient: Client = {};


  loadClients(): void {
    this.clientService.getAllClients().subscribe(data => {
      this.clients = data;
    });
  }
  selectClient(client: Client): void {
    this.selectedClient = { ...client };
  }

  saveClient(): void {
    this.clientService.saveClient(this.selectedClient).subscribe(() => {
      this.loadClients();
      this.selectedClient = {};
    });
  }

  deleteClient(id: number | undefined): void {
    this.clientService.deleteClient(id).subscribe(() => {
      this.loadClients();
      this.selectedClient = {};
    });
  }

  constructor(private clientService: ClientService) { }

  ngOnInit(): void {
    this.clientService.getAllClients().subscribe(data => {
      this.clients = data;
    });
  }
}
