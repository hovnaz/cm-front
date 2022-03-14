import {Component, Inject, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {SkillsService} from "../../../../../core/services";

@Component({
  selector: 'app-add-new-skills',
  templateUrl: './add-new-skills.component.html',
  styleUrls: ['./add-new-skills.component.scss']
})
export class AddNewSkillsComponent implements OnInit {
  defaultRating:number = 2;
  rating:number = this.defaultRating
  constructor(
    private skillsService:SkillsService,
    public dialogRef: MatDialogRef<AddNewSkillsComponent>,
    // @Inject(MAT_DIALOG_DATA) public data: any,
  ) {}

  ngOnInit(): void {
  }

  addData(value: string) {
    this.skillsService.new(value,this.rating+1);
    this.dialogRef.close();
  }

  checkStar($event: number) {
    this.rating = $event;
  }
}