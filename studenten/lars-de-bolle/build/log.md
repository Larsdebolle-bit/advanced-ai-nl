# Log

Wat ik veranderde en wat ermee gebeurde. Nieuwste bovenaan.

## Versies van de prompt

| Versie | Bestand | Wat erin veranderde |
|---|---|---|
| v1 | `prompt-v1.md` | week 2, zes regels zonder waarom, geen voorbeelden |
| v2 | niet bewaard | audit: zes bouwstenen compleet, drie voorbeelden, elke regel een want |
| v2b | `prompt-v2.md` | buurtest: acht regelconflicten opgelost, plus de keuze van de sloopwerkpost |
| v3 | `prompt.md` | de ene wijziging na run 1 en 2 |

**Een onzuiverheid die ik moet melden.** De eerste vijf runs van run 1 (T01, T05,
T07, T08, T10) liepen op v2 zonder de regel die zegt welke sloopwerkpost je
kiest. De andere negentien runs liepen op v2b, met die regel. Voor T01 en T08
had dat verschil kunnen uitmaken, want daar gaat het precies om sloopwerk. In
beide gevallen gaven run 1 en run 2 hetzelfde antwoord, dus vermoedelijk
veranderde de regel daar niets. Maar vermoedelijk is geen bewijs, en formeel is
dat voor die twee geen zuivere n = 2.

## De ene wijziging: 2 op 2 juist, en de fout is weg

