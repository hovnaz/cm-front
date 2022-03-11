import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DayOffsAndVacationsService } from '@services/day-offs-and-vacations.service';
import { NotificationsService } from '@services/notifications.service';
import * as moment from 'moment';
@Component({
  selector: 'app-book-leave',
  templateUrl: './book-leave.component.html',
  styleUrls: ['./book-leave.component.scss']
})
export class BookLeaveComponent implements OnInit {

  selectedTab = 'hourly_leave';
  descriptionText = '';
  
  loading = false;
  loadingCancel = false;
  isReadyToBook = false;

  dateDayOff: any;
  displaySelectedDayOffDate!: string;

  dateWorkRemotely: any;
  displaySelectedWorkRemotelyDate!: string;

  dateRange!: any;
  displaySelectedDateRange!: string;

  selectedDateTime: any;
  displaySelectedTime!: string;
  displayLeaveTime!: string;

  constructor(
    public dialogRef: MatDialogRef<any>,
    private notifyService: NotificationsService,
    @Inject(MAT_DIALOG_DATA) public userBookedDaysData: any,
    private dayOffsAndVacationsService: DayOffsAndVacationsService
  ) { }

  ngOnInit(): void { 
    if (this.userBookedDaysData.isEditDayOffs){
      document.querySelectorAll<HTMLElement>('#day_off, #vacation, #work_remotely, #hourly_leave').forEach( el => {
        el.style.pointerEvents = 'none';
      });
      switch (this.userBookedDaysData.leavesData.data.type) {
        case 1:
          this.selectedTab = 'day_off';
          this.descriptionText = this.userBookedDaysData.leavesData.data.reason;
          this.getSelectedDate(this.userBookedDaysData.leavesData.data.start_date);
          break;
        case 2:
          this.selectedTab = 'vacation';
          this.descriptionText = this.userBookedDaysData.leavesData.data.reason;
          this.getSelectedDateRange({
            start: this.userBookedDaysData.leavesData.data.start_date,
            end: this.userBookedDaysData.leavesData.data.end_date,
          });
          break;
        case 3:
          this.selectedTab = 'work_remotely';
          this.descriptionText = this.userBookedDaysData.leavesData.data.reason;
          this.getSelectedDate(this.userBookedDaysData.leavesData.data.start_date);
          break;
        case 4:
          this.selectedTab = 'hourly_leave';
          this.descriptionText = this.userBookedDaysData.leavesData.data.reason;
          this.getSelectedTime({
            start_day_time: this.userBookedDaysData.leavesData.data.start_date,
            end_day_time: this.userBookedDaysData.leavesData.data.end_date
          });
          break;
      }
      this.readyForBook();
    }
  }

  closeBookLeave(): void{
    this.loading = false;
    this.loadingCancel = false;
    this.isReadyToBook = false;
    this.dialogRef.close();
  }

  clickTab(tabName: string): void{
    switch (tabName) {
      case 'hourly_leave':
        this.selectedTab = 'hourly_leave';
        break;
      case 'day_off':
        this.selectedTab = 'day_off';
        break;
      case 'work_remotely':
        this.selectedTab = 'work_remotely';
        break;
      case 'vacation':
        this.selectedTab = 'vacation';
        break;
      default:
        this.selectedTab = 'hourly_leave';
        break;
    }
  }

  getSelectedDate(date: any): void{
    switch (this.selectedTab){
      case 'day_off':
        this.dateDayOff = moment(date).format('yyyy-MM-DD');
        this.displaySelectedDayOffDate = moment(date).format('MMM DD');
        break;
      case 'work_remotely':
        this.dateWorkRemotely = moment(date).format('yyyy-MM-DD');
        this.displaySelectedWorkRemotelyDate = moment(date).format('MMM DD');
        break;
    }
  }

  getSelectedDateRange(dateRange: any): void {
    this.dateRange = dateRange;
    if (moment(dateRange.start).format('MMM') === moment(dateRange.end).format('MMM')){
      this.displaySelectedDateRange = moment(dateRange.start).format('MMM') + ' ' + moment(dateRange.start).format('DD') + '-' + moment(dateRange.end).format('DD');
    } else {
      this.displaySelectedDateRange = moment(dateRange.start).format('MMM DD') + ' - ' + moment(dateRange.end).format('MMM DD');
    }
  }

  getSelectedTime(date: any): void{
    this.selectedDateTime = date;
    this.displaySelectedTime = moment(date.start_day_time).format('h:mm');
    if (date.minutes){
      this.displayLeaveTime = moment(new Date(date.start_day_time).setMinutes(new Date(date.start_day_time).getMinutes() + Number(date.minutes))).format('h:mm');
      if (date.start_day_time && this.descriptionText) { this.isReadyToBook = true; }
    }
    if (date.end_day_time){
      this.displayLeaveTime = moment(date.end_day_time).format('h:mm');
      if (date.start_day_time && this.descriptionText) { this.isReadyToBook = true; }
    }
  }
  
