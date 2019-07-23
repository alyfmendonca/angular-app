import { Injectable } from "@angular/core";  
import { Resolve, ActivatedRouteSnapshot } from "@angular/router";  
import { Observable } from "rxjs";  
import { OtherService } from './other.service';
  
@Injectable({  
    providedIn: "root"  
  }) 
export class OtherAllTussResolve implements Resolve<Tuss[]> {  
  constructor(private otherService: OtherService) {}  
  
  resolve(route: ActivatedRouteSnapshot): Observable<Tuss[]> {  
    return this.otherService.getAllTuss();  
  }  
}  