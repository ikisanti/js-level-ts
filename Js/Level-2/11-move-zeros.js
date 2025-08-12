//! 11. move-zero
//? Create a function that receives an array of numbers and returns a new array with all zeros moved to the end, 
//? while keeping the order of non - zero elements.

//? Input
//? [0, 1, 0, 3, 12]
//? Expected output
//? [1, 3, 12, 0, 0]

const moveZeros = (arr) => {
    const nonZeros = arr.filter(n => n !== 0);
    const zeros = arr.filter(n => n === 0);
    return [...nonZeros, ...zeros];
};

console.log(moveZeros([0, 1, 0, 3, 12])); // [1, 3, 12, 0, 0]
