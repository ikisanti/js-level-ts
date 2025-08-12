function filterEvens(numbers) {
    return numbers.filter(num => num % 2 === 0);
}


console.log(filterEvens([1, 2, 3, 4, 5]));      // [2, 4]
console.log(filterEvens([10, 15, 20, 25]));     // [10, 20]
