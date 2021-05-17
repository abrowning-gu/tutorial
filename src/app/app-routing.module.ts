import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {AuthGuardService} from './auth-guard.service'

const routes: Routes = [
  {
    //default path redirects to login in the tabs routing module
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule),
    canActivate:[AuthGuardService]
  },
 // {
   // path: 'account',
   // loadChildren: () => import('./account/account.module').then( m => m.AccountPageModule),
   // canActivate:[AuthGuardService]
  //},
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'car-list',
    loadChildren: () => import('./car-list/car-list.module').then( m => m.CarListPageModule),
    canActivate:[AuthGuardService]
  },
  {
    path: 'newcar',
    loadChildren: () => import('./modal/newcar/newcar.module').then( m => m.NewcarPageModule),
    canActivate:[AuthGuardService]
  },
  {
    path: 'cardetails/:id',
    loadChildren: () => import('./cardetails/cardetails.module').then( m => m.CardetailsPageModule),
    canActivate:[AuthGuardService]
  }
  
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
