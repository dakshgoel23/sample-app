import { Component, OnInit } from '@angular/core';
import { MyProfileService } from '../../../service/myprofile.service';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../../service/auth.service';
import { NgIf } from '@angular/common';


@Component({
  selector: 'app-myprofile',
  imports:[FormsModule,NgIf],
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.css']
})
export class MyProfileComponent implements OnInit {
  name:any;
  phone:any;
  username:any
  aadhar_number:any;
  address:any={};
  city:any;
  pincode:any;

  customer: any = {
    address: {
      address: '',
      city: '',
      pincode: ''
    }
  };

  user_id:any
  customer_id:any

  successMsg:any
  errorMsg:any




  constructor(private authService:AuthService,private myProfileService: MyProfileService) {
    this.user_id=localStorage.getItem("id")
 
  }

  
  ngOnInit(): void {
    this.fetchCustomerDetails();
  }

   
  fetchCustomerDetails() {

    this.authService.getCustomerDetails(this.user_id).subscribe({
      next:(data)=>{
        this.customer_id=data.id

        this.myProfileService.getCustomerDetails(this.customer_id).subscribe((response) => {
          this.customer = response;
        });
      },
      error:()=>{}
    })


     
    
  }


  updateProfile() {

    this.myProfileService.updateCustomerDetails(
      this.customer_id,{
        name:this.customer.name,
        phone:this.customer.phone,
        aadhar_number:this.customer.aadhar_number,
        address:{
          address:this.customer.address.address,
          city:this.customer.address.city,
          pincode:this.customer.address.pincode

        }
       
      }
      ).subscribe({
        next: (response) => {
          this.successMsg="Changes saved successfully"
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
}
