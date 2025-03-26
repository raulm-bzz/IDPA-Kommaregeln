document.addEventListener("DOMContentLoaded", function () {
    const aufgaben = {
        1: { name: "Kommas bei Aufzählungen", text: "Ich mag Äpfel, Birnen und Bananen." },
        2: { name: "Kommas vor Konjunktionen", text: "Ich mag es zu lesen, aber nicht zu schreiben." },
        3: { name: "Kommas in Nebensätzen", text: "Wenn ich Zeit habe, gehe ich ins Kino." },
        4: { name: "Komplexe Satzstrukturen", text: "Obwohl es regnete, gingen wir spazieren, weil es schön war." },
        5: {
            name: "Lange Aufgabe mit mehreren Kommas",
            text: "Als ich gestern nach Hause kam, sah ich, dass die Tür offen stand, das Licht brannte, und niemand zu Hause war, also rief ich sofort die Polizei an."
        },
        6: {
            name: "Lange Aufgabe mit mehreren Kommas 2",
            text: "Als ichich gestern nach Hause kam, sah ich, dass die Tür offen stand, das Licht brannte, und niemand zu Hause war, also rief ich sofort die Polizei an."
        }
    };

    const params = new URLSearchParams(window.location.search);
    const taskId = params.get("task");
    const textArea = document.getElementById("sentence");
    const checkButton = document.getElementById("check");
    const submitButton = document.getElementById("submit");
    const feedback = document.getElementById("feedback");

    const solutionButton = document.createElement("button");
    solutionButton.textContent = "Lösung anzeigen";
    solutionButton.style.display = "none";
    solutionButton.style.marginTop = "10px";
    solutionButton.style.padding = "10px";
    solutionButton.style.background = "red";
    solutionButton.style.color = "white";
    solutionButton.style.border = "none";
    solutionButton.style.cursor = "pointer";

    document.querySelector(".container").appendChild(solutionButton);

    let correctText = "";
    let attempts = 1; // Startwert ist 1

    if (taskId && aufgaben[taskId]) {
        document.getElementById("task-title").textContent = aufgaben[taskId].name;
        correctText = aufgaben[taskId].text;
        textArea.value = correctText.replace(/,/g, ""); // Entfernt Kommas für die Übung
    }

    function checkSentence() {
        const userInput = textArea.value.trim();
        const correctCommas = correctText.split("").filter(c => c === ",").length;
        const userCommas = userInput.split("").filter(c => c === ",").length;
        const missingCommas = correctCommas - userCommas;
        const extraCommas = userCommas - correctCommas;

        if (userInput === correctText) {
            textArea.style.border = "2px solid green";
            feedback.style.color = "green";
            feedback.textContent = "✅ Alles korrekt! Super gemacht!";
            return true;
        }

        textArea.style.border = "2px solid red";
        feedback.style.color = "red";

        if (missingCommas > 0 && extraCommas > 0) {
            feedback.textContent = `❌ Du hast ${extraCommas} Komma(s) zu viel und es fehlen noch ${missingCommas} Komma(s). Versuche es nochmal!`;
        } else if (missingCommas > 0) {
            feedback.textContent = `❌ Es fehlen noch ${missingCommas} Komma(s). Versuch es nochmal!`;
        } else if (extraCommas > 0) {
            feedback.textContent = `❌ Du hast ${extraCommas} Komma(s) zu viel. Versuch es nochmal!`;
        }

        return false;
    }

    checkButton.addEventListener("click", function () {
        if (!checkSentence()) {
            attempts++; // Zählt nur falsche Versuche
        }

        if (attempts >= 3) {
            solutionButton.style.display = "block";
        }
    });

    solutionButton.addEventListener("click", function () {
        feedback.innerHTML = `✅ Hier ist die richtige Lösung:<br><b>${correctText}</b>`;
        feedback.style.color = "green";
        textArea.style.border = "2px solid green";
        solutionButton.style.display = "none";
    });

    submitButton.addEventListener("click", function () {
        if (!confirm("Bist du sicher, dass du abgeben möchtest?")) {
            return; // Falls "Abbrechen" geklickt wird, passiert nichts
        }

        const isCorrect = checkSentence();

        if (!isCorrect) {
            feedback.innerHTML = "❌ <b>Die Aufgabe wurde nicht richtig gelöst.</b>";
            feedback.style.color = "red";
            textArea.style.border = "2px solid red";
            return; // Abgabe wird blockiert, wenn es noch falsch ist
        }

        if (attempts === 1) {
            localStorage.setItem("finalResult", "perfect");
        } else if (attempts <= 3) {
            localStorage.setItem("finalResult", "good");
        } else {
            localStorage.setItem("finalResult", "fail");
        }

        localStorage.setItem("attempts", attempts);
        localStorage.setItem("taskId", taskId);
        window.location.href = "auswertung.html";
    });
});
