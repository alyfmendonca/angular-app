import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SurgeryService } from '../../services/surgery-services/surgery.service';
import { HospitalService } from '../../services/hospital-services/hospital.service';
import { OtherService } from 'src/app/services/other-services/other.service';

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
    private otherService: OtherService,
    private hospitalService: HospitalService,
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
    complexidade: string;
    surgery: Surgery = {
      id:null,
      status: '',
      complicated: null,
      hours_duration: null,
      minutes_duration: null,
      true_hours_duration: null,
      true_minutes_duration: null,
      percentage: null,
      explanation: '',
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
      costs_options: null,
      cid: {
          id: null,
          str: ''
      }
    };
    valorTotal: any;
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

    

    duracao: string;

    listComorb: Comorbiditie[] = [];
    listNeeds: Accommodation[] = [];

    selectedTuss: number[];

    selectedComorbs: number[] = [];
    selectedNeeds: number[] = [];

    selectedComorbsAux: number[] = [];
    selectedNeedsAux: number[] = [];

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
    // onChange(evento: any){
    //   if(evento.checked){
    //     this.texto = 'Acréscimo';
    //     this.desconto = false;
        
    //   }else{
    //     this.texto = 'Desconto';
    //     this.desconto = true;
    //   }
    //   if(this.desconto){
    //     this.valorTotal = this.objCustos.surgery_cost - (this.objCustos.surgery_cost * this.surgeryAprove.percentage / 100);
    //   }else{
    //     this.valorTotal = this.objCustos.surgery_cost + (this.objCustos.surgery_cost * this.surgeryAprove.percentage / 100);
    //   }
    //   console.log(this.desconto);
    // }
    
    onClickNext(custos: any){
      this.objCustos = custos;
      this.valorTotal = custos.surgery_cost;
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
        this.router.navigate(['/admin/main/solicitacoes']);

      }, err => {
        console.log(err);
      })
      

    }

    onChangeBar(event: any){
      console.log(event.value);
      if(event.value > 0){    
        this.desconto = false;
        this.valorTotal = this.objCustos.surgery_cost + (this.objCustos.surgery_cost * event.value / 100);
        this.surgeryAprove.percentage = (event.value);
      }
      if(event.value < 0){
        this.desconto = true;
        this.valorTotal = this.objCustos.surgery_cost - (this.objCustos.surgery_cost * (event.value * -1) / 100);
        this.surgeryAprove.percentage = (event.value * -1);
      }
      
    }
    ngOnInit() {
      // this.id = this.route.snapshot.params.id;
      // this.surgeryService.getSurgery(this.id).subscribe((response) => {
      //   console.log(response);
      //   this.surgery = response;
      //   this.duracao = response.hours_duration;
      //   this.duracao += ':';
      //   this.duracao += response.minutes_duration;
      // })
      // if(this.surgery.complicated){
      //   this.aditional = 20;
      // }else{
      //   this.aditional = 0;
      // }
      this.init();
      
    }

    public async init() {

      
      this.surgery = this.route.snapshot.data.surgeryResolved;
      [this.listNeeds, this.listComorb] = await Promise.all([
        this.otherService.getAllAccommodations().toPromise(),
        this.otherService.getAllComorbidities().toPromise()
      ]);
      this.atribuiSelecteds();
      
      if (this.surgery.complicated) {
        this.complexidade = 'true';
        this.aditional = 20;
      } else { 
        this.complexidade = 'false';
        this.aditional = 0;
      }

      
      console.log(this.surgery.costs_options)
    }
  
    atribuiSelecteds() {
   
      this.selectedComorbs = undefined;
      this.selectedNeeds = undefined;
  
      this.duracao = this.surgery.hours_duration;
      this.duracao += ':';
      this.duracao += this.surgery.minutes_duration;
      
    
      setTimeout(() => {
        this.selectedComorbs = this.surgery.comorbidities;
        this.selectedNeeds = this.surgery.accommodations;
      }, 1);
  
    }
  
    validaOnlyOne(event){
      if(this.selectedTuss.length == 0){
        alert('Deve haver ao menos um selecionado.');
        event.target.click()
        return;
      }
    }
  
    btnSalvar(){
      if(this.surgery.patient['name'] == ''){
        alert('Digite o nome do paciente');
        return;
      }else if(this.surgery.patient['cpf'].toString() == ''){
        alert('Digite o cpf do paciente');
        return;
      }else if(this.surgery.patient['birth_date'] == ''){
        alert('Digite a data de nascimento do paciente');
        return;
      }else if(this.duracao == '00:00'){
        alert('Coloque uma duração válida');
        return;
      }
       
      let aux = this.duracao.split(':');
      
      console.log('comorb [' + this.selectedComorbs.toString() + ']');
      console.log('need [' + this.selectedNeeds.toString() + ']');
  
      var nome: string = this.surgery.patient['name'];
      var cpfVar:string = this.surgery.patient['cpf'].toString();
      var birth_dateVar: string = this.surgery.patient['birth_date'];
  
      var surgeryUpdate : SurgeryUpdate = {
        id: this.surgery.id,
        complicated: this.complexidade == 'true' ? true : false,
        hours_duration:aux[0],
        minutes_duration:aux[1],
        name: nome,
        cpf: cpfVar,
        birth_date: birth_dateVar,
        comorbidities:'[' + this.selectedComorbs.toString() + ']',
        accommodations:'[' + this.selectedNeeds.toString() + ']',
      }
  
      console.log(surgeryUpdate);
  
       this.surgeryService.updateSurgery(surgeryUpdate).subscribe(
         (res) => {
           this.selectedComorbs = null;
           this.selectedComorbsAux = null;
           this.selectedNeeds = null;
           this.selectedNeedsAux = null;
           this.selectedTuss = null;
           this.router.navigate(['/admin/main/solicitacoes']);
         }, (err) => {
         alert(err.error.message);
       });
    }
}
