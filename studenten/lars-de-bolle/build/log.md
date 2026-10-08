# Log

Wat ik veranderde, en wat ermee gebeurde. Nieuwste bovenaan.

## Week 3, run 1: 5 op 5, en waarom dat een slecht resultaat is

**5 op 5 juist (n = 5, 1 run).** Nul fouten in alle zes klassen. Gedraaid op
T01, T05, T07, T08 en T10, elk in een leeg venster met alleen de prompt en één
input.

Dat is geen bewijs dat v2 werkt. Het betekent dat deze vijf inputs te makkelijk
zijn, en de les zegt het letterlijk: haal je alles, dan is je testset te
makkelijk. Drie redenen waarom dit cijfer weinig waard is:

1. **n = 5 en één run.** F6, wisselend antwoord bij dezelfde input, kan ik bij
   één run per definitie niet zien. Precies de klasse die bij een taalmodel het
   meest voorkomt.
2. **Elke input test één ding.** T01 een verspreking, T05 een dubbelzinnigheid,
   T07 een hoeveelheid, T10 een eenheid. Een echte werfopname duurt twee minuten
   en bevat vijf werken, drie maten en twee versprekingen door elkaar. Daar gaat
   het mis, niet op een zin van tien woorden.
3. **De prompt is op deze inputs geschreven.** Ik heb hem tussen de audit en de
   buurtest acht keer bijgesteld, en elke bijstelling kwam uit precies deze
   gevallen. Dan meet ik of ik mijn eigen regels goed opschreef, niet of de tool
   werkt.

**Wat ik er wel uit leerde, en dat is het echte resultaat.**

T08 ging fout, maar niet bij het model: bij mij. Ik verwachtte Sloopwerk
badkamer aan 12 uur (750 euro) en het model nam Tegels uitbreken aan 12 m2 (264
euro). Het model volgde mijn drempelregel correct: in "casser le carrelage dans
la salle de bain" zijn de tegels het object en is de badkamer alleen de plaats,
dus één los onderdeel. Mijn antwoord was nog van voor die regel bestond, en ik
had na die wijziging alleen T03 nagekeken en T08 niet.

Dat is de klassieke valkuil van een testset: je past je prompt aan en vergeet
dat daarmee je verwachte antwoorden verschuiven. Het verschil was hier een
factor drie in euro.

T01 stelde een vraag die ik niet verwachtte, over of één container genoeg is. Ik
reken dat juist, want de prompt zegt dat het moet vragen wat het niet weet, en
hoeveel puin uit 30 m2 komt staat er niet in. Maar mijn beoordelingsregel zei
niet of een extra vraag mag. Dat gat zat in mijn testset, niet in de prompt.

**Wat er nu moet gebeuren, voor week 4.**

Niet: de vijf resterende inputs draaien en hopen op fouten. Die zijn van hetzelfde
kaliber. Wel:

1. Twee lange, rommelige opnames bijschrijven: twee minuten spraak, meerdere
   werken, twee maten die botsen, één woord dat Whisper verkeerd hoort. Dat is
   de echte input en die heb ik nog niet getest.
2. Elke input een tweede keer draaien om F6 te kunnen zien.
3. De verwachte antwoorden opnieuw nakijken tegen de huidige prompt, want er
   zijn acht regels bijgekomen sinds ik ze schreef.

**De voorraadvalkuil sloeg niet toe.** T07 had 90 m plinten kunnen overnemen en
nam 0. T05 had 48 m2 kunnen pakken en maakte geen post. De kandidaat-wijziging
hieronder blijft dus in de la liggen, en dat is de goede uitkomst: ik hoef die
zin niet te schrijven.

## Week 3, de buurtest

Geen les, dus geen echte buur. In de plaats daarvan een los agentje dat alleen
`prompt.md` te zien kreeg: niet mijn taak, niet mijn testset, niet mijn
antwoorden. Drie inputs: T05, T07 en T10, de drie waar een mens anders kan
beslissen dan ik.

**Uitkomst: alle drie dezelfde antwoorden als de mijne.** Dat is niet het
interessante deel. Het interessante deel is waarover het moest gokken om daar te
komen, en dat waren zes tegenspraken, zes regels die niet toepasbaar waren en
zes dubbelzinnige formuleringen.

Wat ik daarop veranderde:

