import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aprovadas',
  templateUrl: './aprovadas.component.html',
  styleUrls: ['./aprovadas.component.css']
})
export class AprovadasComponent implements OnInit {

  constructor(public router: Router) { }

  text = "Baixa Complexidade";
  text2 = "a";
  
  ngOnInit() {
  }

}
