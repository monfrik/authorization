import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import {
  MatInputModule,
  MatCardModule,
  MatButtonModule,
} from '@angular/material';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components';
import { AuthService } from './services';

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
  ],
  declarations: [
    LoginComponent,
  ],
  providers: [
    AuthService,
  ],
})

export class AuthModule { }
