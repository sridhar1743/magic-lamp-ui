import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
const appRoutes:Routes = [
  {path: '', redirectTo: '/magiclamp', pathMatch:'full'},
  {path: 'magiclamp', component: AppComponent}
];

@NgModule({
  imports:[RouterModule.forRoot(appRoutes)],
  exports:[RouterModule]
})
export class AppRoutingModule{}