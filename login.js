// SWITCH BETWEEN LOGIN & SIGNUP
document.getElementById("showSignup").addEventListener("click", () => {
    document.getElementById("loginContainer").style.display = "none";
    document.getElementById("signupContainer").style.display = "block";
});

document.getElementById("showLogin").addEventListener("click", () => {
    document.getElementById("signupContainer").style.display = "none";
    document.getElementById("loginContainer").style.display = "block";
});

//PASSWORD CHECK (LOGIN)

document.querySelector("#loginForm #password").addEventListener("input", function () {
    const pass = this.value.trim();
    const error = document.getElementById("loginPassError");

    if (pass.length === 0) {
        error.textContent = "";
        return;
    }

    if (pass.length < 6) {
        error.textContent = "Password is too short (must be exactly 6 characters)";
    } else if (pass.length > 6) {
        error.textContent = "Password is too long (must be exactly 6 characters)";
    } else {
        error.textContent = "";
    }
});


// PASSWORD CHECK (SIGNUP)

document.querySelector("#signupForm #signupPassword").addEventListener("input", function () {
    const pass = this.value.trim();
    const error = document.getElementById("signupPassError");

    if (pass.length === 0) {
        error.textContent = "";
        return;
    }

    if (pass.length < 6) {
        error.textContent = "Password is too short (must be exactly 6 characters)";
    } else if (pass.length > 6) {
        error.textContent = "Password is too long (must be exactly 6 characters)";
    } else {
        error.textContent = "";
    }
});

// LOGIN SUBMIT VALIDATION

document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const role = document.getElementById("role").value;
    const message = document.getElementById("message");

    message.style.color = "red";

    if (username === "") {
        message.textContent = "Please enter your username.";
        return;
    }

    if (password.length !== 6) {
        message.textContent = "Password must be exactly 6 characters.";
        return;
    }

    if (role === "") {
        message.textContent = "Please select your role.";
        return;
    }

    // ✅ Frontend success
    message.style.color = "green";
    message.textContent = "Login successful!";
});

// SIGNUP SUBMIT VALIDATION
document.getElementById("signupForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("signupUsername").value.trim();
    const password = document.getElementById("signupPassword").value.trim();
    const role = document.getElementById("signupRole").value;
    const message = document.getElementById("signupMessage");

    message.style.color = "red";

    if (username === "") {
        message.textContent = "Username cannot be empty.";
        return;
    }

    if (password.length !== 6) {
        message.textContent = "Password must be exactly 6 characters.";
        return;
    }

    if (role === "") {
        message.textContent = "Please select your role.";
        return;
    }

    // ✅ Success message
    message.style.color = "green";
    message.textContent = "Account created successfully! Redirecting...";

    setTimeout(() => {
        document.getElementById("signupContainer").style.display = "none";
        document.getElementById("loginContainer").style.display = "block";
    }, 2000);
});
