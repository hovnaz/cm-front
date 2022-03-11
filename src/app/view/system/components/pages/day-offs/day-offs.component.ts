import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

import { HeaderService } from '@services/header.service';
import { DayOffsAndVacationsService } from '@services/day-offs-and-vacations.service';
import { Leaves } from '@models/leaves';
import { Annual } from '@models/annual';
import { Vacations } from '@models/vacations';

import { BookLeaveComponent } from './book-leave/book-leave.component';

@Component({
  selector: 'app-day-offs',
  templateUrl: './day-offs.component.html',
  styleUrls: ['./day-offs.component.scss']
})
export class DayOffsComponent implements OnInit {
  leavesData!: Leaves[];
  leavesTable!: Leaves[];
  dayOffColumns: string[] = ['Date', 'Time', 'Type', 'Amount', 'Description'];
  vacationsColumn: string[] = ['From', 'To', 'Type', 'Amount', 'Description'];
  leavesDataSource!: Leaves[];
  vacationsDataSrource!: Vacations[];
  annualData!: Annual;
  vacations!: Vacations[];
  scrollClassVacation = false;
  scrollClassDayOff = false;
  annualTotal!: number;
  annualVacation!: number;
  annualDayOffs!: number;
  annualHoursLeave!: number;
  remainingDays!: number;
  isDataGetted = false;
  constructor(
    public headerService: HeaderService,
    public dayOffsAndVacationsService: DayOffsAndVacationsService,
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.headerService.setHeaderValue('Day offs and vacations');
    this.getDayOffs();
  }

  getDayOffs(): void{
    this.dayOffsAndVacationsService.getDayOffs().subscribe((res) => {
      this.leavesData = res.data.leaves;
      this.vacations = res.data.vacations;
      this.leavesTable = this.leavesData;
      this.leavesDataSource = this.leavesTable;
      this.annualData = res.data.annual_data;

      this.annualTotal = this.annualData.total;
      this.annualVacation = this.annualData.vacation;
      this.annualDayOffs = this.annualData.day_offs;
      this.annualHoursLeave = this.annualData.hours_leave;
      this.remainingDays = this.annualTotal - this.annualDayOffs - this.annualVacation;
      this.vacationsDataSrource = this.vacations;
      this.vacations.length > 5 ? this.scrollClassVacation = true : this.scrollClassVacation = false;
      this.leavesData.length > 5 ? this.scrollClassDayOff = true : this.scrollClassDayOff = false;
      this.isDataGetted = true;
    });
  }

  openBookLeave(detailId?: number): void{
    const dialogConfig = new MatDialogConfig();
    let dialogRef;
    
    dialogConfig.autoFocus = true;
    dialogConfig.panelClass = 'custom-MatDialog';

    if (!detailId){
      dialogConfig.data = {
        remainingDays: this.remainingDays,
        annualLeave: this.annualDayOffs + this.annualVacation,
        leavesData: this.leavesData,
        isEditDayOffs: false
      };
      dialogRef = this.dialog.open( BookLeaveComponent, dialogConfig );
      dialogRef.afterClosed().subscribe(() => {
        this.getDayOffs();
      });
    }
    if (detailId){
      this.dayOffsAndVacationsService.getDayOffsDetail(detailId).subscribe((res) => {
        dialogConfig.data = {
          remainingDays: this.remainingDays,
          annualLeave: this.annualDayOffs + this.annualVacation,
          leavesData: res,
          isEditDayOffs: true
        };
        dialogRef = this.dialog.open( BookLeaveComponent, dialogConfig );
        dialogRef.afterClosed().subscribe(() => {
          this.getDayOffs();
        });
      });
    }
  }
}
