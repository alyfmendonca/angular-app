import { Component, OnInit, ChangeDetectionStrategy, ViewChild } from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import { OtherService } from 'src/app/services/other-services/other.service';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { Router, ActivatedRoute } from '@angular/router';
import { SurgeryService } from 'src/app/services/surgery-services/surgery.service';
import { SurgeonService } from 'src/app/services/surgeon-services/surgeon.service';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';


@Component({
  selector: 'app-request-stepper',
  templateUrl: './request-stepper.component.html', 
  styleUrls: ['./request-stepper.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RequestStepperComponent implements OnInit {
  isLinear = false;



  surgeryCreate: SurgeryCreate = {
    main_tuss: null,
    secondary_tuss: null,
    name: null,
    cpf: null,
    birth_date: null,
    comorbidities: null,
    hours_duration: null,
    minutes_duration: null,
    complicated: null,
    accommodations: null,
    cid: null,
    date_time: null,
    explanation: null,
    accommodations_days: null,
  };

  listProcedimentos: Tuss[] = []; 

  listComorbidades: Comorbiditie[] = [];

  listNecessidades: Accommodation[] = []

  listSelected: Tuss[] = [];

  listComorbSelected: Comorbiditie[] = []; 

  listNeedsSelected: Accommodation[] = []; 

  selectedComorbs: any[];

  duracao: string;

  selectedNeedsDays: number[];

  listFilesFinal: Promise<any[]> = null;
  listFilesFinalFinalizar: any[] = [];

  //Cids
  listCid: Cid[] = [];

  cidControl = new FormControl();

  filteredCids: Observable<Cid[]>;

  //teste
  selectedTuss: Tuss[]; 

  constructor(private otherServices: OtherService,
              private router: Router,
              private surgeryServices: SurgeryService,
              private route:ActivatedRoute,
              private surgeonService: SurgeonService) {}


  // Variáveis auxiliares para pegar data e hora
  daySurgery: Date;
  hourSurgery: string;
  
  birth_date: Date;

  semComorb: boolean = false;

  atualDate = new Date();
  minDate = new Date(1900, 0, 1);
  maxDate = new Date(2100, 0, 1);
        
  ngOnInit() {

    this.listCid = this.route.snapshot.data.cidsResolved;

    this.surgeonService.getSurgeon().subscribe(res => this.listProcedimentos = res.tuss);

    this.otherServices.getAllComorbidities().subscribe(
      comorbidities => this.listComorbidades = comorbidities
    );
    
    this.otherServices.getAllAccommodations().subscribe(
      accommodations => this.listNecessidades = accommodations
    );

    this.filteredCids = this.cidControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );

  }

  setCid(cid){
    this.surgeryCreate.cid = cid.id;
  }

  private _filter(value: string): Cid[] {
    const filterValue = value.toLowerCase();
    
    return this.listCid.filter(cid => cid.str.toLowerCase().includes(filterValue));
  }

  listFilesSave: any[] = [];

  chama(param){
    //console.log(document.getElementById('imagesUpload').files.length);
    let listFiles: any[] = [];
      for (var i = 0; i < param.target.files.length; i++) { //for multiple files          
        (function(file) {
            var reader = new FileReader();  
            reader.onload = (event) => {
              let fileAny:any = event.target;
              listFiles.push(fileAny.result);
            }
            reader.readAsDataURL(file); 
        })(param.target.files[i]);  
    }
    this.listFilesFinal = new Promise<any[]>((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, 300);
    }).then(() => {
      listFiles.forEach(element => {
        this.listFilesFinalFinalizar.push(element);
      });
      this.listFilesSave.push(...listFiles);
      return this.listFilesSave;
    }) 
  }

  testedis= "string";

  teste_necessidades = true;

  selectionNeedsClick(accommodations: Accommodation){
    var flag: boolean = false;
    this.selectedNeedsDays.forEach(selected => {
      if(selected == accommodations.id){
        flag = true;
      }
    });

    if(flag){
      var element = <HTMLInputElement> document.getElementById(`inputNeeds-${accommodations.id}`);
      if(accommodations.id == 4){
        element.value = '1';
        element.disabled = true;
        return;
      }
      element.disabled = false;
    }else{
      var element = <HTMLInputElement> document.getElementById(`inputNeeds-${accommodations.id}`);
      if(accommodations.id == 4){
        element.value = '';
        element.disabled = true;
        return;
      }
      element.disabled = true;
      element.value = '';
    }

  }

  finalizar(){

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

        if(!this.birth_date){
          alert('Informe a data de nascimento.');
          return;
        }else if(!this.daySurgery){
          alert('Informe a data da cirurgia.');
          return;
        }

    //datas ------
    var dia  = this.birth_date.getDate().toString().padStart(2, '0'),
    mes  = (this.birth_date.getMonth()+1).toString().padStart(2, '0'), //+1 pois no getMonth Janeiro começa com zero.
    ano  = this.birth_date.getFullYear();
    this.surgeryCreate.birth_date =  ano+"-"+mes+"-"+dia;

    var dia  = this.daySurgery.getDate().toString().padStart(2, '0'),
    mes  = (this.daySurgery.getMonth()+1).toString().padStart(2, '0'), //+1 pois no getMonth Janeiro começa com zero.
    ano  = this.daySurgery.getFullYear();
    this.surgeryCreate.date_time =  ano+"-"+mes+"-"+dia+ " " + this.hourSurgery;
    //datas ------
    
    if(!(this.selectedTuss.length > 0)){
      alert('Seleciona ao menos um Tuss');
      return;
    }else if(!this.surgeryCreate.name){
      alert('Informe o nome do paciente');
      return;
    }else if(!this.surgeryCreate.cpf){
      alert('Informe o cpf do paciente');
      return;
    }else if(!this.surgeryCreate.birth_date){
      alert('Informe uma data de nascimento do paciente');
      return;
    }else if(!this.duracao){
      alert('Informe a duração da cirurgia');
      return;
    }else if(!this.surgeryCreate.complicated){
      alert('Informe a complexidade da cirurgia');
      return;
    }else if(flagDaysUnwrited){
      alert('Informe os dias de todas as acomodações');
      return;
    }else if(!this.surgeryCreate.cid){
      alert('Informe o CID');
      return;
    }else{
      
        this.surgeryCreate.main_tuss = this.selectedTuss.shift().id;

        let aux = this.duracao.split(':');
        this.surgeryCreate.hours_duration = aux[0];
        this.surgeryCreate.minutes_duration = aux[1];


        this.surgeryCreate.secondary_tuss = '[';
        this.selectedTuss.forEach(tuss => {
          this.surgeryCreate.secondary_tuss += tuss.id + ',';
        });
        if(this.surgeryCreate.secondary_tuss.length > 1){
          this.surgeryCreate.secondary_tuss = this.surgeryCreate.secondary_tuss.slice(0, this.surgeryCreate.secondary_tuss.length - 1);
        }
        this.surgeryCreate.secondary_tuss += ']';

        this.surgeryCreate.comorbidities = '[';
        this.listComorbSelected.forEach(comorb => {
          this.surgeryCreate.comorbidities += comorb.id + ',';
        });
        if(this.surgeryCreate.comorbidities.length > 1){
          this.surgeryCreate.comorbidities = this.surgeryCreate.comorbidities.slice(0, this.surgeryCreate.comorbidities.length - 1);
        }
        this.surgeryCreate.comorbidities += ']';

        this.surgeryCreate.accommodations = '[';
        this.selectedNeedsDays.forEach(need => {
          this.surgeryCreate.accommodations += need + ',' ;
        });
        if(this.surgeryCreate.accommodations.length > 1){
          this.surgeryCreate.accommodations = this.surgeryCreate.accommodations.slice(0, this.surgeryCreate.accommodations.length - 1);
        }
        this.surgeryCreate.accommodations += ']';

        this.surgeryCreate.accommodations_days = '['
        this.surgeryCreate.accommodations_days += daysArray.toString();
        this.surgeryCreate.accommodations_days += ']';

        var surgery: Surgery;
        this.surgeryServices.createSurgery(this.surgeryCreate).subscribe(
          (res) => {
            this.gravaMidias(res.id);
            this.router.navigate(['/user/main/request-confirmation']);
          }, (err) => {
            alert(err.error.message);
            console.log(err.error.message);
            this.selectedTuss = []; 
          }
        );

    }
  }

  deleteImage(media){
    this.listFilesFinal = new Promise<any[]>((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, 300);
    }).then(() => {
      this.listFilesSave = this.listFilesSave.filter((val) => {
        return val !== media;
      })
      this.listFilesFinalFinalizar = [...this.listFilesSave];
      return this.listFilesSave;
    })
  }

  gravaMidias(id){
    this.listFilesFinalFinalizar.forEach(dataFile => {
      this.surgeryServices.uploadMedia(dataFile, id).subscribe(response => {
      })
    });

  }

  testaCPF(strCPF) {
    var Soma;
    var Resto;
    Soma = 0;
  if (strCPF == "00000000000") return false;
  if (strCPF == "11111111111") return false;
  if (strCPF == "22222222222") return false;
  if (strCPF == "33333333333") return false;
  if (strCPF == "44444444444") return false;
  if (strCPF == "55555555555") return false;
  if (strCPF == "66666666666") return false;
  if (strCPF == "77777777777") return false;
  if (strCPF == "88888888888") return false;
  if (strCPF == "99999999999") return false;
  if (strCPF == "") return false;
  

  for (let i=1; i<=9; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (11 - i);
  Resto = (Soma * 10) % 11;
   
    if ((Resto == 10) || (Resto == 11))  Resto = 0;
    if (Resto != parseInt(strCPF.substring(9, 10)) ) return false;
   
  Soma = 0;
    for (let i = 1; i <= 10; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (12 - i);
    Resto = (Soma * 10) % 11;
   
    if ((Resto == 10) || (Resto == 11))  Resto = 0;
    if (Resto != parseInt(strCPF.substring(10, 11) ) ) return false;
    return true;
  }

  validaCPF(cpf:string){
    if(!(this.testaCPF(cpf.replace(/\./g, '').replace('-', '')))){
      alert('CPF inválido.'); 
      this.surgeryCreate.cpf = null;
    }
  }


}

