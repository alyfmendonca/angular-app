import { Injectable } from "@angular/core";  
import { Resolve, ActivatedRouteSnapshot } from "@angular/router";  
import { Observable } from "rxjs";  
import { OtherService } from './other.service';
  
@Injectable({  
    providedIn: "root"  
  }) 
export class OtherAllCidResolve implements Resolve<Cid[]> {  
  constructor(private otherService: OtherService) {}  
  
  resolve(route: ActivatedRouteSnapshot): Observable<Cid[]> {  
    return this.otherService.getAllCid();  
  }  
}  