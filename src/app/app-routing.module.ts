import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {StationListComponent} from "./station-list/station-list.component";
import {StationDetailsComponent} from "./station-details/station-details.component";
import {AddStationComponent} from "./add-station/add-station.component";

const routes: Routes = [
  {
    path: 'stations',
    component: StationListComponent
  },
  {
    path: 'add',
    component: AddStationComponent
  },
  {
    path: 'stations/:id',
    component: StationDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
