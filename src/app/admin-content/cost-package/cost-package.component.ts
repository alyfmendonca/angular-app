import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { OtherService } from '../../services/other-services/other.service'
import { AdminService } from '../../services/admin-services/admin.service';


@Component({
  selector: 'app-cost-package',
  templateUrl: './cost-package.component.html',
  styleUrls: ['./cost-package.component.css']
})
export class CostPackageComponent implements OnInit {

  constructor(
    public route: ActivatedRoute,
    public adminService: AdminService,
    ) { }

    @Output() respostaFamilia = new EventEmitter();

  costGroup: CostGroupCreate= {
    hospitl_id:null,
    name:'',
    surgery_tax:null,
    additional_tax:null,
    anesthesia_tax:null,
    material_tax: null,
    clinical_schedule:null,
    tuss: '',
    accommodations: null,
    Semi_intensiva: '',
    CTI: '',
    Andar: '',
    Day_Clinic: '',
  }
  tussTable: Tuss[] = [];

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

  selectedTuss: number[] = []; 

  ngOnInit() {
    this.tussTable = this.route.snapshot.data.allTuss;
    
  }
  onSend(){
    this.costGroup.tuss = "[" + this.selectedTuss + "]";
    this.feedback();
  }
  submitNewPackage(){
    this.costGroup.tuss = "[" + this.selectedTuss + "]";
    //this.adminService.addNewCostGroup(this.costGroup).subscribe(response => {
    //  console.log(response);
    //});
    this.feedback();
  }
  feedback() {
    this.respostaFamilia.emit(this.costGroup.name);
  }
}
