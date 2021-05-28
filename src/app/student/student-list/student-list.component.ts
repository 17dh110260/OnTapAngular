import { SchoolService } from './../../shared/school.service';
import { Component, Input, OnInit } from '@angular/core';
import { Student } from '../student.model';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  students: Student[];

  constructor(private studentService: SchoolService) { }

  ngOnInit(): void {
    this.students = this.studentService.getStudents();
  }

}
