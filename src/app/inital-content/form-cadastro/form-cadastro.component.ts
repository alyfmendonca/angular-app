import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth-services/auth.service';
@Component({
  selector: 'app-form-cadastro',
  templateUrl: './form-cadastro.component.html',
  styleUrls: ['./form-cadastro.component.css', '../form-login/form-login.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class FormCadastroComponent implements OnInit {

  userCreate: UserSignIn = {
    email: null,
    name: null,
    phone: null,
    crm: null,
    uf: null,
    tuss: null,
    is_admin: false,
  }

   listProcedimentos: Tuss[] = []; 
   selectedTuss: number [] = [];

  constructor(private route: ActivatedRoute,
              private authService: AuthService,
              private router:Router) { }

  ngOnInit() {
    this.listProcedimentos = this.route.snapshot.data.allTuss;
  }

  submitForm(){
    if(!this.userCreate.name){
      alert('Favor digitar seu nome');
      return;
    }else if(!this.userCreate.crm){
      alert('Favor digitar seu CRM');
      return; 
    }else if(!this.userCreate.uf){
      alert('Favor digitar a UF');
      return; 
    }else if(!this.userCreate.phone){
      alert('Favor digitar seu telefone');
      return;  
    }else if(!this.selectedTuss){
      alert('Favor digitar selecioanar ao menos um TUSS');
      return; 
    }else{
    this.userCreate.tuss = '[' + this.selectedTuss + ']';
    this.authService.requestSignIn(this.userCreate).subscribe((res) => {
      alert('Cadastro realizado');
      this.router.navigateByUrl('/home');
    }, err => console.log(JSON.stringify(this.userCreate)));
    }
    
  }
  onClickNext(){
    document.getElementById('mat-tab-label-0-1').click();
  }
  onClickBack(){
    document.getElementById('mat-tab-label-0-0').click();
  }

}

