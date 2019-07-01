import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const API_URL = environment.apiUrl;
let token = localStorage.getItem('token');
let headers = new HttpHeaders({
  //token de cirurgião
  'Authorization': `token ${token}`,
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

  userAdmin(){
    return this.http.get<Admin>(`${API_URL}userAdmin/`, {headers});
  }

}
