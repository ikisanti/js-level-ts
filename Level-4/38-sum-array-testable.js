//? Sum Array (Testable Function)
//? Prompt:
//? Create a function sum(arr) that returns the total. Write 3 test cases manually.

function sum(arr) {
    return arr.reduce((acc, val) => acc + val, 0);
}

// Test Cases
console.assert(sum([1, 2, 3]) === 6, "Test 1 failed");
console.assert(sum([-1, -2, -3]) === -6, "Test 2 failed");
console.assert(sum([]) === 0, "Test 3 failed");
