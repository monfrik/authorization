import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {
  LoginComponent,
  RegisterComponent,
  AuthViewComponent,
} from './components';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login',
  },
  {
    path: 'login',
    component: AuthViewComponent,
    children: [
      {
        path: '**',
        component: LoginComponent,
      },
    ],
  },
  {
    path: 'register',
    component: AuthViewComponent,
    children: [
      {
        path: '**',
        component: RegisterComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class AuthRoutingModule { }
