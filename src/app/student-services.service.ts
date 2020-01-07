import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from './Student';
import { Studentlogin } from './studentlogin';

@Injectable({
  providedIn: 'root'
})
export class StudentServicesService {

    private  baseURL:string ="";
  constructor(private http:HttpClient) { }

  getStudent():Observable<Student[]>{
    return this.http.get<Student[]>(this.baseURL);
  }
  createStudent(student:Student){
    return this.http.post(this.baseURL,student);
  }
  studentLogin(login:Studentlogin){
    return this.http.post(this.baseURL,login);
  }
}
