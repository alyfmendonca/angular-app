import { Component, OnInit } from '@angular/core';
import { SurgeonService } from 'src/app/services/surgeon-services/surgeon.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  
  surgeonByID: SurgeonById = null;
  surgeonUpdate: SurgeonUpdate;

  constructor(private surgeonService: SurgeonService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.surgeonService.getSurgeon().subscribe(res => this.surgeonByID = res)
  }

  submitForm(){
    this.surgeonUpdate.id = this.surgeonByID.id;
    this.surgeonUpdate.name = this.surgeonByID.name;
    this.surgeonUpdate.email = this.surgeonByID.email;
    this.surgeonUpdate.crm = this.surgeonByID.crm;
    this.surgeonUpdate.uf = this.surgeonByID.uf;
    this.surgeonUpdate.phone = this.surgeonByID.phone;
    this.surgeonService.updateSurgeon(this.surgeonUpdate).subscribe();
  }

}
