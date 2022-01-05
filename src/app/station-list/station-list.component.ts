import { Component, OnInit } from '@angular/core';
import {StationServiceService} from "../services/station-service.service";
import {Station} from "../entities/station";
import {WebsocketService} from "../services/websocket.service";
import{
  trigger,
  state,
  style,
  transition,
  animate
} from "@angular/animations";


@Component({
  selector: 'app-station-list',
  templateUrl: './station-list.component.html',
  styleUrls: ['./station-list.component.css'],
  animations: [
    trigger('flyIn',[
      state('in', style({transform: 'translateX(0)', height:'50px'})),
      transition(':enter',[
        style({backgroundColor:'#dddddd', transform: 'translateX(-100px)'}),
        animate('2s 100ms ease-out')
      ])
    ]),
  ]
})
export class StationListComponent implements OnInit {

  stations: Station[] = [];
  value: number = 0;

  constructor(private stationService: StationServiceService,
              private websocketService: WebsocketService) {
  }

  setValueStation(station_id: number, value: number) {
    let st = this.stations.find( s => s.id == station_id)
    if (st){
      st.value = value;
    }
  }
  setStation(address: string, status: boolean, id: number) {
    this.stations.push({
      address,
      status,
      id
    });
  }
  in = true;
  ngOnInit(): void {
    this.websocketService.ws.onmessage = response => {
      var latest = JSON.parse(response.data)
      this.setValueStation(latest.station_id, latest.value)
      //this.setStation(latest.address, latest.status, latest.id)

    };

    var me = this;

    this.stationService.getStations().subscribe((st: Station[]) => {
      this.stations = st;
      console.log(st)
      this.stationService.getLatestValues().subscribe( (vl: any[]) => {
        vl.forEach( val => {
          me.setValueStation(val.station_id, val.value);
        })
      })
    });
  }
}
