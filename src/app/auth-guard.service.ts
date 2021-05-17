import { Injectable } from '@angular/core';
import { Router, CanActivate } from "@angular/router";
import {StorageService} from './storage.service';



@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
 

  constructor(private router: Router, private storageService:StorageService) { }

    async canActivate():Promise<boolean>
     {
      
      let cango  =  await this.storageService.issignin()
      if(cango ==true){
        return cango 
      }else{
        this.router.navigate(['/login'])
      }
      return false
    }
}
