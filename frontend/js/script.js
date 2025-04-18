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
        18: {name: "Text9", text: "Wie geht es den Kindern und Jugendlichen in der Schweiz? Seit der Coronapandemie stellt sich uns als Gesellschaft diese Frage so häufig wie nie zuvor. Das kommt nicht von ungefähr. Allein ein Blick in den letzten Jahresbericht von Pro Juventute reicht, um zu belegen, dass es gute Gründe gibt, sich intensiv mit dem Thema zu befassen. Die psychische Belastung für die Kinder und Jugendlichen sowie ihre Familien habe bedauerlicherweise stark zugenommen, ist dort zu lesen. " +
                "Bei der Beratungshotline von Pro Juventute sind 2022 die Anfragen zu «depressiver Stimmung» um 13 Prozent gegenüber dem Vorjahr gestiegen, zur Thematik «Angst» gar um 19 Prozent. Und ein Ende dieser Entwicklung ist aktuell nicht in Sicht. Im Gegenteil: Die psychiatrische Versorgung läuft am Limit. Auch in diesem Jahr ist weiterhin von zu wenig Therapieplätzen und langen Wartezeiten zu lesen. " +
                "Bei der Kinder- und Jugendpsychiatrie im Kanton Zürich liege die Frist aktuell bei rund einem halben Jahr, sagt Matthias Obrist aus Erfahrung. Der Präsident der Stellenleitungskonferenz Schulpsychologische Dienste (SLKSPD) beobachtet schon seit einiger Zeit, dass das Versorgungssystem an seine Kapazitätsgrenzen gelangt. Beim Schulpsychologischen Dienst der Stadt Zürich gilt die Devise, dass 80 Prozent der Anfragen innerhalb von zwei Monaten behandelt werden sollen. " +
                "Obrist und sein Team haben aber festgestellt, dass Schulen und Eltern unter grossem Druck stehen. Der schulpsychologische Dienst kann überbrücken, um jene Kinder und Jugendlichen aufzufangen, die auf eine Behandlung in der Kinder- und Jugendpsychiatrie warten müssen. Insbesondere die Schulen würden die langen Wartezeiten zu spüren bekommen, weiss Martina Buchli. Sie arbeitet für die Stiftung Berner Gesundheit im Kanton Bern. " +
                "«Es ist für die Lehrerpersonen sehr herausfordernd, Schüler*innen zu unterrichten, die noch keinen Therapieplatz erhalten haben.» Eine solche Situation könne die Dynamik innerhalb einer ganzen Klasse negativ beeinflussen. Expert*innen sind sich einig: Die Zahl der Kinder und Jugendlichen mit psychischen Schwierigkeiten ist in den letzten Jahren weiter angestiegen. Auf die Frage nach den Gründen, fällt die Antwort komplexer aus. " +
                "Die Vermutung, dass vor allem die Coronapandemie die Situation verschärft hat, reicht als Begründung nicht aus. «Wir beobachten diese Entwicklung schon seit einigen Jahren», sagt Matthias Obrist. «Corona allein war nicht der Auslöser.» Martina Buchli meint dazu: «Diese Entwicklung ist kein neues Phänomen.» Der Selektionsdruck, dem die Kinder und Jugendlichen bereits in jungen Jahren ausgesetzt würden, sei schon vor Corona allgegenwärtig gewesen. " +
                "«Es gibt heute kaum einen Lebensbereich, in dem es nicht um Leistung geht», so Buchli. Corona hat die Gesellschaft aber stärker für das Thema psychische Gesundheit sensibilisiert, davon sind die Expert*innen überzeugt. Dass sich die Kinder und Jugendlichen stärker belastet fühlen, führt Matthias Obrist nicht zuletzt auf die neue Gemengelage zurück – innere Faktoren wie Stress, Individualisierung, Selbstoptimierung sowie äussere Faktoren wie Kriege, Flucht oder Klimawandel. " +
                "Das Gefühl der Sicherheit habe stark gelitten, die Verletzbarkeit sei grösser geworden. In diesem Zusammenhang wird oft der Begriff Polykrise genannt. Diese könne einen Einfluss auf junge Menschen haben, glaubt auch Kinderpsychologin Marina Frigerio. Die Bilder aus dem Ukrainekrieg, dem Nahen Osten und der Klimakrise gingen nicht spurlos an ihnen vorbei. «Ich habe Jugendliche erlebt, bei denen diese Themen Angststörungen und Panikattacken ausgelöst haben», sagt sie. " +
                "Durch soziale Medien seien Krisenbilder und Nachrichten omnipräsent, erklärt Martina Buchli. Ein Vater wollte seinen Sohn vor diesen Einflüssen schützen – vergeblich. Via Smartphone kommt alles direkt in den Alltag, man kann es nicht mehr einfach abschalten wie früher das Radio oder den Fernseher. Frigerio, die mit vielen Jugendlichen aus sozialen Brennpunkten arbeitet, sieht soziale Medien als Chance und Risiko zugleich: Hemmschwellen sinken in der virtuellen Welt. " +
                "Lehrpersonen sollten das Gespräch mit Schüler*innen und Eltern suchen, rät Matthias Obrist. In Ich-Botschaften könne man Beobachtungen ausdrücken, ohne zu verurteilen. Martina Buchli empfiehlt, sich mit Kolleg*innen, Schulsozialarbeit oder Psychologen auszutauschen. «Es braucht Mut zur Beratung!» Schulleitungen sollten ein Klima schaffen, in dem man offen reden darf – Kritik muss erlaubt sein." },
        19: {name: "Text10", text: "Wer sich als Lehrperson externe Unterstützung holen möchte, findet diese bei privat tätigen Psycholog*innen oder bei externen Fachstellen wie der Stiftung Berner Gesundheit, die Unterrichtsmaterial zu Themen wie Cybermobbing oder Depression anbietet, zudem Beratungen und Workshops. Auch der schulpsychologische Dienst bietet Fallbesprechungen, Einzelberatungen und teils Supervisionen an. Beratungen und Gespräche helfen aber nicht immer. " +
                "Was dann? Besonders bei verhaltensauffälligen Schüler*innen müssten, wenn keine Veränderung herbeigeführt werden könne, weitere Schritte geprüft werden, sagt Matthias Obrist. Zuerst brauche es niederschwellige, strukturierende, teils auch disziplinierende Massnahmen. Erst auf einer zweiten Ebene benötige es möglicherweise sonderpädagogische Massnahmen. «Die oberste Spitze der Pyramide ist es, dass ein Kind oder ein Jugendlicher mit sonderschulischen Massnahmen in die Klasse integriert oder gar separiert wird.» " +
                "Obrist empfiehlt den Lehrpersonen nebst einer guten Klassenführung mit klaren Strukturen, die Partizipation zu fördern: Den Schüler*innen solle eine ihrer Entwicklungsstufe angemessene Mitbestimmung ermöglicht werden. «Das heisst nicht, dass sie alles allein bestimmen können», stellt er klar. «Aber sie lernen so, Verantwortung zu übernehmen.» " +
                "Aus den Gesprächen mit den Fachleuten geht weiter hervor, dass es zudem künftig immer wichtiger wird, den jungen Menschen die nötige Medienkompetenz mit an die Hand zu geben. Das Personal müsse entsprechend geschult und weitergebildet werden, raten sie. Laut Regula Buchli trägt dieses Vorgehen schon jetzt Früchte: «Ich habe den Eindruck, die Kinder und Jugendlichen haben im Umgang mit den sozialen Medien Fortschritte gemacht.» " +
                "Sie würden diese mittlerweile bewusster nutzen als noch vor einigen Jahren. Dieses Bewusstsein sei in den Schulen gefördert worden, glaubt sie. Idealerweise erkennt das Umfeld schon sehr früh, wenn ein Kind oder ein Jugendlicher erste Symptome einer psychischen Erkrankung zeigt. Entsprechend Wert legen sollten die Schulen daher auf das Thema Prävention, findet Matthias Obrist. " +
                "Ihm ist bewusst, dass die Ressourcen dafür beschränkt sind. Umso wichtiger sei es als Lehrperson, seine Schützlinge gut zu kennen. Die Fachleute sind sich einig: Nur wer eine gute Beziehung zu seinen Schüler*innen pflegt und deren Vertrauen geniesst, kann frühzeitig erkennen, wenn etwas nicht mehr stimmt. «Ein guter Draht zu den jungen Menschen ist bereits Prävention», stellt Regula Buchli fest. «Es ist das A und O.» " +
                "Indem die Lehrpersonen so viel Zeit mit ihnen verbringen würden, seien sie wichtige Bezugspersonen. Wenn diese aufgrund des aktuellen Fachkräftemangels häufiger wechseln, sei dies für manche junge Menschen problematisch. Um eine gute Beziehung aufzubauen, benötige es gar nicht so viel Zeit, wie man vielleicht denken würde, sagt Martina Buchli. " +
                "«Es reicht schon, wenn die Lehrperson zum Beispiel jeden Morgen allen Schüler*innen die Hand schüttelt.» In diesen Momenten sei es möglich, ein paar Worte zu wechseln. Allein eine kurze Nachfrage könne einen grossen Unterschied machen, zum Beispiel wenn die Lehrperson sich bei einem Schüler oder einer Schülerin erkundige, weshalb er oder sie im Unterricht gefehlt habe. " +
                "Dieser kurze Austausch signalisiere den Kindern und Jugendlichen eine wichtige Botschaft, meint Martina Buchli: «Ich sehe dich.» Auch Regula Buchli von der Erziehungsberatung Bern weiss, dass bei den Lehrpersonen das Bewusstsein für dieses Thema über die letzten Jahre immer grösser geworden ist. «Ich erlebe viele engagierte Lehrpersonen und Schulleiter*innen, die vieles richtig machen.» " +
                "Nicht selten müsse sie die Lehrpersonen aber an die Grenzen des Machbaren erinnern. Eine einzelne Person könne nicht alles selbst leisten. «Gewisse Lehrpersonen muss man in Schutz nehmen», sagt Buchli. Ihre Namensvetterin, Martina Buchli, bestätigte diesen Eindruck: Die Lehrer*innen, die sich angesichts der Situation manchmal hilflos fühlen, seien keine ausgebildeten Psychologen. «Wir können von ihnen daher nicht erwarten, dass sie in der Schule alle Probleme allein lösen.»" },
        20: {name: "Text9", text: "Rain Man war der Erste. In dem Film aus dem Jahr 1988 spielt Dustin Hoffman einen Autisten, der sich zwar äusserst schrullig verhält, aber mit enormen Spezialbegabungen aufwarten kann. Er löst blitzschnell komplizierte Rechenaufgaben, rattert das Telefonbuch auswendig herunter – sowie eigentlich alles, was er jemals gelesen hat.\n" +
                "\n" +
                "Seitdem hat sich Autismus zu einer Art popkulturellem Gemeinplatz entwickelt, den Hunderte Filme und Serien auf immer ähnliche Weise wiedergeben: Sheldon Cooper aus der Serie «Big Bang Theory» ist sozial ungelenk, aber schlau und deshalb irgendwie cool. Diverse autistische Ermittlerinnen wie Saga Noren aus der Serie «The Bridge» oder Sherlock aus der gleichnamigen Serie wirken wie schrullige Nerds, aber überführen mit fast übernatürlichen Fähigkeiten Verbrecher.\n" +
                "\n" +
                "Analog zur Darstellung im Film scheint die Entwicklungsstörung Autismus mittlerweile eine Art Königsdiagnose der Psychiatrie, weil sie mit erstaunlich wenig Stigmatisierung einhergeht. Menschen assoziieren sie mit Genie, Kreativität, Besonderheit. Eine ähnliche Entwicklung macht gerade ADHS: Vor ein paar Jahren nannte Greta Thunberg Autismus ihre Superkraft, kürzlich bezeichnete Paris Hilton ihr ADHS genauso und erklärte, ihr beruflicher Erfolg sei darauf zurückzuführen.\n" +
                "\n" +
                "Vom Zappelphilipp-Syndrom zum Coolness-Faktor\n" +
                "Die Zahl der ADHS-Diagnosen bei Erwachsenen steigt derzeit steil an. Vor zwanzig Jahren war das sogenannte Zappelphilipp-Syndrom noch eher peinlich, heute dient es in gewissen Kreisen als schickes Identitätslabel, das zur Abgrenzung und Selbstdarstellung auf Social Media dienen kann. Manche gründen als Influencer gar eine ganze Existenz auf ihrer Diagnose.\n" +
                "\n" +
                "Die beliebten Störungen sind heute unter einem neuen Begriff zusammengefasst: Betroffene bezeichnen sich als neurodivers. Wobei das Konzept Neurodiversität darauf verweist, dass Hirne nun mal unterschiedlich verdrahtet sind, jeder Mensch anders ist, aber deshalb noch lange nicht gestört. Vielmehr sei die Besonderheit ein Geschenk und verdiene deshalb Respekt. Meist geht es um Autismus oder ADHS, es können aber auch andere psychische Störungen oder Eigenschaften gemeint sein wie Legasthenie oder Hochbegabung – so genau weiss das keiner, denn Neurodiversität ist kein wissenschaftlicher Begriff und auch keine Diagnose.\n" +
                "\n" +
                "Trotzdem ist das Phänomen auch in der Psychiatrie als Neurodiversitätsbewegung bekannt: Die australische Soziologin Judy Singer gilt als erste Vertreterin, sie soll den Begriff 1998 mit ihrer Dissertation «Odd people» (komische Leute) eingeführt haben. Der Begriff soll die Stärken der Betroffenen hervorheben und Stigmatisierung verringern. Ihre Andersartigkeit wird nicht als Störung benannt, denn die Betroffenen seien nicht krank. Demzufolge haben sie eigentlich gar kein Problem, dieses entstünde ausschliesslich dadurch, dass die starre und unbarmherzige Gesellschaft eines mit ihnen habe.\n" +
                "\n" +
                "Mehr Akzeptanz und Respekt sind eine gute Sache. Aber die Neurodiversitätsbewegung ist mindestens in Teilen schädliche Schönfärberei, das Etikett «neurodivers» ein hübsches, aber nutzloses Selbstdarstellungsmittel. Dieses bringt vor allem denjenigen etwas, die vergleichsweise nicht so furchtbar dringend Hilfe brauchen, indem sie ihnen ein interessantes Identitätsangebot macht. Denjenigen mit richtigem Leidensdruck schadet die Bewegung.\n" +
                "\n" +
                "Autisten sind selten hochbegabt\n" +
                "Jenen Kindern und Erwachsenen, deren Gesundheit eingeschränkt ist und die dringend auf Unterstützung angewiesen sind, hilft es nicht, wenn die Benennung ihres Problems vermieden wird. Im Gegenteil: Sie brauchen häufig unbedingt eine wissenschaftlich begründete Diagnose, damit sie Hilfe und Behandlung erhalten. Der Begriff Neurodiversität signalisiert, dass es keine Störung gibt. Demzufolge bedarf es auch keiner Behandlung und auch keiner Forschung an den Ursachen, was langfristig den schwer Betroffenen enorm schadet.\n" +
                "\n" +
                "Besonders deutlich wird die Diskrepanz zwischen Aussenwahrnehmung und Realität an der Entwicklungsstörung Autismus. Rain Man und Sheldon Cooper als drollige Eigenbrötler mit unglaublichen Inselbegabungen sind klischeehafte Darstellungen von Autisten, die es in Wahrheit nur extrem selten gibt.\n" +
                "\n" +
                "Die Autismus-Spektrum-Störung ist in drei Schweregrade aufgeteilt. Die meisten Betroffenen sind stark eingeschränkt: Je nach Quelle gilt etwa die Hälfte aller Kinder mit Autismus als geistig behindert, häufig definiert mit einem Intelligenzquotienten von unter 70. 40 Prozent aller Autisten lernen niemals zu sprechen, etwa ein Drittel aller Autisten benötigt ein Leben lang intensive Betreuung, häufig in spezialisierten Einrichtungen. Autismus tritt ausserdem regelmässig gemeinsam mit Epilepsie auf, besonders in der Gruppe von Betroffenen mit einem Intelligenzquotienten von unter 40.\n" +
                "\n" +
                "Und selbst die als hochfunktional geltenden Autisten mit einer durchschnittlichen Intelligenz und Sprachentwicklung, die zum Beispiel eine normale Arbeitsstelle finden, scheitern später häufig im Alltag. Sie leiden unter Schwierigkeiten damit, soziale Signale wahrzunehmen, Beziehungen aufzubauen und zu erhalten, reagieren häufig extrem sensibel auf äussere Reize und müssen deutlich häufiger in psychiatrischen Kliniken behandelt werden als die Durchschnittsbevölkerung. Rund 42 Prozent der Erwachsenen erkranken in ihrem Leben zusätzlich an einer Angststörung, 37 Prozent an Depressionen.\n" +
                "\n" +
                "Banalste Eigenschaften sind heute neurodivers\n" +
                "Umso lächerlicher wirkt es, wenn auf Tiktok Wäscheberge und zerwühlte Betten als «neurodiverse Haushalte» vorgezeigt werden, die Abneigung dagegen, dass sich auf dem Teller Kartoffeln und Gemüse berühren, als typisches ADHS-Symptom verhandelt wird und ADHS-Rezepte verbreitet werden. Selbst banalste Persönlichkeitseigenschaften werden fleissig pathologisiert und mit dem Krönchen «neurodivers» geadelt.\n" +
                "\n" +
                "@lynemyller Das Thema „Essen“ ist für viele Neurodivergente ein Problem. Entweder isst man zu viel oder zu wenig. Ich vergesse oft zu essen und zu trinken. Dann muss es schnell gehen und ich habe oft keine Energie, um komplizierte Gerichte zu kochen (ganz zu schweigen von einkaufen, vorbereiten und aufräumen danach). Und nein, es hat nichts mit Faulheit zu tun!\n" +
                "Möglicherweise ist das Etikett einer psychischen Störung deshalb so attraktiv, weil Pathologisierung heute die einzige Möglichkeit geworden ist, Leid und Imperfektion aus der Sicht der Leistungsgesellschaft auf sozial akzeptierte Weise auszudrücken. Schwäche dreht sich auf diese Weise sogar in etwas Positives: Man ist zwar nicht perfekt, dafür aber tief und interessant. Das mag ein verständliches Zeitgeistsymptom sein. Doch wenn Menschen mit unordentlichen Wohnungen oder hochintelligente Autisten mit Inselbegabung im Mittelpunkt der Neurodiversitätsdiskussion stehen, geschieht eine Trivialisierung des echten Leidens. Die Realität der meisten Betroffenen wird unsichtbar.\n" +
                "\n" +
                "Eine schädliche Folge davon ist eine Ausweitung der Krankheitszone: Immer mehr Menschen glauben von sich, sie seien von Autismus oder ADHS betroffen, sind es aber nicht. Teile der Neurodiversitätsbewegung fordern sogar, dass nicht mehr die medizinische Diagnose den wirklich Betroffenen kennzeichnen soll, vielmehr solle doch die innere Wahrnehmung, die Identifikation ausschlaggebend sein." },

    };

    const params = new URLSearchParams(window.location.search);
    const taskId = params.get("task");
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
    if (taskId && aufgaben[taskId]) {
        document.getElementById("task-title").textContent = aufgaben[taskId].name;
        correctText = aufgaben[taskId].text;
        textArea.value = correctText.replace(/,/g, ""); // Entfernt Kommas für die Übung
    }

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



    // returns number of commas still missing,
    function checkText() {
        const userInput = textArea.value
        const totalCommas = correctText.split("").filter(c => c === ",").length
        const userCommas = userInput.split("").filter(c => c === ",").length;
        console.log(userCommas);
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
        checkText()

        if (!checkSentence()) {
            attempts++; // Zählt nur falsche Versuche
        }
        else if (checkSentence()) {

        }

        if (attempts > maxAttempts) {
            checkButton.disabled = true; // Deaktiviert den Überprüfen-Button
            checkButton.style.opacity = "0.5"; // Macht ihn visuell grau
            feedback.textContent = "⚠️ Du kannst nicht mehr überprüfen! ⚠️"
        }
    });

    solutionButton.addEventListener("click", function () {
        feedback.innerHTML = `✅ Hier ist die richtige Lösung:<br><b>${correctText}</b>`;
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
        //if (!confirm("Bist du sicher, dass du abgeben möchtest?")) {
        //    return; // Falls "Abbrechen" geklickt wird, passiert nichts
        //}

        checkText()
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
