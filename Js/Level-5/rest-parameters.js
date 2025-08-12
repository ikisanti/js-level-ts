function sumAll(...nums) {
    return nums.reduce((total, current) => total + current, 0);
}

console.log(sumAll(1, 2, 3));        // 6
console.log(sumAll(10, 20, 30, 40)); // 100
console.log(sumAll());              // 0
