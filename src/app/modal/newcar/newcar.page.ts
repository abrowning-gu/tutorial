import { Component, OnInit } from '@angular/core';
import {ModalController} from '@ionic/angular';
import{ Car} from '../../model/car';
import {StorageService} from '../../storage.service';

@Component({
  selector: 'app-newcar',
  templateUrl: './newcar.page.html',
  styleUrls: ['./newcar.page.scss'],
})
export class NewcarPage implements OnInit {
  carMake:string="";
  carModel:string="";
  carBodyType:string="";
  carYearBuilt:number=0;
  carColour:string="";
  carBadge:string="";
  carPrice:number=0;
  newCar:Car;
  caryears= [];
  constructor(private modalController:ModalController,private storageService:StorageService) { }

  ngOnInit() {
    let curdate = new Date;
    let curyear = curdate.getFullYear();
    for(let i=1950;i<=curyear;i++){
      this.caryears.push(i);
    }
  }
  closeModal(){
    if(this.carMake != ""){
      this.newCar = new Car(this.carMake,this.carModel,this.carBodyType,this.carYearBuilt,this.carColour,this.carBadge,this.carPrice,0)
      this.storageService.updateCars(this.newCar);
    }
     this.modalController.dismiss();
    }
    cancelModal(){
      this.modalController.dismiss();
    }
}
