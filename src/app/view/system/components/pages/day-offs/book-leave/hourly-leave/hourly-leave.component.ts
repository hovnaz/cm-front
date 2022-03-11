import { Component, Input, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-hourly-leave',
  templateUrl: './hourly-leave.component.html',
  styleUrls: ['./hourly-leave.component.scss']
})
export class HourlyLeaveComponent implements OnInit {

  @Input() displaySelectedTime: any;
  @Input() displayLeaveTime: any;
  
  displayCurrentDay!: string;

  constructor() { }

  ngOnInit(): void {
    this.displayCurrentDay = moment(new Date()).format('MMM DD');
  }

}
