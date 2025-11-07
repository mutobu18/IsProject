document.getElementById('signupForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    const role = document.getElementById('role').value;
    const message = document.getElementById('signupMessage');

    // Username: only letters (no digits/symbols)
    const usernamePattern = /^[A-Za-z]+$/;
    // Password: exactly 4 digits
    const passwordPattern = /^\d{4}$/;

    if (!usernamePattern.test(username)) {
        message.style.color = 'red';
        message.textContent = 'Username must contain only letters (A–Z).';
        return;
    }

    if (!passwordPattern.test(password)) {
        message.style.color = 'red';
        message.textContent = 'Password must be exactly 4 digits.';
        return;
    }

    if (!role) {
        message.style.color = 'red';
        message.textContent = 'Please select your role.';
        return;
    }
    // Simulate successful registration
    message.style.color = 'green';
    message.textContent = `Account created successfully for ${role}! Redirecting...`;
    // Redirect to login after 2 seconds
    setTimeout(() => {
        window.location.href = 'login.html';
    }, 2000);
});
