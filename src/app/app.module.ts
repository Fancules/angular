import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StationListComponent } from './station-list/station-list.component';
import { StationComponent } from './station/station.component';
import {HttpClientModule} from "@angular/common/http";
import { StationDetailsComponent } from './station-details/station-details.component';
import {AppRoutingModule} from "./app-routing.module";

@NgModule({
  declarations: [
    AppComponent,
    StationListComponent,
    StationComponent,
    StationDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
