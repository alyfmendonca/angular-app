import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-surgeon-details',
  templateUrl: './surgeon-details.component.html',
  styleUrls: ['./surgeon-details.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SurgeonDetailsComponent implements OnInit {

  constructor(public router: Router) { }

  pacienteNome: String;
  txtCPF: String;
  txtNome: String;
  txtCrm: String;
  txtUf: String;
  durCirurgia: String;
  txtEmail: String;
  txtFone: String;

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
    {
      "id": 1376,
      "descricao": "ENUCLEAÇÃO"
    },
    {
      "id": 135565,
      "descricao": "RASPAGEM" 
    },
    {
      "id": 1387,
      "descricao": "PLAQTUDUM"
    },{
      "id": 1387,
      "descricao": "asdasdasd"
    },{
      "id": 1387,
      "descricao": "asdasdasd"
    },{
      "id": 1387,
      "descricao": "PLAQTUDUM"
    },{
      "id": 1387,
      "descricao": "PLAQTUDUM"
    },{
      "id": 1387,
      "descricao": "asdasdasasd"
    },{
      "id": 1387,
      "descricao": "PLAQTUDUM"
    },{
      "id": 1387,
      "descricao": "PLAQTUDUM"
    },{
      "id": 1387,
      "descricao": "PLAQTUDUM"
    },{
      "id": 1387,
      "descricao": "PLAQTUDUM"
    },{
      "id": 1387,
      "descricao": "PLAQTUDUM"
    },{
      "id": 1387,
      "descricao": "PLAQTUDUM"
    },{
      "id": 1387,
      "descricao": "asdasdasff"
    },{
      "id": 1387,
      "descricao": "sadasdasda"
    },{
      "id": 1387,
      "descricao": "asdasdasd"
    },{
      "id": 1387,
      "descricao": "PLAQTUDUM"
    },{
      "id": 1387,
      "descricao": "asdasdsa"
    },{
      "id": 1387,
      "descricao": "PLAQTUDUM"
    },
  ]; 
  listSelected: any[] = []; 
  selectionClick(procedimento: any){
    if(this.listSelected.find(function(item:any){
      return item.id == procedimento.id;
    })){
      this.listSelected = this.listSelected.filter(function(item){
        return  item.id != procedimento.id
      });
    }else{
      this.listSelected.push(procedimento);
    }

  }

}