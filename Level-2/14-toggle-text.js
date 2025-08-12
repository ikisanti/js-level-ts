//! 14-toggle-text
//? Toggle Text Visibility(DOM)

//? Prompt:
//? Create a button that toggles the visibility of a paragraph.
//? The button should switch between "Show Details" and "Hide Details".

const button = document.querySelector("#toggle-btn");
const paragraph = document.querySelector("#details");

button.addEventListener("click", () => {
    const isHidden = paragraph.style.display === "none";

    paragraph.style.display = isHidden ? "block" : "none";
    button.textContent = isHidden ? "Hide Details" : "Show Details";
});
