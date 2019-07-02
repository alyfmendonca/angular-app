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
    checked = true;
    texto = 'Acréscimo';
    id: string;
    surgeryAprove: SurgeryApprove = {
      id:null,
      percentage: 0,
      discount: null,
      hospital: null
    }
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

    valorPorcent: number;
    valorPorcentOut: number;
    formatLabel(value: number | null) {

      this.valorPorcent = value;
      if(this.valorPorcentOut != this.valorPorcent){
        this.valorPorcentOut = this.valorPorcent;
      }
      return value;
    }

    desconto: boolean;
    onChange(evento: any){
      if(evento.checked){
        this.texto = 'Acréscimo';
        this.desconto = false;
        
      }else{
        this.texto = 'Desconto';
        this.desconto = true;
      }
      console.log(this.desconto);
    }
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
    

    
    aprovarSolicitacao(){
      console.log(this.valorPorcent);
      this.surgeryAprove.id = this.surgery.id;
      //this.surgeryAprove.percentage = 10;
      if(this.desconto){
        this.surgeryAprove.discount = true;
      }else{
        this.surgeryAprove.discount = false;
      }
      this.surgeryAprove.hospital = this.objCustos.id;
      
      console.log(this.surgeryAprove);
      this.surgeryService.approveSurgery(this.surgeryAprove).subscribe(response => {
        console.log(response);

      }, err => {
        console.log(err);
      })
      

    }

    onChangeBar(event: any){
      console.log(event.value);
      this.surgeryAprove.percentage = event.value;
    }

}
