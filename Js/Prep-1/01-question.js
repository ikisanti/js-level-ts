//! Diference between var and let

/*
? var

- Exists since the beginning of JavaScript.
- Function-scoped or globally scoped.
- Can be redeclared in the same scope.
- Can cause unexpected behavior due to hoisting and lack of block scope.
*/

//! Example 1: var
var stringVar = 'name';
console.log("Outside before block:", stringVar); // 🔸 "name"

if (true) {
    var string = 'full name'; // This REDECLARES the same variable!
    console.log("Inside block:", stringVar); // 🔸 "full name"
}

console.log("Outside after block:", stringVar); // 🔸 "full name" → was overwritten!


/*
? let

- Introduced in ES6 (2015).
- Block-scoped: Only accessible within the block ({}) where it is defined.
- Cannot be redeclared in the same scope.
- Good for safer, cleaner variable declarations.
*/

//! Example 2: let
let stringLet = 'name';
console.log("Outside before block:", stringLet); // 🟢 name

if (true) {
    let stringLet = 'full name'; // This is a new variable within the block
    console.log("Inside block:", stringLet); // 🟢 full name
}

console.log("Outside after block:", stringLet); // 🟢 name → original value preserved


/*
🎯 Summary Table:

| Feature           | var                        | let                         |
|------------------|----------------------------|-----------------------------|
| Scope            | Function / Global          | Block `{}`                  |
| Redeclaration    | ✅ Yes                     | ❌ No                       |
| Hoisting         | ✅ Yes (as undefined)      | ✅ Yes (but not usable before) |
| Safer to use     | ❌ No (can cause bugs)     | ✅ Yes                      |
*/

//! Recommendation:
// Use `let` instead of `var` to avoid unexpected behavior and make your code more predictable.


{
    var a = 1; // global or function-scoped
    let b = 2; // block-scoped
}
//console.log(a); // ✅ 1
//console.log(b); // ❌ ReferenceError: b is not defined

