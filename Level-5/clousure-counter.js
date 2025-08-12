// What’s a closure ?

//     A closure happens when a function “remembers” the variables from the scope where it was created, even after that outer function has finished.

// In this case:

//     We create a variable count inside createCounter.

//     Then we return a function that increments and returns that count.

// That inner function keeps access to count — this is the closure!

function createCounter() {
    let count = 0;

    return function () {
        count++;
        return count;
    };
}

const counter = createCounter();

console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3

const anotherCounter = createCounter();
console.log(anotherCounter()); // 1 (separate instance)
