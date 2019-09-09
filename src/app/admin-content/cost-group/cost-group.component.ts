import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cost-group',
  templateUrl: './cost-group.component.html',
  styleUrls: ['./cost-group.component.css']
})
export class CostGroupComponent implements OnInit {
  @Input() costGroup: CostGroup;
  @Input() boolSalvar: boolean = false;
  @Input() idHosp: number = null;

  @Output() salvandoGc = new EventEmitter();

  clickSalvar(){
    this.salvandoGc.emit();
  }

  constructor() { }
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
  ngOnInit() {
  }

}
