import { Component, OnInit } from '@angular/core';
import { SurgeryService } from '../../services/surgery-services/surgery.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-realizadas',
  templateUrl: './realizadas.component.html',
  styleUrls: ['./realizadas.component.css']
})
export class RealizadasComponent implements OnInit {

  constructor(
    public router: Router,
    public surgeryService: SurgeryService,
    ) { }

  allSurgeries: SurgeryDone[];

  ngOnInit() {
    this.surgeryService.allSurgery('Done').subscribe((response) => {
      this.allSurgeries = response 
    })
  }
  clickDetails(id){
    console.log(id);
    this.router.navigateByUrl(`admin/main/realizadaDetails/${id}`);
  }

}
