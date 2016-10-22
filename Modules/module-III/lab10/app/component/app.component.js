"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var student_service_1 = require('../service/student.service');
var teacher_service_1 = require('../service/teacher.service');
var AppComponent = (function () {
    function AppComponent(studentService, teacherService) {
        this.studentService = studentService;
        this.teacherService = teacherService;
        //Title variable
        this.title = "Colegio";
        this.title_student = "Estudiantes";
        this.title_teacher = "Profesores";
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.studentService.getStudents()
            .then(function (students) { return _this.students = students; })
            .catch(function (error) { return console.log(error); });
        this.teacherService.getTeachers()
            .then(function (teachers) { return _this.teachers = teachers; })
            .catch(function (error) { return console.log(error); });
    };
    AppComponent.prototype.onSelectStudent = function (student) {
        this.selected_student = student;
    };
    AppComponent.prototype.onSelectTeacher = function (teacher) {
        this.selected_teacher = teacher;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/templates/school.html',
            providers: [student_service_1.StudentService, teacher_service_1.TeacherService]
        }), 
        __metadata('design:paramtypes', [student_service_1.StudentService, teacher_service_1.TeacherService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//Creation of student array
var STUDENTS = [
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
var TEACHERS = [
    {
        id: 1,
        name: "Alejandro",
        classrooms: ["1101", "1001", "901"],
        grades: [11, 10, 9]
    },
    {
        id: 2,
        name: "Andres",
        classrooms: ["1101", "1001", "1002"],
        grades: [11, 10]
    },
    {
        id: 3,
        name: "Fernando",
        classrooms: ["901", "901", "903"],
        grades: [9, 10]
    }
];
//# sourceMappingURL=app.component.js.map