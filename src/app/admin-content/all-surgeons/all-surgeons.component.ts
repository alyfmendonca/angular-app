import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: string;
  symbol: string;
  crm: string;
  uf: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Luciano Costa de Freitas', weight: 'lucianoantunes@gmail.com', symbol: '+55 (21) 23456789', crm: '12345', uf: 'RJ'},
  {position: 2, name: 'Luciano Costa de Freitas', weight: 'lucianoantunes@gmail.com', symbol: '+55 (21) 23456789', crm: '12345', uf: 'RJ'},
  {position: 3, name: 'Luciano Costa de Freitas', weight: 'lucianoantunes@gmail.com', symbol: '+55 (21) 23456789', crm: '12345', uf: 'RJ'},
  {position: 4, name: 'Luciano Costa de Freitas', weight: 'lucianoantunes@gmail.com', symbol: '+55 (21) 23456789', crm: '12345', uf: 'RJ'},
  {position: 5, name: 'Luciano Costa de Freitas', weight: 'lucianoantunes@gmail.com', symbol: '+55 (21) 23456789', crm: '12345', uf: 'RJ'},
  {position: 6, name: 'Luciano Costa de Freitas', weight: 'lucianoantunes@gmail.com', symbol: '+55 (21) 23456789', crm: '12345', uf: 'RJ'},
  {position: 7, name: 'Luciano Costa de Freitas', weight: 'lucianoantunes@gmail.com', symbol: '+55 (21) 23456789', crm: '12345', uf: 'RJ'},
  {position: 8, name: 'Luciano Costa de Freitas', weight: 'lucianoantunes@gmail.com', symbol: '+55 (21) 23456789', crm: '12345', uf: 'RJ'},
  {position: 9, name: 'Luciano Costa de Freitas', weight: 'lucianoantunes@gmail.com', symbol: '+55 (21) 23456789', crm: '12345', uf: 'RJ'},
  {position: 10, name: 'Luciano Costa de Freitas', weight: 'lucianoantunes@gmail.com', symbol: '+55 (21) 23456789', crm: '12345', uf: 'RJ'},
];

@Component({
  selector: 'app-all-surgeons',
  templateUrl: './all-surgeons.component.html',
  styleUrls: ['./all-surgeons.component.css']
})
export class AllSurgeonsComponent implements OnInit {
  displayedColumns: string[] = ['position', 'crm', 'uf', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit() {
  }
  mostraId(id){
    console.log(id);
  }

}
