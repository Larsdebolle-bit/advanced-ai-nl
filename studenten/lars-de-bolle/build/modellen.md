# Welk model voor deze taak?

Gemeten op 21 oktober 2026. Twee modellen, dezelfde prompt (`prompt.md` v3),
dezelfde 12 inputs uit `test-set.md`, elk 2 runs. Beoordelaar: ik, tegen de
kolom "juiste antwoord" die al voor week 3 was opgeschreven. Niets herlabeld.

Waarom deze twee: OpMaat draait in productie op **gpt-4o** (zie `taak.md` en de
functie `supabase/functions/werfopname/index.ts`, vier aanroepen, waarvan drie
op gpt-4o en een controle op gpt-4o-mini). **GPT-6 Luna** is het goedkoopste
model uit de prijstabel van week 5. De vraag is of dat goedkopere model mijn
taak slechter doet.

## Score per input

| ID | gpt-4o | Luna | Wat er misliep |
|---|:--:|:--:|---|
| T01 | juist, juist | juist, juist | |
| T02 | juist, juist | juist, juist | beide juist, waar mijn Haiku-run in week 3 hier F2 maakte |
| T03 | **fout, fout** | juist, juist | gpt-4o zet 30 uur sloopwerk zonder dat er een maat gegeven is (run 1), en voegt in run 2 twee extra sloopposten toe die dubbel tellen |
| T04 | juist, juist | juist, juist | |
| T05 | **fout, fout** | juist, juist | gpt-4o gokt vloer: post Vloertegels 25 m2 aan 42 euro, zonder vraag. Wand of vloer is 42 tegen 46 euro. Dit is de valkuil waarvoor T05 bestaat |
| T06 | juist, juist | juist, juist | |
| T07 | **fout, fout** | juist, juist | gpt-4o maakt geen enkele post, terwijl Plinten plaatsen in de materialenlijst staat. Te voorzichtig |
| T08 | juist, juist | juist, juist | Franse opname, beide vier posten exact, omschrijvingen in het Nederlands |
| T09 | juist, juist | juist, juist | |
| T10 | juist, juist | juist, juist | |
| T11 | **fout, fout** | **fout**, juist | gpt-4o rekent 12 uur in plaats van 13,5: het neemt "3 op 4" en negeert de verbetering naar "3 op 4 en een halve". Luna run 1 liet de kraan weg, run 2 had alle zeven posten |
| T12 | juist, juist | juist, juist | |
| **Score** | **8/12 en 8/12** | **11/12 en 12/12** | |

## Foutmarge en kost

| | gpt-4o | GPT-6 Luna |
|---|---:|---:|
| Score over 2 runs | 16/24 | 23/24 |
| Schommeling tussen de runs | 0 punten | 1 punt |
| Kost per run, gemeten | **EUR 0,0054** | **EUR 0,00034** |
| Output-tokens over 24 runs | 3.206 | 10.033, waarvan 6.765 denkwerk |
| Geldige JSON | 24 op 24 | 24 op 24 |

Het verschil is 3,5 punten op 12, bij een schommeling van maximaal 1 punt. Dat
valt dus buiten de foutmarge: dit is geen ruis. Luna is daarbij 16 keer
goedkoper, ondanks drie keer meer output-tokens, want Luna denkt zichtbaar na
(6.765 reasoning tokens) en rekent daar 0,50 dollar per miljoen voor, waar
gpt-4o 10 dollar vraagt.

De hele test kostte 0,15 dollar, minder dan de helft van mijn schatting. De
prompt-cache deed het werk: de 3.000 tokens prompt zijn na de eerste run
cache-lezen in plaats van verse input.

## Wat ik hieruit besluit

**De vier fouten van gpt-4o zijn reproduceerbaar in beide runs.** Dat is geen
toeval en geen temperatuur, dat is het model op deze taak. Twee ervan (T03 en
T05) zijn het gevaarlijke soort: een verzonnen getal dat stil doorgaat naar de
klant van Joeri. T07 is het omgekeerde en onschuldig: niets teruggeven waar een
post hoorde.

**Wat dit niet zegt.** Deze test draait mijn `prompt.md` v3, niet de prompt die
in de productiefunctie van OpMaat staat. Die is anders en korter. Het resultaat
zegt dus "Luna doet mijn taak beter dan gpt-4o", niet "OpMaat wordt beter door
het model om te wisselen". Om dat te weten moet ik de productieprompt door
dezelfde harnas halen. Dat is de volgende meting.

**En een verschil in de opzet dat ik niet mag wegmoffelen.** gpt-4o kreeg de
instellingen van de productiefunctie mee (`max_tokens 1600`, `temperature 0.1`),
Luna kreeg die niet, want GPT-6 weigert beide velden. De setups zijn dus niet
identiek. Bij temperature 0,1 schommelt gpt-4o nauwelijks, en dat zie je ook:
nul verschil tussen de runs. Dat maakt zijn vier fouten eerder zwaarder dan
lichter, want ze liggen vast.

## Hoe je dit opnieuw draait

De harnas staat in `evals/`. De prompts en de inputs worden uit `prompt.md`,
`prompt-v2.md` en `test-set.md` gehaald, nooit met de hand gekopieerd.

```
python3 evals/haal-op.py
OPENAI_API_KEY=$(cat ~/.openai-key) python3 evals/run.py gpt-6-luna evals/prompt-v3.txt 2
python3 evals/toon.py    # alle uitvoer, een regel per run
python3 evals/kost.py    # kost per run uit het echte tokenverbruik
```

De ruwe uitvoer van de meting van 21 oktober is verloren: die stond in een
tijdelijke map die macOS heeft opgeruimd. De cijfers in dit bestand komen uit
die meting, de bewijsstukken niet meer. Vanaf nu schrijft `run.py` naar
`evals/out/`, binnen de repo.
