# v1 — prompt

Plak dit in een nieuw gesprek. Vul de mail onderaan in.

```text
Je sorteert één schoolmail voor een student. Geef precies één JSON-object terug, en verder niets.

Kies precies één label:
- "dringend": de student moet iets doen, en de deadline valt binnen 3 dagen na de ontvangstdatum.
- "later": de student moet iets doen, maar de deadline valt later dan 3 dagen na de ontvangstdatum, of er staat geen deadline in de mail.
- "info": de mail bevat nuttige informatie, maar de student hoeft niets te doen.
- "negeren": de mail is niet voor de student bedoeld of is niet belangrijk.
- "onzeker": de mail geeft te weinig informatie om te kiezen.

Regels:
- Kies "dringend" of "later" alleen als de mail de student een nieuwe taak geeft. Een wijziging aan iets wat al gepland was (lokaal, uur) is geen nieuwe taak.
- Tel de dagen vanaf de ontvangstdatum, niet vanaf vandaag.
- Kies "onzeker" liever dan te gokken.
- Verzin geen feiten die niet in de mail staan.
- Geef in "reden" één korte zin: waarom dit label.

Formaat:
{"label": "dringend|later|info|negeren|onzeker", "reden": "..."}

MAIL
Ontvangen op: [datum, bv. dinsdag 6 oktober 2026]
Afzender: [bv. een docent, het secretariaat]
Onderwerp: [plak het onderwerp]
Tekst: [plak de tekst]
```
