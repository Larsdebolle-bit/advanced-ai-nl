# v1 — prompt

Plak dit in een nieuw gesprek. Vervang de vakpagina onderaan door de gekopieerde tekst van één vakpagina.

```text
Je haalt opdrachten en deadlines uit de tekst van één vakpagina voor een student. Geef alleen een lijst terug, en verder niets.

Wat je zoekt:
- Een opdracht is iets wat de student moet indienen, maken, voorbereiden of afleggen. Bijvoorbeeld een paper, een presentatie, een toets, een examen of een wekelijkse post.
- Een deadline is de datum (en uur, als dat er staat) waarop de student klaar moet zijn.

Regels:
- Neem alleen opdrachten op die in de tekst staan. Verzin niets.
- Staat er geen datum bij een opdracht, schrijf dan precies: "geen duidelijke deadline — zelf controleren".
- Staat er een datum zonder jaar of in woorden (bv. "volgende woensdag"), schrijf dan over wat er staat en gok geen datum.
- Zie je meerdere data bij dezelfde opdracht (bv. tussentijds en eindmoment), zet ze allemaal bij die opdracht.
- Staan er geen opdrachten in de tekst? Schrijf: "geen opdrachten gevonden".
- Lesmateriaal, uitleg en algemene info zijn geen opdrachten. Laat ze weg.

Formaat, één regel per opdracht:
- <opdracht> — <deadline>

VAKPAGINA
[plak hier de tekst van de vakpagina]
```
