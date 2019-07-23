import { Injectable } from "@angular/core";  
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";  
import { Observable } from "rxjs";
import { SurgeryService } from './surgery.service';

@Injectable({  
    providedIn: "root"  
  }) 
export class SurgeryResolver implements Resolve<Surgery> {  
  constructor(private surgeryService: SurgeryService) {}  
  
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Surgery> {  
    return this.surgeryService.getSurgery(route.params['id']);
  }  
}  