var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Person = (function () {
    function Person(nid, name, age) {
        this.nid = nid;
        this.name = name;
        this.age = age;
    }
    Person.prototype.getNid = function () {
        return this.nid;
    };
    Person.prototype.setNid = function (nid) {
        this.nid = nid;
    };
    Person.prototype.getName = function () {
        return this.name;
    };
    Person.prototype.setName = function (name) {
        this.name = name;
    };
    Person.prototype.getAge = function () {
        return this.age;
    };
    Person.prototype.setAge = function (age) {
        this.age = age;
    };
    return Person;
}());
var Student = (function (_super) {
    __extends(Student, _super);
    function Student(id, classes, nid, name, age) {
        _super.call(this, nid, name, age);
        this.id = id;
        this.classes = classes;
    }
    Student.prototype.getId = function () {
        return this.id;
    };
    Student.prototype.setId = function (id) {
        this.id = id;
    };
    Student.prototype.getClasses = function () {
        return this.classes;
    };
    Student.prototype.setClasses = function (classes) {
        this.classes = classes;
    };
    return Student;
}(Person));
var Teacher = (function (_super) {
    __extends(Teacher, _super);
    function Teacher(id, grades, classroom, nid, name, age) {
        _super.call(this, nid, name, age);
        this.id = id;
        this.grades = grades;
        this.classroom = classroom;
    }
    Teacher.prototype.getId = function () {
        return this.id;
    };
    Teacher.prototype.setId = function (id) {
        this.id = id;
    };
    Teacher.prototype.getGrades = function () {
        return this.grades;
    };
    Teacher.prototype.setGrades = function (grades) {
        this.grades = grades;
    };
    Teacher.prototype.getClassroom = function () {
        return this.classroom;
    };
    Teacher.prototype.setClassroom = function (classroom) {
        this.classroom = classroom;
    };
    return Teacher;
}(Person));
var student1 = new Student(1, ["matematicas", "español", "biologia"], 123456, "Loki", 20);
var teacher1 = new Teacher(1, ["10", "11"], [1001, 1002, 1101, 1102], 987654, "Odin", 30);
student1.setAge(24);
student1.setName("Thor");
console.log(student1);
console.log(teacher1);
