//? Count Occurrences (Algorithm)
//? Prompt:
//? Count how many times each element appears in an array. Return an object with the result.

function countOccurrences(arr) {
    return arr.reduce((acc, el) => {
        acc[el] = (acc[el] || 0) + 1;
        return acc;
    }, {});
}

console.log(countOccurrences(["a", "b", "a", "c", "b", "a"]));
// → { a: 3, b: 2, c: 1 }
