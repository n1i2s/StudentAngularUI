import { Component, OnInit } from '@angular/core';
import { Student } from '../Student';
import { StudentServicesService } from '../student-services.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private srevic:StudentServicesService) { }

  createStudent= new Student();
  ngOnInit() {

  }

  onSubmit(){
  this.srevic.createStudent(this.createStudent);
  }
}
