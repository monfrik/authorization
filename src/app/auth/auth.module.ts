import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import {
  MatInputModule,
  MatCardModule,
  MatButtonModule,
  MatStepperModule,
  MatSelectModule,
  MatDatepickerModule,
  MatNativeDateModule,
} from '@angular/material';

import { AuthRoutingModule } from './auth-routing.module';
import {
  LoginComponent,
  RegisterComponent,
} from './components';
import { AuthService } from './services';
import {
  CommonInfoComponent,
  BillingAddressComponent,
  BillingInfoComponent,
} from './components/register/components';

@NgModule({
  imports: [
    // angular
    CommonModule,
    HttpClientModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    // material
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatStepperModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  declarations: [
    // pages
    LoginComponent,
    RegisterComponent,
    // register components
    CommonInfoComponent,
    BillingAddressComponent,
    BillingInfoComponent,
  ],
  providers: [
    AuthService,
  ],
})

export class AuthModule { }
