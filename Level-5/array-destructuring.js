function logArrayParts(arr) {
    const [first, second, ...rest] = arr;
    console.log("First:", first);
    console.log("Second:", second);
    console.log("Rest:", rest);
}

logArrayParts([10, 20, 30, 40, 50]);
// First: 10
// Second: 20
// Rest: [30, 40, 50]
