import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IntroComponent } from './intro/intro.component';
import { ParkingComponent } from './parking/parking.component';
import { HrComponent } from './hr/hr.component';
import { WorkComponent } from './work/work.component';
import { LunchComponent } from './lunch/lunch.component';
import { HrFromWorkComponent } from './hr-from-work/hr-from-work.component';
import { CprComponent } from './cpr/cpr.component';

const appRoutes: Routes = [
  {
    path: '',
    component: IntroComponent
  },
  {
    path: 'parking',
    component: ParkingComponent
  },
  {
    path: 'hr',
    component: HrComponent
  },
  {
    path: 'work',
    component: WorkComponent
  },
  {
    path: 'lunch',
    component: LunchComponent
  },
  {
    path: 'hr-from-work',
    component: HrFromWorkComponent
  },
  {
    path: 'cpr',
    component: CprComponent
  }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
