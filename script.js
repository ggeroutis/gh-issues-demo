// Wait for the HTML elements to load, then find the login form
document.getElementById('loginForm').addEventListener('submit', function(event) {
    // Prevent the default form submission to handle validation first
    event.preventDefault();

    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const errorBox = document.getElementById('error-box');

    // Simple front-end validation
    if (!email || !password) {
        showError("Please fill out all required fields.");
        return;
    }

    if (password.length < 6) {
        showError("Password must be at least 6 characters long.");
        return;
    }

    // If validation passes, hide error box and act on success
    errorBox.style.display = 'none';
    alert("Validation successful! Submitting credentials:\nEmail: " + email);
    
    // To allow the form to submit to your real backend URL, un-comment the line below:
    // this.submit();
});

// Helper function to display errors dynamically
function showError(message) {
    const errorBox = document.getElementById('error-box');
    errorBox.textContent = message;
    errorBox.style.display = 'block';
}
