import { Component, OnInit } from '@angular/core';
import { HospitalService } from '../../services/hospital-services/hospital.service';
import { Router } from '@angular/router';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: string;
  symbol: string;
}


const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Casa de Saúde São José', weight: 'casadesaudesaojose@contato.com', symbol: '+55 (21) 23456789'},
  {position: 2, name: 'Casa de Saúde São José', weight: 'casadesaudesaojose@contato.com', symbol: '+55 (21) 23456789'},
  {position: 3, name: 'Casa de Saúde São José', weight: 'casadesaudesaojose@contato.com', symbol: '+55 (21) 23456789'},
  {position: 4, name: 'Casa de Saúde São José', weight: 'casadesaudesaojose@contato.com', symbol: '+55 (21) 23456789'},
  {position: 5, name: 'Casa de Saúde São José', weight: 'casadesaudesaojose@contato.com', symbol: '+55 (21) 23456789'},
  {position: 6, name: 'Casa de Saúde São José', weight: 'casadesaudesaojose@contato.com', symbol: '+55 (21) 23456789'},
  {position: 7, name: 'Casa de Saúde São José', weight: 'casadesaudesaojose@contato.com', symbol: '+55 (21) 23456789'},
  {position: 8, name: 'Casa de Saúde São José', weight: 'casadesaudesaojose@contato.com', symbol: '+55 (21) 23456789'},
  {position: 9, name: 'Casa de Saúde São José', weight: 'casadesaudesaojose@contato.com', symbol: '+55 (21) 23456789'},
  {position: 10, name: 'Casa de Saúde São José', weight: 'casadesaudesaojose@contato.com', symbol: '+55 (21) 23456789'},
];

@Component({
  selector: 'app-all-hospitals',
  templateUrl: './all-hospitals.component.html',
  styleUrls: ['./all-hospitals.component.css']
})

export class AllHospitalsComponent implements OnInit {
  displayedColumns: string[] = ['name', 'tel', 'email', 'details'];
  dataSource = ELEMENT_DATA;

  constructor(private hospitalService : HospitalService, private router: Router) { }

  hospitals: Hospital[] = [];

  ngOnInit() {
    this.hospitalService.getHospitals().subscribe(response => {
      console.log(response);
      this.hospitals = response;
    })
    
  }
  mostraId(id){
    //console.log(id);
    this.router.navigateByUrl(`admin/main/hospitalDetails/${id}`);
  }

}
