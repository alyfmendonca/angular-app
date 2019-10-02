import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SurgeonService } from 'src/app/services/surgeon-services/surgeon.service';
import { OtherService } from 'src/app/services/other-services/other.service';

@Component({
  selector: 'app-surgeon-details',
  templateUrl: './surgeon-details.component.html',
  styleUrls: ['./surgeon-details.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SurgeonDetailsComponent implements OnInit {

  constructor(public router: Router,
              private route: ActivatedRoute,
              private surgeonService: SurgeonService) { }


  id: number;

  surgeonChoosed: SurgeonById;
  ngOnInit() {
    this.listProcedimentos = this.route.snapshot.data.allTuss;
    this.id = this.route.snapshot.params.id;

    this.surgeonService.getSurgeon(this.id).subscribe((surgeon) => {
      this.surgeonChoosed = surgeon;
      this.selectedTuss = this.tuss;

      this.crm = this.surgeonChoosed.crm.toString().slice(0, this.surgeonChoosed.crm.toString().length - 1) + '-' + this.surgeonChoosed.crm.toString().slice(this.surgeonChoosed.crm.toString().length - 1);
      if(this.surgeonChoosed.phone.length < 11){
        this.mascaraPhone = '(00)0000-0*'
      }else{
        this.mascaraPhone = '(00)00000-0*'
      }

      this.surgeonChoosed.tuss.forEach(tuss => {
        this.tuss.push(tuss.id);
      });
    });
    
    
  }
  
  listProcedimentos: Tuss[] = []; 

  selectedTuss: number[] = []; 
  
  tuss: number[] = [];

  crm: string = '';
  mascaraPhone = '';

  salvar(){
    if(this.crm.replace('-', '').length < 4){
      alert('CRM deve ter mais de 4 números.');
      return false;
    }
    var surgeonUpdate: SurgeonUpdate = {
      id: this.id,
      phone: this.surgeonChoosed.phone,
      tuss: '[' + this.selectedTuss + ']',
      crm: +this.crm.replace('-', ''),
      uf: this.surgeonChoosed.uf,
      name: this.surgeonChoosed.name,
    }
    this.surgeonService.updateSurgeon(surgeonUpdate).subscribe(res => alert('Cirurgião atualizado!'), (err) => {
      alert('Erro ao atualizar o cirurgião!');
    });
  }

  mascaraCrm(){
    this.crm = this.crm.replace('-', '');
    this.crm = this.crm.slice(0, this.crm.length - 1) + '-' + this.crm.slice(this.crm.length - 1);
  }

  changePhoneMask(){
    if(this.surgeonChoosed.phone.length > 10){
      this.mascaraPhone = '(00)00000-0*';
    }else{
      this.mascaraPhone = '(00)0000-0*';
    }
  }

}
