import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';
import {AuthGuardService} from '../auth-guard.service'

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'account',
        loadChildren: () => import('../account/account.module').then(m => m.AccountPageModule),
        canActivate:[AuthGuardService]
      },
     // {
       // path: 'account/:username',
       // loadChildren: () => import('../account/account.module').then(m => m.AccountPageModule),
       // canActivate:[AuthGuardService]
     // },
      
      {
        path: 'carlist',
        loadChildren: () => import('../car-list/car-list.module').then(m => m.CarListPageModule),
        canActivate:[AuthGuardService]
      },
      {
        path: 'charts',
        loadChildren: () => import('../charts/charts.module').then(m => m.ChartsPageModule),
        canActivate:[AuthGuardService]
      },
      
    ]
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
