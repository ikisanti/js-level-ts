function invertArray(arr) {
    return [...arr].reverse();
}

function invertObject(obj) {
    const inverted = {};
    for (let key in obj) {
        inverted[obj[key]] = key;
    }
    return inverted;
}

console.log(invertArray([1, 2, 3])); // [3, 2, 1]
console.log(invertObject({ a: 1, b: 2 })); // { 1: 'a', 2: 'b' }
