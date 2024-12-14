import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProposepolicyService } from '../../../service/proposepolicy.service';
import { BookinspectionService } from '../../../service/inspection.service';


@Component({
  selector: 'app-propose-policy',
  imports: [NgFor,FormsModule,NgIf],
  templateUrl: './propose-policy.component.html',
  styleUrl: './propose-policy.component.css'
})
export class ProposePolicyComponent {

  constructor(private viewBookings:BookinspectionService,private proposepolicy:ProposepolicyService){}

 
  policyData = {
    name: '',
    premium_amount: 0,
    coverage_amount: 0,
    duration_months: 12,
    type: '',
    premiumCalculation: {
      basePremium: 0,
      vehicleRiskFactor: 0,
      driverRiskFactor: 0,
      priceOfCoverage: 0,
      discount: 0,
    },
  };

  vehicle_id:number=0
  inspection_id:any
  inspection:any[]=[]
  errorMsg:any
  status: string="COMPLETED"
  selectedInspection:any
  showPolicyForm: boolean=false;
  type:any
  successMsg:any


  ngOnInit(): void {
    this.viewBookings.getInspectionBookings(this.status).subscribe({
      next:(data)=>{
        this.inspection=data
      },
      error:(err)=>{
        this.errorMsg=err;
      }
    })

    this.fetchPolicyTypes();

  }

  fetchPolicyTypes() {
    this.viewBookings.getAllPolicyType().subscribe({
      next:(data)=>{
        this.type=data
      },
      error:()=>{}
    })
  }

  viewDetails(inspection: any): void {
    this.selectedInspection = inspection;
  }

  // Opens Section 3
  proposePolicy() {
    this.showPolicyForm = true;
  }

  // calculatePremium() {
  //   const calc = this.policyData.premiumCalculation;

  //   // Reset premium_amount to 0
  //   this.policyData.premium_amount = 0;

  //   // Safely parse and sum up the values
  //   this.policyData.premium_amount = 
  //     (parseFloat(calc.basePremium.toString()) || 0) + 
  //     (parseFloat(calc.vehicleRiskFactor.toString()) || 0) + 
  //     (parseFloat(calc.driverRiskFactor.toString()) || 0) + 
  //     (parseFloat(calc.priceOfCoverage.toString()) || 0) + 
  //     (parseFloat(calc.discount.toString()) || 0);
  // }



  calculatePremium() {
    const calc = this.policyData.premiumCalculation;
  
    // Reset premium_amount to 0
    this.policyData.premium_amount = 0;
  
    // Safely parse the input values and apply the formula
    const basePremium = parseFloat(calc.basePremium.toString()) || 0;
    const vehicleRiskFactor = parseFloat(calc.vehicleRiskFactor.toString()) || 0;
    const driverRiskFactor = parseFloat(calc.driverRiskFactor.toString()) || 0;
    const priceOfCoverage = parseFloat(calc.priceOfCoverage.toString()) || 0;
    const discount = parseFloat(calc.discount.toString()) || 0;
  
    // Calculate premium_amount using the formula
    this.policyData.premium_amount = 
      (basePremium * vehicleRiskFactor * driverRiskFactor) + 
      priceOfCoverage - 
      discount;
  }
  

  submitPolicy() {
    let obj=this.policyData
    let obj1:any
  
    this.proposepolicy.createPolicy(
      this.vehicle_id=this.selectedInspection.vehicle.id,
      obj
    ).subscribe({
      next:(data) => {
        this.successMsg="Proposed Policy Successfully"
        setTimeout(() => {
          this.successMsg = ''; 
        }, 3000);
        this.proposepolicy.changeStatus(
          this.inspection_id=this.selectedInspection.id,
          obj1
        ).subscribe()
      },
      error:(err) => {
        this.errorMsg=err.error.msg
        setTimeout(() => {
          this.successMsg = ''; 
        }, 3000);
      }

    }
    );
  }
} 

