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

    //Inclui hospital

    let putHospital = {
      id: this.hospitalDetails.id,
      name: this.hospitalDetails.name,
      email: this.hospitalDetails.email,
      address:this.hospitalDetails.address,
      phone: this.hospitalDetails.phone,
      cep: this.hospitalDetails.cep,
    }

    this.hopitalService.putHospital(putHospital).subscribe((res) => {
      alert('Hospital alterado com sucesso!');
    });

      this.listCostGroup.forEach(cg => {
        let tussGc = '[';

        cg.tuss.forEach(tuss => {
          tussGc += tuss.id + ','
        });

        tussGc = tussGc.substr(0, tussGc.length - 1)

        tussGc += ']';

        let costGroupItem : CostGroupItem = {
          hospital_id: this.hospitalDetails.id,
          name: cg.name,
          surgery_tax: Number.parseFloat(cg.surgery_tax),
          additional_tax: Number.parseFloat(cg.additional_tax),
          anesthesia_tax: Number.parseFloat(cg.anesthesia_tax),
          material_tax: Number.parseFloat(cg.material_tax),
          clinical_fee: Number.parseFloat(cg.clinical_schedule),
          Semi_intensiva: Number.parseFloat(cg.Semi_intensiva),
          CTI: Number.parseFloat(cg.CTI),
          Andar: Number.parseFloat(cg.Andar),
          Day_Clinic: Number.parseFloat(cg.Day_Clinic),
          tuss: tussGc
        };

        this.adminService.addNewCostGroup(costGroupItem).subscribe((res) => {
          //console.log('grupo de custo alterado' + res)
        }, (err) => {
          alert('Erro ao alterar grupo de custo, contate um administrador.')
        })

      });

      this.router.navigateByUrl('admin/main/allHospitals');

  }

  selectedGC: any = '1';

  incluirTuss(){
    if(this.selectedGC == '1'){
      alert('Selecione o grupo de custo');
      return;
    }
    this.newTuss = false;
    this.adminService.addNewCostGroup
    this.allTuss.push(this.selectedTuss.id);

    this.selectedGC.tuss.push(this.selectedTuss);
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
