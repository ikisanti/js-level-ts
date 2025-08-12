//? Currying Sum Function
//? Prompt:
//? Write a function so that calling `sum(2)(3)` returns 5.

function sum(a) {
    return function (b) {
        return a + b;
    };
}

console.log(sum(2)(3)); // 5
