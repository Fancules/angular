import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {StationService} from "../services/station-service.service";

@Component({
  selector: 'app-add-station',
  templateUrl: './add-station.component.html',
  styleUrls: ['./add-station.component.css']
})
export class AddStationComponent implements OnInit {

  stationForm = new FormGroup({
    name: new FormControl(''),
    address: new FormControl(''),
    status: new FormControl(true)
  });

  constructor(private stationService: StationService ) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.stationService.addStation(this.stationForm.value).subscribe(data => {
      console.log(data);
    });
  }

}
