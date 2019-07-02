import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SurgeryService } from '../../services/surgery-services/surgery.service';

@Component({
  selector: 'app-solicitacoes-details',
  templateUrl: './solicitacoes-details.component.html',
  styleUrls: ['./solicitacoes-details.component.css']
})
export class SolicitacoesDetailsComponent implements OnInit {

  constructor(
    public router: Router, 
    public route: ActivatedRoute,
    public surgeryService: SurgeryService,
    ) { }

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
    aditional: number;
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
      hospital: ''
    };
  
    ngOnInit() {
      this.id = this.route.snapshot.params.id;
      this.surgeryService.getSurgery(this.id).subscribe((response) => {
        console.log(response);
        this.surgery = response;
      })
      if(this.surgery.complicated){
        this.aditional = 20;
      }else{
        this.aditional = 0;
      }
    }
    onClickNext(custos: any){
      this.objCustos = custos;
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
      console.log(this.objCustos);
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

}
