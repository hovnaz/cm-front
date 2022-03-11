import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewSkillsComponent } from './add-new-skills.component';

describe('SkillsComponent', () => {
  let component: AddNewSkillsComponent;
  let fixture: ComponentFixture<AddNewSkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNewSkillsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
