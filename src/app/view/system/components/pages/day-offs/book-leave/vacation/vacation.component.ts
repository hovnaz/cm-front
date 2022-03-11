import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-vacation',
  templateUrl: './vacation.component.html',
  styleUrls: ['./vacation.component.scss']
})
export class VacationComponent implements OnInit {

  @Input() displaySelectedDateRange: any;

  constructor() { }

  ngOnInit(): void {
  }

}
