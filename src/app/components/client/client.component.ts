import { APIResponseModel } from './../../model/interface/role';
import { ClientService } from './../../service/client.service';
import { Component, OnInit, inject } from '@angular/core';
import { Client } from '../../model/class/Client';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-client',
  imports: [FormsModule],
  templateUrl: './client.component.html',
  styleUrl: './client.component.css',
})
export class ClientComponent implements OnInit {
  clientObj: Client = new Client();
  clientList: Client[] = [];
  clientService = inject(ClientService);
  isLoading: boolean = true;

  ngOnInit(): void {
    this.loadClient();
  }

  loadClient() {
    this.clientService.getAllClients().subscribe({
      next: (result: APIResponseModel) => {
        this.clientList = result.data;
        this.isLoading = false;
      },
      error: (error) => {
        alert('API error/ Network Down');
        this.isLoading = false;
      },
    });
  }

  onSaveClient() {
    console.log(this.clientObj);
    this.clientService.addUpdate(this.clientObj).subscribe({
      next: (res: APIResponseModel) => {
        alert('Succesfully created');
        this.loadClient();
      },
      error: (error) => {
        alert('API error/ Network Down');
      },
    });
  }

  onEdit (data: Client) {
    this.clientObj = data
  }
  
  onDelete(id: number) {
    const isDelete = confirm('Would you like to delete the selected row?');
    if (isDelete) {
      this.clientService.deleteClientById(id).subscribe({
        next: (res: APIResponseModel) => {
          alert('Succesfully deleted');
          this.loadClient();
        },
        error: (error) => {
          alert('API error/ Network Down');
        },
      });
    }
  }
}
