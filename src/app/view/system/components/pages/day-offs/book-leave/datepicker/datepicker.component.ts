import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, OnDestroy, Output } from '@angular/core';
import { DateAdapter } from '@angular/material/core';
import { MatCalendar } from '@angular/material/datepicker';
import * as moment from 'moment';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DatepickerHeader{
  datepickerHeader = DatepickerComponent;
  @Input() date!: any;
  @Output() dateSelected: EventEmitter<any> = new EventEmitter();
  minDate: Date;

  constructor(){
    this.minDate = new Date();
  }

  setSelectedDate(): void{
    this.dateSelected.emit(this.date);
  }
}


@Component({
  selector: 'datepicker',
  templateUrl: './datepicker-header.component.html',
  styleUrls: ['./datepicker.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DatepickerComponent<D> implements OnDestroy {
  private destroyed = new Subject<void>();

  constructor(
    private calendar: MatCalendar<D>,
    private dateAdapter: DateAdapter<D>,
    cdr: ChangeDetectorRef
  ) {
    calendar.stateChanges
    .pipe(takeUntil(this.destroyed))
    .subscribe(() => cdr.markForCheck());
  }

  ngOnDestroy(): void {
    this.destroyed.next();
    this.destroyed.complete();
  }

  get periodLabel(): string {
    return moment(this.calendar.activeDate).format('MMMM');
  }

  previousClicked(): void {
    this.calendar.activeDate = this.dateAdapter.addCalendarMonths(this.calendar.activeDate, -1);
  }
  nextClicked(): void {
    this.calendar.activeDate = this.dateAdapter.addCalendarMonths(this.calendar.activeDate, 1);
  }
}
