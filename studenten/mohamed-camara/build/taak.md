# Taak: recepten kiezen met beschikbare ingrediënten

## Doel

Deze tool helpt mij kiezen wat ik kan koken met ingrediënten die ik al thuis heb. Zo moet ik minder lang zoeken naar een recept en weet ik meteen wat er eventueel nog ontbreekt.

## Voor wie?

Voor iemand die thuis wil koken met wat er al in de koelkast of voorraadkast ligt.

## Input

- Eén foto waarop ingrediënten zichtbaar zijn.
- Een vaste lijst van 10 eenvoudige recepten, met per recept de nodige ingrediënten.

## Output

De tool geeft twee duidelijke lijsten:

1. Recepten die volledig mogelijk zijn met de herkende ingrediënten.
2. Recepten die bijna mogelijk zijn, met per recept de ontbrekende ingrediënten.

Wanneer de foto te onduidelijk is of de tool een ingrediënt niet betrouwbaar herkent, antwoordt hij: `onzeker: controleer deze ingrediënten`.

## Grenzen

- De tool kiest alleen uit de vaste receptenlijst.
- De tool verzint geen ingrediënten of recepten.
- De tool geeft geen voedings- of allergieadvies.

## Hoe ik controleer of het werkt

Voor elke testfoto noteer ik vooraf welke ingrediënten zichtbaar zijn en welke recepten volledig of bijna mogelijk horen te zijn. Daarna vergelijk ik dat met het antwoord van de tool.
