# Demo — dezelfde input, andere context

Twee voorbeelden uit de les. Probeer ze zelf: elk blok in een **nieuw gesprek**, zonder web search.

## 1. De mailsorteerder: wat het model niet kan weten

De input is telkens dezelfde mail.

```text
Onderwerp: Laatste kans: bevraging over je opleiding
Tekst: Beste student, de bevraging over je opleiding sluit vrijdag. Het invullen duurt 10 minuten. Alvast bedankt!
```

**Dunne context**

```text
Sorteer deze mail voor een student. Antwoord met één woord: doen, lezen of negeren.

Onderwerp: Laatste kans: bevraging over je opleiding
Tekst: Beste student, de bevraging over je opleiding sluit vrijdag. Het invullen duurt 10 minuten. Alvast bedankt!
```

**Rijke context**

```text
Je sorteert één mail voor Sara, studente bedrijfsmanagement. Antwoord met één woord: doen, lezen, negeren of onzeker.

Sara's regels:
- "doen": een deadline die meetelt voor punten, een inschrijving, of een vraag van een docent of groepsgenoot.
- "lezen": nieuws over haar lessen, maar niets te doen.
- "negeren": bevragingen, enquêtes en nieuwsbrieven. Die zijn vrijblijvend, ook als er een deadline in staat.
- "onzeker": je kan niet kiezen zonder te gokken.

Onderwerp: Laatste kans: bevraging over je opleiding
Tekst: Beste student, de bevraging over je opleiding sluit vrijdag. Het invullen duurt 10 minuten. Alvast bedankt!
```

Het model is niet slimmer geworden. Het kreeg Sara's regels. Die stonden nergens in zijn training.

## 2. Een transportbedrijf: bouwsteen per bouwsteen

Depot Noord heeft twintig vrachtwagens. Chauffeurs sturen problemen via WhatsApp. De planner wil per bericht weten hoe dringend het is.

Het bericht:

```text
Truck 12 hier. Bij het vertrekken hoorde ik een sissend geluid achteraan, aan de oplegger. Remmen lijken ok. Ik rij nu naar Antwerpen, nog 180 km.
```

**Stap 0 — dunne context**

```text
Hoe dringend is dit bericht van een chauffeur? Antwoord met één woord: normaal, snel nakijken of dringend.

Truck 12 hier. Bij het vertrekken hoorde ik een sissend geluid achteraan, aan de oplegger. Remmen lijken ok. Ik rij nu naar Antwerpen, nog 180 km.
```

**Bouwsteen 2 — regels: de regels van het depot**

```text
Je leest berichten van chauffeurs van Depot Noord en geeft de urgentie. Antwoord met één woord: normaal, snel nakijken of dringend.

Regels van het depot:
- Alles met remmen, banden of luchtdruk is veiligheid. Veiligheid is altijd "dringend", ook als de chauffeur zegt dat het meevalt.
- Een defect en nog meer dan 100 km te rijden: minstens "snel nakijken".
- Comfort (radio, airco, zetel): "normaal".

Truck 12 hier. Bij het vertrekken hoorde ik een sissend geluid achteraan, aan de oplegger. Remmen lijken ok. Ik rij nu naar Antwerpen, nog 180 km.
```

**Bouwsteen 4 — voorbeelden: laat zien wat je bedoelt**

Zet onder de regels:

```text
Voorbeelden:
Bericht: "Airco van truck 4 doet het niet meer." → normaal
Bericht: "Band rechtsachter lijkt zacht, truck 9." → dringend
Bericht: "Motorlampje brandt sinds vanmorgen, rijdt verder normaal. Nog 40 km." → snel nakijken
```

**Bouwsteen 5 — een uitweg: wat als het niet te zeggen is?**

Voeg toe aan de regels en aan de labels:

```text
- Weet je niet welke truck het is, of wat het probleem is? Antwoord "onzeker". Gok niet.
```

Test de uitweg met dit bericht:

```text
Truck doet raar sinds de pauze.
```

Zonder uitweg kiest het model een label. Met uitweg zegt het "onzeker". Dat is wat de planner wil: dan belt hij de chauffeur.

## 3. Een goede regel heeft een waarom

| | |
|---|---|
| Te vaag | "Let op veiligheid." Wat is veiligheid? Het model gokt. |
| Te strak | "Het woord 'sissen' is altijd dringend." En "de truck verliest lucht"? |
| Juist | "Remmen, banden en luchtdruk zijn altijd dringend. Want de chauffeur kan onderweg niet zien of het meevalt." |

Met het waarom vangt je model ook de gevallen die jij niet bedacht.
