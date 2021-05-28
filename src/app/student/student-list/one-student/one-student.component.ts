import { Component, Input, OnInit } from '@angular/core';
import { SchoolService } from 'src/app/shared/school.service';
import { Student } from '../../student.model';

@Component({
  selector: 'app-one-student',
  templateUrl: './one-student.component.html',
  styleUrls: ['./one-student.component.css']
})
export class OneStudentComponent implements OnInit {

  @Input() students: Student;
  @Input() index: number;
  constructor(private studentService: SchoolService) { }

  ngOnInit(): void {
  
  }
  onSelected(){
    this.studentService.studentSelected.emit(this.students);
  }
}
