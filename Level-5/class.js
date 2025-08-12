class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    introduce() {
        return `Hi, my name is ${this.name} and I'm ${this.age} years old.`;
    }
}

const p1 = new Person("Alice", 30);
console.log(p1.introduce()); // Hi, my name is Alice and I'm 30 years old.

const p2 = new Person("Bob", 22);
console.log(p2.introduce()); // Hi, my name is Bob and I'm 22 years old.
