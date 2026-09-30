# Week 2 — Hoe een taalmodel werkt

*Moet dit überhaupt een taalmodel zijn?*

Woensdag 30 september, 10:30–13:30.

## Waar het om gaat

Vorige week deed je AI veel dingen die je niet zag. Vandaag kijk je onder de motorkap. Je leert waarom een taalmodel soms iets verzint. En je kiest wat je de komende twaalf weken bouwt.

## Wat je om 13:30 hebt

- Een beeld van wat je AI vorige week echt deed: een skill, git, een pull request, `context.md`.
- De vier soorten AI uit elkaar houden, per stap.
- Je Build gekozen, in `build/taak.md`.
- Een eerste versie (v1) die draait.
- Vijf testinputs, met het juiste antwoord vooraf opgeschreven.
- Een globale brainstorm-skill die je voor alles kan gebruiken.

## Verloop

| | |
|---|---|
| 10:30 | `start week 2` · wie vastzit van vorige week: hoek achteraan |
| 10:35 | Onder de motorkap: wat deed je AI vorige week? |
| 10:45 | Kan AI dit? Quiz, en de vier soorten AI |
| 11:10 | Waarom een taalmodel verzint |
| 11:25 | Interview in duo's: wat zou jij bouwen? |
| 11:40 | Brainstorm met je AI: je taak kiezen |
| 12:00 | Pauze |
| 12:10 | Vier klasgenoten stellen hun taak voor |
| 12:25 | v1 bouwen, vijf testinputs |
| 13:15 | Post en pull request · brainstorm-skill meenemen |

## Start

Open je tool in je eigen map, `studenten/jouw-naam/`. Typ:

| Claude | Codex |
|---|---|
| `/week start week 2` | `start week 2` |

Codex kent de cursusskills pas na deze stap. Vanaf volgende week typ je daar `$week start week 3`.

Benieuwd welke skills je hebt? Claude: typ `/`. Codex: sluit af, start `codex` opnieuw en typ `/skills`.

## Verborgen mappen zien

De skills van de cursus staan in `.claude/skills/`. Een map die met een punt begint, is verborgen.

| | Finder / Verkenner | Terminal |
|---|---|---|
| macOS | `Cmd + Shift + .` | `ls -a` |
| Windows | Beeld → Weergeven → Verborgen items | `dir -Force` |

## De brainstorm

De skill staat al in de cursusrepo, sinds `start week 2`. Typ:

| Claude | Codex |
|---|---|
| `/brainstorm wat ik bouw voor de cursus` | `brainstorm: wat ik bouw voor de cursus` |

Je AI stelt vragen, één per keer. Jij kiest. Aan het einde staat je keuze in `build/taak.md`.

**Om 12:00 ligt je taak vast.** Geen taak gevonden? Neem het voorbeeld uit `cursus/data/starterset/`.

## v1 en vijf testinputs

Een **testinput** is één voorbeeld: één mail, één bericht, één review. Je **testset** is het bestand met vijf testinputs en hun juiste antwoord.

1. Vraag je AI: "Maak een eerste versie van mijn taak in `build/`." Voor de meesten is dat één promptbestand.
2. Vraag daarna: "Welke bestanden heb je gelezen en welke commando's heb je uitgevoerd?" Open de bestanden die hij maakte. Lees ze.
3. In `taak.md` staan vijf ideeën, zoals "een mail over examens". Zoek bij elk idee een **echte** input: uit je mailbox, een forum, een review. Vervang echte namen.
4. Zet ze in `build/test-set.md`. Schrijf bij elke input het juiste antwoord en waarom. **Voor je de tool laat draaien.** Achteraf beslissen wat juist was, is jezelf bedriegen.
5. Draai elke input **twee keer**. Draaien = een nieuw gesprek, je prompt erin, één input erbij. Nooit de testset: dan ziet je AI de antwoorden. Noteer wat eruit kwam in de kolommen Run 1 en Run 2.

Zo ziet `build/test-set.md` eruit:

```markdown
# Testset

| ID | Input | Juiste antwoord | Waarom | Run 1 | Run 2 |
|---|---|---|---|---|---|
| T01 | Onderwerp: Inschrijving examens ... | doen | Deadline vrijdag, ik moet me inschrijven. | doen | doen |
```

Een volledig voorbeeld: `cursus/data/starterset/voorbeeld-mailsorteerder/test-set.md`.

Werkt alles meteen? Dan is je testset te makkelijk. Zoek een lastige input: een vage, een heel korte, een in het Frans.

Klaar is: `taak.md`, je prompt en `test-set.md` in `build/`, met twee runs per input. Een `README.md` en `log.md` in `build/` zijn nog niet nodig. Die starten in week 3.

Niet af om 13:15? Werk thuis verder. Indienen tegen dinsdag 6 oktober, 23:59.

## Je post

Bestand: `posts/week-02.md`. Halve pagina.

```markdown
# Week 2 — <titel in je eigen woorden>

## Wat bouw ik?
<Je taak in één zin. Wat gaat erin, wat komt eruit.>

## Waarom een taalmodel?
<Welke soort AI past bij deze stap, en waarom. Of waarom net niet.>

## Eén testinput
<Eén input, het juiste antwoord, en wat je tool zei.>
```

Indienen: typ `dien week 2 in`.

## Neem de brainstorm mee

Klaar met indienen? Zet de skill globaal op je laptop. Dan werkt hij ook buiten de cursus, voor alles wat je wil bouwen. Plak dit in je tool:

```
Lees https://raw.githubusercontent.com/alexandernacho/advanced-ai-nl/main/.claude/skills/brainstorm/SKILL.md. Installeer deze skill globaal voor mijn tool. Start hem niet.
```

Daarna typ je overal gewoon "brainstorm".
