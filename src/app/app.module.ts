import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './myComponents/dashboard/dashboard.component';
import { LoginComponent } from './myComponents/login/login.component';
import { TableModule } from 'primeng/table';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { FormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { SelectButtonModule } from 'primeng/selectbutton';
import { ButtonModule } from 'primeng/button';
import { SidebarComponent } from './myComponents/sidebar/sidebar.component';
import { FormComponent } from './myComponents/form/form.component';
import {HttpClientModule} from '@angular/common/http';
import { DetailedInfoComponent } from './myComponents/detailed-info/detailed-info.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    SidebarComponent,
    FormComponent,
    DetailedInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TableModule,
    ConfirmPopupModule,
    FormsModule,
    DialogModule,
    SelectButtonModule,
    ButtonModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
