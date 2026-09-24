# Week 1 — Context en setup

*Wat weet dit ding eigenlijk van jou?*

Woensdag 23 september, 10:30–13:30.

## Waar het om gaat

Je AI weet niets over jou. Elk gesprek begint van nul. Vandaag lossen we dat op, en daarna hoef je het nooit meer uit te leggen.

Onderweg leer je git. Je AI legt het uit terwijl je het doet. Ik heb het destijds zonder moeten leren. Jij hebt het na vandaag.

## Wat je om 13:30 hebt

- Een AI-tool die op je laptop draait, in een terminal. Niet in een browser.
- Je eigen kopie van deze cursus op GitHub, met jouw map erin.
- `context.md`: het bestand dat je AI elke sessie leest.
- Een richting voor dertien weken.
- Een eerste post, ingediend tegen dinsdag 29 september.

## Verloop

| | |
|---|---|
| 10:30 | Wie ik ben, wat er bij mij draait |
| 10:45 | Wie jullie zijn |
| 11:05 | Opzet. Eén regel in je AI-tool, en dan volg je |
| 12:20 | Pauze |
| 12:30 | Het vak: wat je bouwt, wat je publiceert, hoe je beoordeeld wordt |
| 12:55 | `context.md`: het verschil zien |
| 13:10 | Je richting, je eerste post |

## De opzet

**Stap 0: de tool.** Je werkt in een terminal, niet in een browser. Welke tool hangt af van waar je voor betaalt.

| Abonnement | Tool | Installeren |
|---|---|---|
| ChatGPT | Codex | `npm install -g @openai/codex`, dan `codex` en "Sign in with ChatGPT" |
| Claude | Claude Code | macOS: `curl -fsSL https://claude.ai/install.sh \| bash` · Windows (PowerShell): `irm https://claude.ai/install.ps1 \| iex`, dan `claude` |

Geen `npm`? Installeer Node.js (LTS) van nodejs.org en open je terminal opnieuw.

**Stap 1: de rest.** Plak dit in je tool en volg:

```
Lees https://raw.githubusercontent.com/alexandernacho/advanced-ai-nl/main/.claude/skills/opzet/SKILL.md en volg de stappen met mij. Eén stap per keer, in het Nederlands.
```

Je werkt in duo's. Klaar? Help je buur. Zelfde fout bij drie mensen? Dan komt hij op het scherm.

Om 12:20 stoppen we, waar je ook staat. Wat niet af is, doe je thuis. Fork en clone moeten wel af zijn, anders zie je volgende week niets.

## Je tool openen, vanaf nu

Start je tool altijd in je eigen map, `studenten/jouw-naam/`. Alleen daar leest hij `context.md`.

1. Zoek je map in Finder (macOS) of Verkenner (Windows). Pin hem: sleep hem naar de zijbalk (macOS) of rechtsklik → "Aan Snelle toegang vastmaken" (Windows).
2. Open daar een terminal. macOS: sleep de map op het Terminal-icoon in het Dock. Windows 11: rechtsklik op de map → "Openen in Terminal".
3. Typ `claude` of `codex`.

Vraagt Claude "Allow external CLAUDE.md file imports?" Kies **Yes, allow external imports**. Dat is `AGENTS.md`, het regelbestand van de cursus in de hoofdmap. Claude vraagt het één keer.

Geen `cd` nodig.

## Je eerste post

Drie vragen, een halve pagina. Template: `post-template.md`. Deze week telt de inhoud niet. De pijplijn wel: schrijven, pushen, pull request. Beter dat die nu breekt dan in week 4.

Open je tool in je map en plak:

```
Lees https://raw.githubusercontent.com/alexandernacho/advanced-ai-nl/main/.claude/skills/week/SKILL.md. Ik wil week 1 indienen. Eén stap per keer, in het Nederlands.
```

**Lukt dat niet?** Geen Terminal-icoon in je Dock, geen "Openen in Terminal", of je vindt je map niet? Open een terminal zoals woensdag. Mac: Cmd+Spatie, typ `Terminal`, Enter. Windows: Start-knop, typ `Terminal`, Enter. Start je tool en plak dezelfde regel. Je AI zoekt je map en geeft je het commando om er te geraken.

## Tegen woensdag 30 september

1. Opzet af.
2. Post plus pull request, tegen dinsdag 29 september, 23:59.
3. Lees `cursus/beoordeling/build-brief.md` met je AI. Vraag het om drie ideeën voor wat jij kan bouwen. Breng ze mee.
