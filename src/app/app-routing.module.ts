import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Week1Component } from './component/week1/week1.component';
import { Week2Component } from './component/week2/week2.component';

const routes: Routes = [
  {
    path: 'week1',
    component: Week1Component,
  },
  {
    path: 'week2',
    component: Week2Component,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
