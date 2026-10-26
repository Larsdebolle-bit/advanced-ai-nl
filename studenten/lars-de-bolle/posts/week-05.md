# Week 5: ik had de verkeerde schuldige

## Mijn foutmarge

Twee promptversies, dezelfde 12 inputs, 3 runs elk, op GPT-6 Luna. v2 haalt
12, 12 en 12. v3 haalt 12, 11 en 12. Bereik 11 tot 12, dus mijn foutmarge is
1 punt op 12. Alles wat 1 punt verschilt, betekent niets.

**Mijn claim uit week 3 trek ik in.** Ik beweerde dat mijn wijziging fout F2
oploste en v3 dus beter maakte. v2 scoort hier 36 op 36 en v3 35 op 36. Erger:
v2 maakt die F2-fout op dit model helemaal niet.

Ik heb dus een fout van een model toegeschreven aan mijn prompt, en toen mijn
prompt aangepast. Een score zonder modelnaam ernaast is waardeloos.

## Model en effort

Mijn gok: het goedkope model zou slechter zijn. Achteraf opgeschreven, dus hij
telt niet. Volgende keer eerst.

| Setup | Scores | Bereik | Kost per run |
|---|---|---:|---:|
| GPT-6 Luna | 12, 11, 12 | 11 tot 12 | 0,00029 euro |
| gpt-4o, draait in productie | 9, 8 | 8 tot 9 | 0,00530 euro |
| gpt-4o-mini, de controlelaag | 6, 7 | 6 tot 7 | 0,00031 euro |

Het gat is 3 tot 5 punten bij een foutmarge van 1. Prijs voorspelt niets: Luna en gpt-4o-mini kosten bijna evenveel en schelen 5 punten.

Het soort fout telt zwaarder dan het aantal. Allebei gokken ze bij T05
vloertegels, 25 m2 aan 42 euro, zonder te vragen of het wand of vloer is. Die
fouten liggen vast in elke run en zetten een bedrag in de offerte dat de
aannemer nooit gezegd heeft.

**Ik zet de werfopname over naar Luna.** Openstaand: mijn meting draaide mijn
eigen prompt, niet de kortere prompt die in de edge function staat. Die moet
door dezelfde harnas voor ik de knop omzet.

## Mijn value chain, met de foutmarge erin

Met de hand 60 min per offerte, met de tool inspreken plus nakijken. 96
offertes per jaar, uurkost 50 euro voor de werkgever.

Nakijken is mijn zwakste cijfer, want dat hangt af van vertrouwen. Vertrouwt
Joeri de lijst, dan is nakijken 18 min: 67 uur en 3.360 euro per jaar. Telt hij
alles na omdat 1 op 3 offertes een verzonnen getal bevat, dan wordt het 35 min en
560 euro. Bij 42 min is de winst nul. Mijn bereik is 0 tot 3.360 euro netto.

Het verschil tussen Luna en gpt-4o is 0,48 euro per jaar aan tokens en 2.800 euro per jaar aan tijd van Joeri. De
tokenprijs is geen beslissingsfactor. De foutmarge wel, want die bepaalt of hij
de lijst leest of natelt.

## Mijn dashboard

https://larsdebolle-bit.github.io/advanced-ai-nl/studenten/lars-de-bolle/build/dashboard.html

Kijk eerst naar de onderste tabel: wat niet gemeten is. De cijfers bovenaan
komen uit 120 runs, de nakijktijd waar mijn waarde aan hangt komt uit mijn duim.

## Mijn AI-ismen

> Week 1: "Ik hoop dat de lessen van dit vak daarbij helpen en me nieuwe dingen
> leren die ik in het werkveld kan gebruiken."

Ik wil een klant kunnen tonen wat een AI-tool kost en oplevert, in cijfers in
plaats van beloftes.

> Week 1: "Ik ben daar nu bezig met een klant voor wie ik een redelijk groot
> project mag doen."

Ik bouw voor één klant een project van 10.000 euro excl. btw.

> Week 1: "Wat me opvalt: leuk dat we zulke dingen nu met school leren, met
> Claude Code en GitHub."

Ik liet Claude Code mijn GitHub-werk doen; sinds week 1 doe ik fork, clone,
commit en push zelf.

> Week 2: "De les: de fout zat niet in de spraakherkenning en niet in het
> rekenen."

Whisper en de rekenregels werkten; de fout viel ertussen, waar het tweede model
stil koos tussen 30 en 35 m2.

> Week 3: "Een checklist vindt wat er niet staat, een lezer vindt wat er niet
> samen kan."

De buurtest vond acht regels die elkaar tegenspraken, mijn eigen checklist vond
er nul.
