import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HospitalService } from '../../services/hospital-services/hospital.service';
import { OtherService } from '../../services/other-services/other.service'

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
  listProcedimentosMock: Tuss[] = [];
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
        this.listProcedimentosMock = tuss;
        this.selectedOptions = this.allTuss;
        
      }
    );
    
  }
  onNgModelChange(event){
    console.log(event);
    console.log(this.selectedOptions);
  }
  changeCost(cost: CostGroup){
    console.log(cost);
    this.atualCostGroup = cost;
  }
  validaOnlyOne(event){
    // if(this.selectedTuss.length == 0){
    //   alert('Deve haver ao menos um selecionado.');
    //   event.target.click()
    //   return;
    // }
    console.log(event);
  }
  
  
 


}
