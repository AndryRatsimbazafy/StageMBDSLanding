import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContactUsComponent } from './contact-us/contact-us.component';
import {ModalModule} from 'ngx-bootstrap/modal';
import { VisiteSalonComponent } from './visite-salon/visite-salon.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxUiLoaderModule, NgxUiLoaderConfig,
  SPINNER,
  POSITION,
  PB_DIRECTION, } from 'ngx-ui-loader';
import { CoachingComponent } from './coaching/coaching.component';
import { ConferenceComponent } from './conference/conference.component';
import { CoachingDateTimeComponent } from './visite-salon/coaching-date-time/coaching-date-time.component';

  const ngxUiLoaderConfig: NgxUiLoaderConfig = {
    bgsColor: "#C72949",
    fgsColor: "#C72949",
    pbColor: "#C72949",
    bgsPosition: POSITION.bottomRight,
    bgsSize: 40,
    bgsType: SPINNER.ballSpinClockwise, // background spinner type
    fgsType: SPINNER.ballSpinClockwise, // foreground spinner type
    pbDirection: PB_DIRECTION.leftToRight, // progress bar direction
    pbThickness: 5, // progress bar thickness
  };
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactUsComponent,
    VisiteSalonComponent,
    CoachingComponent,
    ConferenceComponent,
    CoachingDateTimeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),
    ModalModule.forRoot()
  ],
  providers: [],
  entryComponents: [ContactUsComponent, VisiteSalonComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
