import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BookinspectionService {

  constructor(private httpClient: HttpClient) {}


  //customer inspection tasks
  private getVehicleByCustomer = 'http://localhost:8081/vehicle/details/bycustomerId'
  private bookInspectionApi='http://localhost:8081/vehicle-inspection/book'

  getVehiclesByCustomerId(customerId: number): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
         Authorization: 'Bearer '+ localStorage.getItem('token')
      })
    };
   return this.httpClient.get(this.getVehicleByCustomer+ "?customerId="+customerId,httpOptions)
  }

  bookInspection(vehicle_id: number, booking: any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
         Authorization: 'Bearer '+ localStorage.getItem('token')
      })
    };
    return this.httpClient.post(this.bookInspectionApi+ "?vehicle_id="+ vehicle_id,booking,httpOptions)
  }

  //executive inspection tasks
  private getBookingsApi='http://localhost:8081/vehicle/vehicle-inspection/book'
  private completeInspectionApi='http://localhost:8081/vehicle-inspection/completed'

  getInspectionBookings(status:any):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
         Authorization: 'Bearer '+ localStorage.getItem('token')
      })
    };
    return this.httpClient.get(this.getBookingsApi+"?status="+status,httpOptions)
  }

  completeIsnpectionForm(executive_id:number,vehicleInspectionId:number,vehicleInspection:any):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
         Authorization: 'Bearer '+ localStorage.getItem('token')
      })
    };
    return this.httpClient.post(this.completeInspectionApi+"?executive_id="+executive_id+"&vehicleInspectionId="+vehicleInspectionId,vehicleInspection,httpOptions)
  }

  private getAllPolicyTypeApi='http://localhost:8081/policy/enumType/get'

  public getAllPolicyType():Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
         Authorization: 'Bearer '+ localStorage.getItem('token')
      })
    };
    return this.httpClient.get(this.getAllPolicyTypeApi,httpOptions)
  }
}