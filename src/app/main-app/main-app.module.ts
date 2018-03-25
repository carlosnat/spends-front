import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainAppRoutingModule } from './main-app-routing.module';
import { MainComponent } from './main/main.component';
import { LayoutModule } from '../layout/layout.module';

@NgModule({
  imports: [
    LayoutModule,
    CommonModule,
    MainAppRoutingModule
  ],
  declarations: [MainComponent]
})
export class MainAppModule { }
