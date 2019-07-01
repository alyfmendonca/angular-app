import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth-services/auth.service';
import { Router } from '@angular/router';
import { Md5 } from 'ts-md5';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  constructor(
    public authService: AuthService,
    public router: Router,
    ) { }
  txtEmail = "";

  ngOnInit() {
  }

  onSend(){
    let now = new Date();
    let approved_token = Md5.hashStr(formatDate(now, 'dd-MM-yyyy hh:mm:ss.S a', 'en-US', '+0530'));
    this.authService.forgotPassword(this.txtEmail, approved_token).subscribe(response =>{
      alert('Foi enviado um email para cadastro de nova senha!');
      this.router.navigate(['initial/main/login']);
    }, err => {
      alert('Email informado não é válido');
    })
  }

}
