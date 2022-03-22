import {Component, Inject, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {SkillsService} from '../../../../../core/services';
import {FormArray, FormBuilder, FormControl, FormGroup} from '@angular/forms';


@Component({
  selector: 'app-choose-language',
  templateUrl: './choose-language.component.html',
  styleUrls: ['./choose-language.component.scss']
})
export class ChooseLanguageComponent implements OnInit {
  language = this.skillsService.language;
  private langTemp = {...this.language};
  form: FormGroup;


  constructor(
    private skillsService: SkillsService,
    public dialogRef: MatDialogRef<ChooseLanguageComponent>,
    private fb: FormBuilder
  ) {

    this.form = fb.group({
      skills: new FormArray([])
    });
  }
  ngOnInit(): void {
  }

  choose(value: any): void {
  }

  onCheckboxChange(id: number) {
    const skill = this.langTemp[id];
    skill.selected = !skill.selected;
    console.log(id);
  }
  submit() {
    // this.language = {...this.langTemp};
    // console.log(this.form.value);
  }
}

