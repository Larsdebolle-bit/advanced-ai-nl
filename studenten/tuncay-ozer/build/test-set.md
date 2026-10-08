# Testset

Kolommen in het juiste antwoord: oefening | sets | reps | gewicht (kg) | afstand (km) | tijd (min) | notitie. Ontbreekt een waarde: `?`. Geen training: `geen training`.

| ID | Input | Juiste antwoord | Waarom | Run 1 | Run 2 |
|---|---|---|---|---|---|
| T01 | `inc db 36 x 6` | incline dumbbell press \| ? \| 6 \| 36 \| ? \| ? \| ? | Sets niet vermeld. Reps 6 (x6). Gewicht 36. | inc dumbbell \| ? \| ? \| 36 \| ? \| ? \| ? | inc dumbbell \| ? \| 6 \| 36 \| ? \| ? \| ? |
| T02 | `5km 36min` | lopen \| ? \| ? \| ? \| 5 \| 36 \| ? | Er staat km, dus het is sowieso lopen. De duur van een training zet ik nooit, dus 36min is de looptijd. | ? \| ? \| ? \| ? \| ? \| ? \| 5km 36min | lopen \| ? \| ? \| ? \| 5 \| 36 \| ? |
| T03 | `chestday niet optimaal` | ? \| ? \| ? \| ? \| ? \| ? \| chestday niet optimaal | Geen oefening of cijfers, alleen hoe de training voelde. | ? \| ? \| ? \| ? \| ? \| ? \| chestday niet optimaal | chestday \| ? \| ? \| ? \| ? \| ? \| niet optimaal |
| T04 | `Chestday niet gevoeld.` | ? \| ? \| ? \| ? \| ? \| ? \| Chestday niet gevoeld. | Zelfde als T03: geen oefening of cijfers, alleen hoe de training voelde. | ? \| ? \| ? \| ? \| ? \| ? \| Chestday niet gevoeld. | ? \| ? \| ? \| ? \| ? \| ? \| Chestday niet gevoeld. |
| T05 | `db press en 30min cardio` | rij 1: dumbbell press \| ? \| ? \| ? \| ? \| ? \| ?<br>rij 2: cardio \| ? \| ? \| ? \| ? \| 30 \| ? | Twee oefeningen, dus twee rijen. db = dumbbell. Cardio blijft cardio, geen lopen. | rij 1: dumbbell press \| ? \| ? \| ? \| ? \| ? \| ?<br>rij 2: cardio \| ? \| ? \| ? \| ? \| 30 \| ? | rij 1: dumbbell press \| ? \| ? \| ? \| ? \| ? \| ?<br>rij 2: cardio \| ? \| ? \| ? \| ? \| 30 \| ? |

T05 is gereconstrueerd uit mijn hoofd, geen echt verstuurd bericht.

Runs: prompt v1, Claude Sonnet (`claude -p --model sonnet`), elke run een nieuw gesprek, 6 oktober 2026.
