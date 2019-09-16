import { Component, OnInit } from '@angular/core';
import { SurgeonService } from 'src/app/services/surgeon-services/surgeon.service';
import { ActivatedRoute, Router } from '@angular/router';

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
              private route: ActivatedRoute,
              private router: Router) { }

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
  
  salvar(){
    if((this.surgeonByID.name || this.surgeonByID.name != '') && (this.surgeonByID.crm || this.surgeonByID.crm != 0) && 
    (this.surgeonByID.uf || this.surgeonByID.uf != '') && (this.surgeonByID.email || this.surgeonByID.email != '')
    && (this.surgeonByID.phone || this.surgeonByID.phone != '')){
      const surgeonUpdate: SurgeonUpdate = {
        id: this.surgeonByID.id,
        phone: this.surgeonByID.phone,
        email: this.surgeonByID.email,
        name: this.surgeonByID.name,
        crm: this.surgeonByID.crm,
        uf: this.surgeonByID.uf,
      }
      this.surgeonService.updateSurgeon(surgeonUpdate).subscribe((res) => {
        alert('Informações atualizadas');
        this.router.navigate(['user/main/profile']);
      }, (err) => {
        alert('Erro ao atualizar informações');
      })
    }else{
      alert('Preencha todos os campos');
      return false;
    }
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
