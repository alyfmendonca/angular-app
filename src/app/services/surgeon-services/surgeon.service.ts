import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const API_URL = environment.apiUrl;

let headers = new HttpHeaders({
  'Authorization': 'token 81f204edcca524ff266b98b94a264db12d640c55',
  'Content-Type': 'application/json'
});

@Injectable({
  providedIn: 'root'
})
export class SurgeonService {

  constructor(private http: HttpClient) { }

  allSurgeons(status: string){
    return this.http.get<Surgeon[]>(`${API_URL}allSurgeons/`, {headers, params: {
      status
    }});
  }

  getSurgeon(id: number){
    return this.http.get<SurgeonById>(`${API_URL}surgeon/?id=${id}`, {headers});
  }

  createSurgeon(surgeon: SurgeonCreate){
    return this.http.post<any>(`${API_URL}surgeon/`, surgeon, {headers});
  }

  updateSurgeon(surgeon: SurgeonUpdate){
    return this.http.put<any>(`${API_URL}surgeon/`, surgeon, {headers});
  }

}
