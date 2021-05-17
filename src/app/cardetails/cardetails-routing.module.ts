import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CardetailsPage } from './cardetails.page';

const routes: Routes = [
  {
    path: '',
    component: CardetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CardetailsPageRoutingModule {}
