// Create a debounce function that delays the execution of another function until after a delay has passed without being called again.
// 🧠 Real - world usage:

// Used in:

//     onInput or onKeyUp in search bars

// Scroll / resize event handlers

// Auto - saving after typing stops

function debounce(fn, delay) {
    let timeoutId;

    return function (...args) {
        clearTimeout(timeoutId); // clear the previous timer
        timeoutId = setTimeout(() => {
            fn.apply(this, args); // call the original function after delay
        }, delay);
    };
}

const log = debounce(() => {
    console.log("User stopped typing");
}, 4000);

// Simulate user typing rapidly
log();
log();

//! test in browser
// const log = debounce(() => {
//     console.log("Typing done at:", new Date().toLocaleTimeString());
// }, 2000);

// document.addEventListener("keydown", log);

