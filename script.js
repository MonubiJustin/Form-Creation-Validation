document.addEventListener("DOMContentLoaded", () => {
    // form and feedback selection

    const form = document.getElementById("registration-form");
    const feedbackDiv = document.getElementById("form-feedback");

    // form submission handler
    form.addEventListener("submit", (event) => {
        event.preventDefault();

        // retrieve and trim user inputs
        const username = document.getElementById("username").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();

        // initialize validation variables
        let isValid = true;
        const messages = [];

        // username validation
        if (username.length < 3) {
            isValid = false
            messages.push("Username must be at least 3 characters long.")
        }

        // Email Validation
        if (!email.includes("@") || !email.includes(".")) {
            isValid = false
            messages.push("Please enter a valid email address")
        }

        // password validation
        if (password.length < 8) {
            isValid = false
            messages.push("Password must be at least 8 characters long.")
        }

        // Display feedback
        feedbackDiv.style.display = "block";

        if (isValid) {
            feedbackDiv.textContent = "Registration successful"
            feedbackDiv.style.color = "#28a745"
        } else {
            feedbackDiv.innerHTML = messages.join("<br>")
            feedbackDiv.style.color = "#dc3545"
        }
    })
})