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
  mascaraCrm = '00-0';
  constructor(public surgeonService: SurgeonService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    console.log('teste');
    this.surgeonService.getSurgeon().subscribe((surgeon) => {
      this.surgeonByID = surgeon;
      console.log(surgeon);
      var aux = "";
      aux += this.surgeonByID.crm;
      this.mascaraCrm = "";
      this.mudaMascara(aux);
      console.log(this.mascaraCrm);
      
    });
    
  }
  

  
  mudaMascara(event){
    console.log(event.length);
    //this.mascaraCrm = '000-00'
    var auxCrm = '';
    console.log('a');
    console.log('b');
    for (let index = 0; index < event.length-1; index++) {
      auxCrm += '0';
      console.log('c');
    }
    auxCrm += '-09';
    this.mascaraCrm = auxCrm;
     
    
  }

}
