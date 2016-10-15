interface Person {
	nid: number;
	name: string;
	age: number;

	getNid(): number;
	getName(): string;
	getAge(): number;

	setNid(nid:number): void;
	setName(name:string): void;
	setAge(age:number): void;
}

class Student implements Person{
	nid: number;
	name: string;
	age: number;

	constructor(){}

	getNid(): number{
		return this.nid;
	}
	getName(): string{
		return this.name;
	};
	getAge(): number{
		return this.age;
	};

	setNid(nid: number): void{
		this.nid = nid;
	}
	setName(name: string): void{
		this.name = name;
	}
	setAge(age:number): void{
		this.age = age;
	}
}

class Teacher implements Person{
	nid: number;
	name: string;
	age: number;

	constructor(){}

	getNid(): number{
		return this.nid;
	}
	getName(): string{
		return this.name;
	};
	getAge(): number{
		return this.age;
	};

	setNid(nid: number): void{
		this.nid = nid;
	}
	setName(name: string): void{
		this.name = name;
	}
	setAge(age:number): void{
		this.age = age;
	}
}

var student = new Student();
var teacher = new Teacher();


student.setAge(55);

teacher.setAge(65);


console.log(student.getAge());
console.log(teacher.getAge());
