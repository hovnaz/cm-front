import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DayOffsComponent } from './day-offs.component';

const routes: Routes = [{
  path: '', component: DayOffsComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DayOffsRoutingModule { }
