import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StationService } from "../services/station-service.service";
import { Metric } from "../entities/metric";
import {Station} from "../entities/station";

@Component({
  selector: 'app-station-details',
  templateUrl: './station-details.component.html',
  styleUrls: ['./station-details.component.css']
})
export class StationDetailsComponent implements OnInit {

  metrics: Metric[] = [];
  station: Station = {id: 1, address: '', status : true};
  id: number = 1;

  constructor(private stationService:StationService, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {

      this.id = Number(params.get('id'));

      this.stationService.getMetricsByStationId(this.id).subscribe((mts: Metric[]) => {
        this.metrics = mts;
        this.station = mts[0].station;
      })

    });


  }

}
