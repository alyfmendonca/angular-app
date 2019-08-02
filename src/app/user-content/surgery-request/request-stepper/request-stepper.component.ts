import { Component, OnInit, ChangeDetectionStrategy, ViewChild } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { OtherService } from 'src/app/services/other-services/other.service';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { Router, ActivatedRoute } from '@angular/router';
import { SurgeryService } from 'src/app/services/surgery-services/surgery.service';
import { SurgeonService } from 'src/app/services/surgeon-services/surgeon.service';

@Component({
  selector: 'app-request-stepper',
  templateUrl: './request-stepper.component.html', 
  styleUrls: ['./request-stepper.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RequestStepperComponent implements OnInit {
  isLinear = false;

  surgeryCreate: SurgeryCreate = {
    main_tuss: null,
    secondary_tuss: null,
    name: null,
    cpf: null,
    birth_date: null,
    comorbidities: null,
    hours_duration: null,
    minutes_duration: null,
    complicated: null,
    accommodations: null,
    cid: "2",
    date_time: null,
    explanation: null,
    accommodations_days: "[1,2]",
  };

  listProcedimentos: Tuss[] = []; 

  listComorbidades: Comorbiditie[] = [];

  listNecessidades: Accommodation[] = []

  listSelected: Tuss[] = [];

  listComorbSelected: Comorbiditie[] = []; 

  listNeedsSelected: Accommodation[] = []; 

  duracao: string;

  //teste
  selectedTuss: Tuss[]; 

  constructor(private otherServices: OtherService,
              private router: Router,
              private surgeryServices: SurgeryService,
              private route:ActivatedRoute,
              private surgeonService: SurgeonService) {}


  // Variáveis auxiliares para pegar data e hora
  daySurgery: Date;
  hourSurgery: string;
  
  birth_date: Date;
        
  ngOnInit() {

    this.surgeonService.getSurgeon().subscribe(res => this.listProcedimentos = res.tuss);

    this.otherServices.getAllComorbidities().subscribe(
      comorbidities => this.listComorbidades = comorbidities
    );
    
    this.otherServices.getAllAccommodations().subscribe(
      accommodations => this.listNecessidades = accommodations
    );

  }
  selectionComorbClick(comorbidade: Comorbiditie){
    if(this.listComorbSelected.find(function(item:Comorbiditie){
      return item.id == comorbidade.id;
    })){
      this.listComorbSelected = this.listComorbSelected.filter(function(item){
        return  item.id != comorbidade.id
      });
    }else{
      this.listComorbSelected.push(comorbidade);
    }
  }
  teste90: any;
  chama(teste){
      var reader = new FileReader();

      reader.readAsDataURL(teste.target.files[0]);

      reader.onload = (event) => {
        console.log(event);
        this.teste90 = event.target;  
        console.log(this.teste90.result);
        this.teste90 = this.teste90.result;
      }
      
  
  }
  noComorbi = false;
  testedis= "string";
  noSelectionComorbClick(valida){
    this.listComorbSelected = [];
    console.log(valida);
    console.log(this.testedis);
    this.noComorbi = true;
  }
  teste_necessidades = true;

  selectionNeedsClick(accommodations: Accommodation){
    if(this.listNeedsSelected.find(function(item:Comorbiditie){
      document.getElementById(`teste-${item.id}`);
      console.log(`teste-${item.id}`);
      return item.id == accommodations.id;
    })){
      this.listNeedsSelected = this.listNeedsSelected.filter(function(item){
        return  item.id != accommodations.id
      });
    }else{
      this.listNeedsSelected.push(accommodations);
    }
  }

  finalizar(){
    console.log(this.surgeryCreate.accommodations);
    var dia  = this.birth_date.getDate().toString().padStart(2, '0'),
    mes  = (this.birth_date.getMonth()+1).toString().padStart(2, '0'), //+1 pois no getMonth Janeiro começa com zero.
    ano  = this.birth_date.getFullYear();
    this.surgeryCreate.birth_date =  ano+"-"+mes+"-"+dia;

    var dia  = this.daySurgery.getDate().toString().padStart(2, '0'),
    mes  = (this.daySurgery.getMonth()+1).toString().padStart(2, '0'), //+1 pois no getMonth Janeiro começa com zero.
    ano  = this.daySurgery.getFullYear();
    this.surgeryCreate.date_time =  ano+"-"+mes+"-"+dia+ " " + this.hourSurgery;
    
    
    if(!(this.selectedTuss.length > 0)){
      alert('Seleciona ao menos um Tuss');
      return;
    }else if(!this.surgeryCreate.name){
      alert('Informe o nome do paciente');
      return;
    }else if(!this.surgeryCreate.cpf){
      alert('Informe o cpf do paciente');
      return;
    }else if(!this.surgeryCreate.birth_date){
      alert('Informe uma data de nascimento do paciente');
      return;
    }else if(!this.duracao){
      alert('Informe a duração da cirurgia');
      return;
    }else if(!this.surgeryCreate.complicated){
      alert('Informe a complexidade da cirurgia');
      return;
    }else{
      
        this.surgeryCreate.main_tuss = this.selectedTuss.shift().id;

        let aux = this.duracao.split(':');
        this.surgeryCreate.hours_duration = aux[0];
        this.surgeryCreate.minutes_duration = aux[1];


        this.surgeryCreate.secondary_tuss = '[';
        this.selectedTuss.forEach(tuss => {
          this.surgeryCreate.secondary_tuss += tuss.id + ',';
        });
        if(this.surgeryCreate.secondary_tuss.length > 1){
          this.surgeryCreate.secondary_tuss = this.surgeryCreate.secondary_tuss.slice(0, this.surgeryCreate.secondary_tuss.length - 1);
        }
        this.surgeryCreate.secondary_tuss += ']';


        this.surgeryCreate.comorbidities = '[';
        this.listComorbSelected.forEach(comorb => {
          this.surgeryCreate.comorbidities += comorb.id + ',';
        });
        if(this.surgeryCreate.comorbidities.length > 1){
          this.surgeryCreate.comorbidities = this.surgeryCreate.comorbidities.slice(0, this.surgeryCreate.comorbidities.length - 1);
        }
        this.surgeryCreate.comorbidities += ']';


        this.surgeryCreate.accommodations = '[';
        this.listNeedsSelected.forEach(need => {
          this.surgeryCreate.accommodations += need.id + ',' ;
        });
        if(this.surgeryCreate.accommodations.length > 1){
          this.surgeryCreate.accommodations = this.surgeryCreate.accommodations.slice(0, this.surgeryCreate.accommodations.length - 1);
        }
        this.surgeryCreate.accommodations += ']';
        console.log(this.surgeryCreate.accommodations);
        console.log(JSON.stringify(this.surgeryCreate));
  
        var surgery: Surgery;
        this.surgeryServices.createSurgery(this.surgeryCreate).subscribe(
          res => this.router.navigate(['/user/main/request-confirmation']), (err) => {
            alert(err.error.message);
            console.log(err.error.message);
            this.selectedTuss = []; 
          }
        );

    }
  }

}

