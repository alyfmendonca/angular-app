import { Component, OnInit } from '@angular/core';
import { SurgeryService } from '../../services/surgery-services/surgery.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-realizadas',
  templateUrl: './realizadas.component.html',
  styleUrls: ['./realizadas.component.css']
})
export class RealizadasComponent implements OnInit {

  constructor(
      public surgeryService: SurgeryService,
      public router: Router) { }
 

  allSurgeries: SurgeryDone[];

  ngOnInit() {
    this.surgeryService.allSurgery('Done').subscribe(response => {
      this.allSurgeries = response;
    })
  }
  clickDetails(id){
    console.log(id);
    this.router.navigateByUrl(`user/main/realizadaDetails/?id=${id}`);
  }

}
