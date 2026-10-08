# Testset

Vul **Juiste antwoord** en **Waarom** in vóór je draait. Draaien = een nieuw gesprek, de prompt uit `prompt.md`, één input erbij. Nooit deze tabel meegeven.

| ID | Input | Juiste antwoord | Waarom | Run 1 | Run 2 |
|---|---|---|---|---|---|
| T01 | "Ik moet een badkamer gaan uitbreken die badkamer is 5 op 7 meter euh ik bedoel 5 op 6 meter." | 3 posten, alle drie bron eigen: Container 10 m3 puin (stuk, 1), Sloopwerk badkamer (uur, **30**), Afvoer puin en afval (forfait, 1). `correcties` gevuld met de zin over 5 op 7 naar 5 op 6. `vragen` leeg. | 5 op 6 is 30 m2, aan 1 uur per m2 is dat 30 uur. Uitbreken van tegels, bad en douche zit in die uren, dus geen aparte posten. Container en afvoer horen er altijd bij: een vergeten container kost de aannemer een paar honderd euro die hij niet meer kan doorrekenen. De correctie moet gemeld worden, want 35 uur in plaats van 30 is 312,50 euro te veel en hij kan op de werf niet horen welke maat het model koos. | | |
| T02 | "Ik moet een ruimte schilderen en nadien de belichting regelen." | 1 post: Schilderwerk 2 lagen (m2, aantal **0**, prijs 16,50, bron **eigen**). Geen post voor de belichting. `correcties` leeg. `vragen` gevuld met twee vragen: hoeveel m2, en wat er met de belichting moet gebeuren. | Schilderwerk staat in mijn lijst, dus de prijs ken ik en de bron blijft eigen. De maat is niet gezegd, dus aantal 0. Van "de belichting regelen" weten we niets: een punt, een armatuur of een hele kring zijn drie prijzen. Daar maak ik geen post van, daar vraag ik naar. Eén post is een geldige offerte. | | |
| T03 | "Ik moet de tegels uitbreken, douche uitbreken en bad ook en nadien de chape leggen en nieuwe tegels opleggen." | 5 posten, alle bron eigen: Sloopwerk badkamer (uur, 0), Container 10 m3 puin (stuk, 1), Afvoer puin en afval (forfait, 1), Chape gieten 5 cm (m2, 0), Vloertegels leggen (m2, 0). `correcties` leeg. `vragen`: hoeveel m2 is de badkamer. | Tegels, douche en bad uitbreken is één sloopwerk in uren, net als bij T01. Geen maat gezegd, dus 0 uur en 0 m2, maar de prijzen komen uit mijn lijst dus de bron blijft eigen. Container en afvoer horen er altijd bij. "Nieuwe tegels na de chape" zijn vloertegels: op een chape leg je geen wandtegels, dat is vakkennis en geen gok. Eén vraag volstaat: met de m2 vallen de uren, de chape en de tegels alle drie op hun plaats. | | |
| T04 | "Vierkante meter, kubieke meter." | `posten` leeg. `correcties` leeg. `vragen`: één vraag die uitzoekt waarover het gaat en of het om oppervlakte of volume gaat. | Er staat geen werk en geen ruimte in, alleen twee eenheden. m2 en m3 zijn twee verschillende werken met twee verschillende prijzen, en het verschil is een factor vijf. Hier is niet weten het juiste antwoord, en een vraag is het enige bruikbare dat je kan teruggeven. | | |
| T05 | "Tegels leggen 5 op 5 meter." | `posten` leeg. `correcties` leeg. `vragen`: of die 25 m2 voor de vloer of de wand is. | 5 op 5 is 25 m2, dat is duidelijk. Maar niets in de zin zegt wand of vloer, en dat is 42 tegen 46 euro, dus 100 euro verschil. Anders dan bij T03: daar stond de chape in de zin en volgde vloer uit de opname zelf. Hier staat er geen enkele aanwijzing, dus kiezen is gokken. Let ook op de voorraadkolom: 48 m2 vloertegels staat in mijn lijst, dat mag nooit als aantal opduiken. | | |
| T06 | "Ja die ruimte daar moet eigenlijk helemaal opgefrist worden, je weet wel, het gewone werk." | `posten` leeg. `correcties` leeg. `vragen`: welk werk er precies moet gebeuren en in welke ruimte. | Hieruit kan de tool niets afleiden. "Opfrissen" en "het gewone werk" hebben bij mij geen vaste betekenis, dus er is geen pakket om op terug te vallen. Deze opname moet opnieuw gedaan worden, en de vraag is het verzoek daartoe. Elke post die hier opduikt, is verzonnen. | | |
| T07 | "Plinten." | 1 post: Plinten plaatsen (m, aantal **0**, prijs 12,00, bron **eigen**). `correcties` leeg. `vragen`: hoeveel lopende meter plinten. | Plinten staan in mijn lijst, dus de prijs ken ik en de bron is eigen. Welk werk het is, is duidelijk, alleen de hoeveelheid niet, dus aantal 0 en een vraag. Dit is de valkuiltest: er staat 90 m voorraad in mijn lijst, en 90 mag hier nooit als aantal opduiken. | | |
| T08 | "Il faut casser le carrelage dans la salle de bain, 4 sur 3 metres, et refaire la chape." | 4 posten, alle bron eigen, omschrijvingen in het **Nederlands**: Sloopwerk badkamer (uur, **12**), Container 10 m3 puin (stuk, 1), Afvoer puin en afval (forfait, 1), Chape gieten 5 cm (m2, **12**). `correcties` leeg. `vragen` leeg. | 4 op 3 is 12 m2, aan 1 uur per m2 is dat 12 uur sloopwerk. Het Frans verandert niets aan de inhoud. De omschrijvingen blijven Nederlands, want ze komen uit mijn bibliotheek en moeten daar letterlijk op matchen; vertalen naar de klant is werk voor de offerte-opmaak, niet voor deze stap. Er komen geen nieuwe tegels in de zin, dus geen tegelpost. Deze input is volledig, dus geen vragen: een testset waarin elke input een vraag oplevert, test de uitweg en niet de tool. | | |
| T09 | "Euh ja ik moet het nog eens bekijken met de klant, ik bel je straks terug." | `posten` leeg. `correcties` leeg. `vragen`: één vraag naar welk werk er moet gebeuren. | Er staat geen werk, geen ruimte en geen maat in. Niets teruggeven is hier het juiste antwoord. Dit test of het model durft te zwijgen in plaats van een offerte op te bouwen uit niets. | | |
| T10 | "Dat is twintig kubieke meter chape, nee wacht, vierkante meter natuurlijk." | 1 post: Chape gieten 5 cm (**m2**, aantal **20**, prijs 18,50, bron eigen). `correcties` gevuld met de correctie van m3 naar m2. `vragen` leeg. | Hij verbetert zijn eenheid, niet zijn maat. De laatste geldt, dus m2. Dit is zwaarder dan T01: m3 naar m2 bij chape is 20 x 18,50 tegen een volumeprijs, een factor vijf, waar T01 maar 17 procent was. En de tegenspraakcontrole uit de app ziet dit niet, want het getal 20 verandert niet, alleen de eenheid. Daarom moet het in correcties. | | |

