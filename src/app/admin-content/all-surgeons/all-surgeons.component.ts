import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SurgeonService } from '../../services/surgeon-services/surgeon.service'

@Component({
  selector: 'app-all-surgeons',
  templateUrl: './all-surgeons.component.html',
  styleUrls: ['./all-surgeons.component.css']
})
export class AllSurgeonsComponent implements OnInit {
  displayedColumns: string[] = ['position', 'crm', 'uf', 'name', 'weight', 'symbol'];

  constructor(public surgeonService: SurgeonService, public router: Router) { }

  surgeons: Surgeon[] = [];

  ngOnInit() {
    this.surgeonService.allSurgeons('Approved').subscribe(response => {
      console.log(response);
      this.surgeons = response;
    })
  }
  showDetails(id){
    this.router.navigateByUrl(`admin/main/surgeonDetails/${id}`);
  }

}
