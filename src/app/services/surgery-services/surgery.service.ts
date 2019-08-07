import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const API_URL = environment.apiUrl;


@Injectable({
  providedIn: 'root'
})
export class SurgeryService {

  constructor(private http: HttpClient) { }

    allSurgery(status: string){
      let token = localStorage.getItem('token');
      let headers = new HttpHeaders({
        'Authorization': `token ${token}`,
        'Content-Type': 'application/json'
      });

      return this.http.get<SurgeryDone[]>(`${API_URL}allSurgeries/?status=${status}`, {headers});
    }

    getSurgery(id: string){
      let token = localStorage.getItem('token');
      let headers = new HttpHeaders({
        'Authorization': `token ${token}`,
        'Content-Type': 'application/json'
      });

      return this.http.get<Surgery>(`${API_URL}surgery/?id=${id}`, {headers});
    }

    createSurgery(surgery: SurgeryCreate){
      let token = localStorage.getItem('token');
      let headers = new HttpHeaders({
        'Authorization': `token ${token}`,
        'Content-Type': 'application/json'
      });
      return this.http.post<Surgery>(`${API_URL}surgery/`, surgery, {headers});
    }

    updateSurgery(surgery: SurgeryUpdate){
      let token = localStorage.getItem('token');
      let headers = new HttpHeaders({
        'Authorization': `token ${token}`,
        'Content-Type': 'application/json'
      });

      return this.http.put<Surgery>(`${API_URL}surgery/`, surgery, {headers});
    }

    performSurgery(surgeryPerform: SurgeryPerform){
      let token = localStorage.getItem('token');
      let headers = new HttpHeaders({
        'Authorization': `token ${token}`,
        'Content-Type': 'application/json'
      });

      return this.http.post<any>(`${API_URL}performSurgery/`, surgeryPerform, {headers});
    }

    approveSurgery(surgeryAprove: SurgeryApprove){
      let token = localStorage.getItem('token');
      let headers = new HttpHeaders({
        'Authorization': `token ${token}`,
        'Content-Type': 'application/json'
      });

      return this.http.post<any>(`${API_URL}approveSurgery/`, surgeryAprove, {headers});
    }

    uploadMedia(data: string, id: number){
      let token = localStorage.getItem('token');
      let headers = new HttpHeaders({
        'Authorization': `token ${token}`,
        'Content-Type': 'application/json'
      });

      return this.http.post<any>(`${API_URL}surgeryMedia/`, {
        id: id,
        media: data
      }, {headers});
    }

    getMedia(name: string){
      let token = localStorage.getItem('token');
      let headers = new HttpHeaders({
        'Authorization': `token ${token}`,
        'Content-Type': 'text',
        
      });
      
      return this.http.get(`http://mysurgery.com.br:8003${name}`, {headers, responseType: 'text'});
    }

}