**De fout.** T02 ("Ik moet een ruimte schilderen en nadien de belichting
regelen") gaf in beide runs een tweede post: "Elektriciteit lichtpunt plaatsen",
stuk, aantal 0, 415 euro, bron geschat. Die post had niet mogen bestaan. De
plaatsregel zegt dat je bij twijfel over wat een werk precies is geen post maakt
maar een vraag stelt, en van "de belichting regelen" weet je niet of het een
punt, een armatuur of een hele kring is.

**Welke bouwsteen fout was.** Geen van de zes. Het was een botsing tussen een
regel (bouwsteen 2) en de richtprijzenlijst die ik na de buurtest had
toegevoegd. Die lijst bevat "Elektriciteit per punt: 280 tot 550". Het model
vond daar een prijs, en een prijs hebben voelde als toestemming om een post te
maken.

Dat is het pijnlijke deel: die richtprijzenlijst was zelf een fix uit de
buurtest. Een fix die een nieuwe fout maakt. Daarom is het belangrijk dat je na
elke wijziging opnieuw meet, en niet alleen de inputs die eerst fout gingen.

**Wat ik veranderde.** Eén alinea onder de richtprijzen, niet in de regels:

> Dat je hier een prijs vindt, is geen reden om een post te maken. Eerst beslis
> je of de post mag bestaan, dan pas zoek je de prijs.

Met het waarom erbij: een prijs uit die lijst in een post die niet had mogen
bestaan, is een bedrag dat de aannemer niet verwacht en niet terugvindt.

**Resultaat.** T02 twee keer opnieuw gedraaid op v3, beide keren juist: één post
schilderwerk, geen lichtpuntpost, en als tweede vraag precies de goede, namelijk
of de belichting over een punt, een armatuur of een hele kring gaat.

**Waarom dat nog geen bewijs is.** Twee runs op één input. En de andere elf
inputs zijn niet opnieuw gedraaid op v3, dus ik mag niet zeggen dat de tool nu
24 op 24 haalt. Ik weet alleen dat de ene fout die ik vond, weg is, en dat de
wijziging niets kapotmaakte in de input waar ze op gericht was.

## Run 1 en 2: 22 op 24 juist (n = 12, 2 runs)

| Klasse | Aantal | Waar |
|---|---|---|
| F1 fout | 0 | |
| F2 verzonnen | 2 | T02, dezelfde post in beide runs |
| F3 gemist | 0 | |
| F4 vorm | 0 | |
| F5 geweigerd | 0 | |
| F6 wisselend | 2 | T01 en T03, alleen in de vragen |

**Het patroon in F6 is het interessantste van de hele meting.** De posten waren
in alle twaalf inputs bij beide runs identiek: zelfde omschrijvingen, zelfde
aantallen, zelfde eenheden, zelfde bronlabels. Het aantal vragen wisselde wel.
T01 stelde in run 1 een vraag over de container en in run 2 geen enkele. T03
stelde twee vragen in run 1 en drie in run 2, alle drie over dezelfde onbekende.

Dat betekent dat de harde uitvoer stabiel is en de zachte niet. Voor een offerte
is dat de goede kant op: een bedrag dat wisselt is erger dan een vraag die
wisselt. Maar het is wel een echt probleem, want mijn eigen prompt zegt dat vier
vragen die hij al beantwoord heeft, hij vanaf dan allemaal wegklikt. Een vraag
die soms wel en soms niet komt, is een vraag waar hij niet op kan vertrouwen.

**Wat dit cijfer waard is.** Meer dan de 5 op 5 van eerder vandaag, want n is nu
12 met twee runs, de lastige inputs zitten erbij, en er zijn twee opnames bij
die echt op spraak lijken. Maar nog steeds beperkt: twee runs is weinig om F6 te
kwantificeren, en de prompt is op deze inputs geschreven.

**Twee dingen die mijn testset zelf fout had.**

T08. Ik verwachtte Sloopwerk badkamer aan 12 uur, 750 euro. Het model nam Tegels
uitbreken aan 12 m2, 264 euro, en volgde daarmee correct de regel die ik zelf
net had toegevoegd: in "casser le carrelage dans la salle de bain" zijn de tegels
het object en is de badkamer alleen de plaats. Mijn antwoord was van voor die
regel bestond. Factor drie in euro.

De les: je past je prompt aan en je verwachte antwoorden verschuiven mee, maar je
kijkt ze niet opnieuw na. Daarom staat de versietabel nu bovenaan dit bestand.

T01. Het stelde een vraag die ik niet verwachtte, over of één container genoeg
is. Mijn beoordelingsregel zei niet of een extra vraag mag. Nu wel: een extra
vraag over een echte onbekende is juist, een vraag over iets dat in de opname
staat is fout.

**Hoe de runs liepen.** Elk in een eigen leeg venster, alleen de prompt en één
input, geen web search, geen enkel ander bestand in zicht. Niet in deze map, want
hier wordt `context.md` meegelezen.

Afwijking van de opdracht: dit liep op Claude en niet op GPT-4o in de OpMaat-app,
en de buurtest was een los agentje en geen mens. Het testdoel (ziet het model
alleen de prompt en één input) klopt wel, maar dit is geen meting van de echte
keten.

## De buurtest

Geen les, dus geen echte buur. In de plaats daarvan een los agentje dat alleen
`prompt.md` te zien kreeg: niet mijn taak, niet mijn testset, niet mijn
antwoorden. Drie inputs: T05, T07 en T10, de drie waar een mens anders kan
beslissen dan ik.

**Uitkomst: alle drie dezelfde antwoorden als de mijne.** Dat is niet het
interessante deel. Het interessante deel is waarover het moest gokken om daar te
komen: zes tegenspraken, zes regels die niet toepasbaar waren en zes
dubbelzinnige formuleringen.

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
genoemd, of drie of meer onderdelen ervan. En toen bleek dat de lijst alleen
"Sloopwerk badkamer" heeft, dus voor elke andere ruimte geen post: daar is
"Werkuren algemeen" de terugval geworden.

Wat dit zegt over de audit: ik had drie gaten gevonden door de zes bouwstenen af
te lopen. De buurtest vond er acht meer, en geen enkele daarvan is een
ontbrekende bouwsteen. Het zijn regels die onderling niet kloppen. Een checklist
vindt wat er niet staat; een lezer vindt wat er niet samen kan.

## v2: zes bouwstenen compleet

**Wat ontbrak.** De audit (`audit.md`) legde drie gaten bloot in v1: geen enkel
voorbeeld (bouwsteen 4), geen enkele regel met een waarom (bouwsteen 2), en een
uitweg die alleen een ontbrekende prijs dekte en niet een tegenstrijdige of
dubbelzinnige maat (bouwsteen 5).

| Bouwsteen | Wijziging |
|---|---|
| 1 | Rol uitgebreid: de aannemer leest op de werf na, dus een stille keuze gaat mee naar de klant. |
| 2 | Elke regel een want. De correctieregel vermeldt nu dat 5 m2 ongeveer 17 procent is en onder elke automatische controle doorvalt. |
| 3 | Twee velden bij: `correcties` en `vragen`. |
| 4 | Drie voorbeelden: normale opname met maten, werk zonder maat, opname zonder inhoud. Bewust geen van mijn testinputs, want dan test ik het model op zijn eigen voorbeelden. |
| 5 | `vragen` in plaats van een vage onzekerheidsmelding: één zin, tutoyerend, zo concreet dat de aannemer er met één getal op kan antwoorden. |
| 6 | Onveranderd, stond al goed. |

**Vijf regels die in mijn hoofd zaten en nergens anders.** Tijdens het invullen
van de verwachte antwoorden bleek vijf keer dat mijn antwoord iets eiste dat
nergens in mijn prompt stond: de verhouding 1 uur per m2 voor sloopwerk, dat een
container er altijd bij hoort, dat bron over de prijs gaat en niet over het
aantal, dat er geen minimum aantal posten is, en wanneer het model mag afleiden
en wanneer niet. Dat is wat de les bedoelt met: jouw regels zitten in jouw hoofd
tot je ze opschrijft.

**De voorraadvalkuil.** De materialenlijst heeft een kolom `voorraad`
(vloertegels 48, chape 120, plinten 90) en nergens in de prompt staat wat die
kolom betekent. Dat is opzet: neemt het model die voorraad over als `aantal`,
dan leest het mijn prijslijst als hoeveelheidslijst, en dat is in productie een
offerte van 90 meter plinten voor een klant die er 12 nodig heeft.

Het trapte er in geen enkele run in. T07 gaf 0 en vroeg hoeveel meter, T05
maakte geen post. De zin die ik klaar had liggen om dit op te lossen, blijft dus
in de la.

## Week 2, v1: eerste versie

Eerste prompt geschreven, bewaard als `prompt-v1.md`. T01 gedraaid in de echte
app-keten: fout, klasse F1. Het model hield stil 5 op 7 aan (35 m2 in plaats van
30), zonder melding. Vier regelcontroles zwegen, elk om een eigen reden. De
analyse staat in `audit.md` onder "De diepere fout".

0 op 1 juist (n = 1, 1 run).
