import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AdminService } from '../../services/admin-services/admin.service'
import { HospitalService } from '../../services/hospital-services/hospital.service';


@Component({
  selector: 'app-new-hospital',
  templateUrl: './new-hospital.component.html',
  styleUrls: ['./new-hospital.component.css']
})
export class NewHospitalComponent implements OnInit {

  constructor(
    public router: Router,
    public route: ActivatedRoute,
    public hospitalService: HospitalService,
    public adminService: AdminService,
    ) { }

    hospital: Hospital = {
    id: null,
    name: '',
    email:'',
    address: '',
    phone: '',
    cep: null,
    creation_date: '',
    delete: null,
    cost_package: null,
    created_by: null
  };

  pacienteNome: String;
  txtCPF: String;
  txtNome: String;
  txtCrm: String;
  txtUf: String;
  durCirurgia: String;
  txtFone: String;
  txtEmail: String;
  txtEnd: String;
  txtCep: String;
  txtNomeGroup: string;
  taxaCirurgia: number;
  taxaAdicional: number;
  taxaAnestesia: number;
  taxaMaterial: number;
  taxaDiariaGlobal: number;
  taxaDiariaGlobalQ: number;
  taxaDiariaGlobalS: number;
  taxaDiariaGlobalCTI: number;
  HrClinico: number;

  tussTable: Tuss[] = [];
  tussTableAfter: Tuss[] = [];
  newHospital: HospitalCreate={
    cost_package_name: '',
    name: '',
    email:'',
    address: '',
    phone: '',
    cep: null,
    tuss: ''
  };

  packageOptions: CostPackageOptions [] = [];

  ngOnInit() {
    this.tussTable = this.route.snapshot.data.allTuss;
  }


  arrayCostGroup: CostGroupItem[] = [];

  selectedTuss: Tuss[] = []; 
  hospitalId: number;
  selectedTussGroup: number[] = [];
  numbTuss: number[] = [];
  onClickNext(){
    if(this.newHospital.name && this.newHospital.phone && this.newHospital.email && 
      this.newHospital.address && this.newHospital.cep && this.selectedTuss.length > 0){
      
    this.newHospital.tuss = '[' + this.numbTuss + ']';
    this.hospitalService.getCostPackageOptions(this.newHospital.tuss).subscribe(response => {
      this.packageOptions = response;
      //console.log(this.packageOptions);
    });
    let i = 0
    let continua = true;
    while(continua){
      let tab = document.getElementById(`mat-tab-label-${i}-1`);
      if(tab){
        tab.click();
        continua = false;
      }else{
        i++
      }
    }
    this.tussTableAfter = this.selectedTuss;
    
    this.selectedTuss.forEach(element => {
      this.numbTuss.push(element.id);
      console.log(element.id);
    });
    this.newHospital.cost_package_name = this.newHospital.name + ' Grupo de custo';
  }else{
    alert('Preencha todos os campos');
    return;
  }
    
  }
  onClickBack(){
    let i = 0
    let continua = true;
    while(continua){
      let tab = document.getElementById(`mat-tab-label-${i}-0`);
      if(tab){
        tab.click();
        continua = false;
      }else{
        i++
      }
    }
  }

