import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../../../pages/header/header.component';
import { FooterComponent } from '../../../pages/footer/footer.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { AuthService } from '../../../service/auth.service';
import { MyProfileService } from '../../../service/myprofile.service';


@Component({
  selector: 'app-customer-dashboard',
  imports: [RouterOutlet,SidebarComponent],
  templateUrl: './customer-dashboard.component.html',
  styleUrl: './customer-dashboard.component.css'
})
export class CustomerDashboardComponent {

  user_id:any
  customer_id:any
  customer:any


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

}
