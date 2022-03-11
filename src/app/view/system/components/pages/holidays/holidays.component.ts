import { Component, OnInit } from '@angular/core';
import { Holiday } from '@models/holiday';
import { HolidaysData } from '@models/holidays-data';

import { HeaderService } from '@services/header.service';
import { HolidaysService } from '@services/holidays.service';

@Component({
  selector: 'app-holidays',
  templateUrl: './holidays.component.html',
  styleUrls: ['./holidays.component.scss']
})
export class HolidaysComponent implements OnInit {
  holidayData!: HolidaysData[];
  isDataGetted = false;
  constructor(
    public headerService: HeaderService,
    public holidaysService: HolidaysService,
    ) { }

    // public holidaysData = this.holidaysService.holidays;
    // public birthdaysData = this.holidaysService.birthdays;

  ngOnInit(): void {
    this.headerService.setHeaderValue('Holidays');
    this.getHolidays();
  }

  getHolidays(): void{
      this.holidaysService.getHoliday().subscribe((res) => {
      this.holidayData = res.data;
      this.isDataGetted = true;
    });
  }

}
