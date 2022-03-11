import { Component, OnInit } from '@angular/core';
import {SkillsService} from "../../../../../core/services";
import {SkillsElem} from "../../../../../core/models";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {AddNewSkillsComponent} from "../add-new-skills/add-new-skills.component";

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  newSkill = 'This is new skill';

  colorScheme = {
    domain: ['#347474']
  };

  data = [
    {
      "name": "green",
      "series": [
        {
          "name": "Aug",
          "value": 14
        },
        {
          "name": "Sep",
          "value": 35
        },
        {
          "name": "Oct",
          "value": 4
        },
        {
          "name": "Nov",
          "value": 17
        },
        {
          "name": "Dec",
          "value": 14
        },
        {
          "name": "Jan",
          "value": 35
        }
      ]
    },
  ]
  view?:number;
  skills:SkillsElem[] = this.skillsService.skills;

  constructor(
    private skillsService:SkillsService,
    private dialog: MatDialog
  ) {}
  ngOnInit(): void {}

  onResize(offsetWidth: number) {
    this.view = offsetWidth;
  }

  addNewSkills() {
    let dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;

    dialogConfig = {
      width: '400px',
      // data: this.newSkill
    }

    const dialogref = this.dialog.open(AddNewSkillsComponent, dialogConfig);
  }
}
