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

  ngOnInit(): void {
    this.loadClient();
  }

  loadClient() {
    this.clientService.getAllClients().subscribe((res: APIResponseModel) => {
      this.clientList = res.data;
    });
  }

  onSaveClient() {
    console.log(this.clientObj); 
    this.clientService
      .addUpdate(this.clientObj)
      .subscribe((res: APIResponseModel) => {
        if (res.result) {
          alert('Succesfully created!');
        } else {
          alert(res.message);
        }
      });
  }
}
