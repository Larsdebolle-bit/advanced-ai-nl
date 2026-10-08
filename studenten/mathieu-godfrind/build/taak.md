# Taak — Leveranciersproduct screenen voor bol.com

- **Taak:** een productpagina van een leverancier (bv. Alibaba) checken of het product veilig in te kopen is om door te verkopen op bol.com.
- **Wat erin gaat:** de tekst van één productpagina (titel, beschrijving, specificaties), geplakt bij een promptbestand.
- **Wat eruit komt:** `GO` / `NO-GO` / `ONZEKER`. Bij `NO-GO`: welke risico's (A: namaak/merk, B: wettelijke eisen, C: moeilijk te verzenden, D: verboden/beperkt op bol.com) en per risico een citaat van de pagina. Eén risico is genoeg voor `NO-GO`. Geen CE vermeld waar dat verplicht is = `NO-GO`. Uitweg: `ONZEKER` als de pagina te weinig info geeft om te weten wat het product is.
- **Soort AI:** een taalmodel. Er gaat tekst in, er komt een label met een reden uit. Geen voorspelling uit cijfers, geen vaste regel die alles vangt.
- **Checken of het juist is:** vooraf per pagina het juiste label en de risico's opschrijven. Achteraf checken of het label klopt en of elk citaat echt op de pagina staat. Staat een citaat er niet, dan is dat een verzonnen detail (F2).

## Vijf inputideeën

1. Een katoenen tote bag zonder print
2. Een siliconen hoesje "voor AirPods Pro" (eerst: draadloze oordopjes "AirPods Pro style". Veranderd omdat Alibaba bijna geen pagina's toont met een merknaam in de tekst.)
3. Een USB-oplader van 20W
4. Een set glazen parfumflesjes
5. Een product met alleen een vage titel en een foto

Het juiste antwoord per input komt later in `test-set.md`, na het lezen van de echte pagina.
