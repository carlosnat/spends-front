import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { StatsComponent } from '../stats/statsComponent/stats.component';
import { CreateSpendComponent } from '../spends/create-spend/create-spend.component';
import { FamiliesComponent } from '../families/families.component';
import { GroupComponent } from '../group/group.component';
import { CategoryComponent } from '../category/category.component';

const routes: Routes = [
  {path: 'dashboard', component: MainComponent,
    children: [
      { path: '', redirectTo: '/dashboard/stats', pathMatch: 'full'},
      { path: 'stats', component: StatsComponent },
      { path: 'spend', component: CreateSpendComponent },
      { path: 'families', component: FamiliesComponent },
      { path: 'groups', component: GroupComponent },
      { path: 'categories', component: CategoryComponent }
    ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainAppRoutingModule { }
