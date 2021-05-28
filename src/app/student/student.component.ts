import { SchoolService } from './../shared/school.service';
import { Component, OnInit } from '@angular/core';
import { Student } from './student.model';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
  providers: [SchoolService]
})
export class StudentComponent implements OnInit {
  students :Student
  constructor(private studentService: SchoolService) { }
//   selectedStudent: Student;

  ngOnInit(): void {
    /* this.studentService.studentSelected.subscribe((student: Student) => {
      this.selectedStudent = student;
    }) */
  }

}
