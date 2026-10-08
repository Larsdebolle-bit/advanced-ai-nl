# Log

Wat ik veranderde, en wat ermee gebeurde. Nieuwste bovenaan.

## Week 3, v2: zes bouwstenen compleet

**Wat ontbrak.** De audit (`audit.md`) legde drie gaten bloot in v1: geen enkel
voorbeeld (bouwsteen 4), geen enkele regel met een waarom (bouwsteen 2), en een
uitweg die alleen een ontbrekende prijs dekte en niet een tegenstrijdige of
dubbelzinnige maat (bouwsteen 5).

**Wat ik veranderde.** Eén wijziging per bouwsteen, niet meer:

| Bouwsteen | Wijziging |
|---|---|
| 1 | Rol uitgebreid: de aannemer leest op de werf na, dus een stille keuze gaat mee naar de klant. |
| 2 | Elke regel een want. De correctieregel vermeldt nu dat 5 m2 ongeveer 17 procent is en onder elke automatische controle doorvalt. |
| 3 | Twee velden bij: `correcties` en `onzeker`. |
| 4 | Drie voorbeelden: normale opname met maat, werk zonder maat, opname zonder inhoud. Bewust geen van mijn testinputs, want dan test ik het model op zijn eigen voorbeelden. |
| 5 | Expliciete uitweg: niet weten mag, en hoort in `onzeker`. |
| 6 | Onveranderd, stond al goed. |

**Verwachting, voor ik draai.** T01 moet nu 30 m2 geven plus een regel in
`correcties`. T04 moet een lege postenlijst geven met een regel in `onzeker`.
T02, T03 en T05 verwacht ik ongewijzigd correct.

**Bewust niet in v2 gezet: de kandidaat-wijziging.** De materialenlijst heeft
een kolom `voorraad` (vloertegels 48, chape 120, plinten 90) en nergens in de
prompt staat wat die kolom betekent. Dat is opzet. Neemt het model die voorraad
over als `aantal`, dan weet ik dat het mijn bibliotheek als hoeveelheidslijst
leest in plaats van als prijslijst, en dat is een fout die in productie een
offerte van 90 meter plinten maakt waar de klant er 12 nodig heeft.

Gaat T05 of T07 daarop onderuit, dan is dit mijn ene wijziging: één zin onder de
lijst dat de voorraad over het magazijn gaat en niet over deze offerte. Ik zet
die zin er nu niet in, want dan test ik of het model een regel kan volgen in
plaats van of het de lijst begrijpt.

**Resultaat.** Nog niet gedraaid. Run 1 staat hieronder zodra de vijf inputs
door v2 zijn gegaan.

| ID | v1 | v2 |
|---|---|---|
| T01 | F1, stil 35 m2 | |
| T02 | niet gedraaid | |
| T03 | niet gedraaid | |
| T04 | niet gedraaid | |
| T05 | niet gedraaid | |

Succespercentage: nog niet te geven. v1 staat op 0 op 1 juist (n = 1, 1 run).

## Week 2, v1: eerste versie

Eerste prompt geschreven, bewaard als `prompt-v1.md`. T01 gedraaid in de echte
app-keten: fout, klasse F1. Het model hield stil 5 op 7 aan (35 m2 in plaats van
30), zonder melding. Vier regelcontroles zwegen, elk om een eigen reden. De
analyse staat in `audit.md` onder "De diepere fout".

0 op 1 juist (n = 1, 1 run).
