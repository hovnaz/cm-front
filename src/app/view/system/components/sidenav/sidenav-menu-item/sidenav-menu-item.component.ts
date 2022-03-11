import { Component, EventEmitter, OnInit, Input, Output, OnChanges, SimpleChanges } from '@angular/core';
import { SidenavElem } from '@models/sidenav';

import { SidenavService } from 'src/app/core/services/sidenav.service';
@Component({
  selector: 'app-sidenav-menu-item',
  templateUrl: './sidenav-menu-item.component.html',
  styleUrls: ['./sidenav-menu-item.component.scss']
})
export class SidenavMenuItemComponent implements OnInit {
  @Input('sidenav') hideItem!: boolean;
  @Input() item!: SidenavElem;
  @Output() toggle: EventEmitter<any> = new EventEmitter();

  constructor( public sidenavService: SidenavService ) { }

  openChild(): void{
    this.toggle.emit(this.item);
  }

  ngOnInit(): void {}

}
