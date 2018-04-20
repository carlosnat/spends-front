import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CreateSpendComponent } from './spends/create-spend/create-spend.component';

import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';
import { StatsModule } from './stats/stats.module';
import { LoginComponent } from './login/login.component';
import { MainAppModule } from './main-app/main-app.module';
import { FamiliesComponent } from './families/families.component';
import { HttpClientModule } from '@angular/common/http';
import { GroupComponent } from './group/group.component';
import { CategoryComponent } from './category/category.component';
import { SpendsService } from './services/spends.service';

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: '**', redirectTo: '/login', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    CreateSpendComponent,
    LoginComponent,
    FamiliesComponent,
    GroupComponent,
    CategoryComponent
  ],
  imports: [
    HttpClientModule,
    MainAppModule,
    StatsModule,
    ReactiveFormsModule,
    BrowserModule,
    RouterModule.forRoot(routes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule // imports firebase/storage only needed for storage features
  ],
  providers: [SpendsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
