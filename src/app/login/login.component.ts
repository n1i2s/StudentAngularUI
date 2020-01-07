import { Component, OnInit } from '@angular/core';
import { Studentlogin } from '../studentlogin';
import { StudentServicesService } from '../student-services.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  response: Object;
  

  constructor(private service:StudentServicesService) { }
  studentlogin= new Studentlogin("","");

  ngOnInit() {
   
  }

  login(){
    this.service.studentLogin(this.studentlogin).subscribe(data=>this.response=data);
    console.log(this.studentlogin);
  }
}
