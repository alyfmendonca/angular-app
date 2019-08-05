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
  maskCrm = '00-0';
  telMask = '';
  ngOnInit() {
    this.listProcedimentos = this.route.snapshot.data.allTuss;
    this.id = this.route.snapshot.params.id;

    this.surgeonService.getSurgeon(this.id).subscribe((surgeon) => {
      this.surgeonChoosed = surgeon;
      if(surgeon.phone.length == 11){
        this.telMask = '(00) 00000-0000';
      }else{
        this.telMask = '(00) 0000-0000';
      }
      console.log((this.surgeonChoosed.crm.toString()))
      this.maskCrm = '';
      for (let index = 0; index < (this.surgeonChoosed.crm.toString()).length -1; index++) {
        this.maskCrm += '0';
      }
      this.maskCrm += '-0';
      this.selectedTuss = this.tuss;
      this.surgeonChoosed.tuss.forEach(tuss => {
        this.tuss.push(tuss.id);
      });
    });
    
    
  }
  
  listProcedimentos: Tuss[] = []; 

  selectedTuss: number[] = []; 
  
  tuss: number[] = [];

  salvar(){
    var surgeonUpdate: SurgeonUpdate = {
      id: this.id,
      phone: this.surgeonChoosed.phone,
      tuss: '[' + this.selectedTuss + ']',
      crm: this.surgeonChoosed.crm,
      uf: this.surgeonChoosed.uf,
      name: this.surgeonChoosed.name,
    }
    console.log(surgeonUpdate);
    this.surgeonService.updateSurgeon(surgeonUpdate).subscribe(res => alert('Cirurgião atualizado!'), (err) => {
      alert('Erro ao atualizar o cirurgião!');
      console.log(err.error.message);
    });
  }


}
