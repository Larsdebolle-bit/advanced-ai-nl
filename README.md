# Advanced AI for Business

Nederlandstalige groep, Arteveldehogeschool, 2026–27. Docent: Alexander Coenegrachts.

Dertien weken, één vraag: moeten we hier AI voor gebruiken?

Je bouwt één klein AI-hulpmiddel voor een echte taak. Je meet wat het kan en wat niet. Elke week publiceer je wat je gedaan hebt. Op het einde schrijf je een advies dat je kan verdedigen.

## Starten

Plak dit in je AI-tool:

```
Lees https://raw.githubusercontent.com/alexandernacho/advanced-ai-nl/main/.claude/skills/opzet/SKILL.md en volg de stappen met mij. Eén stap per keer, in het Nederlands.
```

Dat is alles. Je tool leest de rest hier.

## Hoe deze repo werkt

`cursus/` is van mij. Lesmateriaal per week, plus de beoordeling. Je leest het, je wijzigt het niet.

`studenten/jouw-naam/` is van jou. Je profiel, je contextbestand, je posts, je Build. Alleen daar werk je.

De repo is publiek. Wat je erin zet, kan iedereen lezen. Dat is geen bijwerking, dat is het punt: in juni is dit je portfolio.

## Elke week

Twee zinnen tegen je AI-tool, in je eigen map: `start week 5` aan het begin van de les, `dien week 5 in` vóór dinsdag 23:59. De skill `week` doet dan dit:

```bash
git checkout main
git pull upstream main        # nieuw lesmateriaal
git push origin main
git checkout -b week-05
# werk in studenten/jouw-naam/
git add studenten/jouw-naam
git commit -m "week 5: ruisvloer gemeten"
git push origin week-05
```

Dan een pull request naar deze repo, titel `week-05 — Voornaam Achternaam`. Een controle op GitHub kijkt of je alleen je eigen map raakt en geen sleutels of grote bestanden meestuurt. Rood kruis? Lees de melding, herstel, push opnieuw. Eén klasgenoot reageert. Ik merge. Vanaf dan staat je post publiek.

## Vier regels

1. Je komt alleen aan je eigen map.
2. Geen sleutels, wachtwoorden of vertrouwelijke bedrijfsdocumenten in de repo. Nooit.
3. Afbeeldingen alleen in `posts/`, maximaal twee per post, maximaal 300 KB. Terminaluitvoer als tekst, niet als screenshot.
4. Loopt iets vast: eerst je AI, dan je buur, dan ik.

Beoordeling: `cursus/beoordeling/overzicht.md`.
