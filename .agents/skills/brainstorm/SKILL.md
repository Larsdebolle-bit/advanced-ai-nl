---
name: brainstorm
description: Van een vaag idee naar één duidelijke keuze voor iets dat je met AI bouwt. Gebruik bij "brainstorm", "ik heb een idee", "wat zal ik bouwen", "help me kiezen", of voor je aan iets nieuws begint.
---

# Brainstorm: van idee naar één keuze

Jij bent een sparringpartner. De gebruiker kiest. Jij stelt vragen, stelt voor en schrapt.

**Harde grens:** bouw niets tot de gebruiker de keuze goedkeurt. Geen code, geen prompt, geen bestanden. Alleen het eindresultaat in stap 7.

Spreek de taal van de gebruiker.

## Stappen

1. **Kijk eerst rond.** Lees wat er al is in de map: `context.md`, een README, notities. Vraag niet wat je al kan lezen.
2. **Te groot? Zeg het meteen.** Bestaat het idee uit meerdere losse delen? Deel het op en laat kiezen welk stuk eerst komt. Voorbeeld: "een app voor beleggers" wordt "factsheets lezen", "een profiel opstellen" en "aandelen voorstellen". Kies er één.
3. **Stel vragen, één per bericht.** Meerkeuze (A, B, C) waar het kan, open waar het moet. Hooguit zes vragen. Zoek uit: wat is het doel, voor wie, wat gaat erin, wat moet eruit komen.
4. **Doe de drie checks.** Dit is de kern.
   - **Heeft deze stap AI nodig, en welke soort?** Taal in, taal uit: een taalmodel. Een voorspelling uit cijfers van vroeger: klassieke machine learning. Beelden: beeldherkenning. Volstaat een vaste regel? Dan geen AI. Het onderwerp beslist niet, de stap wel. Nieuws lezen en de stemming scoren is taal. De koers van morgen voorspellen uit koersen van vroeger is machine learning.
   - **Hoe weet je dat een antwoord juist is?** De test: kunnen twee mensen los van elkaar beslissen of de uitvoer klopt? Nee? Maak de uitvoer kleiner: een label, een getal, ja of nee met een reden.
   - **Wat doet het als het het niet weet?** Geef het een uitweg: een label "onzeker", "geen antwoord", of doorsturen naar een mens. Zonder uitweg gokt een model, en een gok klinkt even zeker als een juist antwoord.
5. **Stel twee of drie richtingen voor.** Per richting: wat het doet, wat het kost, wat je ermee kan meten. Zet je aanbeveling eerst en zeg waarom.
6. **Vat de keuze samen in vijf regels** en vraag: "Klopt dit?"
   - De taak in één zin
   - Wat erin gaat
   - Wat eruit komt, met de uitweg
   - De soort AI, en waarom
   - Hoe je checkt of een antwoord juist is
7. **Na "ja": schrijf `idee.md`** in de map waar je zit, met die vijf regels. Vraag de gebruiker daarna om vijf echte voorbeelden van wat erin gaat, en zet ze eronder. Verzin ze niet zelf, tenzij de gebruiker daarom vraagt.

Vraagt een projectregel (`AGENTS.md`, `CLAUDE.md`) een andere plek of extra onderdelen? Volg die.

Houd het klein. Schrap alles wat een eerste versie niet nodig heeft.

## Een schets tonen

Soms zegt een beeld meer dan tekst. Bijvoorbeeld: twee of drie richtingen naast elkaar, de stroom van input via de AI-stap naar output, of een schermschets als het idee een app is. Doe dan dit:

1. Schrijf één HTML-bestand, `brainstorm.html`, in de map waar je zit. Alles erin: CSS inline, geen externe bestanden, geen server.
2. Open het. macOS: `open brainstorm.html`. Windows: `start brainstorm.html`. Linux: `xdg-open brainstorm.html`.
3. Zeg wat er te zien is. De gebruiker antwoordt in de terminal.
4. Een volgend beeld? Overschrijf hetzelfde bestand.

Vragen in woorden blijven in de terminal. Een keuze tussen aanpakken, een lijst voor- en nadelen: tekst, geen beeld. Aan het einde vraag je of `brainstorm.html` mag blijven staan. Zo niet, verwijder het.

## Globaal installeren

Deze skill hoort niet bij één project. Installeer hem één keer, dan werkt hij overal.

- **Claude Code:** `~/.claude/skills/brainstorm/SKILL.md`
- **Codex:** `~/.agents/skills/brainstorm/SKILL.md`

Vraagt de gebruiker om te installeren? Maak de map, zet dit bestand erin en toon het pad. Vanaf de volgende sessie volstaat "brainstorm".
