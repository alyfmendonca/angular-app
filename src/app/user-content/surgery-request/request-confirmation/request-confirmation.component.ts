import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-request-confirmation',
  templateUrl: './request-confirmation.component.html',
  styleUrls: ['./request-confirmation.component.css']
})
export class RequestConfirmationComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  home(){
    this.router.navigate(['user/main/aprovadas-solicitadas']); 
  }

}
