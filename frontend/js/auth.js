const backend = "http://localhost:5000//backend"

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('registerForm')?.addEventListener('submit', async function(event) {
        event.preventDefault();
        const username = document.getElementById('regUsername').value
        const password = document.getElementById('regPassword').value
        try {
            // schike daten an die backend api
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
                // falls error mit registrierung (z.B. username schon vergeben)
                const error = await response.json();
                alert('Error: ' + error.message);
            }
        } catch (error) {
            console.log('Error: ' + error.message);
            alert('Registration failed, please try again.');
        }
    })

    document.getElementById('loginForm')?.addEventListener('submit', async function(event) {
        event.preventDefault();
        const username = document.getElementById('username').value
        const password = document.getElementById('password').value

        const response = await fetch("http://localhost:5000/api/users/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password }),
        });

        const data = await response.json();
        if (response.ok) {
            localStorage.setItem("token", data.token); //speichert session token
            window.location.href = "index.html";
        } else {
            alert(data.error || "Fehler beim Login");
        }
    });

})
