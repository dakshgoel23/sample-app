import { Component } from '@angular/core';
import { BookinspectionService } from '../../../service/inspection.service';
import { AuthService } from '../../../service/auth.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-view-inspections-history',
  imports: [NgFor],
  templateUrl: './view-inspections-history.component.html',
  styleUrl: './view-inspections-history.component.css'
})
export class ViewInspectionsHistoryComponent {

  user_id:any
  customer_id:any
  inspections:any

  constructor(private inspection:BookinspectionService,private authService:AuthService){
    this.user_id=localStorage.getItem("id")
  }

  ngOnInit(): void {
    this.fetchInspections();
  }

   
  fetchInspections() {

    this.authService.getCustomerDetails(this.user_id).subscribe({
      next:(data)=>{
        this.customer_id=data.id

        this.inspection.inspectionHistory(this.customer_id).subscribe((response) => {
          this.inspections = response;
        });
      },
      error:()=>{}
    })
  }

}
