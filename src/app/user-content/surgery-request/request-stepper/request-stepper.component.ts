import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';

@Component({
  selector: 'app-request-stepper',
  templateUrl: './request-stepper.component.html', 
  styleUrls: ['./request-stepper.component.css']
})
export class RequestStepperComponent implements OnInit {
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;

  txtNome:string = "";
  txtCpf:string = "";
  dtNasc:string = "";
  txtDur:string = "";

  complexidade: string = "";

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
    },
  ]; 

  listComorbidadesMock: any[] = [
    {
      "id": 1,
     "descricao": "Hipertensão"
    },
    {
      "id": 2,
      "descricao": "Diabetes"
    },
    {
      "id": 3,
      "descricao": "DPOC"
    },
    {
      "id": 4,
      "descricao": "Tabagismo"
    },
    {
      "id": 5,
      "descricao": "Uso de mais de 2 medicações"
    },
    {
      "id": 6,
      "descricao": "Anticoagulantes"
    },
    {
      "id": 7,
      "descricao": "Antiagregante" 
    },
  ];

  listNecessidadesMock: any[] = [
    {
      "id": 1,
      "descricao": "Semi Intensiva" 
    },
    {
      "id": 2,
      "descricao": "CTI" 
    },
    {
      "id": 3,
      "descricao": "Andar" 
    },
    {
      "id": 4,
      "descricao": "Day Clinic" 
    },
  ]

  listSelected: any[] = []; 

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
   this.thirdFormGroup = this._formBuilder.group({
      thirdCtrl: ['', Validators.required]
    });
  }

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

