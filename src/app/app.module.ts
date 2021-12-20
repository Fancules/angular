import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StationListComponent } from './station-list/station-list.component';
import { StationComponent } from './station/station.component';
import { HttpClientModule } from "@angular/common/http";
import { StationDetailsComponent } from './station-details/station-details.component';
import { AppRoutingModule } from "./app-routing.module";
import { AddStationComponent } from './add-station/add-station.component';
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    StationListComponent,
    StationComponent,
    StationDetailsComponent,
    AddStationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
