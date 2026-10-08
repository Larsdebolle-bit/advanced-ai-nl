# Testset

Vul **Juiste antwoord** en **Waarom** in vóór je draait. Draaien = een nieuw gesprek, de prompt uit `prompt.md`, één input erbij. Nooit deze tabel meegeven.

| ID | Input | Juiste antwoord | Waarom | Run 1 | Run 2 |
|---|---|---|---|---|---|
| T01 | "Ik moet een badkamer gaan uitbreken die badkamer is 5 op 7 meter euh ik bedoel 5 op 6 meter." | Rekenen met 5 op 6 (30 m²), en de verspreking melden in plaats van ze stil weg te werken. | De laatste maat is de bedoelde. Maar het model mag die keuze niet zelf stil maken: de aannemer moet zien dat er twee maten in de opname zaten. | F1 fout. Stil 5 op 7 (35 m²) aangehouden, geen melding. Alle vier de regelcontroles zwegen: de rekensomcontrole had geen expliciet m²-getal, de onrealistisch-controle begint pas boven 100 m², en de tegenspraakcontrole zag 35 tegenover 30 maar liet het door want 14,3% viel onder de marge van 25%. Netto 5 m² te veel tegelwerk, ongeveer 17%. | |
| T02 | "Ik moet een ruimte schilderen en nadien de belichting regelen." | | | | |
| T03 | "Ik moet de tegels uitbreken, douche uitbreken en bad ook en nadien de chape leggen en nieuwe tegels opleggen." | | | | |
| T04 | "Vierkante meter, kubieke meter." | | | | |
| T05 | "Tegels leggen 5 op 5 meter." | | | | |

## Materialenlijst gebruikt bij het draaien

[plak hier dezelfde regels die je in de prompt zet, zodat de runs vergelijkbaar blijven]
