import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  private getDetailsByIdApi='http://localhost:8081/images/one/'
  private uploadImageApi='http://localhost:8081/api/customer/image/upload/'

  constructor(private httpClient:HttpClient) { }

  getDetailsById(cid:number):Observable<any>
  {
    const httpOptions = {
      headers: new HttpHeaders({
         Authorization: 'Bearer '+ localStorage.getItem('token')
      })
    };
    return this.httpClient.get(this.getDetailsByIdApi+cid,httpOptions)
  }

  uploadImage(formData:FormData,id:number):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
         Authorization: 'Bearer '+ localStorage.getItem('token')
      })
    };
    return this.httpClient.post(this.uploadImageApi+id,formData,httpOptions)
  }
}
