//! 06-flattened-arrays
//? "Create a function that receives a nested array and returns it flattened, 
//? without using.flat() or external libraries."

//*-----------------------------------------------------------------
// const flatten = (array) => {
//     const result = [];
//     for (const item of array) {
//         if (Array.isArray(item)) {
//             result.push(...flatten(item)); // spread para expandir
//         } else {
//             result.push(item);
//         }
//     }
//     return result;
// };

// console.log(flatten(nested)); // [1, 2, 3, 4, 5, 6]
//*-----------------------------------------------------------------

const nested = [1, [2, [3, 4], 5], 6];

const flatten = (array) =>
    array.reduce(
        (acc, item) => acc.concat(Array.isArray(item) ? flatten(item) : item),
        []
    );


console.log(flatten(nested)); // [1, 2, 3, 4, 5, 6]
console.log(nested.flat(3))
