import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ViewdetailsService {

  constructor(private httpClient:HttpClient) { }

  private getActivePoliciesByCustomerApi='http://localhost:8081/purchase/policy/byCustomer'
  private getAllCustomersApi='http://localhost:8081/customer/viewall'
  private getAllExecutiveApi='http://localhost:8081/executive/viewall'

  public getActivePoliciesByCustomer(customer_id:number):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
         Authorization: 'Bearer '+ localStorage.getItem('token')
      })
    };
    return this.httpClient.get(this.getActivePoliciesByCustomerApi+"?customer_id="+customer_id,httpOptions)
  }

  public getAllCustomers():Observable<any>
  {
    const httpOptions = {
      headers: new HttpHeaders({
         Authorization: 'Bearer '+ localStorage.getItem('token')
      })
    };
    return this.httpClient.get(this.getAllCustomersApi,httpOptions)
  }

  public getAllExecutive():Observable<any>
  {
    const httpOptions = {
      headers: new HttpHeaders({
         Authorization: 'Bearer '+ localStorage.getItem('token')
      })
    };
    return this.httpClient.get(this.getAllExecutiveApi,httpOptions)
  }
}