  newPackageForm(pac: any){
    if(pac == 0){
      //Limpa array

      this.arrayCostGroup = [];

      //Limpa campos
    
      this.txtNomeGroup = '';
      this.taxaCirurgia = null;
      this.taxaAdicional = null;
      this.taxaAnestesia = null;
      this.taxaMaterial = null;
      this.HrClinico = null;
      this.taxaDiariaGlobalS = null;
      this.taxaDiariaGlobalCTI = null;
      this.taxaDiariaGlobalQ = null;
      this.taxaDiariaGlobal = null;
    }else{
      this.packageOptions.forEach(element => {
        console.log(element);
        if(element.name == pac){
          this.arrayCostGroup = [];
          element.cost_groups.forEach(element2 => {
            console.log(element2);
            let aux: CostGroupItem = {
              name: null,
              surgery_tax: null,
              additional_tax: null,
              anesthesia_tax: null,
              material_tax: null,
              clinical_schedule: null,
              tuss: null,
            };
            var auxTuss: string;

            auxTuss += '[';

            element2.tuss.forEach(element3 => {
              auxTuss += element3.id + ', ';
            })
            //auxTuss = auxTuss.substring(0,(auxTuss.length - 1))
            auxTuss += ']';
            console.log(element2.tuss);
            aux.name = element2.cost_group.name;
            aux.surgery_tax = element2.cost_group.surgery_tax;
            aux.additional_tax = element2.cost_group.additional_tax;
            aux.anesthesia_tax = element2.cost_group.anesthesia_tax;
            aux.material_tax = element2.cost_group.material_tax;
            aux.clinical_schedule = element2.cost_group.clinical_fee;
            aux.tuss = auxTuss;
            
            console.log(aux);
            this.arrayCostGroup.push(aux);
          });
        }
      });
      console.log(this.arrayCostGroup);
    
    }
    document.getElementsByClassName('add-packages')[0].setAttribute("style", "display:block;");
  }

  processaGrupo(){
    if(this.selectedTussGroup.length > 0 && this.txtNomeGroup && this.taxaCirurgia && this.taxaAdicional && 
      this.taxaAnestesia && this.taxaMaterial && this.HrClinico){
      var grupoCriado: CostGroupItem = {
        name: '',
        surgery_tax: 0,
        additional_tax: 0,
        anesthesia_tax: 0,
        material_tax: 0,
        clinical_schedule: 0,
        tuss: ''
      };
      
      //Para cada tuss selecionado, remove da tussTableAfter, que são os Tuss selecionados na primeira página e que foram movidos para outra lista.
      this.selectedTussGroup.forEach(tuss => {
        this.tussTableAfter.splice(this.tussTableAfter.findIndex(x => x.id === tuss), 1);
      });
      grupoCriado.hospital_id = this.hospitalId;
      grupoCriado.name = this.txtNomeGroup;
      grupoCriado.surgery_tax = this.taxaCirurgia;
      grupoCriado.additional_tax = this.taxaAdicional;
      grupoCriado.anesthesia_tax = this.taxaAnestesia;
      grupoCriado.material_tax = this.taxaMaterial;
      grupoCriado.clinical_schedule = this.HrClinico;
      grupoCriado.Semi_intensiva = this.taxaDiariaGlobalS;
      grupoCriado.CTI = this.taxaDiariaGlobalCTI;
      grupoCriado.Andar = this.taxaDiariaGlobalQ;
      grupoCriado.Day_Clinic = this.taxaDiariaGlobal;

      //limpa tudo

      this.txtNomeGroup = '';
      this.taxaCirurgia = null;
      this.taxaAdicional = null;
      this.taxaAnestesia = null;
      this.taxaMaterial = null;
      this.HrClinico = null;
      this.taxaDiariaGlobalS = null;
      this.taxaDiariaGlobalCTI = null;
      this.taxaDiariaGlobalQ = null;
      this.taxaDiariaGlobal = null;
      
      grupoCriado.tuss = '[' + this.selectedTussGroup + ']';

      this.arrayCostGroup.push(grupoCriado);

      console.log(this.arrayCostGroup);
    }else{
      alert('Preencha todos os campos obrigatórios do grupo de custo e selecione ao menos um TUSS');
      return;
    }
  }

  concluirSolicitacao(){
    if(this.tussTableAfter.length != 0){
      this.processaGrupo();
    }
    
    if(this.tussTableAfter.length == 0){
      this.hospitalService.createHospital(this.newHospital).subscribe(response =>{
        console.log(response);
        this.hospitalId = response.id;
        this.arrayCostGroup.forEach(element => {
          element.hospital_id = this.hospitalId;
          this.adminService.addNewCostGroup(element).subscribe(response => {
            console.log(response);
          })
        });
      })
    }
  }
}
