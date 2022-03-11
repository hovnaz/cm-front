import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import * as moment from 'moment';
@Component({
  selector: 'app-hourly-time-selection',
  templateUrl: './hourly-time-selection.component.html',
  styleUrls: ['./hourly-time-selection.component.scss']
})
export class HourlyTimeSelectionComponent implements OnInit {
  isOpenTimeList = false;

  startWorkDayTime = (new Date()).setHours(9, 0, 0, 0);
  endWorkDayTime = (new Date()).setHours(19, 0, 0, 0);
  currentTime = new Date();

  displayCurrentTime = moment(this.currentTime).format('hh:mm');
  displayCurrentDay = moment(this.currentTime).format('MMM DD');
  selectedMinute!: string;

  @Output() bookedHourData: EventEmitter<any> =  new EventEmitter();
  bookHourData!: {
    start_day_time?: string,
    minutes?: string,
  };

  hoursList = [{
    id: 0,
    start_day_time: '',
    displayeTime: '',
    isSelected: false,
    isTime: false
  }];
  
  minutes = [
    { id: 0, key: '15 minutes', value: '15', isSelected: false },
    { id: 1, key: '30 minutes', value: '30', isSelected: false },
    { id: 2, key: '1 hour', value: '60', isSelected: false },
    { id: 3, key: '2 hours', value: '120', isSelected: false },
    { id: 4, key: '3 hours', value: '180', isSelected: false },
    { id: 5, key: 'Half day', value: '240', isSelected: false }
  ];
  
  constructor() { 
    this.bookHourData = {
      start_day_time: moment(this.currentTime).format('YYYY-MM-DD hh:mm:ss')
    };
  }

  ngOnInit(): void {
    let index = 0;
    const round = 1000 * 60 * 15;

    while (this.currentTime.getTime() >= this.startWorkDayTime && this.currentTime.getTime() < this.endWorkDayTime){
      const hoursListNextElement = this.currentTime.setMinutes(this.currentTime.getMinutes() + 15);
      const roundedHoursListNextElement = Math.round(new Date(hoursListNextElement).getTime() / round) * round;
      const roundedHoursListElement = new Date(roundedHoursListNextElement).setMinutes(new Date(roundedHoursListNextElement).getMinutes() + 0);

      if (roundedHoursListElement < this.endWorkDayTime){
        this.hoursList[index] =
          {
            id: index,
            start_day_time: moment(roundedHoursListElement).format('YYYY-MM-DD hh:mm:ss'),
            displayeTime: moment(roundedHoursListElement).format('hh:mm'),
            isSelected: false,
            isTime: true
          };
        index++;
      } else {
        index++;
      }
    }

    if (this.hoursList.length < 6){
      let emptyTimeField = 6 - this.hoursList.length;
      do {
        this.hoursList.push(
          {
            id: index,
            start_day_time: '',
            displayeTime: '-- : --',
            isSelected: false,
            isTime: false
          }
        );
        emptyTimeField--;
      } while (emptyTimeField > 0);
    }
  }

  openTimeList(): void{
    this.isOpenTimeList = !this.isOpenTimeList;
  }
  setStartLeave(startDayTime: string, elementId: number, isTime: boolean): void {
    if (isTime){
      for (const item of this.hoursList){
        if (item.id !== elementId) { item.isSelected = false; } 
        else { item.isSelected = !item.isSelected; }
      }
      this.displayCurrentTime = moment(startDayTime).format('hh:mm');
      this.bookHourData.start_day_time = startDayTime;
      this.bookedHourData.emit(this.bookHourData);
    }
  }
  setMinutes(minutes: string, elementId: number): void {
    this.isOpenTimeList = false;
    for (const item of this.minutes){
      if (item.id !== elementId) { item.isSelected = false; } 
      else { item.isSelected = !item.isSelected; }
    }
    this.bookHourData.minutes = minutes;
    this.bookedHourData.emit(this.bookHourData);
  }
}
