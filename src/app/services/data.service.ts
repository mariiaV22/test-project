import { Injectable } from '@angular/core';
import { IData } from '../shared/interfaces/data';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getTimeRanges(interval: number): IData[]  {
    const ranges = [];
    const date = new Date();
    for (let minutes = 0; minutes < 24 * 60; minutes = minutes + interval) {
      date.setHours(0);
      date.setMinutes(minutes);
      ranges.push({
        time: date.getTime(),
        value: 'Details: '
      });
    }
    return ranges;
  }
}
