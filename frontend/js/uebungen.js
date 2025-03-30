document.addEventListener("DOMContentLoaded", function() {
    const einfuehrung = [
        { id: 1, name: "Kommas bei Aufzählungen" },
        { id: 2, name: "Kommas vor Konjunktionen" },
        { id: 3, name: "Kommas in Nebensätzen" },
        { id: 4, name: "Komplexe Satzstrukturen" },
        { id: 5, name: "Lange Aufgabe mit mehreren Kommas" },
    ];


    const training = [
        { id: 6, name: "Text1" },
        { id: 7, name: "Text2" },
        { id: 8, name: "Text3" },
    ];

    const weitere = [
        { id: 9, name: "Text4" },
        { id: 10, name: "Text5" },
        { id: 11, name: "Text6" },
        { id: 12, name: "Text7" },
        { id: 13, name: "Text8" },
        { id: 14, name: "Text9" },
        { id: 15, name: "Text10" },
    ];

    const training2 = [
        { id: 16, name: "GrosserText1" },
        { id: 17, name: "GrosserText2" },
    ];

    const weitere2 = [
        { id: 18, name: "GrosserText3" },
        { id: 19, name: "GrosserText4" },
        { id: 20, name: "GrosserText5" },
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

    erstelleButtons(einfuehrung, "einfuehrung-list");
    erstelleButtons(training, "training-list");
    erstelleButtons(weitere, "weitere-list");
    erstelleButtons(training2, "training-list2");
    erstelleButtons(weitere2, "weitere-list2");
});
