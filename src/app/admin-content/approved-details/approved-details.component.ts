import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SurgeryService } from '../../services/surgery-services/surgery.service';

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

  performSurgery: SurgeryPerform = {
    id: null,
    true_duration: '',
    note: ''
  };
  transfRealiz(){
    if(this.trueDuration == ""){
      alert('Informe a duração da cirurgia');
    }else{
      this.performSurgery.id = this.surgery.id;
      this.performSurgery.note = this.finalNote;
      this.performSurgery.true_duration = this.trueDuration;
      this.surgeryService.performSurgery(this.performSurgery).subscribe(response => {
        console.log(response);
        this.router.navigate(['/admin/main/aprovadas']);
      }, err => {
        console.log(err.error.message);
      })
    }
  }

  
  
}
