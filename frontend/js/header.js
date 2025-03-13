document.addEventListener("DOMContentLoaded", function() {
    fetch("header.html")
        .then(response => response.text())
        .then(data => {
            document.body.insertAdjacentHTML("afterbegin", data);
            updateHeader();
        });
});

function updateHeader() {
    const userLoggedIn = localStorage.getItem("loggedInUser"); // Check ob User eingeloggt ist
    const loginLink = document.getElementById("loginLink");

    if (userLoggedIn) {
        loginLink.textContent = "👤 Account";
        loginLink.href = "account.html";
    }
}
