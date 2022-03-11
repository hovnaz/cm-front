import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SidenavItemPossitionPipe } from '@pipes/sidenavItemPossition';

import { SystemComponent } from './system.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { SystemRoutingModule } from './system-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { HolidaysComponent } from './components/pages/holidays/holidays.component';
import { RecurringExpensesComponent } from './components/pages/settings/recurring-expenses/recurring-expenses.component';
import { SidenavMenuItemComponent } from './components/sidenav/sidenav-menu-item/sidenav-menu-item.component';
import { ProjectsComponent } from './components/pages/projects/projects/projects.component';
import { EventsComponent } from './components/pages/events/events.component';
import { EventModal } from './components/pages/events/create-event-modal/event-modal.component';
import { FormsModule, ReactiveFormsModule, } from '@angular/forms';
import { AngularMaterialModule } from './angular-material.module';
import { SkillsComponent } from './components/pages/skills/skills.component';
import {NgxChartsModule} from "@swimlane/ngx-charts";
import {MatDialogModule} from "@angular/material/dialog";
import {AddNewSkillsComponent} from "./components/pages/add-new-skills/add-new-skills.component";

@NgModule({
  declarations: [
    SystemComponent,
    SidenavComponent,
    HeaderComponent,
    RecurringExpensesComponent,
    SidenavMenuItemComponent,
    SidenavItemPossitionPipe,
    ProjectsComponent,
    HolidaysComponent,
    EventsComponent,
    EventModal,
    SkillsComponent,
    AddNewSkillsComponent
  ],
  imports: [
    CommonModule,
    SystemRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    NgxChartsModule,
    MatDialogModule,
  ],
  providers: [

  ]
})
export class SystemModule { }
