class Person {
	nid: number;
	name: string;
	age: number;

	constructor(nid: number, name: string, age:number){
		this.nid = nid;
		this.name = name;
		this.age = age;
	}

	getNid(): number{
		return this.nid;
	}

	setNid(nid: number): void{
		this.nid = nid;
	}

	getName(): string{
		return this.name;
	}

	setName(name: string): void{
		this.name = name;
	}

	getAge(): number{
		return this.age;
	}

	setAge(age: number): void{
		this.age = age;
	}
}

class Student extends Person {
	id: number;
	classes: Array<string>;
	
	constructor(id: number, classes: Array<string>, nid: number, name: string, age:number){
		super(nid,name,age);
		this.id = id;
		this.classes = classes;
	}

	getId(): number{
		return this.id;
	}

	setId(id: number): void{
		this.id = id;
	}

	getClasses(): Array<string>{
		return this.classes;
	}

	setClasses(classes: Array<string>){
		this.classes = classes;
	}
}

class Teacher extends Person {
	id: number;
	grades: Array<string>;
	classroom: Array<number>;

	constructor(id: number, grades: Array<string>, classroom: Array<number>,nid: number, name: string, age:number){
		super(nid,name,age);
		this.id = id;
		this.grades = grades;
		this.classroom = classroom;
	}

	getId(): number{
		return this.id;
	}

	setId(id: number): void{
		this.id = id;
	}

	getGrades(): Array<string>{
		return this.grades;
	}

	setGrades(grades: Array<string>){
		this.grades = grades;
	}

	getClassroom(): Array<number>{
		return this.classroom;
	}

	setClassroom(classroom: Array<number>){
		this.classroom = classroom;
	}
}

var student1 = new Student(1, ["matematicas","español","biologia"],123456, "Loki",20);
var teacher1 = new Teacher(1, ["10","11"],[1001,1002,1101,1102],987654,"Odin", 30);

student1.setAge(24);
student1.setName("Thor");

console.log(student1);
console.log(teacher1);
