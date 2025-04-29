document.addEventListener("DOMContentLoaded", () => {
    const textArea = document.getElementById("sentence");
    const feedback = document.getElementById("feedback");

    function test(description, fn) {
        try {
            fn();
            console.log("Test erfolgreich: " + description);
        } catch (error) {
            console.error("Test fehlgeschlagen: " + description);
            console.error(error);
        }
    }

    function simulateKeydown(key, valueBeforeCursor = ",", cursorPos = 1) {
        const event = new KeyboardEvent("keydown", {
            key: key,
            bubbles: true,
            cancelable: true
        });

        textArea.value = valueBeforeCursor;
        textArea.selectionStart = cursorPos;
        textArea.selectionEnd = cursorPos;

        let prevented = false;
        const originalPreventDefault = event.preventDefault.bind(event);
        event.preventDefault = () => { prevented = true; originalPreventDefault(); };

        textArea.dispatchEvent(event);
        return prevented;
    }

    function checkSentence(userInput, correctText, textArea, feedback) {
        const correctCommas = correctText.split("").filter(c => c === ",").length;
        const userCommas = userInput.split("").filter(c => c === ",").length;
        const missingCommas = correctCommas - userCommas;
        const extraCommas = userCommas - correctCommas;

        if (userInput === correctText) {
            textArea.style.border = "2px solid green";
            feedback.style.color = "green";
            feedback.textContent = "Alles korrekt!";
            return true;
        }

        textArea.style.border = "2px solid red";
        feedback.style.color = "red";

        if (missingCommas > 0 && extraCommas > 0) {
            feedback.textContent = `Du hast ${extraCommas} Komma(s) zu viel und es fehlen noch ${missingCommas}.`;
        } else if (missingCommas > 0) {
            feedback.textContent = `Es fehlen noch ${missingCommas} Komma(s).`;
        } else if (extraCommas > 0) {
            feedback.textContent = `Du hast ${extraCommas} Komma(s) zu viel.`;
        }

        return false;
    }

    function setTextAreaAndCheck(userInput, correctText) {
        textArea.value = userInput;
        return checkSentence(userInput, correctText, textArea, feedback);
    }

    // Eingabe-Tests
    test("Komma darf eingegeben werden", () => {
        const result = simulateKeydown(",");
        if (result) throw new Error("Komma wurde blockiert");
    });

    test("Buchstabe darf nicht eingegeben werden", () => {
        const result = simulateKeydown("a");
        if (!result) throw new Error("Buchstabe wurde erlaubt");
    });

    test("Backspace auf Komma erlaubt", () => {
        const result = simulateKeydown("Backspace", ",", 1);
        if (result) throw new Error("Backspace auf Komma wurde blockiert");
    });

    test("Backspace auf Buchstabe blockiert", () => {
        const result = simulateKeydown("Backspace", "a", 1);
        if (!result) throw new Error("Backspace auf Buchstabe wurde erlaubt");
    });

    test("Navigationstaste erlaubt", () => {
        const result = simulateKeydown("ArrowLeft");
        if (result) throw new Error("Navigation wurde blockiert");
    });

    // Satzprüfungs-Tests
    test("Satz mit richtigen Kommas wird akzeptiert", () => {
        const result = setTextAreaAndCheck(
            "Ich mag Äpfel, Birnen und Bananen.",
            "Ich mag Äpfel, Birnen und Bananen."
        );
        if (!result) throw new Error("Richtiger Satz wurde als falsch erkannt");
    });

    test("Satz ohne Kommas wird abgelehnt", () => {
        const result = setTextAreaAndCheck(
            "Ich mag Äpfel Birnen und Bananen.",
            "Ich mag Äpfel, Birnen und Bananen."
        );
        if (result) throw new Error("Falscher Satz wurde als richtig erkannt");
    });

    test("Satz mit zu vielen Kommas wird abgelehnt", () => {
        const result = setTextAreaAndCheck(
            "Ich mag, Äpfel, Birnen, und, Bananen.",
            "Ich mag Äpfel, Birnen und Bananen."
        );
        if (result) throw new Error("Satz mit zu vielen Kommas wurde als richtig erkannt");
    });
});
