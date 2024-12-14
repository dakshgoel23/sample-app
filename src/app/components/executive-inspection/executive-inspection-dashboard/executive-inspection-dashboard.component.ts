import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ExecutiveInspectionSidebarComponent } from '../executive-inspection-sidebar/executive-inspection-sidebar.component';
import { MyProfileService } from '../../../service/myprofile.service';
import { AuthService } from '../../../service/auth.service';

@Component({
  selector: 'app-executive-inspection-dashboard',
  imports: [RouterOutlet,ExecutiveInspectionSidebarComponent],
  templateUrl: './executive-inspection-dashboard.component.html',
  styleUrl: './executive-inspection-dashboard.component.css'
})
export class ExecutiveInspectionDashboardComponent {
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
