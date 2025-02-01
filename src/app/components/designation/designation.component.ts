import { Component, inject, OnInit } from '@angular/core';
import { MasterService } from '../../service/master.service';
import { APIResponseModel, IDesignation } from '../../model/interface/role';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-designation',
  imports: [CommonModule],
  templateUrl: './designation.component.html',
  styleUrl: './designation.component.css',
})
export class DesignationComponent implements OnInit {
  designationList: IDesignation[] = [];
  masterService = inject(MasterService);

  ngOnInit(): void {
    this.masterService.getDesignations().subscribe({
      next: (result: APIResponseModel) => {
        this.designationList = result.data;
      },
      error: (error) => {
        alert('API error/ Network Down');
      },
    });
  }
}
