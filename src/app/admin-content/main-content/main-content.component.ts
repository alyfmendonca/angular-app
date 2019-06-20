import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {

  

  navBarAtual:any = [
    {label: "Realizadas", url:"../main/realizadas"},
    {label: "Aprovadas", url:"../main/aprovadas"},
    {label: "Solicitações", url:"../main/solicitacoes"},
    {label: "Tabela TUSS", url:"../main/tuss-table"}, 
    {label:"Cirurgiões", url:"../main/allSurgeons"}, 
    {label:"Hospitais", url:"../main/allHospitals"},
    {label:"Minha Conta", url:"../main/profile"},

  ];

  constructor() { }

  ngOnInit() {

  }

}
