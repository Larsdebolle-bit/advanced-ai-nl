# Testset

Twaalf inputs. Het juiste antwoord en de reden staan erbij, en die heb ik
geschreven **voor** ik ook maar één keer gedraaid heb. Draaien = een nieuw
gesprek, de prompt uit `prompt.md`, één input erbij. Nooit deze tabel meegeven.

| ID | Input | Juiste antwoord | Waarom | Run 1 | Run 2 |
|---|---|---|---|---|---|
| T01 | "Ik moet een badkamer gaan uitbreken die badkamer is 5 op 7 meter euh ik bedoel 5 op 6 meter." | 3 posten, alle eigen: Container (stuk 1), Sloopwerk badkamer (uur **30**), Afvoer (forfait 1). `correcties` gevuld. `vragen` leeg. | 5 op 6 is 30 m2, aan 1 uur per m2 is dat 30 uur. Tegels, bad en douche zitten in die uren. Container en afvoer horen er altijd bij. De correctie moet gemeld worden: 35 uur in plaats van 30 is 312,50 euro te veel en hij kan op de werf niet horen welke maat het model koos. | JUIST. 30 uur, container 1, afvoer 1, correctie staat er. Stelde er een vraag bij die ik niet verwachtte: of een container van 10 m3 genoeg is. | JUIST. Posten identiek. **Vragen nu leeg**, waar run 1 de containervraag stelde. F6 in de vragen. |
| T02 | "Ik moet een ruimte schilderen en nadien de belichting regelen." | 1 post: Schilderwerk 2 lagen (m2, aantal **0**, 16,50, **eigen**). **Geen post voor de belichting.** `correcties` leeg. `vragen`: hoeveel m2, en wat er met de belichting moet. | Schilderwerk staat in mijn lijst, dus de prijs ken ik en de bron blijft eigen, ook met aantal 0. Van "de belichting regelen" weten we niets: een punt, een armatuur of een hele kring zijn drie prijzen. Daar maak ik geen post van, daar vraag ik naar. Eén post is een geldige offerte. | **FOUT, F2.** Maakte een tweede post "Elektriciteit lichtpunt plaatsen" (stuk, 0, 415, geschat), die er volgens de plaatsregel niet had mogen zijn. Schilderwerk zelf was juist. Drie vragen. | **FOUT, F2, identiek.** Zelfde twee posten, zelfde lichtpunt op 415 euro. Reproduceerbaar, dus geen toeval. |
| T03 | "Ik moet de tegels uitbreken, douche uitbreken en bad ook en nadien de chape leggen en nieuwe tegels opleggen." | 5 posten, alle eigen: Sloopwerk badkamer (uur 0), Container (1), Afvoer (1), Chape (m2 0), Vloertegels (m2 0). `vragen`: hoeveel m2. | Tegels, douche en bad samen is een badkamer strippen, dus uren, ook al valt het woord badkamer niet. Geen maat gezegd, dus 0, maar de prijzen komen uit mijn lijst dus de bron blijft eigen. "Nieuwe tegels na de chape" zijn vloertegels: op een chape leg je geen wandtegels. | JUIST. Vijf posten exact, alle bron eigen. Stelde twee vragen, beide over dezelfde onbekende (de m2). | JUIST. Posten identiek. **Nu drie vragen** in plaats van twee, alle drie over dezelfde m2. F6 in de vragen. |
| T04 | "Vierkante meter, kubieke meter." | `posten` leeg. `vragen`: waarover het gaat, en oppervlakte of volume. | Geen werk en geen ruimte, alleen twee eenheden. m2 tegen m3 is een factor vijf. Hier is niet weten het juiste antwoord. | JUIST. Leeg, één vraag. | JUIST. Identiek. |
| T05 | "Tegels leggen 5 op 5 meter." | `posten` leeg. `vragen`: vloer of wand. | 25 m2 is duidelijk, maar niets zegt wand of vloer, en dat is 42 tegen 46 euro. Anders dan T03: daar stond de chape in de zin en volgde vloer uit de opname zelf. | JUIST. Leeg, één vraag. Voorraad 48 duikt niet op. | JUIST. Identiek, zelfde vraag woord voor woord. |
| T06 | "Ja die ruimte daar moet eigenlijk helemaal opgefrist worden, je weet wel, het gewone werk." | `posten` leeg. `vragen`: welk werk en welke ruimte. | Hieruit kan de tool niets afleiden. "Het gewone werk" heeft bij mij geen vaste betekenis, dus er is geen pakket om op terug te vallen. Elke post die hier opduikt, is verzonnen. | JUIST. Leeg, één vraag. | JUIST. Identiek. |
| T07 | "Plinten." | 1 post: Plinten plaatsen (m, aantal **0**, 12,00, eigen). `vragen`: hoeveel lopende meter. | Plinten staan in mijn lijst, dus bron eigen. Het werk is duidelijk, de hoeveelheid niet. Dit is de valkuiltest: er staat 90 m voorraad in mijn lijst en 90 mag hier nooit als aantal opduiken. | JUIST. Plinten plaatsen, m, 0, eigen. Voorraad 90 duikt niet op. | JUIST. Identiek. |
| T08 | "Il faut casser le carrelage dans la salle de bain, 4 sur 3 metres, et refaire la chape." | 4 posten, alle eigen, omschrijvingen in het **Nederlands**: Tegels uitbreken (m2 **12**, 22,00), Chape (m2 **12**), Container (1), Afvoer (1). | 4 op 3 is 12 m2. Hij breekt alleen het tegelwerk uit, niet de hele badkamer: het object is "le carrelage", de badkamer is enkel de plaats. Dus de lijstpost aan 12 m2, geen 12 uur sloopwerk. Het Frans verandert niets aan de inhoud; de omschrijvingen blijven Nederlands omdat de server daarop matcht. | JUIST, en mijn eerste verwachting was fout. Nam Tegels uitbreken (12 m2, 264 euro) waar ik Sloopwerk badkamer (12 uur, 750 euro) verwachtte. Het volgde de regel correct. Vroeg bovendien of er na de chape vloertegels komen. | JUIST. Identiek, zelfde vier posten. |
| T09 | "Euh ja ik moet het nog eens bekijken met de klant, ik bel je straks terug." | `posten` leeg. `vragen`: welk werk. | Geen werk, geen ruimte, geen maat. Niets teruggeven is juist. Dit test of het model durft te zwijgen. | JUIST. Leeg, één vraag. | JUIST. Identiek. |
| T10 | "Dat is twintig kubieke meter chape, nee wacht, vierkante meter natuurlijk." | 1 post: Chape gieten 5 cm (**m2**, **20**, 18,50, eigen). `correcties` gevuld met de eenheidscorrectie. | Hij verbetert zijn eenheid, niet zijn maat. De laatste geldt, dus m2. Zwaarder dan T01: m3 naar m2 bij chape is een factor vijf. De tegenspraakcontrole uit de app ziet dit niet, want het getal 20 verandert niet, alleen de eenheid. | JUIST. Chape 20 m2, correctie staat er, vragen leeg. | JUIST. Identiek. |
| T11 | "Ja dus euh we staan hier in de badkamer, die moet er volledig uit, tegels bad douche alles. Dat is euh 3 op 4 denk ik, nee wacht 3 op 4 en een halve meter. En dan nadien chape erin en nieuwe tegels op de vloer. De wanden moeten ook getegeld worden maar dat weet ik nog niet hoeveel, dat moet ik nog opmeten. En de klant wil ook nog een nieuwe kraan maar hij heeft die nog niet gekozen." | 7 posten: Sloopwerk badkamer (uur **13,5**), Container (1), Afvoer (1), Chape (m2 **13,5**), Vloertegels (m2 **13,5**), Wandtegels (m2 **0**), kraan (stuk 1, prijs 0, **open**). `correcties` gevuld. `vragen`: hoeveel m2 wand. | 3 op 4,5 is 13,5 m2. Drie onderdelen samen is de hele badkamer strippen. De wandtegels zijn een apart werk: het werk ligt vast, alleen de maat niet, dus aantal 0 en bron eigen, niet open. De kraan is wel open: het product is niet gekozen. De vloer volgt uit "op de vloer". | JUIST. Alle zeven posten exact, 13,5 m2 correct uitgerekend, correctie staat er, kraan op open. Twee vragen: wandtegels en welke kraan. | JUIST. Identiek, alle zeven posten en beide vragen. |
| T12 | "Hier in de living moeten de muren gescheurd worden, euh ik bedoel bezet, de chape is er al. Dat is 30 vierkante meter wand. En dan schilderen, twee lagen, zelfde oppervlakte. En plinten rond, dat is 22 lopende meter. De plafonds laten we zoals ze zijn." | 3 posten: Wanden bezetten (m2 **30**, **geschat** 30), Schilderwerk 2 lagen (m2 **30**, eigen), Plinten plaatsen (m **22**, eigen). **Geen** container en **geen** afvoer. `correcties`: gescheurd naar bezet. | "Gescheurd" is een transcriptiefout en hij verbetert zichzelf, dus dat gaat naar correcties. Bezetten staat niet in mijn lijst, dus geschat op het midden van 25 tot 35. Er is geen sloopwerk, dus geen container en geen afvoer: dat test of die regel alleen afgaat wanneer het hoort. | JUIST. Drie posten exact, geen container, correctie over gescheurd naar bezet. Vroeg of het bezetwerk in een of twee lagen moet, wat ik niet verwachtte maar wel een echte onbekende is. | JUIST. Identiek, drie posten en dezelfde vraag. |

