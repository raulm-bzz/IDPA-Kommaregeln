document.addEventListener("DOMContentLoaded", async function () {

    const params = new URLSearchParams(window.location.search);
    const taskID = params.get("task") //get the taskID
    const textArea = document.getElementById("sentence");
    const checkButton = document.getElementById("check");
    const submitButton = document.getElementById("submit");
    const feedback = document.getElementById("feedback");
    const saveButton = document.getElementById("save");

    const solutionButton = document.createElement("button");
    solutionButton.textContent = "Lösung anzeigen";
    solutionButton.style.display = "none";
    solutionButton.style.marginTop = "10px";
    solutionButton.style.padding = "10px";
    solutionButton.style.background = "red";
    solutionButton.style.color = "white";
    solutionButton.style.border = "none";
    solutionButton.style.cursor = "pointer";

    const continueButton = document.createElement("button");
    continueButton.textContent = "Weiter";
    continueButton.style.display = "none";
    continueButton.style.marginTop = "10px";
    continueButton.style.padding = "10px";
    continueButton.style.background = "black";
    continueButton.style.color = "white";
    continueButton.style.border = "none";
    continueButton.style.cursor = "pointer";

    document.querySelector(".container").appendChild(solutionButton);
    document.querySelector(".container").appendChild(continueButton);

    let correctText = "";
    let attempts = 1; // Startwert ist 1
    const maxAttempts = 3 // Maximale Überprüfungen

    // Text aussuchen
    const response = await fetch(`http://localhost:5000/api/exercises/${taskID}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
    });

    if (!response.ok) {
        console.error("Fetch error:", response.statusText);
        return;
    }
    const exercise = await response.json();

    document.getElementById("task-title").textContent = exercise.name;
    correctText = exercise.text
    textArea.value = correctText.replace(/,/g, ""); // Entfernt Kommas für die Übung

    // Verhindert Eingabe aller Zeichen ausser kommas (+Navigation)
    textArea.addEventListener("keydown", function (event) {
        const allowedKeys = ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"];

        if (allowedKeys.includes(event.key)) return;

        // Wenn nicht komma oder löschen dann preventen
        if (event.key !== "," && event.key !== "Backspace" && event.key !== "Delete") {
            event.preventDefault();
        }

        // Löschen nur erlauben, wenn ein komma gelöscht wird
        if ((event.key === "Backspace") && textArea.value[textArea.selectionStart - 1] !== ",") {
            event.preventDefault();
        }
    });


    function checkSentence() {
        const userInput = textArea.value.trim();
        const correctCommas = correctText.split("").filter(c => c === ",").length;
        const userCommas = userInput.split("").filter(c => c === ",").length;
        const missingCommas = correctCommas - userCommas;
        const extraCommas = userCommas - correctCommas;

        if (userInput === correctText) {
            textArea.style.border = "2px solid green";
            feedback.style.color = "green";
            feedback.textContent = " Alles korrekt! Super gemacht!";
            return true;
        }

        textArea.style.border = "2px solid red";
        feedback.style.color = "red";

        if (userCommas === correctCommas) {
            feedback.textContent = ` Du hast die richtige Anzahl an Kommas aber sind sind sie Korrekt?.`;
        } else if (missingCommas > 0) {
            feedback.textContent = ` Es fehlen noch ${missingCommas} Komma(s).`;
        } else if (extraCommas > 0) {
            feedback.textContent = ` Du hast ${extraCommas} Komma(s) zu viel.`;
        }

        return false;
    }
    checkButton.addEventListener("click", function () {

        if (!checkSentence()) {
            attempts++; // Zählt nur falsche Versuche
        }
        else if (checkSentence()) {
            return
        }

        if (attempts > maxAttempts) {
            checkButton.disabled = true; // Deaktiviert den Überprüfen-Button
            checkButton.style.opacity = "0.5"; // Macht ihn visuell grau
        }
    });

    solutionButton.addEventListener("click", function () {
        feedback.innerHTML = `✅ Hier ist die richtige Lösung:<br><b>${correctText.replace(/,/g, '<span style="color: red;">,</span>')}</b>`;
        feedback.style.color = "green";
        textArea.style.border = "2px solid green";
        solutionButton.style.display = "none";
    });

    continueButton.addEventListener("click", function () {
        // Save the exercise
        window.location.href = "index.html";
    });

    saveButton.addEventListener("click", function () {
        // Save the exercise
        window.location.href = "index.html";
    });

    submitButton.addEventListener("click", function () {
        if (!confirm("Bist du sicher, dass du abgeben möchtest?")) {
            return; // Falls "Abbrechen" geklickt wird, passiert nichts
        }

        const isCorrect = checkSentence()

        textArea.disabled = true

        continueButton.style.display = "block";
        solutionButton.style.display = "block"
        submitButton.disabled = true;
        submitButton.style.opacity = "0.5";
        checkButton.disabled = true;
        checkButton.style.opacity = "0.5";
        saveButton.disabled = true;
        saveButton.style.opacity = "0.5";

        if (!isCorrect) {
            feedback.style.color = "red";
            textArea.style.border = "2px solid red";
            return; // Abgabe wird blockiert, wenn es noch falsch ist
        }


        localStorage.setItem("attempts", attempts);
        localStorage.setItem("taskId", taskId);
        window.location.href = "auswertung.html";

    });
});
