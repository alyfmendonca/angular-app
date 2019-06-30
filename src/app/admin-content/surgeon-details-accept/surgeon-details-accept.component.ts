import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SurgeonService } from 'src/app/services/surgeon-services/surgeon.service';
import { OtherService } from 'src/app/services/other-services/other.service';

@Component({
  selector: 'app-surgeon-details-accept',
  templateUrl: './surgeon-details-accept.component.html',
  styleUrls: ['./surgeon-details-accept.component.css']
})
export class SurgeonDetailsAcceptComponent implements OnInit {

  constructor(
    public router: Router,
    private route: ActivatedRoute,
    private surgeonService: SurgeonService,
    private otherService: OtherService
  ) { }

  id: number;

  surgeonChoosed: SurgeonById;

  listProcedimentos: Tuss[] = []; 

  selectedTuss: number[] = []; 
  
  tuss: number[] = [];

  ngOnInit() {
    this.route.params.subscribe( parametros => {
      this.id = parametros.id;
  });

    this.surgeonService.getSurgeon(this.id).subscribe((surgeon) => {
      this.surgeonChoosed = surgeon;
      this.surgeonChoosed.tuss.forEach(tuss => {
        this.tuss.push(tuss.id);
      });
    });
  }
  

  salvar(){
    var surgeonUpdate: SurgeonUpdate = {
      id: this.id,
      phone: this.surgeonChoosed.phone,
      tuss: '[' + this.selectedTuss + ']'
    }
    console.log(surgeonUpdate);
    this.surgeonService.updateSurgeon(surgeonUpdate).subscribe(res => alert('Cirurgião atualizado!'), (err) => {
      alert('Erro ao atualizar o cirurgião!');
      console.log(err.error.message);
    });
  }

}
