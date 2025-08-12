//! 02-unique-numbers
//? "Create a function that receives an array of numbers 
//? and returns a new array with only the unique numbers (no repetitions), 
//? in the same order in which they first appear."


const uniqueNumbers = (array) => {
    // return Array.from(new Set(array))
    const noRepeat = new Set(array)
    return [...noRepeat]
}

console.log(uniqueNumbers([4, 5, 6, 4, 2, 5, 1]))
