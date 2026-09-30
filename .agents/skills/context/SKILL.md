---
name: context
description: Interviewt de student en schrijft studenten/<naam>/context.md, het bestand dat de AI-tool elke sessie leest. Gebruik bij "schrijf mijn context", "update mijn context", of als context.md ontbreekt.
---

# Contextbestand

Eén bestand waardoor de student nooit meer hoeft uit te leggen wie die is. Resultaat: `studenten/<naam>/context.md`.

Stel de vragen één voor één. Wacht op elk antwoord. Vaag antwoord: vraag door. "Ik werk in een winkel" → "Wat doe je daar op een zaterdag concreet?" Verzin niets. Schrijf daarna het bestand, toon het, vraag of het klopt.

## Zes vragen

1. Wie ben je? Naam, opleiding, jaar. Waar werk je, loop je stage of heb je een studentenjob, en wat doe je daar precies?
2. In welke taal wil je dat ik schrijf? Mag ik Engelse termen gebruiken als er een Nederlands woord bestaat?
3. Hoe wil je aangesproken worden? Kort of uitgebreid? Uitleg bij elke stap, of gewoon het resultaat?
4. Wat kan je al? Git, programmeren, welke AI-tools en waarvoor?
5. Welke hoek van de wereld wil je dertien weken bekijken? Je job, een sector, een vereniging, je eigen leven. Mag nog vaag zijn.
6. Wat moet ik niet doen?

## Formaat

```markdown
# Context — Voornaam Achternaam

## Wie ik ben
- Student IBM, jaar 3, Arteveldehogeschool
- Zaterdagjob in <plek>: <wat concreet>

## Taal en toon
- Nederlands. Code en technische termen in het Engels.
- Kort. Geen inleidingen.

## Wat ik al kan
- Git: nee, vandaag voor het eerst
- AI-tools: ChatGPT, voor samenvattingen en mails

## Dit vak
- Richting: <één zin>
- Traject: 4 ECTS

## Doe dit niet
- <in de woorden van de student>
```

## Twee extra bestanden

Schrijf in dezelfde map, zodat de tool `context.md` vanzelf leest als de student daar opent:

`studenten/<naam>/AGENTS.md`:
```
Lees eerst context.md in deze map. Daarin staat wie ik ben en hoe ik wil werken.
```

`studenten/<naam>/CLAUDE.md`:
```
@AGENTS.md
@context.md
```

Claude Code leest `CLAUDE.md`, Codex leest `AGENTS.md`. Eén bron: `AGENTS.md`; `CLAUDE.md` importeert alleen. Beide tools zoeken in de map waar de tool geopend is en in de mappen erboven. Daarom: de student opent de tool voortaan in `studenten/<naam>/`.

## Test

De test gebeurt niet in dit gesprek. Dit gesprek heeft de context al gezien, dat bewijst niets.

Zeg tegen de student:

1. Open een nieuw terminalvenster.
2. `cd` naar je eigen map: `studenten/<naam>/`.
3. Start je tool opnieuw (`claude` of `codex`). Een nieuw gesprek, leeg geheugen.
4. Stel daar een vraag over je eigen job of studie, zonder iets uit te leggen. Bijvoorbeeld: "Wat zou ik deze week als eerste automatiseren?"

Het antwoord hoort te gaan over de job, de sector en de tools uit `context.md`. Doet het dat, dan is de opzet klaar: het gesprek stopte, de context bleef.

Doet het dat niet? Twee oorzaken, in deze volgorde:
- De tool is niet in `studenten/<naam>/` geopend. `pwd` moet daarop eindigen.
- `CLAUDE.md` of `AGENTS.md` ontbreekt in die map. Terug naar "Twee extra bestanden".

Wil de student het verschil zien? Zelfde vraag in de browserversie van ChatGPT of Claude. Dat antwoord gaat over niemand.
