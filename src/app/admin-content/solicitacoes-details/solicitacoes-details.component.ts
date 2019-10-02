import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SurgeryService } from '../../services/surgery-services/surgery.service';
import { HospitalService } from '../../services/hospital-services/hospital.service';
import { OtherService } from 'src/app/services/other-services/other.service';
import domtoimage from 'dom-to-image';
import * as jspdf from 'jspdf';

@Component({
  selector: 'app-solicitacoes-details',
  templateUrl: './solicitacoes-details.component.html',
  styleUrls: ['./solicitacoes-details.component.css']
})
export class SolicitacoesDetailsComponent implements OnInit {

  constructor(
    public router: Router,
    public route: ActivatedRoute,
    public surgeryService: SurgeryService,
    private otherService: OtherService
    ) { }
    checked = true;
    texto = 'Acréscimo';
    id: string;
    surgeryAprove: SurgeryApprove = {
      id:null,
      percentage: 0,
      discount: null,
      hospital: null
    }
    complexidade: string;
    surgery: Surgery = {
      id:null,
      status: '',
      complicated: null,
      hours_duration: null,
      date_time: '',
      minutes_duration: null,
      true_hours_duration: null,
      true_minutes_duration: null,
      percentage: null,
      explanation: '',
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
      accommodations_days: null,
      costs_options: null,
      cid: {
          id: null,
          str: ''
      }
    };
    valorTotal: any;
    aditional: number;

    testeImagem: any;

    objCustos: any = {
      id: null,
      name: '',
      surgery_tax: null,
      additional_tax: null,
      anesthesia_tax: null,
      material_tax: null,
      clinical_schedule: null,
      surgery_cost: null,
      Semi_intensiva: null,
      CTI: null,
      Andar: null,
      Day_Clinic: null,
      hospital: ''
    };

    

    duracao: string;

    listComorb: Comorbiditie[] = [];
    listNeeds: Accommodation[] = [];

    selectedTuss: number[];

    selectedComorbs: number[] = [];
    selectedNeeds: number[] = [];
    selectedNeedsDays: number[] = [];

    selectedComorbsAux: number[] = [];
    selectedNeedsAux: number[] = [];

    valorPorcent: number;
    valorPorcentOut: number;
    formatLabel(value: number | null) {

      this.valorPorcent = value;
      if(this.valorPorcentOut != this.valorPorcent){
        this.valorPorcentOut = this.valorPorcent;
      }
      return value;
    }

    desconto: boolean;
    
