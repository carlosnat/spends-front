import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { StatsComponent } from '../stats/statsComponent/stats.component';
import { CreateSpendComponent } from '../spends/create-spend/create-spend.component';

const routes: Routes = [
  {path: 'dashboard', component: MainComponent,
    children: [
      { path: '', redirectTo: '/dashboard/stats', pathMatch: 'full'},
      { path: 'stats', component: StatsComponent },
      { path: 'spend', component: CreateSpendComponent }
    ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainAppRoutingModule { }
