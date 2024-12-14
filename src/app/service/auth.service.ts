import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private signupApi = 'http://localhost:8081/auth/sign-up';
    private loginApi = 'http://localhost:8081/api/token';
    private userDetailsApi = 'http://localhost:8081/auth/user';

    private getCustomerByUserApi='http://localhost:8081/api/get/customer'
    private getExecutiveByUserApi='http://localhost:8081/api/get/executive'

    constructor(private httpClient: HttpClient){}
    signUp(user: any) : Observable<any>{
        return this.httpClient.post(this.signupApi,user);
      }

      login(user: any): Observable<any> {
        return this.httpClient.post(this.loginApi, user);
    }
    getUserDetails(token: any): Observable<any>{
         
        const httpOptions = {
            headers: new HttpHeaders({
               Authorization: 'Bearer '+ token
            })
          };
        return this.httpClient.get(this.userDetailsApi,httpOptions); 
    }

    getCustomerDetails(user_id:number):Observable<any>{
      const httpOptions = {
        headers: new HttpHeaders({
           Authorization: 'Bearer '+ localStorage.getItem('token')
        })
      };
      return this.httpClient.get(this.getCustomerByUserApi+"?user_id="+user_id,httpOptions)

    }

    getExecutiveDeatils(user_id:number):Observable<any>{
      const httpOptions = {
        headers: new HttpHeaders({
           Authorization: 'Bearer '+ localStorage.getItem('token')
        })
      };
      return this.httpClient.get(this.getExecutiveByUserApi+"?user_id="+user_id,httpOptions)

    }
}
