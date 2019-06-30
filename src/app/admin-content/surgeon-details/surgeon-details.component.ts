import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SurgeonService } from 'src/app/services/surgeon-services/surgeon.service';
import { OtherService } from 'src/app/services/other-services/other.service';

@Component({
  selector: 'app-surgeon-details',
  templateUrl: './surgeon-details.component.html',
  styleUrls: ['./surgeon-details.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SurgeonDetailsComponent implements OnInit {

  constructor(public router: Router,
              private route: ActivatedRoute,
              private surgeonService: SurgeonService) { }


  id: number;

  surgeonChoosed: SurgeonById;

  ngOnInit() {
    this.listProcedimentos = this.route.snapshot.data.allTuss;
    this.id = this.route.snapshot.params.id;

    this.surgeonService.getSurgeon(this.id).subscribe((surgeon) => {
      this.surgeonChoosed = surgeon;
      this.surgeonChoosed.tuss.forEach(tuss => {
        this.tuss.push(tuss.id);
      });
    });

    this.selectedTuss = this.tuss;
  }

  listProcedimentos: Tuss[] = []; 

  selectedTuss: number[] = []; 
  
  tuss: number[] = [];

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
