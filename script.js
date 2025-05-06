
// Add event listeners for login and signup forms
if (document.getElementById('login-form')) {
    document.getElementById('login-form').addEventListener('submit', (e) => {
        e.preventDefault();
        // Add authentication logic here
        window.location.href = 'index.html'; // Redirect to main page
    });
}

if (document.getElementById('signup-form')) {
    document.getElementById('signup-form').addEventListener('submit', (e) => {
        e.preventDefault();
        // Add user registration logic here
        window.location.href = 'index.html'; // Redirect to main page
    });
}