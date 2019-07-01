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
export class AuthService {

  constructor(private http: HttpClient) { }

  //Criptografia??
  login(username: string, password: string){
    return this.http.post<Credentials>(`${API_URL}auth/`, {username, password});
  }

  requestSignIn(user: UserSignIn){
    return this.http.post<any>(`${API_URL}requestSignIn/`, user);
  }

  forgotPassword(email: string){
    return this.http.post<any>(`${API_URL}forgotPassword/`, {email});
  }

  approveSignIn(approved_token: string | Int32Array, surgeon_id: number){
    return this.http.put<any>(`${API_URL}approveSignIn/`, {approved_token, surgeon_id}, {headers});
  }

}
