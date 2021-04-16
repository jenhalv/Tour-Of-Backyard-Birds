import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BirdsComponent } from './birds/birds.component';
import { BirdDetailsComponent } from './birds/bird-details/bird-details.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: DashboardComponent
  },
  {
    path: 'detail/:id',
    component: BirdDetailsComponent
  },
  {
    path: 'birds',
    component: BirdsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
