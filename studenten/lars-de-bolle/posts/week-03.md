# Week 3 — De fix die een nieuwe fout maakte

## Wat ontbrak er in mijn context?

Ik liep de zes bouwstenen af op mijn prompt van vorige week en vond drie gaten:
nul voorbeelden, geen regel met een waarom, en een uitweg die een ontbrekende
prijs dekte maar geen tegenstrijdige maat. Die drie heb ik gedicht. De buurtest vond er acht meer, en geen van die acht is
een ontbrekende bouwsteen. Het zijn regels die onderling niet kloppen. "Schat op
Belgische richtprijzen", en nergens stond een richtprijs. Bij eenheid forfait
volgt uit mijn eigen regel dat het aantal 0 is, en dan staat die post op nul
euro. Een checklist vindt wat er niet staat, een lezer vindt wat er niet samen
kan.

En vijf keer bleek mijn verwachte antwoord iets te eisen dat nergens in mijn
prompt stond. De uren per m2 voor sloopwerk. Dat een container er altijd bij
hoort. Wanneer het model mag afleiden. Dat zat in mijn hoofd en nergens anders.

## Mijn eerste cijfer

22 op 24 juist (n = 12, 2 runs). Eén echte fout, twee keer gemaakt: F2. En twee
keer F6, wisselend antwoord. Die F6 is het interessantste. De posten waren in alle twaalf inputs bij beide
runs identiek: zelfde aantallen, eenheden en bronlabels. Alleen het aantal vragen
wisselde. Eén input stelde in run 1 een vraag en in run 2 geen, een andere eerst
twee en dan drie over dezelfde onbekende. De harde uitvoer is stabiel, de zachte
niet. Voor een offerte is dat de goede kant op, maar mijn eigen prompt zegt dat
de aannemer vragen die hij al beantwoord heeft vanaf dan wegklikt.

Eén fout zat in mijn testset. Bij de Franse opname verwachtte ik sloopwerk aan
12 uur, 750 euro. Het model nam tegels uitbreken aan 12 m2, 264 euro, en volgde
daarmee correct een regel die ik zelf net had toegevoegd.

## Eén wijziging

De fout: bij "een ruimte schilderen en nadien de belichting regelen" maakte het
model een tweede post, "Elektriciteit lichtpunt plaatsen", 415 euro. Die had
niet mogen bestaan: van "de belichting regelen" weet je niet of het een punt,
een armatuur of een hele kring is. Dat hoort een vraag te zijn.

Welke bouwsteen fout was: geen van de zes. Het was een botsing tussen een regel
en de richtprijzenlijst die ik na de buurtest had toegevoegd. Daar staat
"Elektriciteit per punt: 280 tot 550". Het model vond een prijs, en een prijs
hebben voelde als toestemming om een post te maken. Die lijst was zelf een fix
uit de buurtest. Een fix die een nieuwe fout maakt.

Mijn wijziging: één alinea onder de richtprijzen, dat een prijs vinden geen
reden is om een post te maken. Twee keer opnieuw gedraaid, beide keren juist.

Waarom dat geen bewijs is: twee runs op één input, en de andere elf heb ik niet
opnieuw gedraaid. Ik mag dus niet zeggen dat de tool nu 24 op 24 haalt. Dat is
hetzelfde probleem dat die richtprijzenlijst mij bezorgde, en de reden waarom ik
voor week 4 alle twaalf opnieuw moet draaien.
