//? Validate Login (DOM + Logic)
//? Prompt:
//? Create a form with username and password. When clicking "Login", check if they match hardcoded values.
//? If invalid, show an error message.

document.querySelector("#login-form").addEventListener("submit", (e) => {
    e.preventDefault();

    const user = document.querySelector("#user").value;
    const pass = document.querySelector("#pass").value;
    const msg = document.querySelector("#message");

    if (user === "admin" && pass === "1234") {
        msg.textContent = "✅ Login successful";
        msg.style.color = "green";
    } else {
        msg.textContent = "❌ Invalid credentials";
        msg.style.color = "red";
    }
});
