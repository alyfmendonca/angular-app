import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../services/admin-services/admin.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.css']
})
export class AdminProfileComponent implements OnInit {

  txtTelefone = '';
  txtUf = '';
  txtCrm = '';

  admin: Admin;
  surgeonUpdate: SurgeonUpdate;

  constructor(public adminService: AdminService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.adminService.userAdmin().subscribe((admin) => {
      this.admin = admin;
      console.log(admin);
    });
    
  }


}
