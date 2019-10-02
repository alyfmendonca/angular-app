import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SurgeryService } from '../../services/surgery-services/surgery.service'

@Component({
  selector: 'app-aprovadas-solicitadas',
  templateUrl: './aprovadas-solicitadas.component.html',
  styleUrls: ['./aprovadas-solicitadas.component.css']
})
export class AprovadasSolicitadasComponent implements OnInit {

  constructor(
    public surgeryService: SurgeryService,
    public router: Router) { }
  
    allSurgeries: SurgeryDone[];
    allSurgeriesDone: SurgeryDone[];
    

    ngOnInit() {
      this.surgeryService.allSurgery('Waiting').subscribe(response => {
        this.allSurgeries = response;
      })
      this.surgeryService.allSurgery('Approved').subscribe(response => {
        this.allSurgeriesDone = response;
      })
      
    }
    clickSurgeryDetails(id){
      this.router.navigateByUrl(`user/main/surgery/${id}`);
    }
    clickSurgeryDone(id){
      this.router.navigateByUrl(`user/main/realizadaDetails/${id}`);
    }

}
