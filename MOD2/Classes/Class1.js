class Student {
    constructor(name, dept) {
        this.name = name;
        this.dept = dept;
    }

    detail() {
        console.log(`My name is ${this.name} and my dept is ${this.dept}`);
    }
}

class Exam extends Student {
    constructor(name, dept, grade) {
        super(name, dept);
        this.examGrade = grade; // Renamed property to avoid conflict
    }

    grade() {
        console.log(`I received this grade ${this.examGrade}`); // Renamed method to avoid conflict
    }
}

var obj = new Exam('Arjun', 'Cyber Security and IOT', 'S');
obj.detail();
obj.grade();
