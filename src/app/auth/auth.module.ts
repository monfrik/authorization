import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
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

import { ApiInterceptor } from '@app/core/interceptors';

import { AuthRoutingModule } from './auth-routing.module';
import {
  LoginComponent,
  RegisterComponent,
  CommonInfoComponent,
  BillingAddressComponent,
  BillingInfoComponent,
  AuthViewComponent,
} from './components';
import { AuthService } from './services';
import { AuthInterceptor } from './interceptors';


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
    AuthViewComponent,
  ],
  providers: [
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
})

export class AuthModule { }
