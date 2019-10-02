import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../services/admin-services/admin.service';
import { ActivatedRoute } from '@angular/router';
import { Md5 } from 'ts-md5';
import { AuthService } from 'src/app/services/auth-services/auth.service';

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.css']
})
export class AdminProfileComponent implements OnInit {

  novaSenha: string = '';
  novaSenhaConf: string = '';
  senhaAtual: string = '';

  admin: Admin;
  surgeonUpdate: SurgeonUpdate;

  constructor(public adminService: AdminService,
              private route: ActivatedRoute,
              private authService: AuthService) { }

  ngOnInit() {
    this.adminService.userAdmin().subscribe((admin) => {
      this.admin = admin;
    });
    
  }

  salvarAdmin(){
    let infosAdmin: {
      name: string,
      new_email: string,
      new_password: string,
      old_password: string 
    } = {
      name: this.admin.name,
      new_email: this.admin.email,
      new_password: this.novaSenha,
      old_password: this.senhaAtual
    }

    if(this.admin.name == '' || this.admin.email == '' || this.novaSenha == '' || this.novaSenhaConf == ''){
      alert('Por favor, preencha todos os campos')
      return false;
    }

    if(this.novaSenha != this.novaSenhaConf){
      alert('Senhas precisam ser idênticas');
      return false;
    }

    infosAdmin.old_password = Md5.hashStr(this.senhaAtual).toString();
    infosAdmin.new_password = Md5.hashStr(this.novaSenha).toString();

    this.authService.putAdmin(infosAdmin.old_password, infosAdmin.new_password, infosAdmin.new_email, infosAdmin.name).subscribe((res) => {
      alert('alterado com sucesso')
    }, (err) => {
      alert(err.error.message);
      return false;
    })

  }
  
}
