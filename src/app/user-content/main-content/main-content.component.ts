import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {

  navBarAtual:any =   [
    {label: "Cirurgias Solicitadas e Aprovadas", url:"../main/aprovadas-solicitadas"},
    {label: "Cirurgias Realizadas", url:"/home"},
    {label: "Solicitar Cirurgia", url:"../main/request-orientation"}, 
    {label:"Minha Conta", url:"../main/profile"}
  ];

  constructor() { }

  ngOnInit() {
 
  }

}
