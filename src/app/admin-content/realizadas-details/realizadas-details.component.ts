import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SurgeryService } from '../../services/surgery-services/surgery.service';
import { OtherService } from 'src/app/services/other-services/other.service';
import domtoimage from 'dom-to-image';
import * as jspdf from 'jspdf';

@Component({
  selector: 'app-realizadas-details',
  templateUrl: './realizadas-details.component.html',
  styleUrls: ['./realizadas-details.component.css']
})
export class RealizadasDetailsComponent implements OnInit {

  constructor(
    public router: Router,
    public route: ActivatedRoute,
    public surgeryService: SurgeryService,
    private otherService: OtherService,
  ) { }
  txtNomeGroup: string;
  taxaCirurgia: string;
  taxaAdicional: string;
  taxaAnestesia: string;
  taxaMaterial: string;
  taxaDiariaGlobal: string;
  taxaDiariaGlobalQ: string;
  taxaDiariaGlobalS: string;
  taxaDiariaGlobalCTI: string;
  HrClinico: string;

  token = localStorage.getItem('token');

  id: string;
  surgery: Surgery = {
    id:null,
      status: '',
      complicated: null,
      hours_duration: null,
      minutes_duration: null,
      true_hours_duration: null,
      true_minutes_duration: null,
      date_time: '',
      explanation: '',
      percentage: null,
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
      cid: {
          id: null,
          str: ''
      },
  };
  trueDuration: string;
  finalNote: string = '';
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
    hospital: '',
    total_cost: null,
  };
  aditional: any;
  porcentagem: any;
  valueBar: any;
  duracao: string;
  verdadeiraDuracao: string;
  complexidade: string;
  
  listComorb: Comorbiditie[] = [];
  listNeeds: Accommodation[] = [];

  selectedTuss: number[];

  selectedComorbs: number[] = [];
  selectedNeeds: number[] = [];

  selectedComorbsAux: number[] = [];
  selectedNeedsAux: number[] = [];

  valorPorcent: number;
  valorPorcentOut: number;

  ngOnInit() {
    this.init();
  }

  hourSurgery: string;
  
  public async init() {
    this.id = this.route.snapshot.params.id;
    this.surgeryService.getSurgery(this.id).subscribe(response => {
      this.surgery = response;
      if(response.discount){
        this.porcentagem = (response.percentage * -1);
      }else{
        this.porcentagem = (response.percentage);
      }
      this.objCustos = this.surgery.cost;
      this.duracao = this.surgery.hours_duration;
      this.duracao += ':';
      this.duracao += this.surgery.minutes_duration;

      this.verdadeiraDuracao = this.surgery.true_hours_duration;
      this.verdadeiraDuracao += ':';
      this.verdadeiraDuracao += this.surgery.true_minutes_duration;
      if(this.surgery.complicated){
        this.aditional = 20;
      }else{
        this.aditional = 0;
      }
      this.porcentagem = this.surgery.percentage;
    if (this.surgery.complicated) {
      this.complexidade = 'true';
      this.aditional = 20;
    } else { 
      this.complexidade = 'false';
      this.aditional = 0;
    }
    })
    this.surgery = this.route.snapshot.data.surgeryResolved;
    [this.listNeeds, this.listComorb] = await Promise.all([
      this.otherService.getAllAccommodations().toPromise(),
      this.otherService.getAllComorbidities().toPromise()
    ]);
    
      
    this.atribuiSelecteds();
  }

  atribuiSelecteds() {
 
    this.selectedComorbs = undefined;
    this.selectedNeeds = undefined;
  
    setTimeout(() => {
      this.selectedComorbs = this.surgery.comorbidities;
      this.selectedNeeds = this.surgery.accommodations;

      this.hourSurgery = this.surgery.date_time.substring(this.surgery.date_time.indexOf('T') + 1, this.surgery.date_time.indexOf('T') + 6);
    }, 1);

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

}
