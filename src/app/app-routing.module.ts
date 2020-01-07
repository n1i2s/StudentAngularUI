import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { StudentListComponent } from './student-list/student-list.component';

const routes: Routes = [
  {
    path:'login',component:LoginComponent
  },
  {
    path:'student/create',component:RegistrationComponent
  },
  {
    path:'student',component:StudentListComponent
  },
  {
    path:' ',redirectTo:'/login',pathMatch:'full'
  },
  {
    path:'**',component:LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
