//! Scope

function myFunction() {
    let message = "Hello from inside!"; // This variable is in function scope
    console.log(message); // Works fine
}

myFunction(); // Output: Hello from inside!

console.log(message); // Error: message is not defined (outside the scope)