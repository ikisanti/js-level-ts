//? Debounce Input Event (Performance / DOM)
//? Prompt:
//? Create an input field and log the value, but only after the user has stopped typing for 500ms.
//? Use a custom debounce() function.

function debounce(fn, delay) {
    let timeout;
    return (...args) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => fn(...args), delay);
    };
}

const input = document.querySelector("#search");
input.addEventListener("input", debounce((e) => {
    console.log("Searching for:", e.target.value);
}, 500));
