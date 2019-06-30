import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { OtherService } from 'src/app/services/other-services/other.service';

@Component({
  selector: 'app-new-surgeon',
  templateUrl: './new-surgeon.component.html',
  styleUrls: ['./new-surgeon.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewSurgeonComponent implements OnInit {

  constructor(public router: Router,
              private route: ActivatedRoute) { }
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
    this.listProcedimentos = this.route.snapshot.data.allTuss;
  } 

  listProcedimentos: Tuss[] = []; 

  selectedTuss: number[] = []; 
  
  concluir(){

  }

}
