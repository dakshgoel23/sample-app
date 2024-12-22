import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MyProfileService } from '../../service/myprofile.service';
import { NgIf } from '@angular/common';
import { HeaderComponent } from "../header/header.component";
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-add-details',
  imports: [FormsModule, NgIf, HeaderComponent],
  templateUrl: './add-details.component.html',
  styleUrl: './add-details.component.css'
})
export class AddDetailsComponent {
  user_id:any
  constructor(private authService:AuthService,private myProfileService:MyProfileService){
  }

  name:any
  phone:any
  aadhar_number:any
  address:any
  city:any
  pincode:any
  successMsg:any
  errorMsg:any
  username:any
  password:any
  role:any="CUSTOMER"

  onSubmit(){
    this.authService.signUp({
      role: this.role,
      username: this.username,
      password: this.password
    }).subscribe({
      next: (data)=>{
        

        this.user_id=data.id

    this.myProfileService.addCustomer(
      this.user_id,{
        name:this.name,
        phone:this.phone,
        aadhar_number:this.aadhar_number,
        address:{
          address:this.address,
          city:this.city,
          pincode:this.pincode

        }
      }).subscribe({
      next:(data)=>{
        this.successMsg = 'Sign Up Success, Please login';
        setTimeout(() => {
          this.successMsg = ''; 
        }, 3000);

     
      },
      error:(err)=>{
        this.errorMsg='Error:'+err.error.message
        console.log(this.errorMsg)
        setTimeout(() => {
          this.errorMsg = ''; 
        }, 3000);
      }
  
    })
  },
  error:(err)=>{
    this.errorMsg='Error'+err.error.message
    setTimeout(() => {
      this.errorMsg = ''; 
    }, 3000);
  }

})

  }
  

}
