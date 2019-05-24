import { Component, OnInit } from '@angular/core';



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


@Component({
  selector: 'app-tuss-table',
  templateUrl: './tuss-table.component.html',
  styleUrls: ['./tuss-table.component.css']
})
export class TussTableComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name'];
  dataSource = ELEMENT_DATA;
  
  constructor() { }

  ngOnInit() {
  }

}
