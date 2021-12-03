import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {StationListComponent} from "./station-list/station-list.component";
import {StationDetailsComponent} from "./station-details/station-details.component";

const routes: Routes = [
  {
    path: 'stations',
    component: StationListComponent
  },
  {
    path: 'stations/:id/metrics',
    component: StationDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
