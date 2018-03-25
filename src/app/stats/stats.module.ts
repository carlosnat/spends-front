import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatsComponent } from './statsComponent/stats.component';
import { LayoutModule } from '../layout/layout.module';

@NgModule({
  imports: [
    LayoutModule,
    CommonModule,
  ],
  declarations: [StatsComponent]
})
export class StatsModule { }
