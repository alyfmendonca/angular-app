import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SurgeryService } from '../../services/surgery-services/surgery.service';
import { OtherService } from 'src/app/services/other-services/other.service';

@Component({
  selector: 'app-realizadas-details',
  templateUrl: './realizadas-details.component.html',
  styleUrls: ['./realizadas-details.component.css']
})
export class RealizadasDetailsComponent implements OnInit {

  constructor(
    public router: Router,
    public route: ActivatedRoute,
    public surgeryService: SurgeryService,
    private otherService: OtherService,
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

  token = localStorage.getItem('token');

  id: string;
  surgery: Surgery = {
    id:null,
      status: '',
      complicated: null,
      hours_duration: null,
      minutes_duration: null,
      true_hours_duration: null,
      true_minutes_duration: null,
      explanation: '',
      percentage: null,
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
      cid: {
          id: null,
          str: ''
      },
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
  duracao: string;
  verdadeiraDuracao: string;
  complexidade: string;
  
  listComorb: Comorbiditie[] = [];
  listNeeds: Accommodation[] = [];

  selectedTuss: number[];

  selectedComorbs: number[] = [];
  selectedNeeds: number[] = [];

  selectedComorbsAux: number[] = [];
  selectedNeedsAux: number[] = [];

  valorPorcent: number;
  valorPorcentOut: number;

  ngOnInit() {
    // this.id = this.route.snapshot.params.id;
    // this.surgeryService.getSurgery(this.id).subscribe(response => {
    //   console.log(response);
    //   this.surgery = response;
    //   this.objCustos = response.cost;
    //   this.duracao = response.hours_duration;
    //   this.duracao += ':';
    //   this.duracao += response.minutes_duration;

    //   this.verdadeiraDuracao = response.true_hours_duration;
    //   this.verdadeiraDuracao += ':';
    //   this.verdadeiraDuracao += response.true_minutes_duration;
    //   console.log(this.objCustos);
    //   if(this.surgery.complicated){
    //     this.aditional = 20;
    //   }else{
    //     this.aditional = 0;
    //   }
    //   this.porcentagem = response.percentage;
    // })
    this.init();
  }

  
  public async init() {
    this.id = this.route.snapshot.params.id;
    this.surgeryService.getSurgery(this.id).subscribe(response => {
      console.log(response);
      this.surgery = response;
      if(response.discount){
        this.porcentagem = (response.percentage * -1);
      }else{
        this.porcentagem = (response.percentage);
      }
      this.objCustos = this.surgery.cost;
      this.duracao = this.surgery.hours_duration;
      this.duracao += ':';
      this.duracao += this.surgery.minutes_duration;

      this.verdadeiraDuracao = this.surgery.true_hours_duration;
      this.verdadeiraDuracao += ':';
      this.verdadeiraDuracao += this.surgery.true_minutes_duration;
      console.log(this.objCustos);
      if(this.surgery.complicated){
        this.aditional = 20;
      }else{
        this.aditional = 0;
      }
      this.porcentagem = this.surgery.percentage;
    if (this.surgery.complicated) {
      this.complexidade = 'true';
      this.aditional = 20;
    } else { 
      this.complexidade = 'false';
      this.aditional = 0;
    }
    })
    this.surgery = this.route.snapshot.data.surgeryResolved;
    [this.listNeeds, this.listComorb] = await Promise.all([
      this.otherService.getAllAccommodations().toPromise(),
      this.otherService.getAllComorbidities().toPromise()
    ]);
    
      
    this.atribuiSelecteds();
  }

  atribuiSelecteds() {
 
    this.selectedComorbs = undefined;
    this.selectedNeeds = undefined;
    
  
    setTimeout(() => {
      this.selectedComorbs = this.surgery.comorbidities;
      this.selectedNeeds = this.surgery.accommodations;
    }, 1);

  }



}
