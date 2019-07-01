import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { OtherService } from '../../services/other-services/other.service'


@Component({
  selector: 'app-new-hospital',
  templateUrl: './new-hospital.component.html',
  styleUrls: ['./new-hospital.component.css']
})
export class NewHospitalComponent implements OnInit {

  constructor(
    public router: Router,
    public route: ActivatedRoute,
    ) { }

  newHospital: Hospital = {
    id: null,
    name: '',
    email:'',
    address: '',
    phone: '',
    cep: null,
    creation_date: '',
    delete: null,
    cost_package: null,
    created_by: null
  };



  pacienteNome: String;
  txtCPF: String;
  txtNome: String;
  txtCrm: String;
  txtUf: String;
  durCirurgia: String;
  txtFone: String;
  txtEmail: String;
  txtEnd: String;
  txtCep: String;
  txtNomeGroup: String;
  taxaCirurgia: String;
  taxaAdicional: String;
  taxaAnestesia: String;
  taxaMaterial: String;
  taxaDiariaGlobal: String;
  taxaDiariaGlobalQ: String;
  taxaDiariaGlobalS: String;
  taxaDiariaGlobalCTI: String;
  HrClinico: String;

  tussTable: Tuss[] = [];

  ngOnInit() {
    this.tussTable = this.route.snapshot.data.allTuss;
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
    console.log(this.newHospital);

    
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
  newPackageForm(){
    document.getElementsByClassName('add-packages')[0].setAttribute("style", "display:block;");
  }

}
