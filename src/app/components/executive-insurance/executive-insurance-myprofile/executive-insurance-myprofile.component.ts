import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MyProfileService } from '../../../service/myprofile.service';
import { AuthService } from '../../../service/auth.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-executive-insurance-myprofile',
  imports: [FormsModule,NgIf],
  templateUrl: './executive-insurance-myprofile.component.html',
  styleUrl: './executive-insurance-myprofile.component.css'
})
export class ExecutiveInsuranceMyprofileComponent implements OnInit{
  name:any;
  phone:any;
  username:any;
  address:any;
  city:any;
  pincode:any;
  errorMsg:any;
  successMsg:any

  user_id:any
  executive_id:any

  executive: any = {
    address: {
      address: '',
      city: '',
      pincode: ''
    }
  };

  constructor(private myProfileService: MyProfileService,private authService:AuthService) {
    this.user_id=localStorage.getItem('id')
  }

  ngOnInit(): void {
    this.fetchExecutiveDetails();
  }

  fetchExecutiveDetails() {
   this.authService.getExecutiveDeatils(this.user_id).subscribe({
    next:(data)=>{
      this.executive_id=data.id

      this.myProfileService.getExecutiveDetails(this.executive_id).subscribe({
        next:(data)=>{
          this.executive=data;
          
        },
        error:(err)=>{
          this.errorMsg=err;
        }
       })

    },
    error:()=>{}
  })
  }

  updateProfile() {

    this.myProfileService.updateExecutiveDeatils(
      this.executive_id,
      {
        name:this.executive.name,
        phone:this.executive.phone,
        address:{
        address:this.executive.address.address,
        city:this.executive.address.city,
        pincode:this.executive.address.pincode
        }
      }
      
      ).subscribe(() => {
        this.successMsg="Proposed Policy Successfully"
        setTimeout(() => {
          this.successMsg = ''; 
        }, 3000);
    });
  }
}
