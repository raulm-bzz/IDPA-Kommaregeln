document.addEventListener("DOMContentLoaded", function () {
    const resultMessage = document.getElementById("result-message");
    const attemptsInfo = document.getElementById("attempts-info");

    const finalResult = localStorage.getItem("finalResult");
    let attempts = parseInt(localStorage.getItem("attempts"), 10);

    // Falls attempts NaN ist oder kleiner als 1, setze es auf 1
    if (isNaN(attempts) || attempts < 1) {
        attempts = 1;
    }

    if (attempts === 1) {
        resultMessage.innerHTML = " <b>Sehr gut!</b> Du hast alles auf Anhieb richtig gemacht!";
        resultMessage.style.color = "green";
        attemptsInfo.textContent = `Du hast die Aufgabe in ${attempts} Versuch(en) gelöst. Perfekt!`;
    } else if (attempts <= 3) { // 2 oder 3 Versuche = Gut
        resultMessage.innerHTML = " <b>Gut!</b> Du hast es mit ein paar Versuchen geschafft.";
        resultMessage.style.color = "orange";
        attemptsInfo.textContent = `Du hast insgesamt ${attempts} Mal überprüft, bevor du alles richtig hattest.`;
    } else {
        resultMessage.innerHTML = " <b>Versuche es später noch einmal.</b>";
        resultMessage.style.color = "red";
        attemptsInfo.textContent = `Du hast die Aufgabe ${attempts} Mal überprüft, aber sie war nicht korrekt.`;
    }

    localStorage.clear(); // Daten nach der Anzeige löschen
});
