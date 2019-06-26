import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment'
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  API_URL = environment.apiUrl;


  constructor(private http: HttpClient) { }

  getHospitals(){
    let headers = new HttpHeaders({
      'Authorization': 'token 81f204edcca524ff266b98b94a264db12d640c55',
      'Content-Type': 'application/json'
    });
    return this.http.get<AdminService[]>(`${this.API_URL}allHospitals/`, {headers});
  }
}
