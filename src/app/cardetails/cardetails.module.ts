import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CardetailsPageRoutingModule } from './cardetails-routing.module';

import { CardetailsPage } from './cardetails.page';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CardetailsPageRoutingModule,
    SharedModule
  ],
  declarations: [CardetailsPage]
})
export class CardetailsPageModule {}
