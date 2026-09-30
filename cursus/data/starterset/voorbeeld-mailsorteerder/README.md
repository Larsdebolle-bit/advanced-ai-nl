# Mailsorteerder (voorbeeld)

## De taak

De tool geeft één mail precies één label.

## De labels

| Label | Betekent |
|---|---|
| `doen` | Ik moet iets doen: een deadline, iets indienen, me inschrijven, antwoorden |
| `lezen` | Nuttig om te lezen, maar ik hoef niets te doen |
| `negeren` | Geen actie en geen aandacht nodig |
| `onzeker` | De mail geeft te weinig informatie om te kiezen |

## Waarom `onzeker`?

Een model zonder uitweg gokt. Het kiest dan toch een label, en het klinkt zeker. Met `onzeker` mag het zeggen: dit weet ik niet. Dan kijk jij zelf.

## De uitvoer

Eén regel JSON:

```
{"label": "doen", "reden": "Inschrijven voor vrijdag."}
```

Het label is juist of fout. Twee mensen kunnen dat los van elkaar beslissen. Daarom is het meetbaar.

## Zo draai je het

1. Open een nieuw gesprek met je AI.
2. Plak de prompt uit `prompt.md`. Vul één mail in.
3. Lees het label. Vergelijk met `test-set.md`.
4. Doe elke mail twee keer, telkens in een nieuw gesprek.
5. Schrijf het resultaat in `log.md`.

## Versies

| Versie | Datum | Wat veranderde | Waarom |
|---|---|---|---|
| v1 | | Eerste prompt met vier labels | |
