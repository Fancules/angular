import { Component, OnInit } from '@angular/core';
import {StationService} from "../services/station-service.service";
import {Station} from "../entities/station";

@Component({
  selector: 'app-station-details',
  templateUrl: './station-details.component.html',
  styleUrls: ['./station-details.component.css']
})
export class StationDetailsComponent implements OnInit {

  station: Station = {id: 1, address: '', status: true}

  constructor(private stationService:StationService) { }

  ngOnInit(): void {
    this.stationService.getStationsById(1).subscribe((st: Station) => {
      this.station = st;
    })
  }

}
