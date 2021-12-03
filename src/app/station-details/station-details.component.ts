import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {StationService} from "../services/station-service.service";
import {Station} from "../entities/station";

@Component({
  selector: 'app-station-details',
  templateUrl: './station-details.component.html',
  styleUrls: ['./station-details.component.css']
})
export class StationDetailsComponent implements OnInit {

  station: Station = {id: 1, address: '', status: true};
  id: number = 1;

  constructor(private stationService:StationService, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {
      this.id = Number(params.get('id'));
    });

      this.stationService.getStationsById(this.id).subscribe((st: Station) => {
      this.station = st;
    })
  }

}
