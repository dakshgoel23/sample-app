import { Component, OnInit } from '@angular/core';
import { PurchasepolicyService } from '../../../service/purchasepolicy.service';
import { AuthService } from '../../../service/auth.service';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-view-proposed-policies',
  imports: [NgFor,NgIf],
  templateUrl: './view-proposed-policies.component.html',
  styleUrl: './view-proposed-policies.component.css'
})
export class ViewProposedPoliciesComponent implements OnInit{
  
  customer_id:any
  user_id:any
  policy_id:any
  policies:any
  is_active:any
  successMsg:any
  errorMsg:any
  status:string='PROPOSED'

  constructor(private purchasePolicy:PurchasepolicyService,private authService:AuthService){
    this.user_id=localStorage.getItem("id")
  }

  ngOnInit(): void {
    this.fetchPolicies();
  }

   
  fetchPolicies() {

    this.authService.getCustomerDetails(this.user_id).subscribe({
      next:(data)=>{
        this.customer_id=data.id

        this.purchasePolicy.getProposedPolicyByCustomer(this.customer_id,this.status).subscribe((response) => {
          this.policies = response;
        });
      },
      error:()=>{}
    })
  }

  acceptPolicy(policy:any){
    this.policy_id=policy.id

    this.purchasePolicy.purchasePolicy(
      this.customer_id,
      this.policy_id,
      {
        is_active:true
      }
    ).subscribe({
      next:(data)=>{
        this.successMsg="Purchased Policy Successfully"
          setTimeout(() => {
            this.successMsg = ''; 
          }, 3000);
        this.purchasePolicy.acceptPolicy(this.policy_id,{}).subscribe({
          next:()=>{},
          error:()=>{}
        })

      },
      error:(err)=>{
        alert("Error"+err)
      }
    })


  }

  rejectPolicy(policy:any){
    this.policy_id=policy.id
    this.purchasePolicy.rejectPolicy(this.policy_id,{}).subscribe({
      next:()=>{},
      error:()=>{}
    })

    this.errorMsg="Rejected Policy!!"
          setTimeout(() => {
            this.errorMsg = ''; 
          }, 3000);


  }







}
