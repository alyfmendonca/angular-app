import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Md5 } from 'ts-md5';
import { AuthService } from '../../services/auth-services/auth.service';

@Component({
  selector: 'app-new-pass-forgot',
  templateUrl: './new-pass-forgot.component.html',
  styleUrls: ['./new-pass-forgot.component.css']
})
export class NewPassForgotComponent implements OnInit {

  constructor(
    private router:Router,
    public authService: AuthService,
    public route: ActivatedRoute,
    ) { }
  token: string;
  ngOnInit() {
    this.route.queryParams.subscribe( parametros => {
      this.token = parametros.token;
    }, err =>{
      console.log(err);
    });
  }
 
  txtPass = "";
  txtPass2 = "";

  submitForm(){
    if(this.txtPass == this.txtPass2){
      this.authService.finishForgotPassword(this.token, Md5.hashStr(this.txtPass)).subscribe(response =>{
        alert('Senha cadastrada com sucesso!');
        this.router.navigate(['initial/main/login']);
      }, err => {
        alert('Houve um erro no cadastro da senha');
      });
      
    }else {
      alert('Senhas informadas não são iguais');
    }
  }
}
