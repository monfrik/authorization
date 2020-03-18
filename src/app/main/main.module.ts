import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import {
  MainComponent,
} from './components';

@NgModule({
  imports: [
    // angular
    CommonModule,
    MainRoutingModule,
  ],
  declarations: [MainComponent],
})

export class MainModule { }
