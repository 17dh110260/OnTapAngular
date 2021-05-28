
import { TeacherComponent } from './teacher/teacher.component';
import { StudentComponent } from './student/student.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { StudentDetailComponent } from './student/student-detail/student-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/student', pathMatch: 'full' },
  { path: 'student', component: StudentComponent ,children: [
    {path: ':id', component: StudentDetailComponent},
  ]},
  { path: 'teacher', component: TeacherComponent }
]

@NgModule({
  declarations: [],
  imports: [
    //CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
