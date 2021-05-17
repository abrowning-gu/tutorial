import { Component, OnInit } from '@angular/core';
import {StorageService} from '../storage.service';
import {User} from '../model/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  curuser:User;
  
  constructor(private storageService:StorageService,private router:Router) { }

  ngOnInit() {
    this.curuser = new User("");
  }
  register(){
    console.log(this.curuser);
    this.storageService.storeUser(this.curuser)
    this.router.navigateByUrl("/login");
    //this.storageService.updateUsers(this.curuser);

  }
}
