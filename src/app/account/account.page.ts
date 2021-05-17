import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,ParamMap} from '@angular/router';
import {StorageService} from '../storage.service';


@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {
username:string;
gravatar:string;
routeParamSub;
  constructor(private route:ActivatedRoute,private storageService:StorageService) { }

  ngOnInit() {
  
      this.storageService.curuser().then((data)=>{
       
        this.username = data.username;
        this.gravatar = data.gravatar;
      })
  }
logout(){
  this.storageService.logout();
}
}
