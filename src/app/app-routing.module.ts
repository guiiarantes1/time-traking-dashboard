import { MonthlyComponent } from './monthly/monthly.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DailyComponent } from './daily/daily.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  { path: '', component: ProfileComponent },
  {path: 'weekly', component: ProfileComponent},
  {path: 'daily', component: DailyComponent},
  {path: 'monthly', component: MonthlyComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
