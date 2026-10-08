# Week 2 — Taalmodel voor mails

## Wat bouw ik?
Mijn tool sorteert schoolmails in labels volgens wat ik moet doen. Erin gaat één schoolmail met de datum waarop hij binnenkwam. Eruit komt één label (`dringend`, `later`, `info`, `negeren` of `onzeker`) met een reden van één zin.

## Waarom een taalmodel?
Omdat een taalmodel rommelig geschreven mails begrijpt en kan zien of er een taak of deadline in staat, wat met vaste regels moeilijk is.

## Eén testinput
**Input:** de mail van de docent van Advanced AI met de opdracht voor de eerste post. Ontvangen op maandag 28 september, onderwerp "Deadline verlengd", deadline vrijdag 2 oktober 23:59.

**Juiste antwoord:** `later`. De mail kwam op 28 september en de deadline is 2 oktober, wat meer dan 3 dagen is.

**Wat mijn tool zei:** twee keer `later`. Reden: "De student moet een eerste post indienen tegen vrijdag 2 oktober 23:59, en dat is vier dagen na de ontvangstdatum, dus meer dan drie dagen."

Op mijn vijf testmails haalde de tool 8 op 10 juist.
