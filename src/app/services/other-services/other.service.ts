import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

const API_URL = environment.apiUrl;

let headers = new HttpHeaders({
  //token de cirurgião
  'Authorization': 'token 81f204edcca524ff266b98b94a264db12d640c55',
  'Content-Type': 'application/json'
});
@Injectable({
  providedIn: 'root'
})
export class OtherService {

  constructor(private http: HttpClient) { }

  getAllTuss(): Observable<Tuss[]>{
    return this.http.get<Tuss[]>(`${API_URL}allTuss/`, {headers});
  }
  getTuss(id: string){
    return this.http.get<any>(`${API_URL}tussDetails/?id=${id}`, {headers});
  }

  getAllAccommodations(){
    return this.http.get<Accommodation[]>(`${API_URL}allAccommodations/`, {headers});
  }

  getAllComorbidities(){
    return this.http.get<Comorbiditie[]>(`${API_URL}allComorbidities/`, {headers});
  }

}
