


import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';
import { BookinspectionService } from '../../../service/inspection.service';
import { AuthService } from '../../../service/auth.service';


@Component({
  selector: 'app-bookinspection',
  imports: [FormsModule,NgFor,NgIf],
  templateUrl: './bookinspection.component.html',
  styleUrls: ['./bookinspection.component.css'],
})
export class BookinspectionComponent implements OnInit {
  vehicles: any[] = []
  type:any
  selectedVehicleId: number | null=null
  inspectionDate: string = ""
  want_coverage: string = ""
  customerId:any
  user_id:any

  successMsg:any
  errorMsg:any

  constructor(private bookinspectionService: BookinspectionService,private authService:AuthService) {
    this.user_id=localStorage.getItem("id")
  }

  ngOnInit(): void {
    this.fetchVehicles();
    this.fetchPolicyTypes();
  }


  fetchPolicyTypes() {
    this.bookinspectionService.getAllPolicyType().subscribe({
      next:(data)=>{
        this.type=data
      },
      error:()=>{}
    })
  }

  fetchVehicles(): void {
    this.authService.getCustomerDetails(this.user_id).subscribe({
      next:(data)=>{
        this.customerId=data.id

        this.bookinspectionService.getVehiclesByCustomerId(this.customerId).subscribe(
        (data) => {
           this.vehicles = data;
         },
        (error) => {
        console.error('Error fetching vehicles:', error);
        }
        );
      },
      error:()=>{}
  })
}

  bookInspection() {
    if (!this.selectedVehicleId || !this.inspectionDate || !this.want_coverage) {
      alert('Please fill all fields!');
      return;
    }

    this.bookinspectionService.bookInspection(
        this.selectedVehicleId, 
        {
          inspectionDate: this.inspectionDate,
          want_coverage: this.want_coverage,
        }
      )
      .subscribe(
        {
          next: (data) => {
            this.successMsg="Inspection booked successfully!"
            setTimeout(() => {
            this.successMsg = ''; 
          }, 3000);
          },
          error: (error) => {
            this.errorMsg="Error"+error.error.msg
            setTimeout(() => {
            this.successMsg = ''; 
            }, 3000);
          }
        }
      );
  }

  clearForm(): void {
    this.selectedVehicleId = null;
    this.inspectionDate = '';
    this.want_coverage = '';
  }


}
