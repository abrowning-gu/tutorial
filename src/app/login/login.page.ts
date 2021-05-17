import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {StorageService} from '../storage.service';
import {User} from '../model/user';



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  
  curuser:User = new User("");

  constructor(private router:Router,private storageService:StorageService) { }

  ngOnInit() {
    
    this.storageService.issignin().then((data)=>{
      this.router.navigateByUrl("/tabs/carlist");
    })
  }

  async login(){
    
    if(this.curuser.username.length > 0){
      let giveaccess =  await this.storageService.signin(this.curuser.username);
      console.log(giveaccess);
     if( giveaccess){
       //route protected with a guard- must be signed in first.
       // this.router.navigateByUrl("/tabs/account/" + this.username); 
        this.router.navigateByUrl("/tabs/carlist"); 
      }else{
        alert("Not a valid User");
      }
    }else{
      alert("Please enter a username");
    }
  }
 
}
