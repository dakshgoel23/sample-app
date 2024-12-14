import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProposepolicyService {

  constructor(private httpClient:HttpClient) { }

  createPolicyApi='http://localhost:8081/policy/add'
  changeStatusApi='http://localhost:8081/inspection/changestatus'
  getPolicyByStatusApi='http://localhost:8081/policy/byStatus'

  createPolicy(vehicle_id:number,obj:any):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
         Authorization: 'Bearer '+ localStorage.getItem('token')
      })
    };
    return this.httpClient.post(this.createPolicyApi+"?vehicle_id="+vehicle_id,obj,httpOptions)
  }

  changeStatus(inspection_id:number,obj:any):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
         Authorization: 'Bearer '+ localStorage.getItem('token')
      })
    };
    return this.httpClient.post(this.changeStatusApi+"?inspection_id="+inspection_id,obj,httpOptions)
  }

  getPoliciesByStatus(status:any):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
         Authorization: 'Bearer '+ localStorage.getItem('token')
      })
    };
    return this.httpClient.get(this.getPolicyByStatusApi+"?status="+status,httpOptions)
  }
}
