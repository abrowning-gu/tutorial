import { Component,Input, OnInit } from '@angular/core';
import {ModalController} from '@ionic/angular';
@Component({
  selector: 'app-modalheader',
  templateUrl: './modalheader.component.html',
  styleUrls: ['./modalheader.component.scss'],
})
export class ModalheaderComponent implements OnInit {

  @Input('title') title: any;
  constructor(private modalController:ModalController) { }

  ngOnInit() {}
  cancelModal(){
    this.modalController.dismiss();
  }
}
