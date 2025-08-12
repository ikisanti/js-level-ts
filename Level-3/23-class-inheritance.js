//? Class Inheritance (OOP)
//? Prompt:
//? Create a class Animal with a method speak(). Extend it with a class Dog that overrides speak().

class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        return `${this.name} makes a sound.`;
    }
}

class Dog extends Animal {
    speak() {
        return `${this.name} barks.`;
    }
}

const d = new Dog("Rex");
console.log(d.speak()); // "Rex barks."
