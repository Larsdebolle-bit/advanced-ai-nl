# Audit van v1

De zes bouwstenen tegen `prompt.md` v1, regel per regel.

| Regel v1 | Bouwsteen | Oordeel |
|---|---|---|
| 6 | 1 rol en doel | Half. Zegt wat de tool doet, niet voor wie en niet dat de uitvoer een concept is dat de aannemer nog nakijkt. |
| 8-9 | 3 labels en vorm | Goed. JSON-formaat staat vast. |
| 11 | 3 labels en vorm | Goed. Eenheden zijn een gesloten lijst. |
| 13-16 | 3 labels en vorm | Goed. Drie bronlabels, scherp afgebakend. |
| 18-24 | 2 regels, met waarom | Zes regels, geen enkele met een waarom. |
| 20 | 5 uitweg | Half. Dekt "niets gezegd", niet "ik weet het niet". |
| 22 | 5 uitweg | Half. Dekt een ontbrekende maat, niet een dubbelzinnige. |
| 26-30 | 6 de input | Goed. Afgebakend met kopjes, staat achteraan. |
| ontbreekt | 4 voorbeelden | Nul voorbeelden in de hele prompt. |

## Wat ontbrak, en waarom het uitmaakte

**Bouwsteen 4 ontbrak volledig.** Geen enkel voorbeeld. De README vraagt drie
tot vijf, zo verschillend mogelijk. Zonder voorbeeld moet het model uit de
regels afleiden hoe een goede uitvoer eruitziet, en dat vult het met een gok.

**Bouwsteen 2 had geen enkel waarom.** Regel 21 bewijst waarom dat erg is:
"Corrigeert de aannemer zichzelf, neem dan de laatste maat." Die regel stond er
al, en T01 ging toch fout. De regel zei wat het model moest kiezen, maar niet
waarom, en dus ook niet dat die keuze zichtbaar moest worden. Een model dat niet
weet waarom een regel bestaat, past hem toe tot aan de letter en niet verder.

**Bouwsteen 5 dekte de verkeerde gevallen.** v1 had een uitweg voor een
ontbrekende prijs (`open`) en voor een opname zonder werk (lege lijst). Er was
geen uitweg voor twee dingen die botsen, en geen voor een input die te weinig
zegt om te calculeren. T04 ("Vierkante meter, kubieke meter.") valt in dat gat.

## De diepere fout, die geen prompt oplost

T01 ging fout op de overdracht tussen twee modelstappen, niet in één prompt.
Whisper schreef de verspreking letterlijk op. De verdeelstap koos stil de
verkeerde maat en gaf alleen de zes velden door. Daardoor zag de postgenerator
het ruwe transcript nooit, en zagen de vier regelcontroles in `controles.js`
alleen nog het resultaat.

Alle vier zwegen, elk om een eigen reden:

| Controle | Waarom ze zweeg |
|---|---|
| rekensom | had een expliciet m2-getal naast de maten nodig |
| onrealistisch | begint pas boven 100 m2 |
| tegenspraak | zag 35 tegenover 30, maar 14,3% viel onder de marge van 25% |
| ontbrekend materiaal | niet van toepassing |

Netto 5 m2 te veel tegelwerk, ongeveer 17 procent, zonder één signaal. Het enige
vangnet was dat de aannemer de vooringevulde velden zelf nalas.

Twee lessen die breder gelden dan deze tool:

1. Een deterministische controlelaag naast een AI-keten dekt niets af wat de
   keten al heeft weggegooid. Ze krijgt alleen het resultaat te zien.
2. Een drempel die ruim genoeg staat om ruis te slikken, slikt ook precies de
   verspreking die een mens op een werf echt maakt. 25 procent marge is ruim
   voor een meetfout en te ruim voor "5 op 7, nee, 5 op 6".

In de app is dat opgelost door de verdeelstap een `correcties`-lijst te laten
teruggeven: het model mag de laatste maat kiezen, maar moet die keuze melden.
De prompt hieronder doet in één stap hetzelfde, want de cursusversie heeft die
keten niet.
