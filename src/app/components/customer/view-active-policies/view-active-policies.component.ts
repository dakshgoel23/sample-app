import { Component } from '@angular/core';
import { ViewdetailsService } from '../../../service/viewdetails.service';
import { AuthService } from '../../../service/auth.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-view-active-policies',
  imports: [NgFor],
  templateUrl: './view-active-policies.component.html',
  styleUrl: './view-active-policies.component.css'
})
export class ViewActivePoliciesComponent {

  user_id:any
  customer_id:any
  policies:any

  constructor(private  viewDetails:ViewdetailsService,private authService:AuthService){
    this.user_id=localStorage.getItem("id")
  }

  ngOnInit(): void {
    this.fetchPolicies();
  }

   
  fetchPolicies() {

    this.authService.getCustomerDetails(this.user_id).subscribe({
      next:(data)=>{
        this.customer_id=data.id

        this.viewDetails.getActivePoliciesByCustomer(this.customer_id).subscribe((response) => {
          this.policies = response;
        });
      },
      error:()=>{}
    })
  }

}
