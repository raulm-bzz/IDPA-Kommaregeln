function parseJwt(token) {
    try {
        return JSON.parse(atob(token.split('.')[1]));
    } catch (e) {
        console.error("Fehler beim Parsen des Tokens", e);
        return null;
    }
}

document.addEventListener("DOMContentLoaded", async () => {
    const token = localStorage.getItem("token");
    const usernameSpan = document.getElementById("username");
    const resultsSpan = document.getElementById("results");
    if (!token) {
        usernameSpan.textContent = "Nicht eingeloggt";
        return;
    }



    const payload = parseJwt(token);
    const userId = payload?.userId;
    console.log(payload);

    if (!username) {
        usernameSpan.textContent = "Unbekannt";
        return;
    }

    try {
        const response = await fetch(`http://localhost:5000/api/users/${userId}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        if (response.ok) {
            console.log(response);
            const user = await response.json();
            usernameSpan.textContent = user.username;
            //get the completed exercises
            console.log(user.completedExercises)
            resultsSpan.textContent = user.completedExercises
        } else {
            usernameSpan.textContent = "Fehler beim Laden";
        }
    } catch (error) {
        console.error("Fehler beim Abrufen des Benutzers:", error);
        usernameSpan.textContent = "Serverfehler";
    }
});