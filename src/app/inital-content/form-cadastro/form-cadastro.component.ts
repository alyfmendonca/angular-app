import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
@Component({
  selector: 'app-form-cadastro',
  templateUrl: './form-cadastro.component.html',
  styleUrls: ['./form-cadastro.component.css', '../form-login/form-login.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('slide', [
      state('left', style({ transform: 'translateX(0)' })),
      state('right', style({ transform: 'translateX(-50%)' })),
      transition('* => *', animate(300)),
  ])]
})

export class FormCadastroComponent implements OnInit {

  
  constructor() { }

  @Input() activePane: PaneType = 'left'

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
type PaneType = 'left' | 'right';
