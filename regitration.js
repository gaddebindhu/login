document.getElementById('registration-form').addEventListener('submit', function (e) {
    e.preventDefault();

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    // Error message element
    const errorMessage = document.getElementById('error-message');

    // Basic form validation
    if (name === "" || email === "" || password === "" || confirmPassword === "") {
        errorMessage.textContent = "All fields are required!";
        return;
    }

    // Email validation using regular expression
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        errorMessage.textContent = "Please enter a valid email address!";
        return;
    }

    // Password confirmation validation
    if (password !== confirmPassword) {
        errorMessage.textContent = "Passwords do not match!";
        return;
    }

    // If everything is valid
    errorMessage.textContent = "";
    alert("Registration successful!");

    // Optionally, you can clear the form here if you want
    document.getElementById('registration-form').reset();
});