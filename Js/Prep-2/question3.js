//! What is a clousure
//a function inside another function, the inner function can 
// still use the variables from the outer function, 
// even if the outer function has already finished running. 
// This lets you "save" data for later use.


function outer() {
    let message = "Hello, closure!";
    function inner() {
        console.log(message);
    }
    return inner;
}

const greet = outer();
console.log(greet)
greet(); // Output: Hello, closure!

//!--------- state ------------------//
function counter() {
    let count = 0;

    return function () {
        count++;
        console.log(count);
    };
}

const increment = counter();
increment(); // 1
increment(); // 2
increment(); // 3

//!--------- no state------------------//
function brokenCounter() {
    let count = 0;
    count++; // increase once
    return function () {
        console.log(count); // always logs 1
    };
}

const wrong = brokenCounter();
wrong(); // 1
wrong(); // 1 ❌ no state

