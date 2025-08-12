//? Closure Counter (Testable)
//? Prompt:
//? Create a closure-based counter with .inc() and .get() methods.

function createCounter() {
    let count = 0;
    return {
        inc: () => count++,
        get: () => count
    };
}

// Testable
const counter = createCounter();
counter.inc();
counter.inc();
console.log(counter.get()); // 2
