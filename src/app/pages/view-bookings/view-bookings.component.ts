import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BookinspectionService } from '../../service/inspection.service';

@Component({
  selector: 'app-view-bookings',
  imports: [NgFor,FormsModule,NgIf],
  templateUrl: './view-bookings.component.html',
  styleUrl: './view-bookings.component.css'
})
export class ViewBookingsComponent implements OnInit {

  constructor(private viewBookings:BookinspectionService){}

  executive_id:number=2;
  vehicleInpectionId:any
  inspection:any[]=[]
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
      next:(data)=>{alert("Completed Inspection")}
    })
  }


}
