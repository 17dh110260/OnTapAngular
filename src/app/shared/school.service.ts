
import { EventEmitter, Injectable } from '@angular/core';
import { Student } from './../student/student.model';
@Injectable({
    providedIn: 'root',
    })
export class SchoolService{
    studentSelected = new EventEmitter<Student>();
    private student: Student[] = [
        new Student('17DH110260',"Mẫn",'23/1/1999'),
        new Student('17DH110111',"Lộc",'23/2/1998'),
        new Student('17DH110444',"Hậu",'23/3/1999'),
    ];
    getStudents(){
        return this.student;
    }
    getStudent(index:number){
        return this.student[index];
    }
    addStudent(student: Student){
        this.student.push(student);
    }
}