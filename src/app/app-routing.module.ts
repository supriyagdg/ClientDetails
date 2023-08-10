import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './myComponents/login/login.component';
import { DashboardComponent } from './myComponents/dashboard/dashboard.component';
import { FormComponent } from './myComponents/form/form.component';
import { DetailedInfoComponent } from './myComponents/detailed-info/detailed-info.component';

const routes: Routes = [
  {path:"", component:LoginComponent},
  {path:"dashboard", component:DashboardComponent},
  {path:"form", component:FormComponent},
  {path:"detailInfo/:info", component:DetailedInfoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
