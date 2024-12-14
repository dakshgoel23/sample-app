import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PurchasepolicyService {

  constructor(private httpClient:HttpClient) { }

  private getProposedPolicyByCustomerApi='http://localhost:8081/customer/proposedpolicies'
  private purchasePolicyApi='http://localhost:8081/purchase/policy'

  private acceptpolicyApi='http://localhost:8081/policy/accept'
  private rejectPolicyApi='http://localhost:8081/policy/reject'

  public getProposedPolicyByCustomer(customer_id:number,status:string):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
         Authorization: 'Bearer '+ localStorage.getItem('token')
      })
    };
    return this.httpClient.get(this.getProposedPolicyByCustomerApi+"?customer_id="+customer_id+"&status="+status,httpOptions)

  }

  public purchasePolicy(customer_id:number,policy_id:number,obj:any):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
         Authorization: 'Bearer '+ localStorage.getItem('token')
      })
    };
    return this.httpClient.post(this.purchasePolicyApi+"?customer_id="+customer_id+"&policy_id="+policy_id,obj,httpOptions)
  }

  public acceptPolicy(policy_id:number,obj:any):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
         Authorization: 'Bearer '+ localStorage.getItem('token')
      })
    };
    return this.httpClient.post(this.acceptpolicyApi+"?policy_id="+policy_id,obj,httpOptions)
  }

  public rejectPolicy(policy_id:number,obj:any):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
         Authorization: 'Bearer '+ localStorage.getItem('token')
      })
    };
    return this.httpClient.post(this.rejectPolicyApi+"?policy_id="+policy_id,obj,httpOptions)
  }
}
