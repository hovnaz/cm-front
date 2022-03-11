import { Component, OnInit } from '@angular/core';
import { EventModal } from './create-event-modal/event-modal.component';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {EventsService} from '@services/events.service';
import { EventData } from '@models/event-data';
import { HeaderService } from '@services/header.service';
import { User } from '../../../../../core/models';
@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
  isModalOpened = false;
  showEventsDropDown = false;
  rotateEventsArrow = false;
  rotatePickerArrow = false;
  startDate: any;
  eventData: EventData[] = [];
  currentUser!: User
  constructor(private dialog: MatDialog, private eventService: EventsService, private headerService: HeaderService) { }

  openModal(): void {
    this.openEventModal(this.eventData);
    this.isModalOpened = true;
  }
  

  ngOnInit(): void {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}')
    this.headerService.setHeaderValue('Events');

  }

  openEventModal(data?: object): void{
    const dialogConfig = new MatDialogConfig();
  
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = data;
  
    const dialogRef = this.dialog.open(EventModal, dialogConfig);
  
  
    dialogRef.afterClosed().subscribe(result => {
      this.isModalOpened = false;
    });
  }

  openAllEvents(): void{
    this.rotateEventsArrow = true;
    this.showEventsDropDown = !this.showEventsDropDown;
    this.showEventsDropDown ? this.rotateEventsArrow = true : this.rotateEventsArrow = false;

  }
  autoCloseForEventDropDown(event: any): void {
    const target = event.target;
    if (this.showEventsDropDown){
      if (!target.closest('.dropdown-menu')) {
        this.showEventsDropDown = false;
        this.rotateEventsArrow = false;
        return;
      }
    }
  }

  clickedCalendar(): void{
    this.rotatePickerArrow = true;
  }
  onClose(): void{
    this.rotatePickerArrow = false;
  }

  startDateChange(event: any): void{

  }
  endDateChange(event: any): void{

  }
}