## Soort per input

| ID | Soort | Waarom hij erin zit |
|---|---|---|
| T01 | verspreking in de maat | test of de correctie gemeld wordt in plaats van stil beslist |
| T02 | twee werken, een dubbelzinnig | test of het model een post maakt waar het er geen mag maken |
| T03 | ketting van vijf werken | test de drempel voor een hele ruimte strippen |
| T04 | eenheid zonder context | test de uitweg: geen post, wel een vraag |
| T05 | maat zonder werksoort | test of wand en vloer niet gegokt worden |
| T06 | vaag | test de uitweg bij een opname zonder concreet werk |
| T07 | heel kort | test of een post van één woord een maat durft te gokken, en de voorraadvalkuil |
| T08 | andere taal | test Frans, en het verschil tussen een los onderdeel en een hele ruimte |
| T09 | ik weet het niet is juist | lege postenlijst is hier het goede antwoord |
| T10 | verspreking in de eenheid | m3 naar m2 is een factor vijf, niet 17 procent |
| T11 | echte opname, badkamer | zeven posten, een verspreking, een open product en een ontbrekende maat door elkaar |
| T12 | echte opname, living | transcriptiefout, geen sloopwerk dus geen container, alles compleet |

De lastige: T04, T06, T07, T09, T10, T11 en T12. T11 en T12 zijn de twee die op
een echte werfopname lijken: lang, rommelig, meerdere werken door elkaar.

