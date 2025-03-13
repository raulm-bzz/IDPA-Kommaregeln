document.getElementById('loginForm')?.addEventListener('submit', function(event) {
    event.preventDefault();
    localStorage.setItem("loggedInUser", document.getElementById('username').value);
    alert("Login erfolgreich!");
    window.location.href = "index.html";
});

document.getElementById('registerForm')?.addEventListener('submit', function(event) {
    event.preventDefault();
    alert("Registrierung erfolgreich!");
    window.location.href = "login.html";
});
