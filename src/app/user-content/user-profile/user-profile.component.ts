import { Component, OnInit } from '@angular/core';
import { SurgeonService } from 'src/app/services/surgeon-services/surgeon.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  
  
  surgeonByID: SurgeonById ;
  surgeonUpdate: SurgeonUpdate;

  constructor(public surgeonService: SurgeonService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    console.log('teste');
    this.surgeonService.getSurgeon().subscribe((surgeon) => {
      this.surgeonByID = surgeon;
      console.log(surgeon);
    });
    
  }

}
