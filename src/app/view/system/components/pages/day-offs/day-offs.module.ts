import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { ReactiveFormsModule } from '@angular/forms';

import { DayOffsComponent } from './day-offs.component';
import { DayOffsRoutingModule } from './day-offs-routing.module'
import { BookLeaveComponent } from './book-leave/book-leave.component';
import { HourlyTimeSelectionComponent } from './book-leave/hourly-time-selection/hourly-time-selection.component';
import { DatepickerComponent, DatepickerHeader } from './book-leave/datepicker/datepicker.component';
import { DatepickerRangeComponent, DatepickerRangeHeader } from './book-leave/datepicker-range/datepicker-range.component';
import { DayOffComponent } from './book-leave/day-off/day-off.component';
import { HourlyLeaveComponent } from './book-leave/hourly-leave/hourly-leave.component';
import { VacationComponent } from './book-leave/vacation/vacation.component';
import { WorkRemotelyComponent } from './book-leave/work-remotely/work-remotely.component';

@NgModule({
  declarations: [
    DayOffsComponent,
    BookLeaveComponent,
    HourlyTimeSelectionComponent,
    DatepickerComponent,
    DatepickerHeader,
    DatepickerRangeComponent,
    DatepickerRangeHeader,
    DayOffComponent,
    HourlyLeaveComponent,
    VacationComponent,
    WorkRemotelyComponent,
  ],
  imports: [
    CommonModule,
    DayOffsRoutingModule,
    MatTableModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    ReactiveFormsModule
  ],
  entryComponents: [DatepickerComponent, DatepickerHeader, DatepickerRangeComponent, DatepickerRangeHeader],
  bootstrap: [DatepickerComponent, DatepickerRangeComponent, DatepickerRangeHeader]
})
export class DayOffsModule { }
