
import { Component, OnInit } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { VehicleService } from '../../../service/vehicle.service';
import { AuthService } from '../../../service/auth.service';
import { NgFor, NgIf } from '@angular/common';


@Component({
  selector: 'app-addvehicle',
  imports: [FormsModule,NgIf,NgFor],
  templateUrl: './addvehicle.component.html',
  styleUrls: ['./addvehicle.component.css']
})
export class AddvehicleComponent implements OnInit{

    registration_number: string=""
    manufacturer: string=""
    model: string=""
    category: string=""
    fuel_type: string=""

    ftype:any
    cate:any

    user_id:any
    customerId: any

    successMsg:any
    errorMsg:any

  constructor(private vehicleService: VehicleService,private authService:AuthService) {
    this.user_id=localStorage.getItem("id")
  }

  ngOnInit(): void {
    this.authService.getCustomerDetails(this.user_id).subscribe({
      next:(data)=>{
        this.customerId=data.id
      },
      error:()=>{}
    })

    this.vehicleService.getAllVehicleCategory().subscribe({
      next:(data)=>{
        this.cate=data
      },
      error:()=>{}
    })

    this.vehicleService.getAllFuelType().subscribe({
      next:(data)=>{
        this.ftype=data
      },
      error:()=>{}
    })
  }

  onSubmit() {
    this.vehicleService.addVehicle(
      this.customerId, 
      {
      registration_number: this.registration_number,
      manufacturer: this.manufacturer,
      model: this.model,
      category: this.category,
      fuel_type: this.fuel_type
  })
      .subscribe({
        next: (response) => {
          this.successMsg="Vehicle saved successfully"
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
      });
  }

  clearForm(): void {
    this.registration_number=''
   this.manufacturer=''
   this.model=''
     this.category=''
    this.fuel_type=''
  }
}
