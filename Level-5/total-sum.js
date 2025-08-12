function sumNumbers(numbers) {
    return numbers.reduce((total, current) => total + current, 0);
}

console.log(sumNumbers([1, 2, 3, 4]));     // 10
console.log(sumNumbers([10, 20, 30]));     // 60
