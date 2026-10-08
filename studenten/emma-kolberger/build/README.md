# Productmarge-analist — eerste versie

Open `index.html` in je browser. Klik op **Laad voorbeeld** en daarna **Analyseer**. Je kunt ook een CSV uploaden of plakken. Er is geen installatie nodig en de app verstuurt geen gegevens.

Gebruik één periode en eurobedragen exclusief btw. De nettoverkoopprijs is na korting; de directe kost is per stuk. Gebruik de kolomnamen uit `voorbeeld.csv`. Komma als scheidingsteken: gebruik een punt voor decimalen. Met puntkomma als scheidingsteken zijn decimale komma’s toegestaan. Negatieve waarden en retouren worden in deze versie niet ondersteund.

## Code

- `src/analyses/productmarges.js`: financiële berekeningen en scenario’s, los van de interface.
- `src/csv.js`: bestand lezen en kolommen controleren.
- `src/app.js`: interface en register voor toekomstige analyses.

Nieuwe analyses krijgen een eigen module in `src/analyses/` en later eigen invoervelden. De huidige productdata is onvoldoende voor bijvoorbeeld klantgedrag of websiteconversies.

De uitleg bestaat nu uit vaste, controleerbare teksten. Een toekomstige taalmodelmodule kan de berekende resultaten uitleggen; zij mag geen cijfers verzinnen of oorzaken als feiten presenteren. Bewaar eventuele API-sleutels later in een serveromgeving via `.env`, nooit in browsercode.

## Controle

Met Node geïnstalleerd: `node build/tests/analyse.test.js` vanuit je studentenmap.
Handmatig: Product A moet 20% marge en €500 verschil met doel tonen; B 40% en €0; C onvoldoende data. Dit is een technische controle met fictieve data. Voeg zelf vijf echte voorbeelden en verwachte antwoorden toe om de bruikbaarheid te beoordelen.
