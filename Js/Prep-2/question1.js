//? 1. What Are Classes in JavaScript?
//! Classes in JS are templates for creating objects with shared behavior.
//* Code Reusability, clear structure, oop principles, better for complex systems.

// class Dog {
//     constructor(name) {
//         this.name = name
//     }

//     bark() {
//         console.log(`${this.name} says woaf!`)
//     }

// }

// const kindWolf = new Dog('kindWolf')
// kindWolf.bark()
// const siberianDog = new Dog('Siberian')
// siberianDog.bark()

//! -------------wrong use-------------- //

function createDog(name) {
    return {
        name: name,
        // Using 'name' directly (closure)
        barkWithClosure: function () {
            console.log(`${name} says woaf!`);
        },
        // Using 'this.name' (object property)
        barkWithThis: function () {
            console.log(`${this.name} says woaf!`);
        }
    };
}

const dog = createDog('Buddy');

dog.barkWithClosure(); // Buddy says woaf!
dog.barkWithThis();    // Buddy says woaf!

const anotherDog = { name: 'Max', bark: dog.barkWithThis };
anotherDog.bark();     // Max says woaf! (uses this.name)

// They use the prototype chain under the hood.