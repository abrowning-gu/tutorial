import { Component, OnInit } from '@angular/core';
import {StorageService} from '../storage.service';
import {Car} from '../model/car';
import {ActivatedRoute,ParamMap} from '@angular/router';

@Component({
  selector: 'app-cardetails',
  templateUrl: './cardetails.page.html',
  styleUrls: ['./cardetails.page.scss'],
})
export class CardetailsPage implements OnInit {
  cars:Car[] = [];
  carid:number;
  carMake:string="";
  thecar:Car;
  constructor(private storageService:StorageService,private route:ActivatedRoute) { }

  ngOnInit() {
    this.carid = Number(this.route.snapshot.paramMap.get('id')); 
    this.getvals();
  }
 
  ionViewDidEnter(){
    
  }
  getvals(){
    this.storageService.retrievcars().then((data)=>{
         
      if(data){
        this.cars = JSON.parse(data);
        this.thecar = this.cars[this.carid];
      }
   });
  }
}
