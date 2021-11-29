import {Station} from "./station";

export interface Metric {
  id: number,
  value: number,
  station: Station
}
