import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {

  navBarAtual:any = [
    {label: "Sobre nós", url:"/home"},
    {label: "Contato", url:"/home"},
    {label: "Cadastrar", url:"../main/cadastro"}, 
    {label:"Entrar", url:"../main/login"}
  ];

  constructor() { }

  ngOnInit() {
    
  }

}
