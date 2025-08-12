//? Filter Object Values
//? Prompt:
//? Given an object, return a new object with only the properties whose values are of type string.

function filterStrings(obj) {
    const result = {};
    for (let key in obj) {
        if (typeof obj[key] === "string") {
            result[key] = obj[key];
        }
    }
    return result;
}

console.log(filterStrings({ name: "Ana", age: 30, role: "dev" }));
// → { name: "Ana", role: "dev" }
