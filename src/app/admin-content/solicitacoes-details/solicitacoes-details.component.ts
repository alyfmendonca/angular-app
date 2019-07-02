import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SurgeryService } from '../../services/surgery-services/surgery.service';

@Component({
  selector: 'app-solicitacoes-details',
  templateUrl: './solicitacoes-details.component.html',
  styleUrls: ['./solicitacoes-details.component.css']
})
export class SolicitacoesDetailsComponent implements OnInit {

  constructor(
    public router: Router, 
    public route: ActivatedRoute,
    public surgeryService: SurgeryService,
    ) { }

    id: string;
    surgery: Surgery;
  
    ngOnInit() {
      this.id = this.route.snapshot.params.id;
      this.surgeryService.getSurgery(this.id).subscribe((response) => {
        console.log(response);
        this.surgery = response;
      })
    }

}
