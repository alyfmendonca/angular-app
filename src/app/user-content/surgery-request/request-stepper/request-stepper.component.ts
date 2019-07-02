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
    duration: null,
    complicated: null,
    accommodations: null,
  };

  listProcedimentos: Tuss[] = []; 

  listComorbidades: Comorbiditie[] = [];

  listNecessidades: Accommodation[] = []

  listSelected: Tuss[] = [];

  listComorbSelected: Comorbiditie[] = []; 

  listNeedsSelected: Accommodation[] = []; 

  //teste
  selectedTuss: Tuss[]; 

  constructor(private otherServices: OtherService,
              private router: Router,
              private surgeryServices: SurgeryService,
              private route:ActivatedRoute,
              private surgeonService: SurgeonService) {}

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

  selectionNeedsClick(accommodations: Accommodation){
    if(this.listNeedsSelected.find(function(item:Comorbiditie){
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
    }else if(!this.surgeryCreate.duration){
      alert('Informe a duração da cirurgia');
      return;
    }else if(!this.surgeryCreate.complicated){
      alert('Informe a complexidade da cirurgia');
      return;
    }else{
      
        this.surgeryCreate.main_tuss = this.selectedTuss.shift().id;


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

        console.log(JSON.stringify(this.surgeryCreate));
  
        var surgery: Surgery;
        this.surgeryServices.createSurgery(this.surgeryCreate).subscribe(
          res => this.router.navigate(['/user/main/request-confirmation']), (err) => {
            alert(err.error.message);
            this.selectedTuss = []; 
          }
        );

    }
  }

}

