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
  crm: string = "";
  mascaraPhone = '';
  constructor(public surgeonService: SurgeonService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.surgeonService.getSurgeon().subscribe((surgeon) => {
      this.surgeonByID = surgeon;
      this.crm = this.surgeonByID.crm.toString().slice(0, this.surgeonByID.crm.toString().length - 1) + '-' + this.surgeonByID.crm.toString().slice(this.surgeonByID.crm.toString().length - 1);
      if(this.surgeonByID.phone.length < 11){
        this.mascaraPhone = '(00)0000-0*'
      }else{
        this.mascaraPhone = '(00)00000-0*'
      }
    });
    
  }
  
  salvar(){
    if(this.crm.replace('-', '').length < 4){
      alert('CRM deve ter mais de 4 números.');
      return false;
    }
    if((this.surgeonByID.name || this.surgeonByID.name != '') && (this.crm || this.crm != '') && 
    (this.surgeonByID.uf || this.surgeonByID.uf != '') && (this.surgeonByID.email || this.surgeonByID.email != '')
    && (this.surgeonByID.phone || this.surgeonByID.phone != '')){
      const surgeonUpdate: SurgeonUpdate = {
        id: this.surgeonByID.id,
        phone: this.surgeonByID.phone,
        email: this.surgeonByID.email,
        name: this.surgeonByID.name,
        crm: +this.crm.replace('-', ''),
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

  mascaraCrm(){
    this.crm = this.crm.replace('-', '');
    this.crm = this.crm.slice(0, this.crm.length - 1) + '-' + this.crm.slice(this.crm.length - 1);
  }

  changePhoneMask(){
    if(this.surgeonByID.phone.length > 10){
      this.mascaraPhone = '(00)00000-0*';
    }else{
      this.mascaraPhone = '(00)0000-0*';
    }
  }


}
