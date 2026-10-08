# Week 2 — Kwartaalrapporten vergelijken als kleine belegger

## Wat bouw ik?

Ik bouw een tool die twee kwartaalrapporten als input krijgt en een tabel maakt met vrije kasstroom (FCF), totale schuld, omzetgroei en expliciet genoemde risico’s, telkens met bronverwijzingen. Ik ben een kleine belegger en wil aandelen onderzoeken voor een beleggingstermijn van meer dan vijf jaar. Ik kijk ook naar P/E, maar dat valt buiten deze eerste versie. Bij ontbrekende of onduidelijke informatie moet de tool dat aangeven.

## Waarom een taalmodel?

Ik vind een taalmodel geschikt omdat ik het zoeken naar informatie in kwartaalrapporten ermee kan automatiseren. Zo hoef ik niet alle informatie zelf op te zoeken en kan ik aandelen in één oogopslag vergelijken op belangrijke factoren. Het taalmodel haalt gegevens en risico’s uit tekst; de berekeningen gebruiken vaste formules. Ik wil de gevonden gegevens kunnen controleren via de bronnen.

## Eén testinput

Mijn eerste testinput was Netflix en Uber over Q2 2026. Vooraf zocht ik financiële gegevens op. Netflix’ kwartaal-FCF was berekenbaar als 1.743.812 − 218.644 = 1.525.168 duizend dollar. Bij Uber vond ik 5.213 − 135 = 5.078 miljoen dollar, maar voor het halfjaar. Die bedragen kon ik dus niet rechtstreeks vergelijken.

In twee runs met v1 gaf de tool dezelfde FCF-bedragen en meldde hij het periodeverschil. De schuldtotalen kwamen ook overeen. De presentatie wisselde: de eerste run gebruikte miljoenen dollar, de tweede gaf Netflix in duizenden en Uber in miljoenen weer. Ook de risicoselectie verschilde. Andere risico’s waren toegestaan, zolang de tool ze onderbouwde en uitlegde.

Ik had een duidelijkere tabel verwacht, met de cijfers naast elkaar in dezelfde eenheid. Als kwartaal-FCF bij één bedrijf ontbreekt, wil ik voor beide halfjaarcijfers. Deze verbeterpunten zijn verwerkt in v2. Vooraf zocht ik Netflix’ halfjaar-FCF op: 7.034.017 − 414.774 = 6.619.243 duizend dollar. De v2-run toonde vervolgens 6.619,2 miljoen voor Netflix en 5.078,0 miljoen voor Uber, naast elkaar en over dezelfde periode.

De volledige testset bevat vijf bedrijvenparen, elk tweemaal uitgevoerd in afzonderlijke chats. De latere conceptantwoorden liet ik door AI opzoeken en keurde ik vóór de runs goed. Resultaten en afwijkingen staan in `build/test-set.md`; niet alle aanvullende bronclaims zijn al gecontroleerd. Bij Moody’s stopten twee linkruns door een leesfout; met een lokaal pdf lukte de vergelijking wel.
