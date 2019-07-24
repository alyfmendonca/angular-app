import { Component, OnInit, AfterViewInit, NgZone } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SurgeryService } from '../../services/surgery-services/surgery.service'
import { OtherService } from 'src/app/services/other-services/other.service';


@Component({
  selector: 'app-surgery-details',
  templateUrl: './surgery-details.component.html',
  styleUrls: ['./surgery-details.component.css']
})
export class SurgeryDetailsComponent implements OnInit {

  constructor(public router: Router,
    public route: ActivatedRoute,
    public surgeryService: SurgeryService,
    private otherService: OtherService,
    private routeNav: Router) { }

  complexidade: string;
  surgery: Surgery = {
      id:null,
      status: '',
      complicated: null,
      hours_duration: null,
      minutes_duration: null,
      true_hours_duration: null,
      true_minutes_duration: null,
      percentage: '',
      discount: null,
      note: '',
      surgeon: [{
          name:'',
          crm:null,
      }],
      patient: [{
          name: '',
          cpf: null,
          birth_date: '',
      }],
      main_tuss: [{
          id: null,
          str: '',
      }],
      hospital: null,
      comorbidities: null,
      secondary_tuss: [{
          id: null,
          str: '',
      }],
      accommodations: null,
  };

  listComorb: Comorbiditie[] = [];
  listNeeds: Accommodation[] = [];

  selectedTuss: number[];

  selectedComorbs: number[] = [];
  selectedNeeds: number[] = [];

  selectedComorbsAux: number[] = [];
  selectedNeedsAux: number[] = [];

  duracao: string;

  ngOnInit() {
    this.init();
  }

  public async init() {

    this.surgery = this.route.snapshot.data.surgeryResolved;
    [this.listNeeds, this.listComorb] = await Promise.all([
      this.otherService.getAllAccommodations().toPromise(),
      this.otherService.getAllComorbidities().toPromise()
    ]);

    this.atribuiSelecteds();

    if (this.surgery.complicated) {
      this.complexidade = 'true';
    } else { 
      this.complexidade = 'false';
    }
  }

  atribuiSelecteds() {
 
    this.selectedComorbs = undefined;
    this.selectedNeeds = undefined;

    this.duracao = this.surgery.hours_duration;
    this.duracao += ':';
    this.duracao += this.surgery.minutes_duration;
    
	
    setTimeout(() => {
      this.selectedComorbs = this.surgery.comorbidities;
      this.selectedNeeds = this.surgery.accommodations;
    }, 1);

  }

  validaOnlyOne(event){
    if(this.selectedTuss.length == 0){
      alert('Deve haver ao menos um selecionado.');
      event.target.click()
      return;
    }
  }

  btnSalvar(){
    if(this.surgery.patient['name'] == ''){
      alert('Digite o nome do paciente');
      return;
    }else if(this.surgery.patient['cpf'].toString() == ''){
      alert('Digite o cpf do paciente');
      return;
    }else if(this.surgery.patient['birth_date'] == ''){
      alert('Digite a data de nascimento do paciente');
      return;
    }else if(this.duracao == '00:00'){
      alert('Coloque uma duração válida');
      return;
    }
     
    let aux = this.duracao.split(':');
    
    console.log('comorb [' + this.selectedComorbs.toString() + ']');
    console.log('need [' + this.selectedNeeds.toString() + ']');

    var nome: string = this.surgery.patient['name'];
    var cpfVar:string = this.surgery.patient['cpf'].toString();
    var birth_dateVar: string = this.surgery.patient['birth_date'];

    var surgeryUpdate : SurgeryUpdate = {
      id: this.surgery.id,
      complicated: this.complexidade == 'true' ? true : false,
      hours_duration:aux[0],
      minutes_duration:aux[1],
      name: nome,
      cpf: cpfVar,
      birth_date: birth_dateVar,
      comorbidities:'[' + this.selectedComorbs.toString() + ']',
      accommodations:'[' + this.selectedNeeds.toString() + ']',
    }

    console.log(surgeryUpdate);

     this.surgeryService.updateSurgery(surgeryUpdate).subscribe(
       (res) => {
         this.selectedComorbs = null;
         this.selectedComorbsAux = null;
         this.selectedNeeds = null;
         this.selectedNeedsAux = null;
         this.selectedTuss = null;
         this.router.navigate(['/user/main/aprovadas-solicitadas']);
       }, (err) => {
       alert(err.error.message);
     });
  }
}