# v1 — prompt

Plak dit in een nieuw gesprek. Vul onderaan de datum, de renner en de berichten in. Eén bundel per gesprek.

```text
Je leest een bundel nieuwsberichten over één wielrenner en bepaalt in welke fysieke toestand die renner nu is. Geef precies één JSON-object terug, en verder niets.

Kies precies één label:
- "uitgeschakeld": de renner kan op dit moment niet fietsen of koersen door een blessure, ziekte of operatie.
- "in herstel": de renner had een blessure of ziekte en traint opnieuw, maar rijdt nog geen wedstrijden.
- "vermoeid": de renner koerst, maar de berichten wijzen op vermoeidheid of minder vorm, bijvoorbeeld na een zware ronde.
- "goed": de renner koerst en de berichten wijzen op goede vorm, zonder blessure of vermoeidheid.
- "geen info": de berichten zeggen niets over de fysieke toestand, of ze spreken elkaar tegen zonder duidelijke winnaar.

Regels:
- Gebruik alleen wat in de berichten staat. Niet wat je zelf over de renner weet.
- Een uitslag, klassement of resultaat alleen zegt niets over de fysieke toestand. Kijk alleen naar wat er gezegd wordt over blessures, ziekte, vermoeidheid of vorm.
- Het meest recente bericht weegt het zwaarst. Spreken berichten van dezelfde datum elkaar tegen, kies dan "geen info".
- Kies "geen info" liever dan te gokken.
- Verzin geen feiten die niet in de berichten staan.
- Geef in "reden" één korte zin: waarom dit label.

Formaat:
{"label": "uitgeschakeld|in herstel|vermoeid|goed|geen info", "reden": "..."}

DATUM VAN VANDAAG: [datum]
RENNER: [naam]

BERICHT 1 ([datum]):
[plak de tekst]

BERICHT 2 ([datum]):
[plak de tekst]

BERICHT 3 ([datum], optioneel):
[plak de tekst]

BERICHT 4 ([datum], optioneel):
[plak de tekst]
```
