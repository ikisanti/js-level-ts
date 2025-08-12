
//! Fisher Yates
const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};

const myArray = ["apple", "banana", "cherry", "date", "elderberry"];
const shuffledArray = shuffle(myArray);

console.log(shuffledArray);