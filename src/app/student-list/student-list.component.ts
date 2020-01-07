import { Component, OnInit } from '@angular/core';
import { StudentServicesService } from '../student-services.service';
import { Student } from '../Student';


@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  students=[];
  constructor(private studentService:StudentServicesService) { }

  ngOnInit() {
   this.studentService.getStudent().subscribe(data=>this.students=data);
  }

}
