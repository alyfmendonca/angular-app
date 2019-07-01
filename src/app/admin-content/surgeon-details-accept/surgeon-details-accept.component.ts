import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SurgeonService } from 'src/app/services/surgeon-services/surgeon.service';
import { OtherService } from 'src/app/services/other-services/other.service';
import {Md5} from 'ts-md5/dist/md5';
import { formatDate } from '@angular/common';
import { AuthService } from 'src/app/services/auth-services/auth.service';

@Component({
  selector: 'app-surgeon-details-accept',
  templateUrl: './surgeon-details-accept.component.html',
  styleUrls: ['./surgeon-details-accept.component.css']
})
export class SurgeonDetailsAcceptComponent implements OnInit {

  constructor(
    public router: Router,
    private route: ActivatedRoute,
    private surgeonService: SurgeonService,
    private authService: AuthService
  ) { }

  id: number;

  surgeonChoosed: SurgeonById;

  listProcedimentos: Tuss[] = []; 

  selectedTuss: number[] = []; 
  
  tuss: number[] = [];

  ngOnInit() {
    this.route.params.subscribe( parametros => {
      this.id = parametros.id;
  });

    this.surgeonService.getSurgeon(this.id).subscribe((surgeon) => {
      this.surgeonChoosed = surgeon;
      this.surgeonChoosed.tuss.forEach(tuss => {
        this.tuss.push(tuss.id);
      });
    });
  }
  

  salvar(){
    let now = new Date();
    this.authService.approveSignIn(Md5.hashStr(formatDate(now, 'dd-MM-yyyy hh:mm:ss.S a', 'en-US', '+0530')), this.id).subscribe(res => 
      alert(`Cirurgião ${this.surgeonChoosed.name} aprovado`), err => console.log(err));
  }

}
