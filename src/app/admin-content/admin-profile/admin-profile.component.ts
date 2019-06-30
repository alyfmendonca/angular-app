import { Component, OnInit } from '@angular/core';
import { SurgeonService } from 'src/app/services/surgeon-services/surgeon.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.css']
})
export class AdminProfileComponent implements OnInit {

  
  surgeonByID: SurgeonById ;
  surgeonUpdate: SurgeonUpdate;

  constructor(public surgeonService: SurgeonService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.surgeonService.getSurgeon(1).subscribe((surgeon) => {
      this.surgeonByID = surgeon;
      console.log(surgeon);
    });
    
  }


}
