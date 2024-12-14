import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { ProposepolicyService } from '../../../service/proposepolicy.service';

@Component({
  selector: 'app-view-allpolicies',
  imports: [NgFor,NgIf],
  templateUrl: './view-allpolicies.component.html',
  styleUrl: './view-allpolicies.component.css'
})
export class ViewAllpoliciesComponent {

  constructor(private viewPolicies:ProposepolicyService){}

  policy:any
  errorMsg:any
  selectedPolicy:any

  fetchPolicies(status:any){
    this.viewPolicies.getPoliciesByStatus(status).subscribe({
      next:(data)=>{
        this.policy=data
        this.selectedPolicy=null
      },
      error:(err)=>{
        this.errorMsg=err;
      }
    })
  }

  showDeatils(policy:any){
    this.selectedPolicy=policy
  }
  

}
