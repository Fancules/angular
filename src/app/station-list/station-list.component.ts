import { Component, OnInit } from '@angular/core';
import {StationService} from "../services/station-service.service";
import {Station} from "../entities/station";

@Component({
  selector: 'app-station-list',
  templateUrl: './station-list.component.html',
  styleUrls: ['./station-list.component.css']
})
export class StationListComponent implements OnInit {
  stations: Station[] = [];

  constructor(private stationService: StationService ) { }

  ngOnInit(): void {
    this.stationService.getStations().subscribe((sr: Station[]) => {
      this.stations = sr;
    });
  }

}
