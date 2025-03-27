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
        6: { name: "Text1", text: "IT-Fachmann von Beruf, hatte er seine Freundin in der gemeinsamen Wohnung mit Mikrofonen, Kameras und Temperatursensoren überwacht, immer in der Angst, sie würde ihm untreu werden. Schliesslich schloss er, schon halb im Wahn, aus einem im Schlafzimmer von Sensoren protokollierten Temperaturanstieg, seine Partnerin habe ihn mit einem anderen Mann im Doppelbett betrogen. Denn für mittags um zwölf zeigten seine Daten eine um vier Grad höhere Temperatur als üblich – an einem Tag, an dem er auf Dienstreise war. Das schien ihm Beweis genug für einen Seitensprung. \n" +
                "Aber irgendwie schaffte er es, seine Waffe doch nicht auf sich selbst zu richten. Er suchte vielmehr nach Hilfe und klopfte an die Tür der Praxis von Johannes Hepp, Psychoanalytiker und Buchautor in München. «Das war die erste digitale Neurose, die ich behandelte», sagt Hepp im Gespräch. Und fügt an: «Jedes Jahr werden es mehr.» " },
        7: { name: "Text2", text: "Digitale Neurosen? Was soll an Neurosen, wörtlich «Nervenkrankheit», seit Sigmund Freud als seelische Störung bekannt, neu sein? Und was erst digital? \n" +
                "«Sicher, die Neurosen an sich sind nicht neu», sagt Hepp, «ihre Auslöser allerdings oft schon – und die digitalen Mechanismen, welche die Störungen befeuern, ebenfalls.» Der Fall des Sportschützen sei nur ein Beispiel dafür, wie Netztechnologie und Digitallifestyle ein neurotisches Verhalten entstehen lassen, um es schliesslich in eine destruktive Obsession zu verwandeln. \n" +
                "Hepp fasst den Begriff der Neurose sehr weit, das räumt er ein. In seiner Praxis kämpfe er als Therapeut gegen Abhängigkeiten, Süchte, Kontrollzwänge, Ängste, verzerrte Körperbilder oder sexuelle Frustrationen. Dabei blickt er in die Abgründe von uns Online-Existenzen. «Gegenwartsneurosen» nennt Hepp diese Störungen auch, letztlich alle eine «Überkompensation» der psychischen Belastung durch die Digitalwirtschaft. "},
        8: {name: "Text3", text: "Es kommt ein eindrücklicher Katalog des digitalen Zwangsverhaltens zusammen. Der exzessive Konsum von Onlinepornografie, die Pornosucht also. Oder das Verhaltensmuster, das Hepp die «Profilneurose» nennt: die neurotische Abhängigkeit vom eigenen Profil im Netz und vom Erfolg dieser Selbstinszenierung auf sozialen Plattformen. Hinzu kommt der Einzigartigkeitszwang, das krankhafte Bestreben, etwas Besonderes zu sein. Das virtuelle Profil, die Identität im Netz, so schreibt Hepp, «ähnelt dem spiegelnden Teich, in dem der mythologische Narziss sich selbst betrachtet». \n" +
                "\n" +
                "Eigenständiger wird Hepps psychotherapeutische Diagnose des Gegenwartsmenschen dann, wenn er vom Zwang zu Rankings und Bewertungen schreibt und der zugrunde liegenden Steigerungslogik («metrische Neurose»). Oder wenn er die «Erfahrungsgier» analysiert («immoderate Neurose»), deren Gefährlichkeit in der Masslosigkeit liegt, mit der sich der Homo Digitalis seinen Wünschen und Fantasien, seinem Begehren hingibt. Eine Masslosigkeit, an der deshalb so viele kranken, weil die digitale Gesellschaft mit ihrem scheinbar unbegrenzten Angebot an Optionen es dem Menschen so schwer macht, masszuhalten. "}
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
