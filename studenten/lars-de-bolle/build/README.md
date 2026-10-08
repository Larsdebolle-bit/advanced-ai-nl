# Build: spraak naar offerteposten

De spraakfunctie van OpMaat, mijn app voor aannemers en zelfstandigen in de
bouw. De aannemer spreekt op de werf in wat hij ziet en wat er moet gebeuren.
Daaruit komt een concept-offerte in zijn eigen huisstijl.

## Wat waar staat

| Bestand | Inhoud |
|---|---|
| `taak.md` | De taak volgens de vijf regels van de cursus |
| `prompt.md` | v2, de versie die nu draait |
| `prompt-v1.md` | v1, bewaard om tegen af te zetten |
| `audit.md` | De zes bouwstenen tegen v1, en wat ontbrak |
| `test-set.md` | Tien inputs met het juiste antwoord vooraf, en de runs |
| `log.md` | Wat ik veranderde en wat ermee gebeurde |

## Hoe je een input draait

Eén input per keer, in een nieuw gesprek, zonder web search. Niet in deze map,
want hier leest de tool `context.md` mee. Gebruik een incognito- of tijdelijk
gesprek in de Claude- of ChatGPT-app, of een terminal in een lege map.

1. Plak de volledige prompt uit `prompt.md`.
2. Vul de materialenlijst in (dezelfde regels elke keer, zie onderaan
   `test-set.md`, anders zijn de runs niet vergelijkbaar).
3. Plak één transcript onder WERFOPNAME.
4. Zet de uitvoer in de kolom Run 1 of Run 2 van `test-set.md`.

Nooit de testset meegeven. Dan ziet het model de antwoorden.

## In de app

De echte keten staat in `OpMaatapp/supabase/functions/werfopname/index.ts` en
heeft drie modelstappen waar deze prompt er één van maakt: Whisper voor de
transcriptie, `splitsTranscriptNaarAntwoorden` voor de verdeling over zes
interviewvelden, en de postgenerator. Naast de keten lopen de regelcontroles in
`controles.js` en een losse vragenstap op gpt-4o-mini.

Wat deze cursusprompt in één stap doet, doet de app in drie. Dat is relevant
voor de fout uit T01: die zat op de overdracht tussen stap twee en drie, niet
in één prompt. Zie `audit.md`.

## Bekende beperking

De uitvoer verslechtert als de aannemer vaag of onvolledig spreekt. De leidraad
met voorbeeldantwoorden in de app stuurt zijn taalgebruik bij, maar maakt de
testinputs daardoor gecontroleerder dan een echte werf. Dat is een bovengrens
op het succespercentage.
