import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { OtherService } from 'src/app/services/other-services/other.service';

@Component({
  selector: 'app-new-surgeon',
  templateUrl: './new-surgeon.component.html',
  styleUrls: ['./new-surgeon.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewSurgeonComponent implements OnInit {

  constructor(public router: Router,
              private otherService: OtherService) { }
  isLinear = false;
  pacienteNome: String;
  txtCPF: String;
  txtNome: String;
  txtCrm: String;
  txtUf: String;
  durCirurgia: String;
  txtEmail: String;
  txtFone: String;
  
  ngOnInit() {
    this.allTuss();
  }

  async allTuss(){
    await this.otherService.getAllTuss().toPromise().then((resolve) => {
      this.listProcedimentos = resolve;
    });
  }

  listProcedimentos: Tuss[] = []; 

  selectedTuss: number[] = []; 
  
  concluir(){

  }

}
