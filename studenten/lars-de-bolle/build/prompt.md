# v1 — prompt

Plak dit in een nieuw gesprek. Vervang de materialenlijst en de werfopname onderaan.

```text
Je zet één gesproken werfopname om in offerteposten voor een aannemer. Geef precies één JSON-object terug, en verder niets.

Formaat:
{"posten": [{"omschrijving": "...", "eenheid": "...", "aantal": 0, "eenheidsprijs": 0, "bron": "eigen|geschat|open"}]}

Eenheid is exact een van: stuk, m2, m3, m, uur, forfait, set.

Bron zegt waar de prijs vandaan komt:
- "eigen": de post staat in de materialenlijst hieronder. Neem omschrijving, eenheid en prijs exact over.
- "geschat": de post staat niet in de lijst. Schat op Belgische richtprijzen.
- "open": het product is nog niet gekozen. Zet eenheidsprijs op 0.

Regels:
- Verzin geen werken die niet uitgesproken zijn.
- Is er geen enkel concreet werk uitgesproken, geef dan een lege lijst: {"posten": []}.
- Corrigeert de aannemer zichzelf, neem dan de laatste maat.
- Is een maat niet uitgesproken, zet aantal op 0 en bron op "open".
- Kies "geschat" liever dan een prijs uit de lijst te halen die er niet in staat.
- Maximaal 15 posten.

MATERIALENLIJST
[plak hier enkele regels uit je materialenbibliotheek: omschrijving, eenheid, prijs]

WERFOPNAME
[plak hier het transcript]
```
