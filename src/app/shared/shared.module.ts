import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import {HeaderComponent} from "../component/header/header.component";
import {ModalheaderComponent} from "../component/modalheader/modalheader.component";


@NgModule({
  declarations: [HeaderComponent,ModalheaderComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ],
  exports:[HeaderComponent,ModalheaderComponent],
})
export class SharedModule { }
