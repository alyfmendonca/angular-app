import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {

  navBarUn:any = 
  [
    {label: "Sobre nós", url:"/home"},
    {label: "Contato", url:"/home"},
    {label: "Cadastrar", url:"/content/cadastro"}, 
    {label:"Entrar", url:"/content/login"}
  ];
  navBarCir:any = 
  [
    {label: "Cirurgias Solicitadas e Aprovadas", url:"/home"},
    {label: "Cirurgias Realizadas", url:"/home"},
    {label: "Solicitar Cirurgia", url:"/content/surgery-request"}, 
    {label:"Minha Conta", url:"/content/profile"}
  ];

  navBarAtual:any = [];

  constructor() { }

  ngOnInit() {
    this.navBarAtual = this.navBarUn;
  }

  alterarPercepcao(){
    if(this.navBarAtual[0].label == "Sobre nós"){
      this.navBarAtual = this.navBarCir;
    }else{
      this.navBarAtual = this.navBarUn;
    }
  }
}
