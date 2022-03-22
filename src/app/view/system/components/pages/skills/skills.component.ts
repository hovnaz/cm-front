import {Component, OnInit} from '@angular/core';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {SkillsService} from '../../../../../core/services';
import {LanguageElem, SkillsElem} from '../../../../../core/models';
import {AddNewSkillsComponent} from '../../dialog/add-new-skills/add-new-skills.component';
import {UpdateSkillComponent} from '../../dialog/update-skill/update-skill.component';
import {ChooseLanguageComponent} from '../../dialog/choose-language/choose-language.component';

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
      name: 'green',
      series: [
        {
          name: 'Aug',
          value: 14
        },
        {
          name: 'Sep',
          value: 35
        },
        {
          name: 'Oct',
          value: 4
        },
        {
          name: 'Nov',
          value: 17
        },
        {
          name: 'Dec',
          value: 14
        },
        {
          name: 'Jan',
          value: 35
        }
      ]
    },
  ];
  view?: number;
  skills: SkillsElem[] = this.skillsService.skills;
  language: LanguageElem[] = this.skillsService.language;
  constructor(
    private skillsService: SkillsService,
    private dialog: MatDialog
  ) {}
  ngOnInit(): void {}

  onResize(offsetWidth: number): void {
    this.view = offsetWidth;
  }

  addNewSkills(): void {
    let dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;

    dialogConfig = {
      width: '542px',
      // data: this.newSkill
    };
    const dialogref = this.dialog.open(AddNewSkillsComponent, dialogConfig);
  }

  updateSkill(id: number): void {
    let dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;

    dialogConfig = {
      width: '542px',
      data: id
    };
    const dialogref = this.dialog.open(UpdateSkillComponent, dialogConfig);
  }
  chooseLanguage(): void {
    let dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;

    dialogConfig = {
      width: '542px',
    };
    this.dialog.open(ChooseLanguageComponent, dialogConfig);
  }
}

