import { Component } from '@angular/core';
import { AuthService } from '../../../service/auth.service';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { MyProfileService } from '../../../service/myprofile.service';

@Component({
  selector: 'app-onboard-executive',
  imports: [FormsModule,NgIf],
  templateUrl: './onboard-executive.component.html',
  styleUrl: './onboard-executive.component.css'
})
export class OnboardExecutiveComponent {
  role: string ="";
  username: string ="";
  password: string=""; 
  errorMsg: string | undefined;
  successMsg: string | undefined;

  user_id:number=0

  name:any
  phone:any
  address:any
  city:any
  pincode:any


  constructor(private authService: AuthService,private myprofileService:MyProfileService){}

  onSignUp(){

    this.authService.signUp({
      role: this.role,
      username: this.username,
      password: this.password
    }).subscribe({
      next: (data)=>{
        

        this.user_id=data.id
        this.myprofileService.addExecutive(
          this.user_id,
          {
            name:this.name,
            phone:this.phone,
            address:{
              address:this.address,
              city:this.city,
              pincode:this.pincode
            }

        }).subscribe({
          next: (response) => {
            this.successMsg="Executive Onboarded successfully"
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


      },
      error: (err)=>{
        console.log(err)
     
      }
    })
  }
}
