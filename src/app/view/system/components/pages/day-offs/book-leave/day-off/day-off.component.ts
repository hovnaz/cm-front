import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-day-off',
  templateUrl: './day-off.component.html',
  styleUrls: ['./day-off.component.scss']
})
export class DayOffComponent implements OnInit {

  @Input() displaySelectedDayOffDate: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
