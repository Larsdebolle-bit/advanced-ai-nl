# Welk model voor deze taak?

Gemeten op 26 oktober 2026. Drie setups, dezelfde prompt (`prompt.md` v3),
dezelfde 12 inputs uit `test-set.md`. Beoordelaar: ik, tegen de kolom "juiste
antwoord" die voor week 3 is opgeschreven en sindsdien nooit aangepast.
Ruwe uitvoer: `evals/uitvoer.jsonl`.

## Mijn gok

**Ik dacht dat het goedkope model slechter zou zijn.**

Eerlijk erbij: die gok staat hier achteraf opgeschreven, niet vóór de runs. Hij
telt dus niet als voorspelling, alleen als wat ik me herinner te hebben gedacht.
Volgende keer schrijf ik hem op vóór ik draai, want een gok achteraf is altijd
netjes en daarom waardeloos.

De gok was fout. Het goedkoopste model van de drie is ook het beste.

## De drie setups

| Setup | Runs | Score per run | Bereik | Kost per run | Geldige JSON |
|---|---:|---|---:|---:|---:|
| **GPT-6 Luna** | 3 | 12, 11, 12 | **11 – 12** | **EUR 0,00029** | 36/36 |
| gpt-4o *(draait in productie)* | 2 | 9, 8 | 8 – 9 | EUR 0,00530 | 24/24 |
| gpt-4o-mini *(de controlelaag)* | 2 | 6, 7 | 6 – 7 | EUR 0,00031 | 24/24 |

Mijn foutmarge is 1 punt (zie `foutmarge.md`). Het gat tussen Luna en gpt-4o is
3 punten, tussen Luna en gpt-4o-mini 5 punten. Allebei ruim buiten de marge:
dit is geen ruis.

En de prijs volgt de kwaliteit hier niet. Luna en gpt-4o-mini kosten bijna
evenveel, maar schelen 5 punten. Goedkoop zegt niets, duur ook niet.

## Waar de twee OpenAI-modellen op vastlopen

| Input | Wat er misgaat | Gevolg in euro |
|---|---|---|
| T03 | gpt-4o zet 30 uur sloopwerk waar geen maat gegeven is. gpt-4o-mini zet twee keer dezelfde post "Sanitair toestel uitbreken" | 1.875 euro verzonnen, respectievelijk 225 euro dubbel |
| T05 | allebei gokken ze vloer: 25 m2 aan 42 euro, zonder te vragen of het wand of vloer is | 100 euro verschil, en het is een gok die niemand ziet |
| T07 | gpt-4o-mini zet plinten op eenheid **set** in plaats van meter | 12 euro per set in plaats van per meter; op 90 meter meer dan 1.000 euro mis |
| T11 | allebei rekenen ze 12 uur in plaats van 13,5: ze nemen "3 op 4" en negeren de verbetering naar "3 op 4 en een halve" | 94 euro te weinig, en de verspreking wordt stil ingeslikt |

Luna maakt geen van deze vier. Haar enige fout in 36 runs is een weggevallen
post bij T11, en die wisselt per run: dat is ruis, geen regel die misgaat.

Het soort fout verschilt dus, niet alleen het aantal. De fouten van gpt-4o en
gpt-4o-mini liggen vast over beide runs en zetten een getal in de offerte dat
niemand heeft gezegd. Dat is precies wat mijn prompt moest voorkomen.

## Wat ik in productie zet

**Ik zet de werfopname over naar GPT-6 Luna.** Drie punten beter op mijn eigen
testset, zestien keer goedkoper, en de fouten die verdwijnen zijn net de fouten
die een verzonnen bedrag bij de klant van Joeri krijgen.

Wat ik daarbij open moet houden, want anders klopt mijn eigen redenering niet:
deze meting draaide `prompt.md` v3, niet de prompt die in
`supabase/functions/werfopname/index.ts` staat. Die is korter en anders. Voor de
overzetting draai ik die productieprompt door dezelfde harnas, zodat ik weet of
het verschil daar ook 3 punten is. Lukt dat niet voor de overzetting, dan is het
een beslissing op een naburige meting en niet op een directe, en dat hoort er
dan bij te staan.

Twee dingen die bij de overzetting zelf horen: Luna weigert `max_tokens` en
`temperature`, dus die velden moeten uit de aanroep, en de functie doet vier
aanroepen (splitsen, foto, controles, posten) die elk apart gemeten moeten
worden. Whisper blijft zoals het is; die is niet getest.

## Verschil in de opzet dat ik niet wegmoffel

gpt-4o en gpt-4o-mini kregen de instellingen van de productiefunctie mee
(`max_tokens 1600`, `temperature 0.1`), Luna niet, want GPT-6 weigert beide
velden. De setups zijn dus niet identiek. Bij temperature 0,1 schommelen de twee
OpenAI-modellen nauwelijks, en dat zie je: hun fouten liggen in beide runs vast.
Dat maakt hun score eerder harder dan zachter.

Een eerdere meting op 21 oktober gaf gpt-4o 8 en 8, en Luna 11 en 12. Dat ligt
binnen de foutmarge van wat hier staat. De ruwe uitvoer van die meting is
verloren gegaan in een tijdelijke map; daarom staat de harnas nu in `evals/` en
de uitvoer in `evals/uitvoer.jsonl`.

## Hoe je dit opnieuw draait

```
python3 evals/haal-op.py
OPENAI_API_KEY=$(cat ~/.openai-key) python3 evals/run.py gpt-6-luna evals/prompt-v3.txt 3
python3 evals/toon.py     # alle uitvoer, een regel per run
python3 evals/kost.py     # kost per run uit het echte tokenverbruik
python3 evals/bundel.py   # out/ samenvoegen tot uitvoer.jsonl
```
