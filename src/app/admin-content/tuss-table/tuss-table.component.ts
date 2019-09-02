import { Component, OnInit } from '@angular/core';
import { OtherService } from '../../services/other-services/other.service'
import { ActivatedRoute } from '@angular/router';
import { FormControl } from '@angular/forms';
import { startWith, map } from 'rxjs/operators';
import { Observable } from 'rxjs';



export interface PeriodicElement {
  name: string;
  position: number;
  weight: string;
  symbol: string;
}

export interface HospitalAssociado {
  name: string;
}

export interface SurgeonAssociado {
  name: string;
}


@Component({
  selector: 'app-tuss-table',
  templateUrl: './tuss-table.component.html',
  styleUrls: ['./tuss-table.component.css']
})
export class TussTableComponent implements OnInit {
  displayedColumns: string[] = ['procedimento'];

  hospitals: any;
  surgeons: any[];

  tussTable: Tuss[] = [];
  
  constructor(public tussService: OtherService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.tussTable = this.route.snapshot.data.allTuss;

    this.filteredTuss = this.tussControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  }
  
  filteredTuss: Observable<Tuss[]>;
  tussControl = new FormControl();

  private _filter(value: string): Tuss[] {
    const filterValue = value.toLowerCase();

    return this.tussTable.filter(tuss => tuss.str.toLowerCase().includes(filterValue));
  }

  chamaAssociados(id){
    this.tussService.getTuss(id).subscribe(response => {
      this.hospitals = response.hospitals;
      this.surgeons = response.surgeons;
      console.log(id);
      console.log(this.hospitals);
      console.log(this.surgeons);
    })
  }

  searchTuss(){
    
  }
}
