import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class WebsocketService {

  public ws = new WebSocket('ws://localhost:3000');

  constructor() { }
}
