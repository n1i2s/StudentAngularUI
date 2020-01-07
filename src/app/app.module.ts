import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { StudentListComponent } from './student-list/student-list.component';
import{FormsModule}from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StudentServicesService } from './student-services.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    StudentListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,

  ],
  providers: [StudentServicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
