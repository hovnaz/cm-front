import { Component, OnInit, Input,Output } from '@angular/core';

import { SidenavService } from '@services/sidenav.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  @Input() sidenavValue!: boolean;

  constructor( public sidenavService: SidenavService ) { }

  public sidenavData = this.sidenavService.sidenav;

  ngOnInit(): void {


   }
}
