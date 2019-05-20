import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {

  

  navBarAtual:any = [
    {label: "Tabela TUSS", url:"../main/tuss-table"},  
    {label:"Hospitais", url:"../main/allHospitals"},
    {label:"Minha Conta", url:"../main/profile"},

  ];

  constructor() { }

  ngOnInit() {

  }

}
