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
        16: {name: "Text9", text: "Ein Freund hatte Geburtstag, am 6. Februar, es gab aber keine Party, was ich sehr bedauerte, denn je älter man wird, desto mehr sollte man die Feste feiern. Also stellte ich mir die Geburtstagsparty meines Freundes eben vor, denn sich Dinge vorzustellen ist im Grunde recht mühelos und vor allem: gratis. Nicht selten ist zudem die Vorstellung von etwas sogar schöner als die Wirklichkeit.\n" +
                "Genauer stellte ich mir vor, wie mein Freund Menschen zu seinem Geburtstag einlädt, die alle am selben Tag wie er zur Welt gekommen sind. Und da es sich um reine Vorstellung handelte, spielte es auch keine Rolle, ob diese Menschen noch leben oder schon tausend Jahre unter der Erde liegen, denn es ist eine Tatsache: Es gibt mehr interessante Tote als Lebende.\n" +
                "Ich schlich mich also an die imaginäre Party der am 6. Februar Geborenen und sah gleich beim Eingang Bernhard von Prittwitz und Gaffron in seiner feschen Uniform, einst preussischer Rittmeister, im Gespräch vertieft mit Pierre Brice alias Winnetou. Sicherlich unterhielten sie sich über Iltschi, den Rappen, welcher nach Winnetous Tod erschossen wurde, damit man den Apachenhäuptling mit ihm zusammen begraben konnte.\n" +
                "Erna Sack stand auch noch dort, eine deutsche Sopranistin. Schnell weiter! Bevor Erna Sack zu singen anfinge, denn sie war dafür berühmt, mit ihrem Organ das viergestrichene C zu erklimmen, die höchsten Höhen eines eh schon hohen Tones, der Haustiere in den Suizid durch Fenstersturz trieb und Brillengläser zum Zerplatzen brachte.\n" +
                "Wer würde sich noch an der Party rumtreiben? Viktor Giacobbo im Gespräch mit Sänger Rick Astley («Never Gonna Give You Up») und Chongzhen, dem letzten chinesischen Kaiser der Ming-Dynastie. Am Buffet, tüchtig zulangend, die in die Schweiz immigrierte deutsche Politikerin Alice Weidel neben Eva Braun und Adolfo Tito Yllana, einem Diplomaten des Heiligen Stuhls.\n" +
                "In einer grösseren Runde Filmleute, sicher über Subventionen redend: François Truffaut, Ronald Reagan und Zsa Zsa Gabor. Zudem die angolanische Wirtschaftswissenschaftlerin Maria Mambo Café, der zu Ehren in ihrem Geburtsort Cabinda der Flughafen nach ihr benannt werden soll, wo es dann bestimmt ein Maria-Mambo-Café-Airport-Café gibt, in dem Mambomusik läuft.\n" +
                "Wer noch? Christian Henrich Heineken selbstverständlich, der nicht Bierbrauer war, sondern ein Wunderkind. Schon als Zweijähriger beherrschte Heineken Latein und Französisch.\n" +
                "Eine illustre Runde käme da zusammen, der 6. Februar scheint es in sich zu haben! Heute aber ist leider nicht der 6. Februar, sondern der 9. März. Heute haben andere Geburtstag. Zum Beispiel Kurt Latte, deutscher Altphilologe, der kaum unerwähnt liesse, mit seiner Dissertation über kultische Tänze bei den alten Griechen summa cum laude promoviert zu haben. Oder Johann Georg Rohr, ein Glockengiesser aus dem 17. Jahrhundert. Oder Adolf Scheibe, der Entdecker der Inkonstanz der Erdrotationsgeschwindigkeit.\n" +
                "Das gäbe eine Party: Gespräche über das Glockengiessen, kultische Tänze bei den alten Griechen und die stotternde Erdrotation. Am 9. März haben anscheinend nur Langweiler Geburtstag. Ich stünde an dem Fest bald dort, wo es bei jeder Party am interessantesten ist – in der Küche, in der Nähe des Kühlschranks, oder auf dem Balkon, rauchend und auf die Uhr blickend, die ich mir selbst zum 55. Geburtstag geschenkt habe, in der Hoffnung, sie würde mir sagen, dass es nun an der Zeit wäre, die Gäste rauszuschmeissen und langsam, aber sicher zu Bett zu gehen." },
        17: {name: "Text10", text: "Aus gesundheitlichen Gründen hat sie mit dem Musikmachen aufhören müssen. Die kanadische Songschreiberin und Malerin Joni Mitchell (77) litt unter Hautausschlägen, die dermassen schmerzten, dass jedes Kleidungsstück auf ihrer Haut brannte. Ausserdem brauchte sie Jahre, um sich von einem Schlaganfall zu erholen. Als Kind hatte sie unter Polio gelitten, und es gab Zeiten, da konnte sie gar nicht stehen. Dazu entsprang aus ihrer ersten, früh gescheiterten Ehe eine Tochter, die Mitchell zur Adoption freigab – ein Entscheid, für den sie mit lebenslangen Schuldgefühlen bezahlte. Dazu kamen Depressionen, die sie immer wieder heimsuchten. Trotz diesen Hemmnissen entwickelte sich Mitchell zu einer lyrisch und musikalisch einmaligen Songschreibein. «Sie brachte die Frauen zum Singen und die Männer zum Zuhören», schreibt der Literaturprofessor David Yaffe in seiner neuen Biografie. Die Musikerin tat beides zu ihren Bedingungen, was in einem korrupten Geschäft wie dem Showbusiness schon Männern schwerfällt. Sie tat eben alles auf ihre Art. Für das Musikgeschäft hatte sie nur Verachtung übrig, anderen Musikern trat sie von Anfang an als Gleichwertige gegenüber, sie suchte die Auseinandersetzung mit den vielen Musikern, mit denen sie befreundet war und zugleich rivalisierte: David Crosby, Graham Nash, Leonard Cohen, Bob Dylan, Jackson Browne, Jaco Pastorius, Charles Mingus, Chick Corea und all den \n" +
                "anderen. Und obgleich sie sich als Künstlerin bald etablierte, wollte sie mit dem Feminismus nichts zu tun haben. «Obwohl meine Probleme mit meinem Frau sein zu tun hatten, haben mir die Feministinnen nicht geholfen», sagt sie ungerührt; «ich habe mich immer mit denen gestritten.» Die Missverständnisse kommen nicht von ungefähr Dieses überraschende Bekenntnis fällt in einem der drei langen Gespräche, die Joni Mitchell mit der kanadischen Musikerin Malka Marom geführt hat, teil weise Jahrzehnte auseinander. Die Interviews, eben in deutscher Übersetzung erschienen, machen deutlich, dass die Künstlerin sich ebenso als Malerin wie als Musikerin versteht, dass sie eine gros se, eklektische Leserin ist; und dass sie ihre Texte als «beinahe offene Briefe» bezeichnet, so persönlich sind sie geraten. Von Musikern wie Frank Zappa, Miles Davis oder Charles Mingus, nicht für ihre Frauenfreundlichkeit bekannt, wurde Joni Mitchell für ihren eigenwilligen Einsatz von Akkorden, Rhythmen und Tonarten bewundert. Auch andere Musiker hörten aus ihrem Spiel eine eigenwillige Kombination von Jazz mit seinem modalen und chromatischen Spiel in Kombination mit der Folkmusik her aus, von der aus die strikte Autodidaktin in Kanada aufgebrochen war. Schmerzen und Selbstbefreiung künden, ohne je ins Sentimentale abzuschmieren. Damit hat die Songwriterin Tausenden von jungen Musikerinnen vorgemacht, dass man auch als Frau in der Männerwelt der Rockmusik brillieren kann mit hohen Ansprüchen. Und dass man sich durchsetzt, selbst wenn man die Musikindustrie ablehnt und der Presse misstraut.\n" +
                "\n" },
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
