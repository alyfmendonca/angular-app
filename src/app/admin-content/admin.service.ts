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
    let headers = new HttpHeaders;
    headers.append('Content-Type', 'application/x-www-form-urlencoded ');
    headers.append('Authorization', 'token 81f204edcca524ff266b98b94a264db12d640c55');
    headers.append('Access-Control-Allow-Origin', 'http://134.209.213.2:8003/allHospitals/:');
    
    
    

    // headers = new HttpHeaders({
    //   'Content-Type': 'application/json',
    // 
    //   'Authorization': 'token 81f204edcca524ff266b98b94a264db12d640c55'
    // });
    return this.http.get<AdminService[]>(`${this.API_URL}allHospitals/`, {headers});
  }
}
