import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecurringExpensesComponent } from './recurring-expenses.component';

describe('RecurringExpensesComponent', () => {
  let component: RecurringExpensesComponent;
  let fixture: ComponentFixture<RecurringExpensesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecurringExpensesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecurringExpensesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
