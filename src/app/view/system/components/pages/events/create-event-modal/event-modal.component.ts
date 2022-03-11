import { Component, Inject, OnInit} from '@angular/core';
import { FormControl, FormGroup, NgModel, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DurationButtons } from '@models/duration-buttons';
import { EventTypeButtons } from '@models/event-type-buttons';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { EventData } from '@models/event-data';
import { Participators } from '@models/participators';
import { Room } from '@models/room';
import {EmployeeService} from '@services/employee.service';
import {UploadService} from '@services/upload.service';
import { ToastrService } from 'ngx-toastr';
import { EmployeeData } from '@models/employee-data';
import { BackendDevelopment } from '@models/backend-development';
import { FrontendDevelopment } from '@models/frontend-development';
import { Management } from '@models/management';
import * as moment from 'moment';
import { EventsService } from '@services/events.service';
import { EmployeeType } from '@models/employee-type';
import { User } from '@models/user';
@Component({
  selector: 'app-create-event-dialog',
  templateUrl: './event-modal.component.html',
  styleUrls: ['./event-modal.component.scss']
})
export class EventModal implements OnInit {
  employeeData!: EmployeeData;
  participants: number[] = [];
  backendDevelopment!: BackendDevelopment[];
  frontendDevelopment!: FrontendDevelopment[];
  management!: Management[];
  selectType = 1;
  fileUrl?: any;
  auto: any;
  isUpdate = false;
  currentUser!: User;
  meetingType = 'Teambuilding';
  location!: string;
  locationValue = 'Gyumri,Alek Manukyan 1';
  date!: string;
  allEmployers: EmployeeType[] = [];
  timeValue!: string;
  durationButtons: DurationButtons[] = [
      {id: 1, title: '150'},
      {id: 2, title: '200'},
      {id: 3, title: '300'},
      {id: 4, title: '500'},
      {id: 5, title: '800'},
      {id: 6, title: '900'},
      {id: 7, title: '400'},
  ];
  eventTypeButtons: EventTypeButtons[] = [
    {id: 1, event_type: 'Teambuilding', selected: true},
    {id: 2, event_type: 'Events', selected: false},
    {id: 3, event_type: 'Meeting/Descussion', selected: false},
    {id: 4, event_type: 'Trainings', selected: false},
  ];
  eventForm: FormGroup = new FormGroup({
     title: new FormControl('', [Validators.required]),
     organizer_id: new FormControl('', [Validators.required]),
     participants: new FormControl('', [Validators.required]),
     time: new FormControl('', [Validators.required]),
     place: new FormControl('Gyumri,Alek Manukyan 1'),
     description: new FormControl(),
     type: new FormControl(this.meetingType, [Validators.required]),
     date: new FormControl(''),
     duration: new FormControl(),
     room: new FormControl('', [Validators.required]),
     photo: new FormControl('')
  });
  eventTime!: string;
  rooms: Room[] = [
    {id: 1, title : 'Meeting Room'},
    {id: 2, title : 'Meeting Room1'},
  ];
  selectedTime!: string;
  startTimeList: string[] = [
    '09:00',
    '09:15',
    '09:30',
    '10:00',
    '10:15',
    '10:30',
    '11:00',
    '11:15',
    '11:30',
    '12:00',
    '12:15',
    '12:30',
    '13:00',
    '13:15',
    '13:30',
    '14:00',
    '14:15',
    '14:30',
    '15:00',
    '15:15',
    '15:30',
    '16:00',
    '16:15',
    '16:30',
    '17:00',
    '17:15',
    '17:30',
    '18:00',
    '18:15',
    '18:30',
    '19:00',
  ];
  constructor(
    public dialogRef: MatDialogRef<MatDialog>,
    @Inject(MAT_DIALOG_DATA) public data: EventData,
    private toastr: ToastrService,
    private employeeService: EmployeeService,
    private eventService: EventsService,
    private uploadService: UploadService
    ) {
        

   }

  ngOnInit(): void {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
    this.getEmployee();
    this.setCurrentOrganizer();
    if (this.data){
      this.selectedTime = this.data.time;
      this.location = this.data.place;
      this.date = this.data.date;
      this.isUpdate = true;
      this.eventForm.patchValue(this.data);
      this.eventTime = this.data.time;
      this.fileUrl = this.data.photo;
    }
  }
  dateRangeChange(event: any): void{
    this.date = moment(event.value).format('YYYY-MM-DD');
    this.eventForm.controls.date.setValue(this.date);
  }

  changeEventType(event: any): void{
    for (let i = 0; i < this.eventTypeButtons.length; i++){
      this.eventTypeButtons[i].selected = false;
    }
    this.selectType = event.id;
    this.meetingType = event.event_type;

  }

  confirm(): void {
    this.createEvents();
    this.dialogRef.close({ data: 'you confirmed' });
  }

  loadImage(event: any): void {    
    const file = event.target.files[0];
    const fileReader = new FileReader();
    const self = this;
    fileReader.onload = (e) => {
      self.fileUrl = fileReader.result;
    };
    fileReader.readAsDataURL(file);
    this.uploadService.upload(file).subscribe((res: any) => {
      this.eventForm.controls.photo.setValue(res.data.file);
    },
      (error) => {
      this.toastr.error('Something went wrong', 'Fail !');
      }
      );
  }
  writeLocationOnReview(event: any): void{
    this.location = event.target.value;
  }

  getEmployee(): void{
    this.employeeService.getEmployeeList().subscribe((res) => {
      this.employeeData = res.data;
      const teams = Object.keys(res.data);
      this.frontendDevelopment = res.data[`Frontend Development`];
      this.backendDevelopment = res.data['Backend Development'];
      this.management = res.data.Management;

      for (let i = 0; i < this.frontendDevelopment.length; i++){
        this.allEmployers.push(this.frontendDevelopment[i]);
        }
      for (let i = 0; i < this.backendDevelopment.length; i++){
        this.allEmployers.push(this.backendDevelopment[i]);
        }
  
      for (let i = 0; i < this.management.length; i++){
        this.allEmployers.push(this.management[i]);
        }

    });
  }
  frontendSelect(event: any, front: FrontendDevelopment): void{
    if (event){
      this.participants.push(front.employee_id);
    }else{
      this.removeParticipants(front);
    }
  }

  backendSelect(event: any, back: BackendDevelopment): void{
    if (event){
      this.participants.push(back.employee_id);
    }else{
      this.removeParticipants(back);
    }
  }

  managementSelect(event: any, management: Management): void{
    if (event){
      this.participants.push(management.employee_id);
    }else{
      this.removeParticipants(management);
    }
  }

  removeParticipants(param: any): void{
    for (let i = 0; i < this.participants.length; i++){
      if (param.employee_id === this.participants[i]){
        this.participants.splice(i, 1);
      }
    }
  }

  createEvents(): void{
    const eventData = this.eventForm.getRawValue();
    eventData.room = eventData.room.title;
    eventData.participants = String(eventData.participants);

    
    this.eventService.createEvent(eventData).subscribe((res) => {
      this.toastr.success('Event successfully created.', 'Greate !');
    },
    (error) => {
      this.toastr.error('Something went wrong', 'Fail !');
    });
  }

  setCurrentOrganizer(): void{
    this.eventForm.controls.organizer_id.setValue(this.currentUser.employee_id);
  }
  timeWrite(event: any): void{
    const eventValue = event.target.value;
    if (eventValue.length === 2 ) {
      this.timeValue = eventValue + ':';
    }

  }
  getSelectedTime(event: string): void{
    this.selectedTime = event;
  }


}
