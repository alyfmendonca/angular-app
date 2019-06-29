import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const API_URL = environment.apiUrl;

let headers = new HttpHeaders({
  //token de cirurgião
  'Authorization': 'token 81f204edcca524ff266b98b94a264db12d640c55',
  'Content-Type': 'application/json'
});
@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  approveSurgery(approve: SurgeryApprove){
    return this.http.post<any>(`${API_URL}approveSurgery/`, approve, {headers});
  }

  addNewCostGroup(costGroup: CostGroupCreate){
    return this.http.post<any>(`${API_URL}addNewCostGroup/`, costGroup, {headers});
  }

}
