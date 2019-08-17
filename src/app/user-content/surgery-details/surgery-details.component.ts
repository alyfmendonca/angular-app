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
      explanation: '',
      true_hours_duration: null,
      true_minutes_duration: null,
      date_time: '',
      percentage: null,
      discount: null,
      note: '',
      media: [{
        id: 0,
        media: '',
        surgery: 0
      }],
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
      accommodations_days: null,
      cid: {
          id: null,
          str: ''
      }
  };

  token = localStorage.getItem('token');
  
  listComorb: Comorbiditie[] = [];
  listNeeds: Accommodation[] = [];

  selectedTuss: number[];

  selectedComorbs: number[] = [];
  selectedNeeds: number[] = [];
  selectedNeedsDays: number[] = [];

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

  optionClick(accomodation){
    var flag: boolean = false;
    this.selectedNeeds.forEach(selected => {
      if(selected == accomodation.id){
        flag = true;
      }
    });

    if(flag){
      var element = <HTMLInputElement> document.getElementById(`inputNeeds-${accomodation.id}`);
      if(accomodation.id == 4){
        element.value = '1';
        element.disabled = true;
        return;
      }
      element.disabled = false;
    }else{
      var element = <HTMLInputElement> document.getElementById(`inputNeeds-${accomodation.id}`);
      if(accomodation.id == 4){
        element.value = '';
        element.disabled = true;
        return;
      }
      element.disabled = true;
      element.value = '';
    }
  }

  atribuiSelecteds() {
 
    this.selectedComorbs = undefined;
    this.selectedNeeds = undefined;
    this.selectedNeedsDays = undefined;

    this.duracao = this.surgery.hours_duration;
    this.duracao += ':';
    this.duracao += this.surgery.minutes_duration;

    this.hourSurgery = this.surgery.date_time.substring(this.surgery.date_time.indexOf('T') + 1, this.surgery.date_time.indexOf('T') + 6);
	
    setTimeout(() => {
      this.selectedComorbs = this.surgery.comorbidities;
      this.selectedNeeds = this.surgery.accommodations;
      this.selectedNeedsDays = this.surgery.accommodations_days;

      this.preencheDias();

    }, 1);

  }

  preencheDias(){
    for (let index = 0; index < this.selectedNeeds.length; index++) {
      var element = <HTMLInputElement> document.getElementById(`inputNeeds-${this.selectedNeeds[index]}`);
      element.value = ''+this.selectedNeedsDays[index];
      element.disabled = false;
    }
  }

  validaOnlyOne(event){
    if(this.selectedTuss.length == 0){
      alert('Deve haver ao menos um selecionado.');
      event.target.click()
      return;
    }
  }

  hourSurgery: string;

  euSouMuitoCorno(){
    let dia: string;
    let mes: string;
    let ano: string;
    let hora: string;
    let minuto: string;

    let dataTotal:string = this.surgery.date_time.toString();

    console.log('------------------');
    console.log(this.surgery.date_time);
    console.log(this.hourSurgery);
    console.log('------------------');

          if(dataTotal.includes(" Jan ")){
      mes = "1";
      dia = dataTotal.substring(8, 10);
      ano = dataTotal.substring(11, 15);
      hora = this.hourSurgery.substring(0, 2);
      minuto = this.hourSurgery.substring(3, 5);
    }else if(dataTotal.includes(" Feb ")){
      mes = "2"
      dia = dataTotal.substring(8, 10);
      ano = dataTotal.substring(11, 15);
      hora = this.hourSurgery.substring(0, 2);
      minuto = this.hourSurgery.substring(3, 5);
    }else if(dataTotal.includes(" Mar ")){
      mes = "3"
      dia = dataTotal.substring(8, 10);
      ano = dataTotal.substring(11, 15);
      hora = this.hourSurgery.substring(0, 2);
      minuto = this.hourSurgery.substring(3, 5);
    }else if(dataTotal.includes(" Apr ")){
      mes = "4"
      dia = dataTotal.substring(8, 10);
      ano = dataTotal.substring(11, 15);
      hora = this.hourSurgery.substring(0, 2);
      minuto = this.hourSurgery.substring(3, 5);
    }else if(dataTotal.includes(" May ")){ 
      mes = "5"
      dia = dataTotal.substring(8, 10);
      ano = dataTotal.substring(11, 15);
      hora = this.hourSurgery.substring(0, 2);
      minuto = this.hourSurgery.substring(3, 5);
    }else if(dataTotal.includes(" Jun ")){
      mes = "6"
      dia = dataTotal.substring(8, 10);
      ano = dataTotal.substring(11, 15);
      hora = this.hourSurgery.substring(0, 2);
      minuto = this.hourSurgery.substring(3, 5);
    }else if(dataTotal.includes(" Jul ")){
      mes = "7"
      dia = dataTotal.substring(8, 10);
      ano = dataTotal.substring(11, 15);
      hora = this.hourSurgery.substring(0, 2);
      minuto = this.hourSurgery.substring(3, 5);
    }else if(dataTotal.includes(" Aug ")){
      mes = "8"
      dia = dataTotal.substring(8, 10);
      ano = dataTotal.substring(11, 15);
      hora = this.hourSurgery.substring(0, 2);
      minuto = this.hourSurgery.substring(3, 5);
    }else if(dataTotal.includes(" Sep ")){
      mes = "9"
      dia = dataTotal.substring(8, 10);
      ano = dataTotal.substring(11, 15);
      hora = this.hourSurgery.substring(0, 2);
      minuto = this.hourSurgery.substring(3, 5);
    }else if(dataTotal.includes(" Oct ")){
      mes = "10"
      dia = dataTotal.substring(8, 10);
      ano = dataTotal.substring(11, 15);
      hora = this.hourSurgery.substring(0, 2);
      minuto = this.hourSurgery.substring(3, 5);
    }else if(dataTotal.includes(" Nov ")){
      mes = "11"
      dia = dataTotal.substring(8, 10);
      ano = dataTotal.substring(11, 15);
      hora = this.hourSurgery.substring(0, 2);
      minuto = this.hourSurgery.substring(3, 5);
    }else if(dataTotal.includes(" Dec ")){
      mes = "12"
      dia = dataTotal.substring(8, 10);
      ano = dataTotal.substring(11, 15);
      hora = this.hourSurgery.substring(0, 2);
      minuto = this.hourSurgery.substring(3, 5);
    }else{
      return false;
    }
    this.surgery.date_time = ano + '-' + mes + '-' + dia + 'T' + hora + ':' + minuto + 'Z';
    console.log(ano + '-' + mes + '-' + dia + 'T' + hora + ':' + minuto + 'Z');
    return true;

  }

  btnSalvar(){

    if(!this.euSouMuitoCorno() && !this.surgery.date_time.includes('Z')){
      alert('Data da cirurgia inválida');
      return;
    }

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

    //cria arrays de accomodations days e array de dis somente com os que estão habilitados
    var elements = <HTMLCollectionOf<HTMLInputElement>> document.getElementsByClassName('inputDays');
    var daysArray: number[] = [];
    //flag para validar se todos foram preenchidos
    var flagDaysUnwrited: boolean = false;

        for (let index = 0; index < elements.length; index++) {
          if(!elements[index].disabled || (index == 3 && +elements[index].value != 0)){
            daysArray.push(+elements[index].value);
            if(+elements[index].value == 0){
              flagDaysUnwrited = true;
            }
          }
        }
    
      if(flagDaysUnwrited){
        alert('Informe os dias de todas as acomodações');
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
      explanation: this.surgery.explanation,
      comorbidities:'[' + this.selectedComorbs.toString() + ']',
      accommodations:'[' + this.selectedNeeds.toString() + ']',
      accommodations_days: '[' + daysArray.toString() + ']',
      date_time: this.surgery.date_time,
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

  deleteImage(media){
    if(confirm('Deseja excluir a imagem da solicitação?')){
      //pega o clicado
      var item = this.surgery.media.find((val) => {
        return val === media
      });
      
      //remove do array
      this.surgery.media.splice(this.surgery.media.findIndex((val) => {
        return val == media
      }), 1);
      //requisição
      this.otherService.deleteImg(item.id).subscribe((res) => {
        console.log(`imagem deletada`);
      }, (err) => {
        console.log(`erro ao deletar`);
      });
    }else{
      //
    }
  }
}