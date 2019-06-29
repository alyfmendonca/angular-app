import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { OtherService } from 'src/app/services/other-services/other.service';

@Component({
  selector: 'app-request-stepper',
  templateUrl: './request-stepper.component.html', 
  styleUrls: ['./request-stepper.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RequestStepperComponent implements OnInit {
  isLinear = false;
  txtNome:string = "";
  txtCpf:string = "";
  dtNasc:string = "";
  txtDur:string = "";

  altaComplex:boolean = false;
  baixaComplex:boolean = false;

  listProcedimentosMock: Tuss[] = []; 

  listComorbidadesMock: Comorbiditie[] = [];

  listNecessidadesMock: Accommodation[] = []

  listSelected: any[] = []; 

  constructor(private _formBuilder: FormBuilder,
              private otherServices: OtherService) {}

  ngOnInit() {

    this.otherServices.getAllComorbidities().subscribe(
      comorbidities => this.listComorbidadesMock = comorbidities
    );
    
    this.otherServices.getAllAccommodations().subscribe(
      accommodations => this.listNecessidadesMock = accommodations
    );

    this.otherServices.getAllTuss().subscribe(
      tuss => this.listProcedimentosMock = tuss
    );

  }

  selectionClick(procedimento: any){
    if(this.listSelected.find(function(item:any){
      return item.id == procedimento.id;
    })){
      this.listSelected = this.listSelected.filter(function(item){
        return  item.id != procedimento.id
      });
    }else{
      this.listSelected.push(procedimento);
    }

  }

}

