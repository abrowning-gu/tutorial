import { Component,Input, OnInit } from '@angular/core';
import {ModalController} from '@ionic/angular';
import {NewcarPage} from '../../modal/newcar/newcar.page';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input('title') title: any;
  @Input('additemButton') additemButton: any;
  constructor(private modalcontroller:ModalController) { }

  ngOnInit() {}
  
  async addNewCar(){
    let modal = await this.modalcontroller.create({
      component: NewcarPage,
      componentProps:{},
     
    });

   
      
      return modal.present();
  }
}
