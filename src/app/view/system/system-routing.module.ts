import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SystemComponent } from './system.component';
import { ProjectsComponent } from './components/pages/projects/projects/projects.component';
import { HolidaysComponent } from './components/pages/holidays/holidays.component';
import { EventsComponent } from './components/pages/events/events.component';
import {SkillsComponent} from "./components/pages/skills/skills.component";


const routes: Routes = [{
  path: '', component: SystemComponent, children: [
    {path: 'projects/projects', component: ProjectsComponent},

    {path: 'projects/industries', loadChildren: () => import('./components/pages/projects/industries/industries.module')
      .then((m) => m.IndustriesModule)
    },
    {
      path: 'day-offs-and-vacation',
      loadChildren: () => import('./components/pages/day-offs/day-offs.module').then(m => m.DayOffsModule)
    },
    // {path: 'day-offs-and-vacation', component: DayOffsComponent},
    {path: 'holidays', component: HolidaysComponent},
    {path: 'events', component: EventsComponent},
    {path: 'skills', component: SkillsComponent}
  ]
}];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SystemRoutingModule { }
