import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SurgeryService } from '../../services/surgery-services/surgery.service';
import { OtherService } from 'src/app/services/other-services/other.service';

@Component({
  selector: 'app-approved-details',
  templateUrl: './approved-details.component.html',
  styleUrls: ['./approved-details.component.css']
})
export class ApprovedDetailsComponent implements OnInit {

  constructor(
    public router: Router,
    public route: ActivatedRoute,
    public surgeryService: SurgeryService,
    private otherService: OtherService,
  ) { }
  trueDuration: string;
  finalNote: string = '';
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
  duracao: string;
  id: string;
  surgery: Surgery = {
    id:null,
      status: '',
      complicated: null,
      hours_duration: null,
      minutes_duration: null,
      true_hours_duration: null,
      true_minutes_duration: null,
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
      cost: null,
  };
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
  listComorb: Comorbiditie[] = [];
  listNeeds: Accommodation[] = [];
  selectedComorbs: number[] = [];
  selectedNeeds: number[] = [];

  porcentagem: any;
  valueBar: any;
  ngOnInit() {
    
    this.init();
  }

  public async init() {
    this.id = this.route.snapshot.params.id;
    this.surgeryService.getSurgery(this.id).subscribe(response => {
      console.log(response);
      if(response.discount){
        this.porcentagem = (response.percentage * -1);
      }else{
        this.porcentagem = (response.percentage);
      }
      this.surgery = response;
      this.objCustos = response.cost;
      console.log(this.objCustos);
      if(this.surgery.complicated){
        this.aditional = 20;
      }else{
        this.aditional = 0;
      }
      this.duracao = this.surgery.hours_duration;
      this.duracao += ':';
      this.duracao += this.surgery.minutes_duration;
      
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

    // this.duracao = this.surgery.hours_duration;
    // this.duracao += ':';
    // this.duracao += this.surgery.minutes_duration;
    
    setTimeout(() => {
      this.selectedComorbs = this.surgery.comorbidities;
      console.log(this.selectedComorbs);
      this.selectedNeeds = this.surgery.accommodations;
    }, 1);

  }

  performSurgery: SurgeryPerform = {
    id: null,
    true_hours_duration: '',
    note: '',
    true_minutes_duration: '',
  };
  transfRealiz(){
    if(this.trueDuration == ""){
      alert('Informe a duração da cirurgia');
    }else{
      let aux = this.trueDuration.split(':');
      this.performSurgery.true_hours_duration = aux[0];
      this.performSurgery.true_minutes_duration = aux[1];
      this.performSurgery.id = this.surgery.id;
      this.performSurgery.note = this.finalNote;
      this.surgeryService.performSurgery(this.performSurgery).subscribe(response => {
        console.log(response);
        this.router.navigate(['/admin/main/aprovadas']);
      }, err => {
        console.log(err.error.message);
      })
    }
  }

  
  
}
