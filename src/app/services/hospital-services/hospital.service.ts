import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const API_URL = environment.apiUrl;
let token = localStorage.getItem('token');
let headers = new HttpHeaders({
  'Authorization': `token ${token}`,
  'Content-Type': 'application/json'
});

@Injectable({
  providedIn: 'root'
})
export class HospitalService {

  constructor(private http: HttpClient) { }

  getHospitals(){
    return this.http.get<Hospital[]>(`${API_URL}allHospitals/`, {headers});
  }

  getHospital(hospId: string){
    return this.http.get<HospitalById>(`${API_URL}hospital/?id=${hospId}`, {headers});
  }

  createHospital(hospital: HospitalCreate){
    return this.http.post<Hospital>(`${API_URL}hospital/`, hospital, {headers});
  }

}
