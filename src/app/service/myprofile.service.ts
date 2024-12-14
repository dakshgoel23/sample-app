import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MyProfileService {
  private addCustomerApi='http://localhost:8081/customer/add'
  private getCustomerApi = 'http://localhost:8081/customer/details/byId';
  private updateCustomerProfileApi='http://localhost:8081/customer/update';

  private addExecutiveApi='http://localhost:8081/executive/add';
  private getExecutiveApi='http://localhost:8081/executive/details/byId';
  private updateExecutiveProfileApi='http://localhost:8081/executive/update';


  constructor(private httpClient: HttpClient) {}

//Customer tasks

  addCustomer(user_id:number,obj:any):Observable<any>{
    return this.httpClient.post(this.addCustomerApi+"?user_id="+user_id,obj);

  }

  getCustomerDetails(customer_id: number): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
         Authorization: 'Bearer '+ localStorage.getItem('token')
      })
    };
    return this.httpClient.get(this.getCustomerApi+"?customer_id="+customer_id,httpOptions)
  }

  updateCustomerDetails(customer_id:number,updatedProfile: any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
         Authorization: 'Bearer '+ localStorage.getItem('token')
      })
    };
    return this.httpClient.post(this.updateCustomerProfileApi+"?customer_id="+customer_id,updatedProfile,httpOptions)
  }



  //Executive tasks
  addExecutive(user_id:number,obj:any):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
         Authorization: 'Bearer '+ localStorage.getItem('token')
      })
    };
    return this.httpClient.post(this.addExecutiveApi+"?user_id="+user_id,obj,httpOptions)
  }

  getExecutiveDetails(executive_id:number):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
         Authorization: 'Bearer '+ localStorage.getItem('token')
      })
    };
    return this.httpClient.get(this.getExecutiveApi+"?executive_id="+executive_id,httpOptions)
  }

  updateExecutiveDeatils(executive_id:number,updatedProfile:any):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
         Authorization: 'Bearer '+ localStorage.getItem('token')
      })
    };
    return this.httpClient.post(this.updateExecutiveProfileApi+"?executive_id="+executive_id,updatedProfile,httpOptions)
  }

}
