//? Closure Counter (Functions)
//? Prompt:
//? Create a function `createCounter` that returns a function that increments and returns a counter every time it's called.
//? Example:
//? const counter = createCounter();
//? counter(); // 1
//? counter(); // 2

function createCounter() {
    let count = 0;
    return function () {
        return ++count;
    };
}

const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3
