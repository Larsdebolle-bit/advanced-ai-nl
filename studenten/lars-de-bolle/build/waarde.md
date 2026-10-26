# Waarde: de value chain met een bereik

Week 4 gaf één getal: 3.357 euro netto per jaar. Dat getal was te zelfzeker.
Het hing aan twee schattingen van mij en aan één meting die ik niet had gedaan.
Hier staat hetzelfde verhaal als een bereik, met de foutmarge erin.

Bijgewerkt op 26 oktober 2026. Klant: Joeri, zelfstandige. Volume: 2 offertes
per week, 96 per jaar (48 werkweken). Uurkost 50 euro, loonkost van een
zelfstandige; mijn materialenlijst rekent 58 euro als factuurtarief.

## De drie schakels, elk met een bereik

| Schakel | Ondergrens | Midden | Bovengrens | Waarom het schommelt |
|---|---:|---:|---:|---|
| Met de hand, per offerte | 30 min | 45 min | 60 min | Eigen schatting. Joeri werkt in Excel. Als mijn 60 min dubbel geteld is, blijft 30 over |
| Nakijken met de tool | 35 min | 25 min | 18 min | **Mijn zwakste cijfer.** Hangt ervan af of Joeri de posten vertrouwt of alles natelt |
| Winst per offerte | -5 min | 20 min | 42 min | |
| Uren per jaar | 0 u | 32 u | 67 u | 96 offertes |
| **Waarde per jaar** | **0 euro** | **1.600 euro** | **3.360 euro** | aan 50 euro per uur |
| Tokenkost per jaar | 0,52 euro | 0,29 euro | 0,03 euro | gpt-4o, Haiku 5.5, Luna |
| **Netto per jaar** | **0 euro** | **± 1.600 euro** | **± 3.360 euro** | |

Het bereik is 0 tot 3.360 euro. Dat is een eerlijker antwoord dan 3.357, want
de onzekerheid zit niet in de tokenprijs maar in één menselijke gewoonte: hoe
lang Joeri naar een lijst kijkt die een machine heeft gemaakt.

## Wat de foutmarge met dit bereik doet

Hier komen de twee metingen samen. Uit `modelvergelijking.md`: op dezelfde 12
inputs haalt gpt-4o 8 op 12, Luna 11,5 op 12. En uit `test-set.md`: de fouten
van gpt-4o zijn geen ruis, ze liggen vast over beide runs.

Dat raakt precies de schakel die mijn hele cijfer draagt. Want hoe lang Joeri
nakijkt, hangt af van hoe vaak hij een fout vindt.

| | Fout per 12 offertes | Wat Joeri doet | Nakijken | Waarde per jaar |
|---|---:|---|---:|---:|
| Op gpt-4o | 4 | elke post natellen, want 1 op 3 bevat een verzonnen getal | 35 min | **560 euro** |
| Op Luna | 0,5 | de bronlabels scannen en doorsturen | 18 min | **3.360 euro** |

Het verschil tussen die twee modellen is **0,49 euro per jaar aan tokens**, en
**2.800 euro per jaar aan tijd van Joeri**. De modelkeuze is hier dus bijna zes
duizend keer meer waard via de nakijktijd dan via de prijs per token.

Dat is de kern van mijn memo: bij een tool van dit volume is de tokenprijs geen
beslissingsfactor. De foutmarge is het wel, want die bepaalt of de gebruiker de
uitvoer vertrouwt, en dat vertrouwen is de enige plek waar de tijdwinst zit.

## Wat ik nog niet weet

- **De 18 en de 35 minuten zijn niet gemeten.** Ik heb ze geschat na eigen
  tests in de app, niet bij Joeri met een klok ernaast. Zolang dat zo is, is
  het bereik 0 tot 3.360 en niet nauwer. Dat cijfer krijg ik pas als hij de
  tool echt gebruikt.
- **De 4 fouten op 12 gelden voor mijn prompt, niet voor de productieprompt.**
  De werfopname-functie gebruikt een andere, kortere prompt. Het kan dus beter
  of slechter zijn in de app dan in deze meting.
- **Whisper staat nog niet in de rekening.** De transcriptie kost per minuut
  opname, en dat heb ik nog niet gemeten. Het verandert de tokenkost, niet het
  bereik van de waarde, want dat wordt door tijd bepaald.
