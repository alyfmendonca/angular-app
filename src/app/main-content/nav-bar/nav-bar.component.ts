import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({  
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  @Input()
  navBarAtual:any

  @Output()
  alterarParent = new EventEmitter<String>();

  constructor() { }

  ngOnInit() {
  }

  alterarChild(){
    this.alterarParent.emit();
  }

}
 