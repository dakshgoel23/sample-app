import { Component } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { MyProfileService } from '../../service/myprofile.service';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-signup-page',
  imports: [FormsModule,NgIf],
  templateUrl: './signup-page.component.html',
  styleUrl: './signup-page.component.css'
})
export class SignupPageComponent {
  role: string ="CUSTOMER";
  username: string ="";
  password: string=""; 
  errorMsg: string | undefined;
  successMsg: string | undefined;
  constructor(private authService: AuthService,private myProfileService:MyProfileService,private router:Router){}

  onSignUp(){

    this.authService.signUp({
      role:this.role,
      username: this.username,
      password: this.password
    }).subscribe({
      next: (data)=>{
        localStorage.setItem("user_id",data.id)
        this.router.navigateByUrl("/add-details");
      },
      error: (err)=>{
        this.errorMsg = err.error.msg; 
        setTimeout(() => {
          this.errorMsg = '';
        }, 3000); // 3 seconds
      }
    })


  
  }

}
