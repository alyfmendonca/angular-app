import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const API_URL = environment.apiUrl;


@Injectable({
  providedIn: 'root'
})
export class SurgeonService {

  constructor(private http: HttpClient) { }

  allSurgeons(status: string){
    let token = localStorage.getItem('token');
    let headers = new HttpHeaders({
      'Authorization': `token ${token}`,
      'Content-Type': 'application/json'
    });
    return this.http.get<Surgeon[]>(`${API_URL}allSurgeons/`, {headers, params: {
      status
    }});
  }

  getSurgeon(id?: number){
    let token = localStorage.getItem('token');
    let headers = new HttpHeaders({
      'Authorization': `token ${token}`,
      'Content-Type': 'application/json'
    });

    if(id){
      return this.http.get<SurgeonById>(`${API_URL}surgeon/?id=${id}`, {headers});
    }
    return this.http.get<SurgeonById>(`${API_URL}surgeon`, {headers});
  }

  createSurgeon(surgeon: SurgeonCreate){
    let token = localStorage.getItem('token');
    let headers = new HttpHeaders({
      'Authorization': `token ${token}`,
      'Content-Type': 'application/json'
    });

    return this.http.post<any>(`${API_URL}surgeon/`, surgeon, {headers});
  }

  updateSurgeon(surgeon: SurgeonUpdate){
    let token = localStorage.getItem('token');
    let headers = new HttpHeaders({
      'Authorization': `token ${token}`,
      'Content-Type': 'application/json'
    });
    
    return this.http.put<any>(`${API_URL}surgeon/`, surgeon, {headers});
  }

}
