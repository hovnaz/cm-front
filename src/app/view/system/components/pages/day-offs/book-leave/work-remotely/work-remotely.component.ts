import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-remotely',
  templateUrl: './work-remotely.component.html',
  styleUrls: ['./work-remotely.component.scss']
})
export class WorkRemotelyComponent implements OnInit {

  @Input() displaySelectedWorkRemotelyDate: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