## Materialenlijst gebruikt bij het draaien

Staat voluit in `prompt.md` en als bestand in `materialenlijst.csv`. Fictief,
tien regels, in elke run dezelfde.

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

Per post: de omschrijving ongeveer, het **aantal**, de **eenheid** en de
**bron**. Plus of `correcties` en `vragen` gevuld zijn waar dat hoort.

De eenheidsprijs reken ik niet mee, behalve als hij buiten de richtprijzen valt
of als een post met `bron: eigen` een andere prijs krijgt dan die in de lijst
staat. Want twee geldige runs geven 19 en 21 euro voor dezelfde chape, en dan is
niets ooit juist.

Een extra vraag die ik niet verwachtte reken ik **juist**, zolang ze over een
echte onbekende gaat en het maximum van drie gerespecteerd blijft. De prompt
zegt dat het moet vragen wat het niet weet, dus een vraag afstraffen zou die
regel tegenspreken. Een vraag over iets dat wel in de opname staat, is wel fout:
dat is de vraag die de aannemer wegklikt.

Een post missen is F3. Een post te veel is F2. Een juiste post met het verkeerde
aantal of de verkeerde eenheid is F1. Een ontbrekende correctie is F3, want het
model heeft iets gezien en niet gemeld.

## Uitslag: 22 op 24 juist (n = 12, 2 runs)

| Klasse | Aantal |
|---|---|
| F1 fout | 0 |
| F2 verzonnen | 2 (T02, in beide runs dezelfde post) |
| F3 gemist | 0 |
| F4 vorm | 0 |
| F5 geweigerd | 0 |
| F6 wisselend | 2 (T01 en T03, en alleen in de vragen, nooit in de posten) |

Eén echte fout, twee keer gemaakt.

## Na de ene wijziging: T02 twee keer opnieuw

| ID | v2b, run 1 | v2b, run 2 | v3, run A | v3, run B |
|---|---|---|---|---|
| T02 | FOUT, F2 | FOUT, F2 | JUIST | JUIST |

v3 geeft één post Schilderwerk 2 lagen (m2, 0, 16,50, eigen), geen lichtpuntpost
meer, en twee vragen waarvan de tweede precies de goede is: gaat die belichting
over een lichtpunt, een armatuur of een hele kring?

**Dit is geen 24 op 24.** Alleen T02 is op v3 gedraaid. De andere elf inputs
liepen op v2b en zijn niet opnieuw gemeten, dus ik weet niet of de wijziging daar
iets stuk heeft gemaakt. Wat ik weet: de fout die ik vond is weg, twee keer op
twee.

Zie `log.md` voor welke bouwsteen fout was, en voor een onzuiverheid in de
versies waarop de runs liepen.
