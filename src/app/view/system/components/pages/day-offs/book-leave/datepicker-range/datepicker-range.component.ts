import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, OnChanges, OnDestroy, Output } from '@angular/core';
import { DateAdapter } from '@angular/material/core';
import * as moment from 'moment';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { 
  DateRange,
  DefaultMatCalendarRangeStrategy,
  MAT_DATE_RANGE_SELECTION_STRATEGY,
  MatRangeDateSelectionModel,
  MatCalendar
} from '@angular/material/datepicker';

@Component({
  selector: 'app-datepicker-range',
  templateUrl: './datepicker-range.component.html',
  styleUrls: ['./datepicker-range.component.scss'],
  providers: [
    
    {
      provide: MAT_DATE_RANGE_SELECTION_STRATEGY,
      useClass: DefaultMatCalendarRangeStrategy,
    },
    DefaultMatCalendarRangeStrategy,
    MatRangeDateSelectionModel,
  ],
})
export class DatepickerRangeHeader implements OnChanges{
  datepickerRangeHeader = DatepickerRangeComponent;
  @Input() dateRange!: DateRange<Date>;
  @Output() dateRangeSelected: EventEmitter<any> = new EventEmitter();
  minDate: Date;

  constructor(
    private readonly selectionModel: MatRangeDateSelectionModel<Date>,
    private readonly selectionStrategy: DefaultMatCalendarRangeStrategy<Date>
  ) { this.minDate = new Date(); }

  ngOnChanges(): void {
    if (this.dateRange){
      const defaultSelectedStartDay = new Date(this.dateRange.start || '');
      const defaultSelectedEndDay = new Date(this.dateRange.end || '');
      this.dateRange = new DateRange(defaultSelectedStartDay, defaultSelectedEndDay);
    }
  }

  rangeChanged(selectedDate: Date): void {
    const selection = this.selectionModel.selection;
    const newSelection = this.selectionStrategy.selectionFinished(selectedDate, selection);

    this.selectionModel.updateSelection(newSelection, this);
    this.dateRange = new DateRange<Date>(newSelection.start, newSelection.end);

    if (this.selectionModel.isComplete()) {
      this.dateRangeSelected.emit(this.dateRange);
    }
  }
}


@Component({
  selector: 'datepicker-range',
  templateUrl: './datepicker-range-header.component.html',
  styleUrls: ['./datepicker-range.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DatepickerRangeComponent<D> implements OnDestroy {
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
