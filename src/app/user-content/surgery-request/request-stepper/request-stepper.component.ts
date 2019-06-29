import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { OtherService } from 'src/app/services/other-services/other.service';

@Component({
  selector: 'app-request-stepper',
  templateUrl: './request-stepper.component.html', 
  styleUrls: ['./request-stepper.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
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

  altaComplex:boolean = false;
  baixaComplex:boolean = false;

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

  listComorbidadesMock: Comorbiditie[] = [];

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
    {
      "id": 4,
      "descricao": "Day Clinic" 
    },
    {
      "id": 4,
      "descricao": "Day Clinic" 
    },
    {
      "id": 4,
      "descricao": "Day Clinic" 
    },
    {
      "id": 4,
      "descricao": "Day Clinic" 
    },
    {
      "id": 4,
      "descricao": "Day Clinic" 
    },
    {
      "id": 4,
      "descricao": "Day Clinic" 
    },
    {
      "id": 4,
      "descricao": "Day Clinic" 
    },
    {
      "id": 4,
      "descricao": "Day Clinic" 
    },
  ]

  listSelected: any[] = []; 

  constructor(private _formBuilder: FormBuilder,
              private otherServices: OtherService) {}

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

    this.otherServices.getAllComorbidities().subscribe(
      comorbidities => this.listComorbidadesMock = comorbidities
    ).unsubscribe;
    

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

