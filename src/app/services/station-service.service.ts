import { Injectable } from '@angular/core';
import {Station} from "../entities/station";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class StationService {

  constructor(private http: HttpClient) { }

    public getStations(): Observable<Station[]> {
      return this.http.get<Station[]>('http://127.0.0.1:8082/stations')
    }

    public getStationsById(id: number): Observable<Station> {
      return this.http.get<Station>(`http://127.0.0.1:8082/stations/${id}`)
    }
}
