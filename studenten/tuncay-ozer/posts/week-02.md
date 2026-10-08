# Week 2 — Mijn workoutberichtjes in Excel

## Wat bouw ik?
Een systeem waar korte notities of berichten van mijn workout terechtkomen in een Excel-document, om mijn progressie te zien. Erin: een slordig berichtje zoals `inc db 36 x 6`. Eruit: per oefening één rij met oefening, sets, reps, gewicht, afstand, tijd en notitie.

## Waarom een taalmodel?
Een vaste regel werkt als je altijd hetzelfde schrijft. Een taalmodel probeert je input te begrijpen. Ik stuur vaak kleine, korte tekstjes, en nooit in hetzelfde formaat.

## Eén testinput
Input: `inc db 36 x 6`
Juiste antwoord: incline dumbbell press, sets ?, reps 6, gewicht 36.
Wat de tool zei: run 1 `inc dumbbell`, reps ?, gewicht 36. Run 2 `inc dumbbell`, reps 6, gewicht 36. Twee keer een andere uitkomst.

Niet goed genoeg. Het is belangrijk dat ik de reps en het gewicht zeker zie, aangezien ik mijn progressie wil tracken.
