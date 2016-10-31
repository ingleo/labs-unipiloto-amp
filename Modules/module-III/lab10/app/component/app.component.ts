import { Component, OnInit } from '@angular/core';
import { Student } from '../model/student';
import { Teacher } from '../model/teacher';
import { StudentService } from '../service/student.service';
import { TeacherService } from '../service/teacher.service';

@Component({
    selector: 'my-app',
    templateUrl: 'app/templates/school.html',
    providers: [StudentService, TeacherService]
})

export class AppComponent implements OnInit{

     //Title variable
    title: string = "Colegio";
    title_student = "Estudiantes";
    title_teacher = "Profesores";

    //Assign arrays to variables 
    students : Student[];
    teachers : Teacher[];

    constructor(private studentService: StudentService, private teacherService: TeacherService){}

    ngOnInit(){
		this.studentService.getStudents()
		.then(students => this.students = students)
		.catch(error => console.log(error));

        this.teacherService.getTeachers()
		.then(teachers => this.teachers = teachers)
		.catch(error => console.log(error));
	}

    selected_student: Student;
    selected_teacher: Teacher;

    onSelectStudent(student: Student){
        this.selected_student = student;
    }

    onSelectTeacher(teacher: Teacher){
        this.selected_teacher = teacher;
    }
}