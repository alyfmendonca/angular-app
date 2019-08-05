import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class HospitalService {

  constructor(private http: HttpClient) { }

  getHospitals(){
    let token = localStorage.getItem('token');
    let headers = new HttpHeaders({
      'Authorization': `token ${token}`,
      'Content-Type': 'application/json'
    });

    return this.http.get<Hospital[]>(`${API_URL}allHospitals/`, {headers});
  }

  getHospital(hospId: string){
    let token = localStorage.getItem('token');
    let headers = new HttpHeaders({
      'Authorization': `token ${token}`,
      'Content-Type': 'application/json'
    });

    return this.http.get<HospitalById>(`${API_URL}hospital/?id=${hospId}`, {headers});
  }

  createHospital(hospital: HospitalCreate){
    let token = localStorage.getItem('token');
    let headers = new HttpHeaders({
      'Authorization': `token ${token}`,
      'Content-Type': 'application/json'
    });
    
    return this.http.post<Hospital>(`${API_URL}hospital/`, hospital, {headers});
  }

  getCostPackageOptions(tuss: string){
    let token = localStorage.getItem('token');
    let headers = new HttpHeaders({
      'Authorization': `token ${token}`,
      'Content-Type': 'application/json'
    });

    return this.http.get<CostPackageOptions[]>(`${API_URL}costPackageOptionsForHospital/?tuss=${tuss}`, {headers});
  }

}
