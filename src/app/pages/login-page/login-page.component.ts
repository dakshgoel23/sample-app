import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../service/auth.service';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { HeaderComponent } from "../header/header.component";

@Component({
  selector: 'app-login-page',
  imports: [FormsModule, NgIf, HeaderComponent],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {
  username: string="";
  password: string="";
  successMsg: string | undefined;
  errorMsg:string | undefined;
  
  msg: string | undefined; 
  constructor(private authService: AuthService, private router: Router
  ){}
  onLogin(){
    this.authService.login({
      username: this.username,
      password: this.password
    }).subscribe({
      next: (data)=>{
         let token = data.token; 
        this.authService.getUserDetails(token).subscribe({
          next: (data)=>{
            this.successMsg="Welcome, Login Successful"
            localStorage.setItem('token', token); 
            localStorage.setItem('username', data.username);
            localStorage.setItem('role', data.role);
            localStorage.setItem('id',data.id);
            let role = data.role; 
            switch(role){
              case 'CUSTOMER':
                this.router.navigateByUrl("/customer-dashboard");
                break; 
              case 'ADMIN':
                this.router.navigateByUrl("/admin-dashboard");
                break; 
              case 'EXECUTIVE_INSURANCE':
                this.router.navigateByUrl("/executive-insurance-dashboard");
                break; 
              case 'EXECUTIVE_INSPECTION':
                this.router.navigateByUrl("/executive-inspection-dashboard");
                break; 
              default: 
                this.router.navigateByUrl("/broken-link");
                break; 
            }
          },
          error: (err)=>{
             this.errorMsg = err.error
          }
        })
      },
      error: (err)=>{
        console.log(err);
        this.errorMsg = err.error; 
        setTimeout(() => {
          this.errorMsg = '';
        }, 3000); // 3 seconds
      }
    })
  }
}

