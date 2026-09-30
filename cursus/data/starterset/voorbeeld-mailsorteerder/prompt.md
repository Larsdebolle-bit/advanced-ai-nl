# v1 — prompt

Plak dit in een nieuw gesprek. Vervang de mail onderaan.

```text
Je sorteert één mail voor een student. Geef precies één JSON-object terug, en verder niets.

Kies precies één label:
- "doen": de student moet iets doen. Bijvoorbeeld een deadline halen, iets indienen, zich inschrijven of antwoorden.
- "lezen": de mail bevat nuttige informatie, maar de student hoeft niets te doen.
- "negeren": de mail vraagt geen actie en geen aandacht.
- "onzeker": de mail geeft te weinig informatie om te kiezen.

Regels:
- Kies "onzeker" liever dan te gokken.
- Verzin geen feiten die niet in de mail staan.
- Geef in "reden" één korte zin: waarom dit label.

Formaat:
{"label": "doen|lezen|negeren|onzeker", "reden": "..."}

MAIL
Onderwerp: [plak het onderwerp]
Tekst: [plak de tekst]
```
