import { Injectable } from '@angular/core';
import {Storage} from '@ionic/storage-angular';
import { Router } from "@angular/router";
import {Car} from './model/car';
import {User} from './model/user';
import { Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  username:string= "";
  validUsers:User[]=[];
  carsSubject = new Subject();
  userSubject = new Subject();
  cars:Car[]=[];
 
 
  constructor(private storage:Storage,private router:Router) {
    this.init();
   }
   async init(){ // create instance of the database
    const storage = await this.storage.create(); 
  }
  curuser(){
    return this.storage.get('user').then((data)=>{
      return JSON.parse(data);
    })
  }
  issignin():Promise<boolean>{
    //return true if a name is stored in the username key in storage
    return this.storage.get('user')
    .then((name)=>{
      if(name!=undefined){
      return true
      }else{
        return false
      }
    }).catch((err)=>{
      return false
    })

  }


  async signin(username):Promise<boolean>{
    //
    let access:boolean = false;
    //loop over each valid user name 
    //Sign out by default first
    this.storage.set('user',null);
   this.validUsers =  JSON.parse(await this.retrievUsers());
     
     if (this.validUsers){
      this.validUsers.forEach(user => {
        if (username == user.username){
          //if names match then you are a user
          this.storage.set('user',JSON.stringify(user));
          access = true;
          return access;
        }
    }) 
  }
    
    
  return access;
  }
 
  /* Set username to null and navigate to login page */
  logout(){
    this.storage.set('user',null);
    this.router.navigate(['/login'])
  }  
  storecars(cars){
    this.storage.set('cars',JSON.stringify(cars));
  }
  retrievcars(){
    return this.storage.get('cars').then((data)=>{
       return data;
    });
  }
  updateCars(car:Car){
    
    this.carsSubject.next({newcar:car});
  }

  getCars():Observable<any>{
    return this.carsSubject.asObservable();
  }
  storeUser(user){
    console.log(user);
    this.validUsers.push(user);
    this.storage.set('validusers',JSON.stringify(this.validUsers));
  }
  retrievUsers(){
    return this.storage.get('validusers').then((data)=>{
       return data;
    });
  }

  updateUsers(user:User){
    
    this.userSubject.next({newuser:user});
  }

  getUsers():Observable<any>{
    return this.userSubject.asObservable();
  }
}
