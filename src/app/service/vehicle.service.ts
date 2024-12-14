
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {
  private vehicleAddApi = 'http://localhost:8081/vehicle/add'; 

  constructor(private httpCleint: HttpClient) {}

  addVehicle(customerId: number, vehicle: any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
         Authorization: 'Bearer '+ localStorage.getItem('token')
      })
    };
    return this.httpCleint.post(this.vehicleAddApi+'?customerId=' + customerId, vehicle,httpOptions);
  }


  private getAllVehicleCategoryApi='http://localhost:8081/vehicle/enumCategory/get'
  private getAllFuelTypeApi='http://localhost:8081/vehicle/enumFuelType/get'

  public getAllVehicleCategory():Observable<any>
  {
    const httpOptions = {
      headers: new HttpHeaders({
         Authorization: 'Bearer '+ localStorage.getItem('token')
      })
    };
    return this.httpCleint.get(this.getAllVehicleCategoryApi,httpOptions)
  }


  public getAllFuelType():Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
         Authorization: 'Bearer '+ localStorage.getItem('token')
      })
    };
    return this.httpCleint.get(this.getAllFuelTypeApi,httpOptions)
  }
}