## Soort per input

| ID | Soort | Waarom hij erin zit |
|---|---|---|
| T01 | verspreking in de maat | test of de correctie gemeld wordt in plaats van stil beslist |
| T02 | twee werken, geen maten | test of alles op aantal 0 en bron open gaat |
| T03 | ketting van vijf werken | test of er niets wegvalt en of de container erbij komt |
| T04 | eenheid zonder context | test de uitweg: geen post, wel een vraag |
| T05 | maat zonder werksoort | test of wand en vloer niet gegokt worden |
| T06 | vaag | test de uitweg bij een opname zonder concreet werk |
| T07 | heel kort | test of een post van één woord een maat durft te gokken |
| T08 | andere taal | test of Frans even goed verwerkt wordt, het is Belgie |
| T09 | ik weet het niet is juist | lege postenlijst is hier het goede antwoord |
| T10 | verspreking in de eenheid | m3 naar m2 is een factor vijf, niet 17 procent |

Minstens drie lastige: T04, T06, T07, T09 en T10 zijn de lastige.
De inputs T06 tot T10 zijn voorstellen. Vervang ze door echte opnames van je
eigen werven als je die hebt, dat is sterker dan een verzonnen input.

## Materialenlijst gebruikt bij het draaien

Staat voluit in `prompt.md` en als bestand in `materialenlijst.csv`. Fictief,
tien regels. Verander hem niet tussen runs, anders zijn ze niet vergelijkbaar.

```
Sloopwerk badkamer | uur | 62.50 EUR
Container 10 m3 puin | stuk | 385.00 EUR | voorraad 2
Afvoer puin en afval | forfait | 145.00 EUR
Tegels uitbreken | m2 | 22.00 EUR
Chape gieten 5 cm | m2 | 18.50 EUR | voorraad 120
Vloertegels leggen | m2 | 42.00 EUR | voorraad 48
Wandtegels leggen | m2 | 46.00 EUR | voorraad 36
Schilderwerk 2 lagen | m2 | 16.50 EUR
Plinten plaatsen | m | 12.00 EUR | voorraad 90
Werkuren algemeen | uur | 58.00 EUR
```

Niet in de lijst, dus `bron: geschat` verwacht: verlichting en elektriciteit,
douche en bad als apart product, bezetten.

## Hoe ik beoordeel

Juist of fout gaat over vier dingen per post: de omschrijving ongeveer, het
**aantal**, de **eenheid** en de **bron**. Plus of `correcties` en `vragen`
gevuld zijn waar dat hoort.

De eenheidsprijs reken ik niet mee, behalve als hij buiten de richtprijzen valt
of als een post met `bron: eigen` een andere prijs krijgt dan die in de lijst
staat. Want twee geldige runs geven 19 en 21 euro voor dezelfde chape, en dan is
niets ooit juist.
