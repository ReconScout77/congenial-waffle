import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { IntroComponent } from './intro/intro.component';
import { routing } from './app.routing';
import { ParkingComponent } from './parking/parking.component';
import { HrComponent } from './hr/hr.component';
import { WorkComponent } from './work/work.component';
import { LunchComponent } from './lunch/lunch.component';
import { HrFromWorkComponent } from './hr-from-work/hr-from-work.component';
import { CprComponent } from './cpr/cpr.component';

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    ParkingComponent,
    HrComponent,
    WorkComponent,
    LunchComponent,
    HrFromWorkComponent,
    CprComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
