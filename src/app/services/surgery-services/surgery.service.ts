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
export class SurgeryService {

  constructor(private http: HttpClient) { }

    allSurgery(status: string){
      return this.http.get<SurgeryDone[]>(`${API_URL}allSurgeries/?status=${status}`, {headers});
    }

    getSurgery(id: string){
      return this.http.get<Surgery>(`${API_URL}surgery/?id=${id}`, {headers});
    }

    createSurgery(surgery: SurgeryCreate){
      return this.http.post<Surgery>(`${API_URL}surgery/`, surgery, {headers});
    }

    updateSurgery(surgery: SurgeryUpdate){
      return this.http.put<Surgery>(`${API_URL}surgery/`, surgery, {headers});
    }

    performSurgery(surgeryPerform: SurgeryPerform){
      return this.http.post<any>(`${API_URL}performSurgery/`, surgeryPerform, {headers});
    }

}
