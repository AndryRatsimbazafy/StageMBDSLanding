import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoachingComponent } from './coaching/coaching.component';
import { ConferenceComponent } from './conference/conference.component';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'coaching',
    component: CoachingComponent
  },
  {
    path: 'conference',
    component: ConferenceComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
