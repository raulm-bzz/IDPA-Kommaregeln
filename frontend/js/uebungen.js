document.addEventListener("DOMContentLoaded", function() {
    const leicht = [
        { id: 1, name: "Kommas bei Aufzählungen" },
        { id: 2, name: "Kommas vor Konjunktionen" }
    ];

    const schwer = [
        { id: 3, name: "Kommas in Nebensätzen" },
        { id: 4, name: "Komplexe Satzstrukturen" },
        { id: 5, name: "Lange Aufgabe mit mehreren Kommas" } // Neue große Aufgabe
    ];

    function erstelleButtons(liste, containerId) {
        const container = document.getElementById(containerId);
        liste.forEach(aufgabe => {
            const button = document.createElement("div");
            button.classList.add("task-button");
            button.textContent = aufgabe.name;
            button.addEventListener("click", function() {
                window.location.href = `trainer.html?task=${aufgabe.id}`;
            });
            container.appendChild(button);
        });
    }

    erstelleButtons(leicht, "leicht-list");
    erstelleButtons(schwer, "schwer-list");
});
