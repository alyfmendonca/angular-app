import { Component, OnInit } from '@angular/core';


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Casa de Saúde São José', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Casa de Saúde São José', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Casa de Saúde São José', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Casa de Saúde São José', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Casa de Saúde São José', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Casa de Saúde São José', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Casa de Saúde São José', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Casa de Saúde São José', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Casa de Saúde São José', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Casa de Saúde São José', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-all-hospitals',
  templateUrl: './all-hospitals.component.html',
  styleUrls: ['./all-hospitals.component.css']
})

export class AllHospitalsComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;

  constructor() { }
  
  ngOnInit() {
  }

}
