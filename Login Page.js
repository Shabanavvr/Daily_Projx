const form = document.getElementById('login-form');
const errorMessage = document.getElementById('error-message');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === '' || password === '') {
        errorMessage.textContent = 'Please fill in both fields.';
    } else if (username !== 'admin' || password !== 'password') {
        errorMessage.textContent = 'Invalid username or password.';
    } else {
        // Login successful, redirect to dashboard page
        window.location.href = 'dashboard.html';
    }
});
