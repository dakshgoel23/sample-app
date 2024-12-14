import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MyProfileService } from '../../service/myprofile.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-add-details',
  imports: [FormsModule,NgIf],
  templateUrl: './add-details.component.html',
  styleUrl: './add-details.component.css'
})
export class AddDetailsComponent {
  user_id:any
  constructor(private myProfileService:MyProfileService){
    this.user_id=localStorage.getItem("user_id")
  }

  name:any
  phone:any
  aadhar_number:any
  address:any
  city:any
  pincode:any
  successMsg:any
  errorMsg:any

  onSubmit(){
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
          this.successMsg = ''; // Clear the success message after 3 seconds
        }, 3000);

        localStorage.clear()
     
      },
      error:(err)=>{
        this.errorMsg='Error:'+err.error.message
        console.log(this.errorMsg)
        setTimeout(() => {
          this.errorMsg = ''; // Clear the success message after 3 seconds
        }, 3000);
      }
  
    })

  }
  

}
