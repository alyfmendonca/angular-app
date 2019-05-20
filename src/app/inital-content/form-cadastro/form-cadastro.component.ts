import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-cadastro',
  templateUrl: './form-cadastro.component.html',
  styleUrls: ['./form-cadastro.component.css', '../form-login/form-login.component.css']
})
export class FormCadastroComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  txtNome = "";
  txtCrm = "";
  txtUf = "";
  txtEmail = "";
  txtTelefone = "";

  submitForm(){
    console.log(this.txtNome, this.txtCrm, this.txtUf, this.txtEmail, this.txtTelefone);
  }

}
