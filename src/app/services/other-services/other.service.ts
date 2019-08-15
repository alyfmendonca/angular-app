import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class OtherService {

  constructor(private http: HttpClient) {
   }

  getAllTuss(): Observable<Tuss[]>{
    
    return this.http.get<Tuss[]>(`${API_URL}allTuss/`);

  }

  getTuss(id: string){
    let token = localStorage.getItem('token');
    let headers = new HttpHeaders({
      'Authorization': `token ${token}`,
      'Content-Type': 'application/json'
    });

    return this.http.get<any>(`${API_URL}tussDetails/?id=${id}`, {headers});
  }

  getAllAccommodations(){
    let token = localStorage.getItem('token');
    let headers = new HttpHeaders({
      'Authorization': `token ${token}`,
      'Content-Type': 'application/json'
    });

    return this.http.get<Accommodation[]>(`${API_URL}allAccommodations/`, {headers});
  }

  getAllComorbidities(){
    let token = localStorage.getItem('token');
    let headers = new HttpHeaders({
      'Authorization': `token ${token}`,
      'Content-Type': 'application/json'
    });

    return this.http.get<Comorbiditie[]>(`${API_URL}allComorbidities/`, {headers});
  }
  
  getAllCid(){
    let token = localStorage.getItem('token');
    let headers = new HttpHeaders({
      'Authorization': `token ${token}`,
      'Content-Type': 'application/json'
    });

    return this.http.get<Cid[]>(`${API_URL}allCid/`, {headers});
  }

  deleteImg(id: number,){
    let token = localStorage.getItem('token');
    let headers = new HttpHeaders({
      'Authorization': `token ${token}`,
      'Content-Type': 'application/json'
    });

    return this.http.delete<any>(`${API_URL}surgeryMedia/`, {headers});
  }
  
}
