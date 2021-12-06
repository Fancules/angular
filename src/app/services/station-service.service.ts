import { Injectable } from '@angular/core';
import {Station} from "../entities/station";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Metric} from "../entities/metric";

@Injectable({
  providedIn: 'root'
})
export class StationService {

  constructor(private http: HttpClient) { }

    public getStations(): Observable<Station[]> {
      return this.http.get<Station[]>('http://127.0.0.1:8082/stations')
    }

    public getMetricsByStationId(id: number): Observable<Metric[]> {
      return this.http.get<Metric[]>(`http://127.0.0.1:8082/stations/${id}/metrics`)
    }
}
