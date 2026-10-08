# 5 — Fouten classificeren

Plak: `Lees ../../cursus/week-03/hulp/5-fouten.md en help me verder.`

## Voor je AI

1. Zet in `build/test-set.md` de uitvoer naast het juiste antwoord. Vraag per input: "Juist of fout?" De student beslist.
2. Per fout: toon de zes klassen hieronder en vraag welke past. Stel voor als de student twijfelt, maar de student kiest.
3. Tel. Schrijf onder de testset: "x op n juist (n = …, 1 run)". Bijvoorbeeld "3 op 5 juist (n = 5, 1 run)". Zet het ook in `build/log.md`.
4. Wis nooit een fout.

## De klassen

| | | |
|---|---|---|
| F1 | Fout | Vol overtuiging het verkeerde antwoord |
| F2 | Verzonnen | Een detail dat niet in de input stond |
| F3 | Gemist | Iets niet gevonden dat er wel stond |
| F4 | Vorm | Juiste inhoud, onbruikbare vorm |
| F5 | Geweigerd | Weigert, twijfelt, stelt een vraag terug |
| F6 | Wisselend | Ander antwoord bij dezelfde input |

F2 en F6 zijn de gevaarlijke.

Klaar als: elke fout een klasse heeft, en het cijfer met n onder de testset staat. Volgende: `6-wijziging.md`.
