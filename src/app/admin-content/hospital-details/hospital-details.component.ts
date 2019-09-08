import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HospitalService } from '../../services/hospital-services/hospital.service';
import { OtherService } from '../../services/other-services/other.service'
import { map, startWith } from 'rxjs/operators';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-hospital-details',
  templateUrl: './hospital-details.component.html',
  styleUrls: ['./hospital-details.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HospitalDetailsComponent implements OnInit {

  constructor(public router: Router, 
    private route: ActivatedRoute, 
    public hopitalService: HospitalService,
    public otherServices: OtherService,
    ) { }
  isLinear = false;
  
  id: string;
  hospitalDetails: HospitalById;
  allTuss: number[] = [];
  atualCostGroup: CostGroup;
  listProcedimentos: Tuss[] = [];
  selectedOptions: number[] = [];
  telMask = '';

  ngOnInit() {
    this.route.params.subscribe( parametros => {
        this.id = parametros.id;
    });
    this.hopitalService.getHospital(this.id).subscribe(response => {
      this.hospitalDetails = response;
      this.atualCostGroup = response.cost_groups[0];
      if(response.phone.length == 11){
        this.telMask = '(00) 00000-0000';
      }else{
        this.telMask = '(00) 0000-0000';
      }
      response.all_tuss.forEach(element => {
        this.allTuss.push(element.id);
      });
      console.log(this.allTuss);
    });
    this.otherServices.getAllTuss().subscribe(
      tuss => {
        this.listProcedimentos = tuss;
        this.selectedOptions = this.allTuss;
        
      }
    );
    this.filteredTuss = this.tussControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  }

  private _filter(value: string): Tuss[] {
    const filterValue = value.toLowerCase();

    return this.listProcedimentos.filter((tuss) => {
      return (tuss.str.toLowerCase().includes(filterValue) || this.selectedOptions.find(id => tuss.id == id))
    });
  }

  tussControl = new FormControl();
  filteredTuss: Observable<Tuss[]>;

  changeCost(cost: CostGroup){
    console.log(cost);
    this.atualCostGroup = cost;
  }
  validaOnlyOne(event, id){
    if(this.allTuss.find((valor) => {
      return valor == id;
    })){
      //Não deixa clicar no que já veio clicado
      event.target.click();
    }
  }

  alteraHospital(){

  }

}
