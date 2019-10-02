import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth-services/auth.service';
import { Md5 } from 'ts-md5';


@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent implements OnInit {

  constructor(
    private router:Router,
    public authService: AuthService,
    ) { }

  ngOnInit() {
    localStorage.removeItem('userId');
    localStorage.removeItem('token');
    var login = localStorage.getItem('login');
    if(login){
      this.txtLogin = login
    }
  }
  txtLogin:string;
  txtPass:string;
  remember: boolean;

  changeRemember(remember){
    this.remember = remember;
  }

  submitForm(){
    this.authService.login(this.txtLogin, Md5.hashStr(this.txtPass)).subscribe(response => {
      localStorage.setItem('token', response.token);
      //localStorage.setItem('userId', user._id);
      if(this.remember){
        localStorage.setItem('login', this.txtLogin);
      }
      if(response.type == 'admin'){
        this.router.navigate(['/admin']);
      }else if(response.type == 'surgeon'){
        this.router.navigate(['/user']);
      }else{
        alert('Este tipo de usuário não é válido');
      }
      
    }, err =>{
      alert('Login ou senha incorretos');
    });
    
  }

}
