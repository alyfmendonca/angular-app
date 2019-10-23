import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth-services/auth.service';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
import { startWith, map } from 'rxjs/operators';
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

    this.filteredTuss = this.tussControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  }

  private _filter(value: string): Tuss[] {
    const filterValue = value.toLowerCase();

    return this.listProcedimentos.filter((tuss) => {
      return (tuss.str.toLowerCase().includes(filterValue) || this.selectedTuss.find(id => tuss.id == id))
    });
  }

  tussControl = new FormControl();
  filteredTuss: Observable<Tuss[]>;

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
    }, err => 
    {
      if(err.error.message.email[0] == 'user with this email already exists.'){
        alert('Já existem um usuário cadastrado com esse email');
      }
    });
    }
    
  }
  onClickNext(){
    let i = 0
    let continua = true;
    while(continua){
      let tab = document.getElementById(`mat-tab-label-${i}-1`);
      if(tab){
        tab.click();
        continua = false;
      }else{
        i++
      }
    }
  }
  mascaraCrm = '00-0';
  mudaMascara(event){
    //this.mascaraCrm = '000-00'
    var auxCrm = '';
    for (let index = 0; index < event.length-1; index++) {
      auxCrm += '0';
    }
    auxCrm += '-09';
    this.mascaraCrm = auxCrm;
     
    
  }

  onClickBack(){
    let i = 0
    let continua = true;
    while(continua){
      let tab = document.getElementById(`mat-tab-label-${i}-0`);
      if(tab){
        tab.click();
        continua = false;
      }else{
        i++
      }
    }
  }
}

