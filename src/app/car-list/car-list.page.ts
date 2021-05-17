import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import {StorageService} from '../storage.service';
import {Car} from '../model/car';
import { Subscription } from 'rxjs';
import {ModalController} from '@ionic/angular';

import {NewcarPage} from '../modal/newcar/newcar.page';



@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.page.html',
  styleUrls: ['./car-list.page.scss'],
})
export class CarListPage implements OnInit,OnDestroy {

  logincounter:number = 0;
  username="";
  password="";
  cars:Car[]= [];
  carsub: Subscription;

  
  constructor(private router:Router, private storageService:StorageService,private modalcontroller:ModalController){}
  ngOnInit(){
    //Add to cars list each time one is created in the modal
    this.carsub = this.storageService.getCars().subscribe((data)=>{
      this.cars.push(data.newcar);
      this.storageService.storecars(this.cars);
    });
  }
  //Add one new sighting to a car
increment(i:number,slidingItem){
  this.cars[i].carCount = this.cars[i].carCount + 1 ;
  slidingItem.close();
  this.storevals();

 }

getvals(){
  this.storageService.retrievcars().then((data)=>{
       
    if(data){
     this.cars = JSON.parse(data);
    }
 });
}
ionViewDidEnter(){
  this.getvals();
}
storevals(){
  this.storageService.storecars(this.cars);
}
ionViewDidLeave(){
  this.storevals();
}
ngOnDestroy(){
  
  this.carsub.unsubscribe();
}

async addNewCar(){
  let modal = await this.modalcontroller.create({
    component: NewcarPage,
    componentProps:{},
   
  });

    
    
    return modal.present();
}
cardetails(i){
  this.router.navigateByUrl("/cardetails/"+ i);
  
}
}
