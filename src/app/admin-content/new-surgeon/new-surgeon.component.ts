import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { OtherService } from 'src/app/services/other-services/other.service';
import { SurgeonService } from 'src/app/services/surgeon-services/surgeon.service';
import { formatDate } from '@angular/common';
import { Md5 } from 'ts-md5';

@Component({
  selector: 'app-new-surgeon',
  templateUrl: './new-surgeon.component.html',
  styleUrls: ['./new-surgeon.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewSurgeonComponent implements OnInit {

  constructor(public router: Router,
              private route: ActivatedRoute,
              private surgeonService: SurgeonService) { }
  isLinear = false;

  surgeonCreate: SurgeonCreate = {
    name: null,
    email: null,
    crm: null,
    phone: null,
    uf: null,
    tuss: null,
    is_admin: false,
  }
  
  ngOnInit() {
    this.listProcedimentos = this.route.snapshot.data.allTuss;
  } 

  listProcedimentos: Tuss[] = []; 

  selectedTuss: number[] = []; 
  
  concluir(){
    if(!this.surgeonCreate.name){
      alert('Digite o nome do cirurgião');
      return
    }else if(!this.surgeonCreate.crm){
      alert('Digite o CRM');
      return
    }else if(!this.surgeonCreate.uf){
      alert('Digite a unidade federativa');
      return
    }else if(!this.surgeonCreate.email){
      alert('Digite o E-mail');
      return
    }else if(!this.surgeonCreate.phone){
      alert('Digite o telefone');
      return
    }else{
      this.surgeonCreate.tuss = "[" + this.selectedTuss + "]";
      let now = new Date();
      this.surgeonCreate.approved_token = Md5.hashStr(formatDate(now, 'dd-MM-yyyy hh:mm:ss.S a', 'en-US', '+0530'));
      this.surgeonService.createSurgeon(this.surgeonCreate).subscribe(res => alert('Cirurgião criado'), err => alert('Erro ao cadastrar cirurgião'));
    }
  }

}
