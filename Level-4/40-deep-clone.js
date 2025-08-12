//? Deep Clone Object
//? Prompt:
//? Write a function to deeply clone a nested object without using JSON.parse/stringify.

function deepClone(obj) {
    if (obj === null || typeof obj !== "object") return obj;

    if (Array.isArray(obj)) {
        return obj.map(deepClone);
    }

    const result = {};
    for (let key in obj) {
        result[key] = deepClone(obj[key]);
    }
    return result;
}

// Test
const original = { a: 1, b: { c: 2 } };
const copy = deepClone(original);
copy.b.c = 99;
console.log(original.b.c); // 2 (not 99)
