import {Component, Inject, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-add-new-skills',
  templateUrl: './add-new-skills.component.html',
  styleUrls: ['./add-new-skills.component.scss']
})
export class AddNewSkillsComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<AddNewSkillsComponent>,
    // @Inject(MAT_DIALOG_DATA) public data: any,
  ) {}

  ngOnInit(): void {
  }

  addData() {

  }
}