    onClickNext(custos: any){
      this.objCustos = custos;
      this.valorTotal = custos.surgery_cost;
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
    

    
    aprovarSolicitacao(){
      this.surgeryAprove.id = this.surgery.id;
      //this.surgeryAprove.percentage = 10;
      if(this.desconto){
        this.surgeryAprove.discount = true;
      }else{
        this.surgeryAprove.discount = false;
      }
      this.surgeryAprove.hospital = this.objCustos.id;
      
      this.surgeryService.approveSurgery(this.surgeryAprove).subscribe(response => {
        this.router.navigate(['/admin/main/solicitacoes']);

      }, err => {
      })
      

    }

    onChangeBar(event: any){
      if(event.value > 0){    
        this.desconto = false;
        this.valorTotal = this.objCustos.surgery_cost + (this.objCustos.surgery_cost * event.value / 100);
        this.valorTotal = this.valorTotal.toFixed(2);
        this.surgeryAprove.percentage = (event.value);
      }
      if(event.value < 0){
        this.desconto = true;
        this.valorTotal = this.objCustos.surgery_cost - (this.objCustos.surgery_cost * (event.value * -1) / 100);
        this.valorTotal = this.valorTotal.toFixed(2);
        this.surgeryAprove.percentage = (event.value * -1);
      }
      
      if(event.value == 0){
        this.valorTotal = this.objCustos.surgery_cost;
      }
      
    }
    ngOnInit() {
      this.init();
      
    }
    token = localStorage.getItem('token');

    public async init() {

      
      this.surgery = this.route.snapshot.data.surgeryResolved;
      [this.listNeeds, this.listComorb] = await Promise.all([
        this.otherService.getAllAccommodations().toPromise(),
        this.otherService.getAllComorbidities().toPromise()
      ]);
      this.atribuiSelecteds();
      
      if (this.surgery.complicated) {
        this.complexidade = 'true';
        this.aditional = 20;
      } else { 
        this.complexidade = 'false';
        this.aditional = 0;
      }
    }
  

    atualDate = new Date();
    minDate = new Date(1900, 0, 1);
    maxDate = new Date(2100, 0, 1);

    atribuiSelecteds() {
   
      this.selectedComorbs = undefined;
      this.selectedNeeds = undefined;
  
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
          //console.log(`imagem deletada`);
        }, (err) => {
          //console.log(`erro ao deletar`);
        });
      }else{
        //
      } 
    }
    
    abreImagem(elemento){
      window.open(`http://mysurgery.com.br:8003${elemento.media}/?token=${this.token}`)
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
      return true;
  
    }

    recuperaMes(data:string): number{
      if(data.toString().toString().includes(" Jan ")){
        return 1;
        
      }else if(data.toString().includes(" Feb ")){
        return 2;
        
      }else if(data.toString().includes(" Mar ")){
        return 3;
        
      }else if(data.toString().includes(" Apr ")){
        return 4;
        
      }else if(data.toString().includes(" May ")){ 
        return 5;
        
      }else if(data.toString().includes(" Jun ")){
        return 6;
        
      }else if(data.toString().includes(" Jul ")){
        return 7;
        
      }else if(data.toString().includes(" Aug ")){
        return 8;
        
      }else if(data.toString().includes(" Sep ")){
        return 9;
        
      }else if(data.toString().includes(" Oct ")){
        return 10;
        
      }else if(data.toString().includes(" Nov ")){
        return 11;
        
      }else if(data.toString().includes(" Dec ")){
        return 12;
      }else{
        return -1;
      }
    }
  
    btnSalvar(){

      if(!this.euSouMuitoCorno() && !this.surgery.date_time.includes('Z')){
        alert('Data da cirurgia inválida');
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
  
      var nome: string = this.surgery.patient['name'];
      var cpfVar:string = this.surgery.patient['cpf'].toString();
      var birth_dateVar: string = this.surgery.patient['birth_date'];

      let birthYYYY_MM_DD
      //Dia do nascimento deve ser yyyy-mm-dd
      if(birth_dateVar.toString().indexOf('Time') > -1){
      birthYYYY_MM_DD = birth_dateVar.toString().substring(birth_dateVar.toString().indexOf(':') - 3, birth_dateVar.toString().indexOf(':') - 7)
       + '-' + this.recuperaMes(birth_dateVar.toString()) + '-' + 
       birth_dateVar.toString().substring(birth_dateVar.toString().indexOf(':') - 8, birth_dateVar.toString().indexOf(':') - 10);
      }
  
      var surgeryUpdate : SurgeryUpdate = {
        id: this.surgery.id,
        complicated: this.complexidade == 'true' ? true : false,
        hours_duration:aux[0],
        minutes_duration:aux[1],
        name: nome,
        cpf: cpfVar,
        birth_date: birthYYYY_MM_DD,
        explanation: this.surgery.explanation,
        comorbidities:'[' + this.selectedComorbs.toString() + ']',
        accommodations:'[' + this.selectedNeeds.toString() + ']',
        accommodations_days: '[' + daysArray.toString() + ']',
        date_time: this.surgery.date_time
      }
  
       this.surgeryService.updateSurgery(surgeryUpdate).subscribe(
         (res) => {
           this.selectedComorbs = null;
           this.selectedComorbsAux = null;
           this.selectedNeeds = null;
           this.selectedNeedsAux = null;
           this.selectedTuss = null;
           this.gravaMidias(this.surgery.id);
           this.router.navigate(['/admin/main/solicitacoes']);
         }, (err) => {
         alert(err.error.message);
       });
    }

    gravaMidias(id){
      this.listFilesFinalFinalizar.forEach(dataFile => {
        this.surgeryService.uploadMedia(dataFile, id).subscribe(response => {
          // console.log(response);
        })
      });
  
    }
  
    deleteImagePreview(arquivo){
      this.listFilesFinal = new Promise<any[]>((resolve, reject) => {
        setTimeout(() => {
          resolve();
        }, 300);
      }).then(() => {
        this.listFilesSave = this.listFilesSave.filter((val) => {
          return val !== arquivo;
        })
        this.listFilesFinalFinalizar = [...this.listFilesSave];
        return this.listFilesSave;
      })
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
        this.surgery.patient['cpf'] = '';
      }
    }

    listFilesFinal: Promise<any[]> = null;
    listFilesFinalFinalizar: any[] = [];
    listFilesSave: any[] = [];

    adicionarImagem(param){
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
  
    chamaInputHidden(){
      let element = document.getElementById('fileImg');
      element.click();
    }

    clickPDF(){
      var node = document.getElementById('pdfHtml');
  
                var img;
                var filename;
                var newImage;
  
  
                domtoimage.toPng(node, { bgcolor: '#fff' })
  
                  .then(function(dataUrl) {
  
                    img = new Image();
                    img.src = dataUrl;
                    newImage = img.src;
  
                    img.onload = function(){
  
                    var pdfWidth = img.width;
                    var pdfHeight = img.height;
  
                      // FileSaver.saveAs(dataUrl, 'my-pdfimage.png'); // Save as Image
  
                      var doc;
  
                      if(pdfWidth > pdfHeight)
                      {
                        doc = new jspdf("p","mm","a4");
                      }
                      else
                      {
                        doc = new jspdf("p","mm","a4");
                      }
  
  
                      var width = doc.internal.pageSize.getWidth();
                      var height = doc.internal.pageSize.getHeight();
  
  
                      doc.addImage(newImage, 'PNG',  -10, -10, width * 1.1, height * 1.05);
                      filename = 'mySurgery_Custos' + '.pdf';
                      doc.save(filename);
  
                    };
  
  
                  })
                  .catch(function(error) {
  
                   // Error Handling
  
                  });
    }

    clickPDFMore(){
      var node = document.getElementById('SeeMore');
  
                var img;
                var filename;
                var newImage;
  
  
                domtoimage.toPng(node, { bgcolor: '#fff' })
  
                  .then(function(dataUrl) {
  
                    img = new Image();
                    img.src = dataUrl;
                    newImage = img.src;
  
                    img.onload = function(){
  
                      // FileSaver.saveAs(dataUrl, 'my-pdfimage.png'); // Save as Image
  
                      var doc;
  
                      doc = new jspdf("landscape","pt","a4");
  
  
                      var width = doc.internal.pageSize.getWidth();
                      var height = doc.internal.pageSize.getHeight();
  
  
                      doc.addImage(newImage, 'PNG',  -10, -10, width * 1.1, height * 1.05);
                      filename = 'mySurgery_Custos' + '.pdf';
                      doc.save(filename);
  
                    };
  
  
                  })
                  .catch(function(error) {
  
                   // Error Handling
  
                  });
    }

}