| Bevinding | Wat er ontbrak | Fix |
|---|---|---|
| "Schat op Belgische richtprijzen" | er stond geen enkele richtprijs in de prompt | zeventien richtprijzen toegevoegd, met de instructie het midden te nemen |
| forfait komt op nul uit | "aantal blijft de genoemde hoeveelheid", en bij een forfait noemt niemand er een | bij forfait is het aantal altijd 1 |
| "5 op 5 meter" naar 25 m2 | nergens stond dat het model maten moet uitrekenen | twee maten is m2, drie maten is m3 |
| tegels wand of vloer tegen bron open | twee regels claimden dezelfde input, geen rangorde | de plaatsregel gaat voor op "open" |
| verbeterde eenheid | de correctieregel ging alleen over maten | geldt nu ook voor een eenheid en een werk |
| "Plinten" wordt "Plinten plaatsen" | botste met "verzin geen werken" | een post uit de eigen bibliotheek overnemen is geen verzinnen |
| "grotere werken" splitsen | geen grens, dus nooit toepasbaar zonder gok | regel geschrapt |
| Tegels uitbreken m2 tegen 1 uur per m2 | twee prijzen voor hetzelfde werk | hele ruimte is uren, een of twee losse onderdelen is de lijstpost |

Die laatste vroeg een drempel, anders is "hele ruimte" zelf een gok: de ruimte
genoemd, of drie of meer onderdelen ervan. Daarmee blijft T03 in uren, want
tegels plus douche plus bad is een badkamer strippen.

Wat dit zegt over de audit: ik had drie gaten gevonden door de zes bouwstenen af
te lopen. De buurtest vond er acht meer, en geen enkele daarvan is een
ontbrekende bouwsteen. Het zijn regels die onderling niet kloppen. Een checklist
vindt wat er niet staat; een lezer vindt wat er niet samen kan.

Nog niet gefixt, bewust: de voorraadkolom. Zie hieronder.

## Week 3, v2: zes bouwstenen compleet

**Wat ontbrak.** De audit (`audit.md`) legde drie gaten bloot in v1: geen enkel
voorbeeld (bouwsteen 4), geen enkele regel met een waarom (bouwsteen 2), en een
uitweg die alleen een ontbrekende prijs dekte en niet een tegenstrijdige of
dubbelzinnige maat (bouwsteen 5).

**Wat ik veranderde.** Eén wijziging per bouwsteen, niet meer:

| Bouwsteen | Wijziging |
|---|---|
| 1 | Rol uitgebreid: de aannemer leest op de werf na, dus een stille keuze gaat mee naar de klant. |
| 2 | Elke regel een want. De correctieregel vermeldt nu dat 5 m2 ongeveer 17 procent is en onder elke automatische controle doorvalt. |
| 3 | Twee velden bij: `correcties` en `onzeker`. |
| 4 | Drie voorbeelden: normale opname met maat, werk zonder maat, opname zonder inhoud. Bewust geen van mijn testinputs, want dan test ik het model op zijn eigen voorbeelden. |
| 5 | Expliciete uitweg: niet weten mag, en hoort in `onzeker`. |
| 6 | Onveranderd, stond al goed. |

**Verwachting, voor ik draai.** T01 moet nu 30 m2 geven plus een regel in
`correcties`. T04 moet een lege postenlijst geven met een regel in `onzeker`.
T02, T03 en T05 verwacht ik ongewijzigd correct.

**Bewust niet in v2 gezet: de kandidaat-wijziging.** De materialenlijst heeft
een kolom `voorraad` (vloertegels 48, chape 120, plinten 90) en nergens in de
prompt staat wat die kolom betekent. Dat is opzet. Neemt het model die voorraad
over als `aantal`, dan weet ik dat het mijn bibliotheek als hoeveelheidslijst
leest in plaats van als prijslijst, en dat is een fout die in productie een
offerte van 90 meter plinten maakt waar de klant er 12 nodig heeft.

Gaat T05 of T07 daarop onderuit, dan is dit mijn ene wijziging: één zin onder de
lijst dat de voorraad over het magazijn gaat en niet over deze offerte. Ik zet
die zin er nu niet in, want dan test ik of het model een regel kan volgen in
plaats van of het de lijst begrijpt.

**Resultaat.** Nog niet gedraaid. Run 1 staat hieronder zodra de vijf inputs
door v2 zijn gegaan.

| ID | v1 | v2 |
|---|---|---|
| T01 | F1, stil 35 m2 | |
| T02 | niet gedraaid | |
| T03 | niet gedraaid | |
| T04 | niet gedraaid | |
| T05 | niet gedraaid | |

Succespercentage: nog niet te geven. v1 staat op 0 op 1 juist (n = 1, 1 run).

## Week 2, v1: eerste versie

Eerste prompt geschreven, bewaard als `prompt-v1.md`. T01 gedraaid in de echte
app-keten: fout, klasse F1. Het model hield stil 5 op 7 aan (35 m2 in plaats van
30), zonder melding. Vier regelcontroles zwegen, elk om een eigen reden. De
analyse staat in `audit.md` onder "De diepere fout".

0 op 1 juist (n = 1, 1 run).
