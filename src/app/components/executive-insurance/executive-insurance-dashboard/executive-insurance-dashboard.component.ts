import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ExecutiveInsuranceSidebarComponent } from '../executive-insurance-sidebar/executive-insurance-sidebar.component';
import { MyProfileService } from '../../../service/myprofile.service';
import { AuthService } from '../../../service/auth.service';
import { HeaderLogoutComponent } from "../../../pages/header-logout/header-logout.component";

@Component({
  selector: 'app-executive-insurance-dashboard',
  imports: [RouterOutlet, ExecutiveInsuranceSidebarComponent, HeaderLogoutComponent],
  templateUrl: './executive-insurance-dashboard.component.html',
  styleUrl: './executive-insurance-dashboard.component.css'
})
export class ExecutiveInsuranceDashboardComponent {
  user_id:any
  executive_id:any
  executive:any

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
        error:()=>{} 
       })

    },
    error:()=>{}
  })
  }

}
