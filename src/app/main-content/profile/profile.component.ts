import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  
  constructor() { }

  ngOnInit() {
  }

  txtNome = "";
  txtCrm = "";
  txtUf = "";
  txtEmail = "";
  txtTelefone = "";

  submitForm(){
    console.log(this.txtNome, this.txtEmail, this.txtTelefone, this.txtCrm, this.txtUf);
  }

}
