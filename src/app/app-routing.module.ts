import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
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
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
