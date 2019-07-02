import { Component, OnInit } from '@angular/core';
import { SurgeryService } from '../../services/surgery-services/surgery.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-aprovadas',
  templateUrl: './aprovadas.component.html',
  styleUrls: ['./aprovadas.component.css']
})
export class AprovadasComponent implements OnInit {

  constructor(
      public router: Router,
      public surgeryService: SurgeryService,
    ) { }

    allSurgeries: SurgeryDone[];
  
  ngOnInit() {
    this.surgeryService.allSurgery('Approved').subscribe(response => {
      this.allSurgeries = response;
    })
  }
  clickDetails(id){
    console.log(id);
    this.router.navigateByUrl(`admin/main/approvedDetails/${id}`);
  }
}
