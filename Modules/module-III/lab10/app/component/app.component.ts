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

    constructor(private studentService: StudentService, private teacherService: TeacherService){}

    //Title variable
    title: string = "Colegio";
    title_student = "Estudiantes";
    title_teacher = "Profesores";

    //Assign arrays to variables 
    students : Student[];
    teachers : Teacher[];

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

//Creation of student array
const STUDENTS: Student[] = [
    {
        id: 1,
        name: "Carlos",
        classes: ["matematicas", "español", "biologia"],
        grade: 11
    },
    {
        id: 2,
        name: "Leonardo",
        classes: ["español", "historia", "quimica"],
        grade: 10
    },
    {
        id: 3,
        name: "Alberto",
        classes: ["biologia", "matematicas", "quimica"],
        grade: 9
    }
];

//Creation of teacher array
const TEACHERS: Teacher[] = [
    {
        id: 1,
        name: "Alejandro",
        classrooms: ["1101","1001","901"],
        grades: [11,10,9]
    },
    {
        id: 2,
        name: "Andres",
        classrooms: ["1101","1001","1002"],
        grades: [11,10]
    },
    {
        id: 3,
        name: "Fernando",
        classrooms: ["901","901","903"],
        grades: [9,10]
    }
];