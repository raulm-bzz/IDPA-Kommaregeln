const backend = "http://localhost:5000//backend"

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('registerForm')?.addEventListener('submit', async function(event) {
        console.log("asdasd")
        event.preventDefault();
        const username = document.getElementById('regUsername').value
        const password = document.getElementById('regPassword').value
        try {
            // send the data to the backend API
            const response = await fetch('http://localhost:5000/api/users/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, password })
            });
            if (response.ok) {
                const result = await response.json();
                alert('Registration successful!');
                console.log('User registered:', result);
                window.location.href = '/IDPA-Kommaregeln/frontend/login.html';
            } else {
                // If there was an error with the registration (e.g., username already taken)
                const error = await response.json();
                alert('Error: ' + error.message);
            }
        } catch (error) {
            console.log('Error: ' + error.message);
            alert('Registration failed, please try again.');
        }
    })

    document.getElementById('loginForm')?.addEventListener('submit', function(event) {
        event.preventDefault();
        localStorage.setItem("loggedInUser", document.getElementById('username').value);
        alert("Login erfolgreich!");
        window.location.href = "index.html";
    });

})
