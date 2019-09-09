import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HospitalService } from '../../services/hospital-services/hospital.service';
import { OtherService } from '../../services/other-services/other.service'
import { map, startWith } from 'rxjs/operators';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { AdminService } from 'src/app/services/admin-services/admin.service';

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
    private adminService: AdminService
    ) { }
  isLinear = false;
  
  id: string;
  hospitalDetails: HospitalById;
  listCostGroup: CostGroup[];
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
      this.listCostGroup = response.cost_groups;
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
  flagClicked: boolean = false;

  changeCost(cost: CostGroup){
    console.log(cost);
    this.atualCostGroup = cost;
  } 
  validaOnlyOne(event, id, tuss){
    if(this.allTuss.find((valor) => {
      return valor == id;
    })){
      //Não deixa clicar no que já veio clicado
      event.target.click();
    }else {
      //Novo tuss
      if(id == this.selectedTuss.id && !this.flagClicked){
        this.selectedTuss = {
          str: '',
          id: 0
        };
        this.newTuss = false;
      }else if(this.newTuss && !this.flagClicked){
        alert(`Favor relacionar a um grupo de custo o Tuss: ${this.selectedTuss.str} `)
        this.flagClicked = true
        event.target.click();
      }else if(this.flagClicked){
        this.flagClicked = false
      }else{
        console.log(tuss)
        this.selectedTuss = tuss;
        this.newTuss = true;
      }
    }
  }

  newTuss: boolean = false;
  selectedTuss: Tuss = {
    str: '',
    id: 0
  };

  alteraHospital(){

  }

  selectedGC: any;

  incluirTuss(){
    console.log(this.selectedGC);
    console.log(this.selectedTuss);
    this.newTuss = false;
    this.adminService.addNewCostGroup
    this.allTuss.push(this.selectedTuss.id);

    this.selectedGC.tuss.push(this.selectedTuss);
    console.log(this.selectedGC);
  }

  bolSalvar: boolean = false;

  newPackageForm(){
    this.atualCostGroup = {
      id: 0,
      name: '',
      surgery_tax: '',
      additional_tax: '',
      anesthesia_tax: '',
      material_tax: '',
      clinical_schedule: '',
      Semi_intensiva: '',
      CTI: '',
      Andar: '',
      Day_Clinic: '',
      tuss: []
    };

    this.bolSalvar = true;
  }

  salvarGc(){
    if(this.atualCostGroup.name == '' || this.atualCostGroup.surgery_tax == '' || this.atualCostGroup.additional_tax == '' || this.atualCostGroup.anesthesia_tax == '' || 
    this.atualCostGroup.material_tax == '' || this.atualCostGroup.clinical_schedule == '' || this.atualCostGroup.Semi_intensiva == '' || this.atualCostGroup.CTI == '' || 
    this.atualCostGroup.Andar == '' || this.atualCostGroup.Day_Clinic == ''){
      alert('preencha todos os campos do Grupo de custo');
    }else{
      // let costGroupItem : CostGroupItem = {
      //   hospital_id: this.hospitalDetails.id,
      //   name: this.atualCostGroup.name,
      //   surgery_tax: Number.parseFloat(this.atualCostGroup.surgery_tax),
      //   additional_tax: Number.parseFloat(this.atualCostGroup.additional_tax),
      //   anesthesia_tax: Number.parseFloat(this.atualCostGroup.anesthesia_tax),
      //   material_tax: Number.parseFloat(this.atualCostGroup.material_tax),
      //   clinical_schedule: Number.parseFloat(this.atualCostGroup.clinical_schedule),
      //   Semi_intensiva: Number.parseFloat(this.atualCostGroup.Semi_intensiva),
      //   CTI: Number.parseFloat(this.atualCostGroup.CTI),
      //   Andar: Number.parseFloat(this.atualCostGroup.Andar),
      //   Day_Clinic: Number.parseFloat(this.atualCostGroup.Day_Clinic),
      //   tuss: '[]'
      // };
      this.atualCostGroup.id = this.hospitalDetails.id;
      this.listCostGroup.push(this.atualCostGroup);

      this.atualCostGroup = {
        id: 0,
        name: '',
        surgery_tax: '',
        additional_tax: '',
        anesthesia_tax: '',
        material_tax: '',
        clinical_schedule: '',
        Semi_intensiva: '',
        CTI: '',
        Andar: '',
        Day_Clinic: '',
        tuss: null
      };
  
      this.bolSalvar = false; 
    }
  }
}
