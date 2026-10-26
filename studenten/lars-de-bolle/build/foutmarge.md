# Mijn foutmarge

Gemeten op 26 oktober 2026. Twee promptversies, dezelfde 12 inputs uit
`test-set.md`, **3 runs elk**, op hetzelfde model: **GPT-6 Luna** (`gpt-6-luna`),
zonder temperature, want GPT-6 weigert dat veld. Beoordelaar: ik, tegen de kolom
"juiste antwoord" die voor week 3 is opgeschreven en sindsdien niet aangepast.

Ruwe uitvoer van alle runs: `evals/uitvoer.jsonl`. Opnieuw te draaien met
`evals/run.py`.

## De twee versies

| Versie | Run 1 | Run 2 | Run 3 | Bereik | Totaal | Kost per run |
|---|---:|---:|---:|---:|---:|---:|
| v2 (`prompt-v2.md`) | 12/12 | 12/12 | 12/12 | **12 – 12** | 36/36 | EUR 0,00029 |
| v3 (`prompt.md`) | 12/12 | 11/12 | 12/12 | **11 – 12** | 35/36 | EUR 0,00029 |

De enige fout in 72 runs: v3, run 2, input T11. Daar viel de post voor de kraan
weg, de enige post met bron `open`. In run 1 en run 3 stond hij er wel. Dezelfde
prompt, dezelfde input, een ander antwoord. Dat is F6.

**Mijn foutmarge is dus ongeveer 1 punt op 12, zo'n 8 procent.** Elk verschil
van 1 punt tussen twee opzetten betekent niets. Pas vanaf 2 punten mag ik iets
beweren.

## Mijn claim uit week 3 en 4: ingetrokken

De claim was: de wijziging die ik in week 3 maakte, één alinea onder de
richtprijzen, loste fout F2 op, waarbij het model bij T02 een post
"Elektriciteit lichtpunt plaatsen" van 415 euro verzon. v3 zou dus beter zijn
dan v2.

**Dat klopt niet, en ik trek het in.** Op dit model scoort v2 36 op 36 en v3 35
op 36. v3 is geen punt beter, hooguit een punt slechter, en dat ene punt valt
binnen de foutmarge. Beide versies zijn op deze testset niet van elkaar te
onderscheiden.

De reden is leerzamer dan het cijfer. **v2 maakt die F2-fout hier helemaal
niet.** In alle drie de runs geeft v2 bij T02 precies één post, Schilderwerk 2
lagen, en twee vragen. De fout die ik in week 3 heb opgelost, bestond op dit
model nooit.

Wat ik dus eigenlijk heb gemeten in week 3: niet dat mijn prompt beter werd,
maar dat Haiku via Claude Code bij die ene input de mist in ging. Ik heb een
fout van een model toegeschreven aan mijn prompt, en toen mijn prompt
aangepast. De wijziging is niet schadelijk, maar ze verdient geen krediet.

**Wat ik hieruit meeneem:** een score zonder modelnaam ernaast is waardeloos.
Twee runs waren te weinig om dat te zien, en één model was te weinig. Vanaf nu
staat bij elk cijfer in `test-set.md` welk model het draaide.

## Wat dit niet bewijst

- Beide versies zijn hier alleen op Luna gemeten. Op Haiku kan het verschil er
  wel zijn: daar is F2 immers wél opgedoken.
- 3 runs is nog steeds weinig. Een fout die eens in de twintig runs opduikt,
  vind ik hier niet.
- 12 inputs is een kleine testset. De vier die het moeilijkst zijn (T05, T07,
  T11, T12) wegen daardoor zwaar door in het cijfer.
