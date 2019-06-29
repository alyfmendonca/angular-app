import { Component, OnInit } from '@angular/core';
import { OtherService } from '../../services/other-services/other.service'



export interface PeriodicElement {
  name: string;
  position: number;
  weight: string;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: '31005489', weight: 'Colecistectomia com fistula biliodigestiva', symbol: 'Colecistectomia com fistula biliodigestiva'},
  {position: 2, name: '31005489', weight: 'Colecistectomia com fistula biliodigestiva', symbol: 'Colecistectomia com fistula biliodigestiva'},
  {position: 3, name: '31005489', weight: 'Colecistectomia com fistula biliodigestiva', symbol: 'Colecistectomia com fistula biliodigestiva'},
  {position: 4, name: '31005489', weight: 'Colecistectomia com fistula biliodigestiva', symbol: 'Colecistectomia com fistula biliodigestiva'},
  {position: 5, name: '31005489', weight: 'Colecistectomia com fistula biliodigestiva', symbol: 'Colecistectomia com fistula biliodigestiva'},
  {position: 6, name: '31005489', weight: 'Colecistectomia com fistula biliodigestiva', symbol: 'Colecistectomia com fistula biliodigestiva'},
  {position: 7, name: '31005489', weight: 'Colecistectomia com fistula biliodigestiva', symbol: 'Colecistectomia com fistula biliodigestiva'},
  {position: 8, name: '31005489', weight: 'Colecistectomia com fistula biliodigestiva', symbol: 'Colecistectomia com fistula biliodigestiva'},
  {position: 9, name: '31005489', weight: 'Colecistectomia com fistula biliodigestiva', symbol: 'Colecistectomia com fistula biliodigestiva'},
  {position: 10, name: '31005489', weight: 'Colecistectomia com fistula biliodigestiva', symbol: 'Colecistectomia com fistula biliodigestiva'},
];

export interface HospitalAssociado {
  name: string;
}

const ELEMENT_DATA2: HospitalAssociado[] = [
  {name: 'Casa de Saúde São José'},
  {name: 'Casa de Saúde São José'},
  {name: 'Casa de Saúde São José'},
  {name: 'Casa de Saúde São José'},
];

export interface SurgeonAssociado {
  name: string;
}

const ELEMENT_DATA3: SurgeonAssociado[] = [
  {name: 'Casa de Saúde São José'},
  {name: 'Casa de Saúde São José'},
];



@Component({
  selector: 'app-tuss-table',
  templateUrl: './tuss-table.component.html',
  styleUrls: ['./tuss-table.component.css']
})
export class TussTableComponent implements OnInit {
  displayedColumns: string[] = ['procedimento'];
  dataSource = ELEMENT_DATA;

  hospitals: any;
  surgeons: any;

  tussTable: Tuss[] = [];
  
  constructor(public tussService: OtherService) { }

  ngOnInit() {
    this.tussService.getAllTuss().subscribe(response => {
      this.tussTable = response;
    })
  }
  chamaAssociados(id){
    this.hospitals = ELEMENT_DATA2;
    this.surgeons = ELEMENT_DATA3;
  }
}
