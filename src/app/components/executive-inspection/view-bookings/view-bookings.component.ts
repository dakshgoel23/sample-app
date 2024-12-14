import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { BookinspectionService } from '../../../service/inspection.service';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../../service/auth.service';

@Component({
  selector: 'app-view-bookings',
  imports: [NgFor,FormsModule,NgIf],
  templateUrl: './view-bookings.component.html',
  styleUrl: './view-bookings.component.css'
})
export class ViewBookingsComponent implements OnInit {

  constructor(private viewBookings:BookinspectionService,private authService:AuthService){
    this.user_id=localStorage.getItem('id')
  }

  executive_id:any
  user_id:any
  vehicleInpectionId:any
  inspection:any[]=[]
  successMsg:any
  errorMsg:any
  status: string="BOOKED"
  driver_profile:string=""
  vehicle_condition:string=""
  inspectionReport:string=""

  ngOnInit(): void {
    this.viewBookings.getInspectionBookings(this.status).subscribe({
      next:(data)=>{
        this.inspection=data
      },
      error:(err)=>{
        this.errorMsg=err;
      }
    })

    this.authService.getExecutiveDeatils(this.user_id).subscribe({
      next:(data)=>{
        this.executive_id=data.id
      },
      error:()=>{}
    })


  }

  selectedBooking: any = null;

  openForm(booking: any): void {
    this.selectedBooking = booking;
    // console.log(this.selectedBooking.id)
  }

  completeInspection()
  {
    this.viewBookings.completeIsnpectionForm(
      this.executive_id,
      this.vehicleInpectionId=this.selectedBooking.id,
      {
        driver_profile:this.driver_profile,
        vehicle_condition:this.vehicle_condition,
        inspectionReport:this.inspectionReport
      }
    ).subscribe({
      next: (response) => {
        this.successMsg="Completed Inspection Successfully"
        setTimeout(() => {
          this.successMsg = ''; 
        }, 3000);
      },
      error: (error) => {
        this.errorMsg=error.error.msg
        setTimeout(() => {
          this.successMsg = ''; 
        }, 3000);
     
      }
    })
  }


}
