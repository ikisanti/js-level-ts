// 🎯 Goal:

// Create a Student class that extends the Person class.

//     It should add a course property.

//     Override the introduce() method to also mention the course.

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    introduce() {
        return `Hi, my name is ${this.name} and I'm ${this.age} years old.`;
    }
}

class Student extends Person {
    constructor(name, age, course) {
        super(name, age); // Call the parent constructor
        this.course = course;
    }

    introduce() {
        return `${super.introduce()} I'm studying ${this.course}.`;
    }
}


const s1 = new Student("Emma", 21, "Web Development");
console.log(s1.introduce());
// Output: Hi, my name is Emma and I'm 21 years old. I'm studying Web Development.
