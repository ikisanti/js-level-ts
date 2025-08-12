//! 01-repeat-word
//? Create a function in JavaScript that receives an array of strings 
//? and returns an object with the number of times each word is repeated.'

let word = "hola pollo loco hola"
const words = word.split(" ")

const mapCounter = new Map()

const arrayStrings = (_words) => {
    for (const _word of _words) {
        if (mapCounter.has(_word)) {
            mapCounter.set(_word, mapCounter.get(_word) + 1)
        } else {
            mapCounter.set(_word, 1);
        }
        console.log(mapCounter)
        //Map(3) { 'hola' => 2, 'pollo' => 1, 'loco' => 1 }
    }
    return Object.fromEntries(mapCounter); //{ hola: 2, pollo: 1, loco: 1 }
}

console.log(arrayStrings(words))


