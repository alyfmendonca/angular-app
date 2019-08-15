import { Component, OnInit } from '@angular/core';
import { SurgeryService } from '../../services/surgery-services/surgery.service'
import { Router } from '@angular/router';
import { SurgeonService } from '../../services/surgeon-services/surgeon.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-solicitacoes',
  templateUrl: './solicitacoes.component.html',
  styleUrls: ['./solicitacoes.component.css']
})
export class SolicitacoesComponent implements OnInit {

  constructor(
    public router: Router,
    public surgeryService: SurgeryService,
    public surgeonService: SurgeonService,
    ) { }

  allSurgeries: SurgeryDone[] = null;
  allSurgeons: Surgeon[] = null;

  ngOnInit() {
    /*this.surgeryService.allSurgery('Waiting').subscribe(response => {
      this.allSurgeries = response;
    })
    this.surgeonService.allSurgeons('Waiting').subscribe(response => {
      this.allSurgeons = response;
    })*/

    this.surgeryService.allSurgery('Waiting').pipe(
      map((response) => {
        this.allSurgeries = response 
      })
    )
    this.surgeonService.allSurgeons('Waiting').pipe(
      map((response) => {
        this.allSurgeons = response;
      })
    )
    
  }
  clickDetails(id){
    console.log(id);
    this.router.navigateByUrl(`admin/main/solicitacoesDetails/${id}`);
  }

  clickDetailsSurgeonAccept(id){
    this.router.navigateByUrl(`admin/main/solicitacoesDetailsAccept/${id}`);
    //criar outro component de accept
  }

  clickNewSurgeon(){
    this.router.navigateByUrl('admin/main/new-surgeon');
  }


}
