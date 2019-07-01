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
export class AuthService {

  constructor(private http: HttpClient) { }

  //Criptografia??
  login(username: string, password: string | Int32Array){
    return this.http.post<Credentials>(`${API_URL}auth/`, {username, password});
  }

  requestSignIn(user: UserSignIn){
    return this.http.post<any>(`${API_URL}requestSignIn/`, user);
  }

  forgotPassword(email: string, forgot_token: string | Int32Array){
    return this.http.post<any>(`${API_URL}forgotPassword/`, {email, forgot_token});
  }

  approveSignIn(approved_token: string | Int32Array, surgeon_id: number){
    return this.http.put<any>(`${API_URL}approveSignIn/`, {approved_token, surgeon_id}, {headers});
  }
  finishSignIn(approved_token: string | Int32Array, password: string | Int32Array){
    return this.http.put<any>(`${API_URL}finishSignIn/`, {approved_token, password}, {headers});
  }
  finishForgotPassword(forgot_token: string | Int32Array, password: string | Int32Array){
    return this.http.post<any>(`${API_URL}finishForgotPassword/`, {forgot_token, password}, {headers});
  }

  

}
