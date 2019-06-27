import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-realizadas',
  templateUrl: './realizadas.component.html',
  styleUrls: ['./realizadas.component.css']
})
export class RealizadasComponent implements OnInit {

  constructor(public router: Router) { }
  text = "Baixa Complexidade";
  text2 = "Baixaaaa Complexidade";
  ngOnInit() {
  }

}
