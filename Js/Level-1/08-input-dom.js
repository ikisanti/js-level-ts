//! 08-input-dom
//? Create a small HTML form with two fields: email and password.
//? When you click the submit button, validate with JavaScript that:
//? The email field is not empty and is a valid email address.
//? The password field has at least 6 characters.
//? 📌 If validation fails, display a message below the corresponding field.
//? 📌 If everything is valid, display an alert with Login successful.
//? Requirements:
//? Do not use required or HTML5 validation.
//? Use querySelector, addEventListener, and DOM manipulation.
//? You must display errors directly below the input if they exist.

document.querySelector("#login-form").addEventListener("submit", function (e) {
    e.preventDefault(); // Avoid automatic form sending

    const email = document.querySelector("#email").value.trim(),
        password = document.querySelector("#password").value.trim(),
        emailError = document.querySelector("#email-error"),
        passwordError = document.querySelector("#password-error")

    // Clear
    emailError.textContent = "";
    passwordError.textContent = "";

    let valid = true;

    // Check email
    if (email === "") {
        emailError.textContent = "Email is required.";
        valid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
        emailError.textContent = "Email is invalid.";
        valid = false;
    }

    // Check password
    if (password.length < 6) {
        passwordError.textContent = "Password must be at least 6 characters.";
        valid = false;
    }

    if (valid) {
        alert("Login successful");
    }
});
