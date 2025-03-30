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
                "Eigenständiger wird Hepps psychotherapeutische Diagnose des Gegenwartsmenschen dann, wenn er vom Zwang zu Rankings und Bewertungen schreibt und der zugrunde liegenden Steigerungslogik («metrische Neurose»). Oder wenn er die «Erfahrungsgier» analysiert («immoderate Neurose»), deren Gefährlichkeit in der Masslosigkeit liegt, mit der sich der Homo Digitalis seinen Wünschen und Fantasien, seinem Begehren hingibt. Eine Masslosigkeit, an der deshalb so viele kranken, weil die digitale Gesellschaft mit ihrem scheinbar unbegrenzten Angebot an Optionen es dem Menschen so schwer macht, masszuhalten. "},
        9: {name: "Text4", text: "Hepp hat keine wissenschaftliche Studie geschrieben, er ist der Praktiker und berichtet im wörtlichen Sinne aus der Praxis. Die Mehrzahl seiner Klientinnen und Klienten sind junge Erwachsene, Frauen und Männer zwischen 18 und 28 Jahren. In dieser Altersgruppe sei die Dating-Neurose die häufigste Störung: das unkontrollierte Bedürfnis nach rauschhafter Verliebtheit, das ein Engagement für eine dauerhafte Liebesbeziehung verunmögliche. Gepaart sei dieses Zwangsverhalten bezeichnenderweise häufig mit einer generellen Angst, etwas zu verpassen – sei es eine Begegnung, eine ungewöhnliche Erfahrung oder ein prestigeträchtiges Ereignis. Diese «Fear of missing out», kurz Fomo, sei bereits zu einer Art Lebensgefühl geworden in der Generation der jungen Erwachsenen. «Fast sieben von zehn Millennials geben heute in Studien an, unter Fomo zu leiden», sagt Hepp.  \n" +
                "Die Pandemie zeigte: Die Virtualisierung bekommt der Seele des Menschen nicht. \n" +
                "Bei den älteren und den alten Patientinnen und Patienten begegnet der Therapeut häufig der «Isolationsneurose», wie er sagt, das heisst Menschen, die sich trotz aller Vernetztheit und virtueller Präsenz im Netz nicht aus der eigenen Einsamkeit zu befreien vermögen. Schliesslich ist da noch die «Verbitterungsneurose», die offenbar immer öfter am Lebensende des digitalen Menschen steht, insbesondere bei Männern: das krankhafte Kreisen um sich selbst und das Trauern um verpasste Möglichkeiten. Wer darunter leidet, so Hepp, «nimmt das Selbstmitleid ins Grab». "},
        10: {name: "Text5", text: "Zugegeben, die Befunde des Münchner Therapeuten lösen keine grosse Zuversicht aus, was das Seelenwohl der heutigen Gesellschaft anbelangt. Neuste Gesundheitszahlen scheinen indessen seine Sicht zu stützen. In Deutschland lag im Jahr 2022 der Bedarf an Psychotherapie für Kinder und Jugendliche immer noch rund 60 Prozent über dem Niveau von vor der Pandemie; bei den Erwachsenen vermeldet die Deutsche Psychotherapeutenvereinigung einen Wert von 40 Prozent. Zur Situation in der Schweiz berichtet die Föderation der Schweizer Psychologinnen und Psychologen (FSP), dass die Nachfrage bei den Erwachsenen «eher zunehme». «Stark angestiegen» sind die Fallzahlen in der stationären Kinder- und Jugendpsychiatrie. \n" +
                "Maschinen ersetzen Menschen, eine Ursache für das Auftreten der «Isolationsneurose»: Pflegeroboter in einem Altersheim. \n" +
                "Maschinen ersetzen Menschen, eine Ursache für das Auftreten der «Isolationsneurose»: Pflegeroboter in einem Altersheim. \n" +
                "Für Hepp ist klar: «Wir erlebten mit der Pandemie ein Massenexperiment. Es ist deutlich geworden, dass die Virtualisierung des Lebens unserer Psyche nicht bekommt.» Der Verlust an tatsächlichen Kontakten, die Verlagerung von Erlebnissen und Erfahrungen in den digitalen Raum, sei für Kinder und Jugendliche besonders schädlich, da sie im Gegensatz zu Erwachsenen nicht auf einen grossen Fundus real erlebter Ereignisse zurückgreifen könnten. \n" +
                "Der Entzug von sozialen Interaktionen, der Verlust von Begegnungen und Berührungen, wird in der Medizin und der Psychologie Hospitalismus genannt. Wenn Menschen etwa in Spitälern und Heimen vernachlässigt werden, können körperliche, emotionale und soziale Schäden entstehen. Mit der fortschreitenden Virtualisierung der Lebenswelt nehmen tatsächliche Begegnungen und Berührungen zwangsläufig ab – und damit seien ähnliche negative Folgen zu befürchten wie beim Hospitalismus, argumentiert Hepp. "},
        11: {name: "Text6", text: "So ist sein Homo Digitalis womöglich der bislang neurotischste Homo sapiens überhaupt. Ein Super-Neurotiker. Entkörpert, ausgewandert in den Cyberspace, andauernd überfordert von der rasanten Entwicklung, die er selbst losgetreten hat. Für den Therapeuten Hepp gibt es im jüngeren Zivilisationsprozess diese eine Zäsur: 2007 – das Jahr, in dem das Smartphone auf den Markt kam, das iPhone, diese ortsunabhängigen Schnittstellen zur digitalen Welt. «Der Mensch ist für Veränderungen in diesem Tempo nicht gemacht», sagt Hepp, «das ist nichts für biologisch-genetische Anpassungsprozesse.» \n" +
                "Selbstironie als Heilmittel \n" +
                "Hepp belässt es in seinem Buch nicht nur bei Befunden, sondern bemüht sich auch um Lösungsansätze und Empfehlungen. Ein bewussterer Umgang mit digitalen Medien, das Setzen von Prioritäten und Grenzen sowie das Pflegen von echten, zwischenmenschlichen Beziehungen. "},
        12: {name: "Text7", text: "Ebenso spricht Hepp die Bedeutung der Selbstreflexion an. Die eigenen Stärken und Schwächen zu erkennen und zu akzeptieren helfe, sich vom Druck zu befreien, mit anderen mithalten zu müssen. Zur Selbstreflexion gehöre auch die Selbstironie, meint Hepp, «dieser lebenserprobte Realismus, wie ich es gern nenne, ist der Weg heraus aus der Neurose». \n" +
                "Das alles sind keine neuen Rezepte. Aber andere gibt es wohl schlicht nicht. \n" +
                "Übrigens: Der abnorm eifersüchtige Sportschütze, Hepps erster Klient mit einer digitalen Neurose, hatte sich geirrt. Seine Partnerin war ihm treu gewesen, sie hatte ihn an dem Tag mit dem rätselhaften Temperaturanstieg im gemeinsamen Schlafzimmer nicht betrogen. \n" +
                "Doch der Sportschütze verlor sie trotzdem. Als die Frau erfuhr, mit welcher Spionagetechnik ihr Lebenspartner das gemeinsame Haus verwanzt hatte, zog sie aus. Mit den Worten, das alles sei kein Smarthaus. Sondern eine beschissene Stasizentrale. \n" +
                "Johannes Hepp: Die Psyche des Homo Digitalis – 21 Neurosen, die uns im 21. Jahrhundert herausfordern. Wie wir unsere psychische Widerstandskraft stärken und heil durch den digitalen Dschungel finden. Kösel, 416 Seiten, ungefähr 22 Franken. "},
        13: {name: "Text8", text: "Normalerweise wird in Impfstudien die Wirksamkeit eines einzelnen Impfstoffes getestet. Doch nun haben Forscher eine Studie gestartet, in der das Zusammenwirken von zwei Impfstoffen getestet werden soll. Die Wissenschafter wollen ausprobieren, ob man bei einer Impfung gegen Covid-19 für die erste und die zweite Dosis auch zwei verschiedene Vakzine benutzen kann. Das wäre praktisch, weil es bei der herrschenden Impfstoffknappheit die Flexibilität in den Impfprogrammen gegen die Pandemie erhöhen würde. Darüber hinaus könnte diese Strategie auch Vorteile bringen, was die Wirksamkeit angeht.\n" +
                "Im russischen «Sputnik V»-Impfstoff ist das Prinzip schon eingebaut: Die Impfung erfolgt mit zwei Dosen im Abstand von drei Wochen. Dabei werden zwei verschiedene virale Vektoren verwendet. Diese enthalten jeweils die Bauanleitung für das Spikeprotein von Sars-CoV-2. Bei der ersten Dosis ist es ein Adenovirus namens «rAd26», bei der zweiten ein Virus mit Namen «rAd5». Ein Ziel solcher sogenannten heterologen Prime-Boost-Schemata ist es, der Immunität gegen den Vektor selbst auszuweichen. Ein Problem bei dieser Impfstofftechnologie ist nämlich, dass das Immunsystem nicht nur eine Abwehr gegen Sars-CoV-2 entwickelt, sondern auch eine gegen den viralen Vektor. Dies kann die Wirksamkeit der zweiten Dosis herabsetzen.\n" +
                "Breite der Immunreaktion\n" +
                "Das ist aber nicht der einzige «immunologische» Vorteil, den eine solche Impfstrategie bringen könne, erklärt Christian Münz von der Universität Zürich. Wie er und seine Kollegen an einem Nicht-Covid-19-Impfstoff zeigen konnten, lässt sich durch die Wahl der verwendeten Vakzine auch die Breite der Immunreaktion beeinflussen."},
        14: {name: "Text9", text: "In ihrer Studie benutzten die Wissenschafter dazu zwei unterschiedliche virale Vektoren, die den Impfstoff in die Zellen einschleusten. Der eine löste eine stärkere Reaktion bei CD4-positiven T-Helferzellen und Antikörpern aus, der andere mehr sogenannte CD8-positive T-Killerzellen. Die University of Oxford, die an der Untersuchung in Grossbritannien beteiligt ist, habe auf diesem Gebiet grosse Erfahrung, so Münz.\n" +
                "Dort will man prüfen, wie die Impfstoffe von Pfizer/Biontech und Oxford/AstraZeneca zusammenwirken. Gemeinsam ist beiden Impfungen nur das eigentliche Ziel, gegen das die Impfung das Immunsystem mobilisieren will: das Spikeprotein von Sars-CoV-2. Es wird einmal in Form eines RNA-Bauplans und das andere Mal mithilfe eines viralen Vektors in Form von DNA in die Zelle gebracht.\n" +
                "Verschiedene Impf-Abstände\n" +
                "Untersucht werden sollen verschiedene Ansätze: die «sortenreine» Impfung (als Kontrolle) und die Mischung der beiden Vakzine – mal mit dem einen, mal mit dem anderen Impfstoff zuerst. Schliesslich will man alle Schemata noch mit verschiedenen Impfabständen zwischen der ersten und der zweiten Dosis testen: mit vier oder mit zwölf Wochen. Die Wirkung der verschiedenen Varianten soll mit serologischen Untersuchungen im Labor bestimmt werden, man rechnet mit einer Laufzeit der Studie von dreizehn Monaten.\n" +
                "Die Forscher betonen, dass währenddessen im offiziellen Programm weiterhin nach Herstellerangaben geimpft wird. Sollten sich vielversprechende Resultate ergeben, werde die Arzneimittelbehörde sie formell untersuchen, bevor Änderungen für Patienten eingeführt würden, schreibt das National Institute for Health Research."},
        15: {name: "Text10", text: "Die eisigen Temperaturen sind selbst für Chicago extrem. Nicht umsonst wird die Stadt am Michigan-See «Windy City» genannt – einerseits wegen des steifen Windes, der hier «Hawk» genannt wird, nach dem Falken mit seinem scharfen Schnabel, andererseits wegen der Mafia-Vergangenheit, die der Stadt bis heute einen «windigen» Ruf verpasst.\n" +
                "Eigentlich ist man ganz froh um die Corona-Gesichtsmasken; sie schützen Mund und Nase. Manche tragen Balaklawa-Wollmützen – Sturmhauben, die zwar praktisch sind, aber einen wie ein Bankräuber aussehen lassen. Überhaupt wirken die Pandemie und die Kälte zusammen. Bei den eisigen Temperaturen bleibt man ohnehin zu Hause, selbst wenn die Restaurants und die Museen jetzt nach und nach wieder öffnen. Einige Cafés haben Plastikverschläge mit Wärmelampen auf dem Gehsteig aufgestellt; aber wer irgendwie kann, trinkt seinen Kaffee lieber zu Hause.\n" +
                "Bei den Metrostationen gibt es jeweils einen Unterstand mit Wärmelampen, die man per Knopfdruck einschalten kann. Allerdings ist er klein, und wegen Covid-19 scheuen sich die Passagiere, sich dort allzu zahlreich zusammenzudrängen. Normalerweise sind die öffentlichen Bibliotheken, die es in jedem Quartier gibt, während der härtesten Winterwochen beliebte Rückzugsorte. Wegen Corona sind sie nun jedoch geschlossen. Immerhin gibt es sogenannte Wärmezentren, wo sich vor allem Obdachlose für einige Zeit aufwärmen können. Für sie ist das oft eine Frage von Leben und Tod."},
        16: {name: "Text9", text: "" },
        17: {name: "Text10", text: "" },
        18: {name: "Text9", text: "" },
        19: {name: "Text10", text: "" },
        20: {name: "Text9", text: "" },

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
