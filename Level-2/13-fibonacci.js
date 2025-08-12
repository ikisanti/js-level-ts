//! 13-fibonacci
// Fibonacci Sequence up to N(JS)

// Prompt:
// Create a function that returns an array with the first n numbers of the Fibonacci sequence.

// Input: n = 6
// Output: [0, 1, 1, 2, 3, 5]

const fibonacci = (n) => {
    if (n === 0) return [];
    if (n === 1) return [0];

    const result = [0, 1];

    for (let i = 2; i < n; i++) {
        result.push(result[i - 1] + result[i - 2]);
    }

    return result;
};

console.log(fibonacci(6)); // [0, 1, 1, 2, 3, 5]
