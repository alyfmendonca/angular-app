import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SurgeryService } from '../../services/surgery-services/surgery.service';

@Component({
  selector: 'app-realizada-details',
  templateUrl: './realizada-details.component.html',
  styleUrls: ['./realizada-details.component.css']
})
export class RealizadaDetailsComponent implements OnInit {

  constructor(
    public router: Router,
    public route: ActivatedRoute,
    public surgeryService: SurgeryService,
  ) { }
  txtNomeGroup: string;
  taxaCirurgia: string;
  taxaAdicional: string;
  taxaAnestesia: string;
  taxaMaterial: string;
  taxaDiariaGlobal: string;
  taxaDiariaGlobalQ: string;
  taxaDiariaGlobalS: string;
  taxaDiariaGlobalCTI: string;
  HrClinico: string;



  id: string;
  surgery: Surgery = {
    id:null,
      status: '',
      complicated: null,
      duration: '',
      true_duration: '',
      percentage: '',
      discount: null,
      note: '',
      surgeon: [{
          name:'',
          crm:null,
      }],
      patient: [{
          name: '',
          cpf: null,
          birth_date: '',
      }],
      main_tuss: [{
          id: null,
          str: '',
      }],
      hospital: null,
      comorbidities: null,
      secondary_tuss: [{
          id: null,
          str: '',
      }],
      accommodations: null,
  };
  trueDuration: string;
  finalNote: string = '';
  objCustos: any = {
    id: null,
    name: '',
    surgery_tax: null,
    additional_tax: null,
    anesthesia_tax: null,
    material_tax: null,
    clinical_schedule: null,
    surgery_cost: null,
    Semi_intensiva: null,
    CTI: null,
    Andar: null,
    Day_Clinic: null,
    hospital: '',
    total_cost: null,
  };
  aditional: any;
  porcentagem: any;
  valueBar: any;

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    this.surgeryService.getSurgery(this.id).subscribe(response => {
      console.log(response);
      this.surgery = response;
      this.objCustos = response.cost;
      console.log(this.objCustos);
      if(this.surgery.complicated){
        this.aditional = 20;
      }else{
        this.aditional = 0;
      }
      this.porcentagem = response.percentage;
    })
  }

}
