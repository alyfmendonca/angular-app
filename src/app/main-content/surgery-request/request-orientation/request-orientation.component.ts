import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-request-orientation',
  templateUrl: './request-orientation.component.html',
  styleUrls: ['./request-orientation.component.css']
})
export class RequestOrientationComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  iniciarStepper(){
    this.router.navigateByUrl("/content/stepper");
  }

}