  readyForBook(): void{
    switch (this.selectedTab) {
      case 'hourly_leave':
        if (this.descriptionText && this.selectedDateTime.start_day_time && (this.selectedDateTime.minutes || this.selectedDateTime.end_day_time)) { this.isReadyToBook = true; } else {
          this.isReadyToBook = false;
        }
        break;
      case 'day_off':
        if (this.displaySelectedDayOffDate && this.descriptionText) { this.isReadyToBook = true; } else {
          this.isReadyToBook = false;
        }
        break;
      case 'work_remotely':
        if (this.displaySelectedWorkRemotelyDate && this.descriptionText) { this.isReadyToBook = true; } else {
          this.isReadyToBook = false;
        }
        break;
      case 'vacation':
        if (this.dateRange.start && this.dateRange.end && this.descriptionText) { this.isReadyToBook = true; } else {
          this.isReadyToBook = false;
        }
        break;
    }
  }

  deleteBookedDay(): void{
    this.loadingCancel = true;
    const leaveId = this.userBookedDaysData.leavesData.data.id;
    this.dayOffsAndVacationsService.deleteDayOffById(leaveId)
    .subscribe((response: any) => {
      if (response.success === true){
        this.notifyService.showSuccess('Time successfuly canceled', 'Greate !');
        this.closeBookLeave();
        return;
      }
    }, (err) => {
      this.loadingCancel = false;
      this.notifyService.showError(`${err.message}`, '');
    });
  }

  bookDay(isUpdate?: boolean): void{
    let bookLeaveId;
    let bookLeaveRequest;
    
    switch (this.selectedTab) {
      case 'hourly_leave':
        if ((new Date).getDay() === 6 || (new Date).getDay() === 0){
          this.notifyService.showInfo('', 'Today is Weekend !');
        } else {
          this.loading = true;
          if (isUpdate){
            bookLeaveId = this.userBookedDaysData.leavesData.data.id;
            bookLeaveRequest = this.dayOffsAndVacationsService.updateHourlyLeave(this.selectedDateTime.start_day_time, this.selectedDateTime.minutes, this.descriptionText, bookLeaveId);
          } else {
            bookLeaveRequest = this.dayOffsAndVacationsService.takeHourlyLeave(this.selectedDateTime.start_day_time, this.selectedDateTime.minutes, this.descriptionText);
          }
          bookLeaveRequest.subscribe((response: any) => {
            if (response.success === true){
              this.notifyService.showSuccess('Time successfuly booked', 'Greate !');
              this.closeBookLeave();
              return;
            }
          }, (err) => {
            this.loading = false;
            this.notifyService.showError(`${err.message}`, '');
          });
        }
        break;

      case 'day_off':
        if ((new Date(this.dateDayOff)).getDay() === 6 || (new Date(this.dateDayOff)).getDay() === 0){
          this.notifyService.showInfo('', 'Requested day is Weekend !');
        } else {
          this.loading = true;
          if (isUpdate){
            bookLeaveId = this.userBookedDaysData.leavesData.data.id;
            bookLeaveRequest = this.dayOffsAndVacationsService.updateDayOff(this.dateDayOff, this.descriptionText, bookLeaveId);
          } else {
            bookLeaveRequest = this.dayOffsAndVacationsService.takeDayOff(this.dateDayOff, this.descriptionText);
          }
          bookLeaveRequest.subscribe((response: any) => {
            if (response.success === true){
              this.notifyService.showSuccess('Time successfuly booked', 'Greate !');
              this.closeBookLeave();
              return;
            }
          }, (err) => {
            this.loading = false;
            this.notifyService.showError(`${err.message}`, '');
          });
        }
        break;

      case 'work_remotely':
        if ((new Date(this.dateWorkRemotely)).getDay() === 6 || (new Date(this.dateWorkRemotely)).getDay() === 0){
          this.notifyService.showInfo('', 'Requested day is Weekend !');
        } else {
          this.loading = true;
          if (isUpdate){
            bookLeaveId = this.userBookedDaysData.leavesData.data.id;
            bookLeaveRequest = this.dayOffsAndVacationsService.updateWorkRemotely(this.dateWorkRemotely, this.descriptionText, bookLeaveId);
          } else {
            bookLeaveRequest = this.dayOffsAndVacationsService.takeWorkRemotely(this.dateWorkRemotely, this.descriptionText);
          }
          bookLeaveRequest.subscribe((response: any) => {
            if (response.success === true){
              this.notifyService.showSuccess('Time successfuly booked', 'Greate !');
              this.closeBookLeave();
              return;
            }
          }, (err) => {
            this.loading = false;
            this.notifyService.showError(`${err.message}`, '');
          });
        }
        break;

      case 'vacation':
        this.loading = true;
        if (isUpdate){
          bookLeaveId = this.userBookedDaysData.leavesData.data.id;
          bookLeaveRequest = this.dayOffsAndVacationsService.updateVacations(this.dateRange.start, this.dateRange.end, this.descriptionText, bookLeaveId);
        } else {
          bookLeaveRequest = this.dayOffsAndVacationsService.takeVacations(this.dateRange.start, this.dateRange.end, this.descriptionText);
        }
        bookLeaveRequest.subscribe((response: any) => {
          if (response.success === true){
            this.notifyService.showSuccess('Time successfuly booked', 'Greate !');
            this.closeBookLeave();
            return;
          }
        }, (err) => {
          this.loading = false;
          this.notifyService.showError(`${err.message}`, '');
        });
        break;
    }
  }
}
