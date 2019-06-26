import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-solicitacoes-details',
  templateUrl: './solicitacoes-details.component.html',
  styleUrls: ['./solicitacoes-details.component.css']
})
export class SolicitacoesDetailsComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

  listComorbidadesMock: any[] = [
    {
      "id": 1,
     "descricao": "Hipertensão"
    },
    {
      "id": 2,
      "descricao": "Diabetes"
    },
  ];

  listProcedimentosMock: any[] = 
  [
    {
      "id": 1342,
      "descricao": "COLECISTECTOMIA"
    },
    {
      "id": 1356,
      "descricao": "VIDEOLAPAROSCOPIA"
    },
    {
      "id": 1359,
      "descricao": "LAPAROSCÓPICA"
    },
    {
      "id": 1352,
      "descricao": "DRENAGEM CIRÚRGICA POR VIDEOLAPAROSCOPIA"
    },
    {
      "id": 1389,
      "descricao": "RETOSSIGMOIDECTOMIA ABDOMINAL POR VIDEOLAPAROSCOPIA"
    },
    
  ]; 

  listProcedimentosMock2: any[] = 
  [
    {
      "id": 1342,
      "descricao": "COLECISTECTOMIA"
    },
    {
      "id": 1356,
      "descricao": "VIDEOLAPAROSCOPIA"
    },
    
    
  ]; 
}
