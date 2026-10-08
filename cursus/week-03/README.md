# Week 3 — Context engineering en testsets

*Werkt het, en hoe weet ik dat?*

Woensdag 7 oktober, 10:30–13:30.

## Waar het om gaat

Vandaag bouw je je tool, en je meet of hij werkt. Nog geen taak? Dan kies je die eerst, in de eerste twintig minuten.

Je model ziet alleen wat jij het geeft. Dat heet de **context**. Kiezen wat erin hoort, is **context engineering**. Het is de belangrijkste vaardigheid van deze cursus. Vandaag oefen je ze op je eigen tool, en je bewijst met een cijfer dat ze werkt.

## Wat je om 13:30 hebt

- Je taak, in `build/taak.md`.
- Een v1 die draait, met een context die jij schreef.
- Een testset van tien inputs, met het juiste antwoord vooraf, nagekeken door een klasgenoot.
- Vijf inputs gedraaid, elke fout geclassificeerd, een eerste succespercentage.
- Eén wijziging aan je context, en je fouten opnieuw gedraaid.

## Verloop

| | |
|---|---|
| 10:30 | `start week 3` |
| 10:35 | Nog geen taak? Brainstorm. Wel een taak? Eerste versie |
| 10:55 | Wat je model ziet: tokens, het venster, te weinig en te veel |
| 11:20 | Zes bouwstenen van een goede context |
| 11:35 | v1: jij schrijft de context |
| 12:00 | Pauze |
| 12:10 | Testset naar tien |
| 12:30 | De buurtest |
| 12:45 | Run 1: vijf inputs |
| 13:00 | Fouten classificeren, succespercentage |
| 13:10 | Eén wijziging, fouten opnieuw |
| 13:20 | Post en pull request |

## Start

Open je tool in je eigen map, `studenten/jouw-naam/`. Typ:

| Claude | Codex |
|---|---|
| `/week start week 3` | `$week start week 3` |

## Vastgelopen?

Voor elke stap staat er hulp in [`hulp/`](hulp/). Plak in je tool, in je eigen map:

```
Lees ../../cursus/week-03/hulp/README.md en help me verder.
```

Je AI kijkt wat er al in `build/` staat, zegt waar je zit, en helpt je met de volgende stap. Jij kiest welk bestand je AI leest: ook dat is context engineering.

## 10:35 — Je taak

Staat er al een `build/taak.md` in je map? Ga naar "v1", stap 1 en 2. Al een v1 van vorige week? Schrijf je vijf lastige inputs (zie "v1").

Nog geen taak? Start de brainstorm:

| Claude | Codex |
|---|---|
| `/brainstorm wat ik bouw voor de cursus` | `$brainstorm wat ik bouw voor de cursus` |

Je AI stelt vragen, één per keer. Jij kiest. Aan het einde staat je taak in `build/taak.md`.

De check voor je taak: kunnen twee mensen los van elkaar beslissen of het antwoord juist is? Nee? Maak de uitvoer kleiner.

**Om 10:55 ligt je taak vast.** Geen taak gevonden? Neem de mailsorteerder uit `cursus/data/starterset/`. Daar staan twaalf mails klaar in `mails.md`.

## Wat je model ziet

Een taalmodel weet veel uit zijn training. Maar over jouw taak weet het alleen wat in het gesprek staat. Dat is het **contextvenster**. Er zit in:

- wat je tool zelf laadt: `CLAUDE.md` (Claude) of `AGENTS.md` (Codex) in je map, en via die bestanden je `context.md`. In de app: je geheugen en voorkeuren
- je prompt
- de input
- het hele gesprek tot nu: elke vraag, elk antwoord

Drie dingen om te onthouden:

