import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aprovadas-solicitadas',
  templateUrl: './aprovadas-solicitadas.component.html',
  styleUrls: ['./aprovadas-solicitadas.component.css']
})
export class AprovadasSolicitadasComponent implements OnInit {

  constructor(public router: Router) { }
  
  text = "Baixa Complexidade";
  text2 = "Baixa Complessxidade";
  ngOnInit() {
  }

}
