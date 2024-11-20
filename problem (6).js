function validateForm(email, password, confirmPassword) {
    let isValid = true;

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(email)) {
        console.log("Please enter a valid email address.");
        isValid = false;
    } else if (!email) {
        console.log("All fields are required.");
        isValid = false;
    } else if (!password) {
        console.log("Password fields are required.");
        isValid = false;
    } else if (!confirmPassword) {
        console.log("Confirm Password fields are required.");
        isValid = false;
    } else if (password.length < 8) {
        console.log("Password must be at least 8 characters long.");
        isValid = false;
    } else if (!/[A-Z]/.test(password)) {
        console.log("Password must contain at least one uppercase letter.");
        isValid = false;
    } else if (!/\d/.test(password)) {
        console.log("Password must contain at least one number.");
        isValid = false;
    } else if (password !== confirmPassword) {
        console.log("Passwords do not match.");
        isValid = false;
    }

    if (isValid) {
        console.log({ email, password, confirmPassword });
    }
    return isValid;
}

const email = "test@example.com";
const password = "Password1";
const confirmPassword = "Password1";
validateForm(email, password, confirmPassword);