1. **Het model onthoudt niets.** Het lijkt een gesprek, maar bij elke vraag stuurt je tool het hele venster opnieuw mee.
2. **Nieuw gesprek = leeg venster.** Daarom test je elke input in een nieuw gesprek. Anders ziet het model je vorige inputs en antwoorden.
3. **Eén gesprek, één limiet.** Het venster telt in **tokens**: stukjes tekst. "Arteveldehogeschool" is vijf tokens, "Hallo" één. In het Nederlands is één woord ongeveer anderhalve token. Probeer het zelf op [platform.openai.com/tokenizer](https://platform.openai.com/tokenizer).

| Model | Venster |
|---|---|
| Claude Sonnet 5.5 | 1.000.000 tokens |
| GPT-5.6 Terra | 1.050.000 tokens |
| Claude Haiku 4.5 | 200.000 tokens |

Harry Potter 1 past in Haiku, Harry Potter 5 niet. In Sonnet passen de eerste vier boeken, de hele reeks niet (1,08 miljoen woorden, ongeveer twee miljoen tokens). Is het venster vol? Dan weigert je tool, of valt het begin van het gesprek stilletjes weg. Elke token kost ook geld: dat zie je in week 4.

Context engineering is "the art of providing all the context for the task to be plausibly solvable by the LLM" (Tobi Lütke, CEO Shopify, 2025). Geef je model alles wat het nodig heeft om de taak op te lossen.

- **Te weinig:** wat er niet in staat, bestaat niet voor het model. Het vult het gat met een gok.
- **Te veel:** het venster is groot, maar elke extra zin trekt aandacht weg. En twee regels die botsen? Dan kiest het model er willekeurig één.
- **Het doel:** alles wat nodig is. Niets meer.

Jouw regels zitten in jouw hoofd. Tot je ze opschrijft.

De voorbeelden uit de les staan in [`demo.md`](demo.md). Probeer ze zelf.

## Zes bouwstenen

Behandel je model als een slimme nieuwe collega die niets weet over jouw werk. Een goede context heeft zes bouwstenen:

| | Bouwsteen | Vraag |
|---|---|---|
| 1 | Rol en doel | Voor wie werkt je tool, en waarvoor? |
| 2 | Regels, met waarom | Ook de vanzelfsprekende. En wat hij níet mag gebruiken. |
| 3 | Labels en vorm | Welke antwoorden mogen? In welke vorm? |
| 4 | Voorbeelden | Drie tot vijf, zo verschillend mogelijk |
| 5 | Een uitweg | Weet je het niet? Zeg dan onzeker. |
| 6 | De input | Als laatste, duidelijk afgebakend |

**Een goede regel heeft een waarom.**

| | |
|---|---|
| Te vaag | "Let op veiligheid." Wat is veiligheid? Het model gokt. |
| Te strak | "Het woord 'sissen' is altijd dringend." En "de truck verliest lucht"? |
| Juist | "Remmen, banden en luchtdruk zijn altijd dringend. Want de chauffeur kan onderweg niet zien of het meevalt." |

Met het waarom vangt je model ook de gevallen die jij niet bedacht.

## v1: jij schrijft de context

1. Vraag je AI: "Maak een eerste versie van mijn taak in `build/`, op basis van `taak.md`."
2. Open het promptbestand. Lees het. Dit is alles wat je model over je taak weet.
3. **De audit.** Zet bij elke lijn van je prompt het nummer van de bouwsteen, 1 tot 6. Welk nummer ontbreekt? Schrijf het erbij, **met de hand**.
4. Kies één regel en herschrijf hem met een **want**.
5. Start `build/log.md` en `build/README.md`. Voorbeeld: `cursus/data/starterset/voorbeeld-mailsorteerder/`.

**Al een v1 en vijf inputs van vorige week?** Doe dezelfde audit op je prompt. Je vijf nieuwe inputs zijn dan de **lastige**: een vage, een heel korte, een in een andere taal, een waar "ik weet het niet" het juiste antwoord is. Haal je 10 op 10? Dan is je testset te makkelijk.

## Testset naar tien

Tien inputs in `build/test-set.md`. Echte inputs: uit je mailbox, een forum, een review. Vervang echte namen.

Schrijf bij elke input het juiste antwoord en waarom. **Zelf, voor je de tool laat draaien.** Laat je AI de antwoorden niet schrijven. Dan test je je AI met zijn eigen antwoorden.

Zet er minstens drie lastige bij. Daar zitten de fouten. De fouten zijn wat je inlevert.

## De buurtest

Je buur speelt het model. Dit is de gouden regel uit de prompting-gids van Anthropic: "Show your prompt to a colleague with minimal context on the task and ask them to follow it. If they'd be confused, Claude will be too."

1. Leg in één minuut uit wat je tool doet en voor wie.
2. Je buur leest **alleen je prompt**. Niet je `taak.md`, niet je testset.
3. Geef drie van je inputs. Je buur kiest het antwoord, zonder het jouwe te zien.
4. Vergelijk.

Zeg je tijdens je uitleg iets dat niet in je prompt staat? Dan ontbreekt het. Schrijf het erin.

Antwoordt je buur anders dan jij? Dan is één van twee dingen fout:
- **je juiste antwoord.** Pas je testset aan.
- **je prompt.** Er ontbreekt een regel. Schrijf hem erbij.

Kan een mens het niet uit je prompt halen, dan kan je model het ook niet.

## Run 1

Draai vijf van je inputs, elk één keer. Neem er minstens twee lastige bij. De andere vijf draai je thuis.
- een **nieuw gesprek** per input
- je prompt erin, één input erbij
- **zonder** web search
- in de Claude- of ChatGPT-app, in een incognito- of tijdelijk gesprek (anders laadt je geheugen mee), of in een terminal in een lege map. Niet in je studentenmap: daar leest je tool `context.md` mee
- nooit de hele testset: dan ziet je model de antwoorden

Noteer wat eruit kwam in de kolom Run 1.

## Fouten classificeren

Tel je fouten niet alleen, geef elke fout een klasse:

| | | |
|---|---|---|
| F1 | Fout | Vol overtuiging het verkeerde antwoord |
| F2 | Verzonnen | Een detail dat niet in de input stond |
| F3 | Gemist | Iets niet gevonden dat er wel stond |
| F4 | Vorm | Juiste inhoud, onbruikbare vorm |
| F5 | Geweigerd | Weigert, twijfelt, stelt een vraag terug |
| F6 | Wisselend | Ander antwoord bij dezelfde input |

Schrijf je succespercentage onderaan je testset, met het aantal erbij: **"3 op 5 juist (n = 5, 1 run)"**. Zet het ook in `build/log.md`. Thuis, met alle tien: "6 op 10 juist (n = 10, 1 run)".

## Eén wijziging, fouten opnieuw

1. Kies je fout die het meest zegt.
2. Welke bouwsteen ontbrak of was fout? Verander **die ene**: een regel, een voorbeeld, de uitweg.
3. Draai alleen je foute inputs opnieuw, elk in een nieuw gesprek.
4. Noteer in `build/log.md`: wat je veranderde, en wat er gebeurde.

Ging je van drie fouten naar één? Mooi. Maar het is nog geen bewijs: drie inputs zijn weinig, en een model antwoordt niet elke keer hetzelfde. Hoe je dat écht bewijst, zie je in week 4 en 5.

## Thuis, vóór week 4

1. Draai je vijf andere inputs, in de kolom Run 1. Classificeer de fouten.
2. Draai alle tien een **tweede keer**, in de kolom Run 2.
3. Werk je succespercentage bij: "x op 20 juist (n = 10, 2 runs)".

Week 4 is Build checkpoint 1: tien inputs of meer, elke fout geclassificeerd, een succespercentage met de steekproefgrootte erbij.

## Je post

Bestand: `posts/week-03.md`. 300 tot 500 woorden.

```markdown
# Week 3 — <titel in je eigen woorden>

## Wat ontbrak er in mijn context?
<Wat zei je buur, of wat deed je model, waardoor je zag dat er iets ontbrak?>

## Mijn eerste cijfer
<Je succespercentage, met n. Welke klassen van fouten, en hoeveel van elk?>

## Eén wijziging
<Wat veranderde je, en wat gebeurde er met je foute inputs? Waarom is dat nog geen bewijs?>
```

Indienen: typ `dien week 3 in`. Deadline: dinsdag 13 oktober, 23:59.
