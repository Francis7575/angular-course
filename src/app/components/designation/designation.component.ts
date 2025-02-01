import { Component, inject, OnInit } from '@angular/core';
import { MasterService } from '../../service/master.service';
import { APIResponseModel, IDesignation } from '../../model/interface/role';

@Component({
  selector: 'app-designation',
  imports: [],
  templateUrl: './designation.component.html',
  styleUrl: './designation.component.css',
})

export class DesignationComponent implements OnInit {
  designationList: IDesignation[] = [];
  masterService = inject(MasterService);
  isLoading: boolean = true

  ngOnInit(): void {
    this.masterService.getDesignations().subscribe({
      next: (result: APIResponseModel) => {
        this.designationList = result.data;
        this.isLoading = false
      },
      error: (error) => {
        alert('API error/ Network Down');
        this.isLoading = false
      },
    });
  }
}
