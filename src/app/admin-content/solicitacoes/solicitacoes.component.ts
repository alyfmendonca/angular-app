import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-solicitacoes',
  templateUrl: './solicitacoes.component.html',
  styleUrls: ['./solicitacoes.component.css']
})
export class SolicitacoesComponent implements OnInit {

  constructor(public router: Router) { }

  text = "Baixa Complexidade";
  text2 = "Baix222a Complexidade";

  
  ngOnInit() {
  }


}
