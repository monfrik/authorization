import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '@core/guards';

import { AuthService } from './auth/services';


const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./auth').then((mod) => mod.AuthModule),
  },
  {
    path: 'public',
    pathMatch: 'full',
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    loadChildren: () => import('./main/main.module').then((mod) => mod.MainModule),
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
  providers: [AuthService],
})

export class AppRoutingModule { }
