# Testset

Vul **Juiste antwoord** en **Waarom** in vóór je draait. Draaien = een nieuw gesprek, de prompt uit `prompt.md`, één input erbij. Nooit deze tabel meegeven.

| ID | Input | Juiste antwoord | Waarom | Run 1 | Run 2 |
|---|---|---|---|---|---|
| T01 | "Ik moet een badkamer gaan uitbreken die badkamer is 5 op 7 meter euh ik bedoel 5 op 6 meter." | Rekenen met 5 op 6 (30 m²), en de verspreking melden in plaats van ze stil weg te werken. | De laatste maat is de bedoelde. Maar het model mag die keuze niet zelf stil maken: de aannemer moet zien dat er twee maten in de opname zaten. | F1 fout. Stil 5 op 7 (35 m²) aangehouden, geen melding. Alle vier de regelcontroles zwegen: de rekensomcontrole had geen expliciet m²-getal, de onrealistisch-controle begint pas boven 100 m², en de tegenspraakcontrole zag 35 tegenover 30 maar liet het door want 14,3% viel onder de marge van 25%. Netto 5 m² te veel tegelwerk, ongeveer 17%. | |
| T02 | "Ik moet een ruimte schilderen en nadien de belichting regelen." | | | | |
| T03 | "Ik moet de tegels uitbreken, douche uitbreken en bad ook en nadien de chape leggen en nieuwe tegels opleggen." | | | | |
| T04 | "Vierkante meter, kubieke meter." | | | | |
| T05 | "Tegels leggen 5 op 5 meter." | | | | |
| T06 | "Ja die ruimte daar moet eigenlijk helemaal opgefrist worden, je weet wel, het gewone werk." | | | | |
| T07 | "Plinten." | | | | |
| T08 | "Il faut casser le carrelage dans la salle de bain, 4 sur 3 metres, et refaire la chape." | | | | |
| T09 | "Euh ja ik moet het nog eens bekijken met de klant, ik bel je straks terug." | | | | |
| T10 | "Dat is twintig kubieke meter chape, nee wacht, vierkante meter natuurlijk." | | | | |

## Soort per input

| ID | Soort | Waarom hij erin zit |
|---|---|---|
| T01 | verspreking in de maat | test of de correctie gemeld wordt in plaats van stil beslist |
| T02 | twee werken, geen maten | test of alles op aantal 0 en bron open gaat |
| T03 | ketting van vijf werken | test of er niets wegvalt en of de container erbij komt |
| T04 | eenheid zonder context | test de uitweg: geen post, wel een regel in onzeker |
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

[plak hier dezelfde regels die je in de prompt zet, zodat de runs vergelijkbaar blijven]
