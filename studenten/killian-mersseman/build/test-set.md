# Testset — Kwartaalrapporten vergelijken

## T01 — Netflix en Uber, Q2 2026

- Netflix: https://www.sec.gov/Archives/edgar/data/1065280/000106528026000212/nflx-20260630.htm
- Uber: https://www.sec.gov/Archives/edgar/data/1543151/000154315126000032/uber-20260630.htm
- Verslagperiode: kwartaal eindigend op 30 juni 2026.
- Prompt: `prompt-v1.md`.
- Status: financiële controlepunten en risicocriteria vooraf ingevuld; twee runs met v1 ontvangen en hieronder vastgelegd. Mijn verbeterpunten zijn verwerkt in prompt-v2.md; v2 is nog niet getest.

Vul eerst zelf de verwachte antwoorden en bronnen in. "Niet gevonden" of "onzeker" kan ook een verwacht antwoord zijn. Bij risico’s: noteer concrete risico’s met bronbewijs die je wilt controleren; de tool kan ook andere expliciet onderbouwde risico’s vinden. Laat daarna dezelfde input twee keer draaien in twee nieuwe gesprekken, zonder dit bestand mee te geven.

| Controlepunt | Verwacht antwoord (zelf invullen) | Waarom / bron | Run 1 | Run 2 |
|---|---|---|---|---|
| Netflix — FCF, definitie en periode | Berekende FCF: 1,525,168 duizend USD voor Q2 2026 (drie maanden eindigend op 30 juni 2026). Operationele kasstroom minus uitgaven voor materiële vaste activa: 1,743,812 − 218,644. | Zelf opgezocht: p. 5, Consolidated Statements of Cash Flows, kolom Three Months Ended June 30, 2026; regels Net cash provided by operating activities en Purchases of property and equipment. | | |
| Uber — FCF, definitie en periode | Halfjaar-FCF: 5,078 miljoen USD voor de zes maanden eindigend op 30 juni 2026. Operationele kasstroom minus uitgaven voor materiële vaste activa: 5,213 − 135. Dit is geen afzonderlijke Q2-FCF. | Zelf opgezocht: p. 9, Condensed Consolidated Statements of Cash Flows, kolom Six Months Ended June 30, 2026; Net cash provided by operating activities en Purchases of property and equipment. | | |
| Netflix — totale schuld en componenten | 14,309,306 duizend USD op 30 juni 2026: kortlopende schuld 2,483,758 + langlopende schuld 11,825,548. Boekwaarde van de twee schuldposten; kasmiddelen niet afgetrokken. | Zelf opgezocht en gecontroleerd: p. 6, Consolidated Balance Sheets, kolom June 30, 2026; Short-term debt en Long-term debt. | | |
| Uber — totale schuld en componenten | 12,723 miljoen USD op 30 juni 2026: kortlopende schuld 1,997 + langlopende schuld 10,726. Boekwaarde van de twee schuldposten; kasmiddelen niet afgetrokken. Long-term debt, net of current portion sluit het kortlopende deel uit, zodat dit apart wordt opgeteld. | Zelf opgezocht en gecontroleerd: p. 4, Condensed Consolidated Balance Sheets; Short-term debt en Long-term debt, net of current portion, kolom June 30, 2026. | | |
| Netflix — omzetgroei tegenover Q2 2025 | Berekende omzetgroei: 13,4%. Omzet Q2 2026: 12,559,938 duizend USD; Q2 2025: 11,079,166 duizend USD. Formule: (12,559,938 / 11,079,166 − 1) × 100, afgerond op één decimaal. | Zelf opgezocht: p. 3, Consolidated Statements of Operations, regel Revenues, kolommen Three Months Ended June 30, 2026 en June 30, 2025. | | |
| Uber — omzetgroei tegenover Q2 2025 | Berekende omzetgroei: 12,2%. Omzet Q2 2026: 14,191 miljoen USD; Q2 2025: 12,651 miljoen USD. Formule: (14,191 / 12,651 − 1) × 100, afgerond op één decimaal. Een gerapporteerd afgerond percentage moet als zodanig worden onderscheiden van deze berekening. | Zelf opgezocht: p. 5, Condensed Consolidated Statements of Operations, regel Revenue, kolommen Three Months Ended June 30, 2026 en 2025. | | |
| Netflix — expliciet genoemde risico’s met bewijs | Item 1A meldt geen materiële wijzigingen in de eerder beschreven risicofactoren en verwijst naar het Form 10-K over het jaar eindigend op 31 december 2025. De risico’s uit dat jaarverslag zijn niet aangeleverd en mogen niet worden ingevuld uit geheugen. Dit betekent niet dat Netflix geen risico’s heeft. Eventuele risico’s elders in het kwartaalrapport moeten afzonderlijk met bronbewijs worden gecontroleerd. | Zelf gevonden: Item 1A. Risk Factors; verwijzing naar de Risk Factors in het Annual Report on Form 10-K over 2025. | | |
| Uber — expliciet genoemde risico’s met bewijs | Drie door mij gekozen risico’s: (1) autonome voertuigtechnologie mogelijk niet tijdig, op concurrerende schaal of met voldoende kwaliteit/veiligheid aanbieden ten opzichte van concurrenten; (2) omvangrijke investeringen in nieuwe producten en technologieën leveren mogelijk niet de verwachte voordelen op; (3) extra kapitaal voor groei is mogelijk niet beschikbaar of niet tegen redelijke voorwaarden. Het rapport stelt niet dat autonome technologie volledig ontbreekt of dat het extra kapitaal specifiek op korte termijn nodig is. | Door mij aangeleverd: Item 1A. Risk Factors. (1) p. 56, toelichting autonome voertuigen; (2) p. 58, investeringen in nieuwe producten en technologieën; (3) p. 70, Financing and Transactional Risks, extra kapitaal voor groei. | | |
| Verschillen in definities, periodes of ontbrekende informatie | De opgezochte Netflix-FCF betreft drie maanden (Q2 2026); de opgezochte Uber-FCF betreft zes maanden (eerste halfjaar 2026). Deze bedragen mogen niet rechtstreeks als kwartaal-FCF worden vergeleken. Netflix rapporteert deze bedragen in duizenden USD, Uber in miljoenen USD; eenheden moeten worden gelijkgetrokken. Overige beperkingen nog zelf aanvullen. | Netflix p. 5 en Uber p. 9, koppen van de kasstroomtabellen. | | |

Dit is één testinput met meerdere controlepunten. Vier extra testinputs worden later gekozen.

## Risico’s beoordelen — vooraf vastgelegd

Andere risico’s dan mijn drie voorbeelden zijn toegestaan. Een risico telt als correct wanneer het expliciet in het aangeleverde rapport staat, de pagina/sectie of het citaat klopt en de tool duidelijk uitlegt wat het mogelijke gevolg voor het bedrijf is. Die uitleg moet door de bron worden ondersteund en mag een mogelijkheid niet als vaststaand feit weergeven. Mijn drie voorbeelden zijn geen verplichte selectie. Ik controleer ieder gekozen risico zelf in het rapport. Maximaal vijf risico’s per bedrijf; een verwijzing naar een niet-aangeleverd jaarverslag wordt als beperking gemeld.

## Run 1 — ontvangen uitvoer

Onderstaande resultaten zijn overgenomen uit de door mij gedeelde tooluitvoer. Dit zijn de antwoorden van de tool, nog geen beoordeling door mij. De tool gaf alle bedragen in miljoenen USD.

| Controlepunt | Uitvoer Run 1 | Mijn beoordeling |
|---|---|---|
| Netflix — FCF | Berekend: 1.525,168 miljoen USD voor Q2 2026; operationele kasstroom 1.743,812 minus investeringen 218,644. Bron p. 5. Eigen gerapporteerde FCF-definitie niet gevonden. | |
| Uber — FCF | Gerapporteerd: 5.078 miljoen USD voor januari–juni 2026; 5.213 minus 135. Bron p. 44. Kwartaal-FCF niet gevonden. | |
| Netflix — schuld | 14.309,306 miljoen USD: kortlopend 2.483,758 plus langlopend 11.825,548. Operationele leases apart: 2.330,421 miljoen USD. Bronnen p. 6 en 13. | |
| Uber — schuld | 12.723 miljoen USD: kortlopend 1.997 plus langlopend 10.726; na 76 miljoen korting/emissiekosten. Operationele leases apart: 2.008 miljoen USD. Tool noemt onzekerheid bij strikt rentedragende schuld door 1.324 miljoen aan 0%-notes; financiële leases afzonderlijk niet gevonden. Bronnen p. 4 en 19. | |
| Netflix — omzetgroei | Gerapporteerd 13%, constante wisselkoersen 12%; omzetbedragen 12.559,938 en 11.079,166 miljoen USD. Bron p. 27. Geen extra precisie berekend. | |
| Uber — omzetgroei | Gerapporteerd 12%, constante wisselkoersen 11%; omzetbedragen 14.191 en 12.651 miljoen USD. Bron p. 34. Geen extra precisie berekend. | |
| Netflix — risico’s | Wisselkoersen kunnen omzet en bedrijfsresultaat in USD verlagen; rente/SOFR kan rentelasten verhogen. Bron p. 37. Tool meldt daarnaast de verwijzing naar het niet-geraadpleegde jaarverslag 2025. | |
| Uber — risico’s | Chauffeursclassificatie kan kosten verhogen en aanbod verminderen (p. 33); concurrentie kan omzet, gebruik en marges verminderen (Part II, Item 1A, zonder precieze pagina). | |
| Vergelijkbaarheid | Tool houdt Uber-halfjaar-FCF apart van Netflix-kwartaal-FCF, rekent eenheden om naar miljoenen USD en meldt Ubers wijziging van omzetpresentatie in bepaalde Britse markten. | |

De genoemde duur in de gedeelde uitvoer was 2 minuten en 9 seconden. Het zichtbare activiteitenoverzicht vermeldt ook het lezen van `context.md` en webzoekacties. Voor de bronbeperking moet worden gecontroleerd of de uiteindelijke feitelijke antwoorden uitsluitend uit de twee rapporten kwamen.

## Run 2 — ontvangen uitvoer

Overgenomen uit mijn gedeelde tweede toolantwoord; aanvullende bronclaims zijn nog niet automatisch gecontroleerd.

| Controlepunt | Uitvoer Run 2 |
|---|---|
| Netflix — FCF | Berekend 1.525.168 duizend USD voor Q2 2026, uit 1.743.812 − 218.644; p. 5. Gerapporteerde FCF en bedrijfsdefinitie niet gevonden. |
| Uber — FCF | 5.078 miljoen USD voor januari–juni 2026, uit 5.213 − 135; p. 44. Kwartaal-FCF niet gevonden. |
| Netflix — schuld | 14.309.306 duizend USD, uit 2.483.758 + 11.825.548. Operationele leases apart: 2.330.421 duizend USD. Bron p. 6 en Notes 5 en 7. |
| Uber — schuld | 12.723 miljoen USD, uit 1.997 + 10.726; na 76 miljoen korting/emissiekosten. Operationele leases apart: 2.008 miljoen USD. Bron p. 4 en schuldtabel. |
| Netflix — omzetgroei | Gerapporteerd 13%; constante wisselkoersen 12%. Zelfde omzetbedragen als Run 1; p. 27. |
| Uber — omzetgroei | Gerapporteerd 12%; constante wisselkoersen 11%. Zelfde omzetbedragen als Run 1; p. 34. |
| Netflix — risico’s | Eén risico: wisselkoersen kunnen omzet en operationeel resultaat verlagen; p. 37. Verwijzing naar jaarverslag 2025 afzonderlijk gemeld. |
| Uber — risico’s | Eén risico: chauffeursclassificatie kan extra kosten veroorzaken en aanbod verminderen; p. 33. |
| Vergelijkbaarheid | Periodeverschil FCF gemeld. Netflix-bedragen in duizenden USD, Uber-bedragen in miljoenen USD; eenheden niet gelijkgetrokken. |

### Vergelijking en mijn verbeterpunten

Financiële kernbedragen en gerapporteerde groeipercentages zijn gelijk. Presentatie en risicoselectie wisselen: Run 1 noemt twee risico’s per bedrijf, Run 2 één. Andere onderbouwde selecties waren toegestaan; dit verschil is niet automatisch een fout. Run 1 meldt daarnaast onzekerheid over Ubers 0%-notes en financiële leases; Run 2 niet. Deze aanvullende claims vragen nog eigen broncontrole.

Ik wil voor beide bedrijven dezelfde halfjaar-FCF gebruiken wanneer kwartaal-FCF bij één ontbreekt, en een duidelijke vergelijkingstabel met één eenheid (miljoenen USD). Dit is verwerkt in v2.

## Verwachte antwoorden voor v2 — vóór de run vastgelegd

De financiële verwachtingen voor schuld en omzetgroei blijven gelijk aan v1. De risicocriteria blijven gelijk. Voor FCF verwacht ik nu dezelfde halfjaarperiode bij beide bedrijven en presentatie in miljoenen USD, afgerond op één decimaal.

| Controlepunt | Verwacht antwoord | Bron |
|---|---|---|
| Netflix — halfjaar-FCF | Zelf opgezochte operationele kasstroom 7,034,017 minus uitgaven voor materiële vaste activa 414,774 = 6,619,243 duizend USD, dus 6.619,243 miljoen USD. Presentatie: 6.619,2 miljoen USD. Berekend voor januari–juni 2026. | p. 5, Consolidated Statements of Cash Flows, kolom Six Months Ended June 30, 2026. |
| Uber — halfjaar-FCF | 5.078 miljoen USD voor januari–juni 2026, uit 5.213 − 135. Presentatie: 5.078,0 miljoen USD. | p. 9, kasstroomtabel; gerapporteerde FCF-aansluiting p. 44. |
| Presentatie | Bedrijfscijfers direct naast elkaar; alle geldbedragen in de compacte tabel in miljoenen USD met één decimaal; bronbewijs en berekeningen apart. Beide FCF-bedragen expliciet als halfjaar-FCF aangeduid. | Mijn verbeterpunten en prompt-v2.md. |

## V2 — Run 1, ontvangen uitvoer

| Controlepunt | Uitvoer | Vergelijking met vooraf vastgelegde verwachting |
|---|---|---|
| Netflix — halfjaar-FCF | Berekend 6.619,2 miljoen USD, januari–juni 2026; oorspronkelijke berekening 7.034.017 − 414.774 duizend USD; p. 5. | Komt overeen. |
| Uber — halfjaar-FCF | Gerapporteerd 5.078,0 miljoen USD, januari–juni 2026; 5.213 − 135 miljoen USD; p. 44. | Komt overeen. |
| Netflix — schuld | 14.309,3 miljoen USD op 30 juni 2026; componenten 2.483.758 + 11.825.548 duizend USD; p. 6 en 14. | Komt overeen met het vooraf opgezochte totaal, afgerond voor presentatie. |
| Uber — schuld | 12.723,0 miljoen USD op 30 juni 2026; componenten 1.997 + 10.726 miljoen USD; p. 4 en 19. Inclusief renteloze exchangeable note. | Komt overeen met het vooraf opgezochte totaal. |
| Omzetgroei | Netflix 13,0%, Uber 12,0%, gerapporteerde Q2-groei tegenover Q2 2025; constante valuta apart 12,0% en 11,0%. | Zelfde gerapporteerde percentages als beide runs van v1. |
| Presentatie | Compacte tabel met bedrijfskolommen direct naast elkaar; geldbedragen in miljoenen USD met één decimaal; onderbouwing in aparte tabel. | Beide verbeterpunten uitgevoerd: gemeenschappelijke FCF-periode en uniforme, compacte presentatie. |
| Risico’s | Netflix: valuta (p. 37) en beschikbaarheid financiering (p. 34). Uber: chauffeursclassificatie (p. 33). Per risico categorie, mogelijk gevolg en bronverwijzing. | Selectie toegestaan volgens vooraf vastgelegde criteria; nieuwe financieringsclaim bij Netflix nog zelf in de bron controleren. |
| Aanvullende gegevens | Operationele leases: Netflix 2.330,4 miljoen USD, Uber 2.008,0 miljoen USD. Tool meldt ontbrekende afzonderlijke boekwaarde financiële leases bij Uber en Netflix’ verwijzing naar jaarverslag 2025. | Aanvullende claims nog zelf controleren; geen onderdeel van de vooraf opgezochte kernbedragen. |

Deze run duurde volgens de gedeelde uitvoer 2 minuten en 55 seconden. V2 is één keer uitgevoerd; er is nog geen tweede run om de herhaalbaarheid van v2 te beoordelen. Dit blijft één testinput, geen nieuwe input.

## T02 — Amazon en Alphabet, Q2 2026

- Amazon (AMZN): https://www.sec.gov/Archives/edgar/data/1018724/000101872426000026/amzn-20260630.htm
- Alphabet (GOOGL): https://www.sec.gov/Archives/edgar/data/1652044/000165204426000071/goog-20260630.htm
- Verslagperiode: kwartaal eindigend op 30 juni 2026.
- Prompt: `prompt-v2.md`.
- Status: antwoorden door AI opgezocht op mijn verzoek en door mij aanvaard met "klopt" vóór Run 1. Twee runs met v2 geregistreerd. De oorspronkelijke verwachting blijft bewaard, inclusief de na Run 1 gevonden tekortkoming. Aanvullende bronclaims en het verschil in schuldzekerheid vragen nog eigen beoordeling.

| Controlepunt | Verwacht antwoord (zelf invullen) | Waarom / bron | Run 1 | Run 2 |
|---|---|---|---|---|
| Amazon — FCF, definitie en periode | Concept: halfjaar, berekend 71.419 − 98.411 = −26.992 miljoen USD volgens de promptformule. Amazon-definitie trekt netto-investeringen af: met 2.101 verkoopopbrengsten/incentives wordt dit −24.891. Gerapporteerde −7.604 betreft twaalf maanden, niet halfjaar. | [Rapport](https://www.sec.gov/Archives/edgar/data/1018724/000101872426000026/amzn-20260630.htm), p. 3 en 33. | | |
| Alphabet — FCF, definitie en periode | Concept: halfjaar, berekend 84.859 − 80.598 = 4.261 miljoen USD. | [Rapport](https://www.sec.gov/Archives/edgar/data/1652044/000165204426000071/goog-20260630.htm), p. 9. | | |
| Amazon — schuld en componenten | Concept: schuldboekwaarde 128.894 + 3.330 kortlopend + 325 kredietfaciliteiten = 132.549 miljoen USD. Leases apart. Aanvullende financieringsverplichtingen vragen scopecontrole: 415 kortlopend en circa 8.900 langlopend; niet stilzwijgend negeren of dubbel tellen. | Rapport, p. 17–18 (Note 5); p. 15 (financieringsverplichtingen). | | |
| Alphabet — schuld en componenten | Concept: 98.165 langlopend + 1.999 kortlopend = 100.164 miljoen USD; leases apart, geen commercial paper uitstaand. Kredietfaciliteiten niet zonder controle nogmaals optellen. | Rapport, p. 25–26, Note 6. | | |
| Amazon — omzetgroei tegenover Q2 2025 | Concept: gerapporteerd 20%; omzet 200.606 tegenover 167.702 miljoen USD. | Rapport, p. 4 en 29. | | |
| Alphabet — omzetgroei tegenover Q2 2025 | Concept: gerapporteerd 24%; omzet 119.796 tegenover 96.428 miljoen USD. | Rapport, p. 45. | | |
| Amazon — risico’s met bronbewijs | Conceptvoorbeelden: concurrentie kan omzet/winst verlagen; uitbreiding naar nieuwe activiteiten kan investeringen onvoldoende terugverdienen. | Rapport, Item 1A, secties We Face Intense Competition en Our Expansion into New Products…, p. 38–39. | | |
| Alphabet — risico’s met bronbewijs | Conceptvoorbeelden: nieuwe investeringen leveren mogelijk onvoldoende rendement; cloudconcurrentie en stijgende infrastructuurkosten kunnen doelstellingen belemmeren. | Rapport, p. 57, Item 1A. | | |
| Gemeenschappelijke FCF-periode en uniforme eenheden | Concept: januari–juni 2026 voor beide; miljoen USD. Amazon-definitie wijkt af door verkoopopbrengsten/incentives. Bedrijfs-FCF en uniforme berekening expliciet onderscheiden. | Prompt-v2 en bovenstaande bronnen. | | |

Dezelfde risicocriteria als T01 gelden: andere expliciet onderbouwde risico’s zijn toegestaan als de tool ze uitlegt. Let bij FCF op kwartaal, halfjaar en eventuele twaalfmaandsbedragen; vergelijk alleen een gemeenschappelijke periode.

### T02 — Run 1 met v2

| Controlepunt | Ontvangen uitvoer Run 1 | Controle / beperking |
|---|---|---|
| FCF | Amazon −8.821,0 miljoen USD, uit 45.387 − 54.208 (p. 3); Alphabet circa −5.800,0 miljoen USD, uit (39,1 − 44,9) miljard USD (p. 46). Beide Q2 2026. | Alphabets kwartaalcomponenten zijn na de run bevestigd op p. 46. Onze voorafgaande verwachting miste deze passage. V2 geeft voorrang aan kwartaal-FCF wanneer voor beide berekenbaar; dit is dus geen bewezen toolfout. Alphabet-inputs zijn afgerond; uitkomst is een benadering. |
| Amazon — schuld | 141.864,0 miljoen USD: 128.894 + 3.330 + 325 + 415 + circa 8.900. Leases apart. | Inclusief financieringsverplichtingen die vooraf als scopevraag waren vermeld. Geen exact totaal suggereren: langlopende component is afgerond. |
| Alphabet — schuld | Onzeker; schuldtabel 100.164,0 miljoen USD. Mogelijke dubbeltelling bij afzonderlijk optellen van 1,3 miljard opgenomen krediet. | Tool bewaart de vooraf benoemde onzekerheid; geen definitieve schuldvergelijking. |
| Omzetgroei | Amazon 20,0%, Alphabet 24,0%, Q2 tegenover Q2 2025. | Komt overeen met vooraf aanvaarde gerapporteerde percentages. |
| Leases | Amazon operationeel 96.320, financieel 13.451 miljoen USD; Alphabet operationeel 18.037, financieel 2.590 miljoen USD. | Aanvullende gegevens; niet vooraf volledig gecontroleerd. |
| Risico’s | Amazon: concurrentie (p. 38), juridische procedures (p. 16–17). Alphabet: niet-nakoming grote contracten en beperkte financieringstoegang (p. 58). | Andere selecties toegestaan. Nieuwe bronclaims nog zelf controleren. |
| Presentatie | Bedrijven direct naast elkaar; miljoenen USD; onderbouwing apart; afgeronde inputs en onzekerheid vermeld. | Gevraagde vorm aanwezig. |

Gedeelde uitvoer vermeldt 2 minuten en 42 seconden. Alleen Run 1 is uitgevoerd.

### Correctie voorbereiding, na Run 1

De AI-voorbereiding vond eerst alleen Alphabets halfjaarkasstroomtabel. Op p. 46 staan ook kwartaalbedragen: operationele kasstroom 39,1 miljard en kapitaaluitgaven 44,9 miljard USD. De oorspronkelijke halfjaarberekeningen blijven geldig, maar zijn niet de primaire verwachte FCF-periode volgens v2 nu kwartaalcomponenten voor beide beschikbaar blijken. Deze correctie is na Run 1 gedaan en wordt niet als vooraf bepaalde verwachting gepresenteerd. Run 2 moet dezelfde ongewijzigde v2 en rapporten gebruiken, zonder deze testset mee te geven.

### T02 — Run 2 met v2

| Controlepunt | Ontvangen uitvoer Run 2 |
|---|---|
| Amazon — FCF | Berekend −8.821,0 miljoen USD voor Q2 2026: 45.387 − 54.208; p. 3. Eigen definitie met verkoopopbrengsten/incentives en twaalfmaandsrapportage apart toegelicht. |
| Alphabet — FCF | Circa −5.800,0 miljoen USD voor Q2 2026: (39,1 − 44,9) miljard USD; p. 46. Afrondingsbeperking vermeld. |
| Amazon — schuld | Circa 141.864,0 miljoen USD: 128.894 + 3.330 + 325 + 415 + circa 8.900; leases apart. Bronnen p. 15 en 17–18. |
| Alphabet — schuld | 100.164,0 miljoen USD: 98.165 + 1.999; kredietfaciliteiten niet nogmaals toegevoegd. Geen onzekerheidslabel bij dit totaal; p. 26. |
| Omzetgroei | Amazon 20,0%, Alphabet 24,0%, gerapporteerd Q2 tegenover Q2 2025; p. 29 en 45. |
| Leases | Amazon operationeel 96.320, financieel 13.451; Alphabet operationeel 18.037, financieel 2.590 miljoen USD; p. 14 en 23. |
| Risico’s | Amazon: prijsdruk/concurrentie kan omzet en winst verlagen (p. 38). Alphabet: nieuwe investeringen kunnen onvoldoende rendement opleveren (p. 57). Eén risico per bedrijf. |
| Presentatie | Compacte tabel, bedrijfskolommen direct naast elkaar, miljoen USD; onderbouwing apart. |

### T02 — Vergelijking van de runs

- Beide runs gebruiken dezelfde kwartaal-FCF en gerapporteerde groeipercentages.
- Beide nemen Amazons financieringsverplichtingen mee. Run 2 noemt het totale schuldbedrag expliciet een benadering; Run 1 deed dat alleen in de voetnoot.
- Alphabet: Run 1 geeft "onzeker" bij totale schuld, met 100.164 als schuldtabelbedrag. Run 2 geeft 100.164 zonder onzekerheidslabel. De numerieke schuldtabel is gelijk, maar de zekerheid en daarmee de bruikbaarheid van de vergelijking wisselen. Nog zelf bepalen welke behandeling de bron ondersteunt.
- De risicoselectie wisselt: twee per bedrijf in Run 1, één per bedrijf in Run 2. Andere onderbouwde risico’s waren toegestaan; dit is niet automatisch een fout. De gevolgen en bronnen moeten wel afzonderlijk worden gecontroleerd.
- Onze aanvankelijke halfjaarverwachting was onvolledig; dit blijft als beperking van de voorbereiding zichtbaar.


## T03 — S&P Global en Moody’s, Q2 2026

- S&P Global (SPGI): https://www.sec.gov/Archives/edgar/data/64040/000006404026000045/spgi-20260630.htm
- Moody’s (MCO): https://www.sec.gov/Archives/edgar/data/1059556/000162828026049398/mco-20260630.htm
- Prompt: `prompt-v2.md`; twee onafhankelijke runs nog uit te voeren.
- Status: verwachtingen door AI opgezocht op mijn verzoek en door mij aanvaard vóór de runs met "ja ok de gegevens kloppen zo ik doe de runs". Ik koos voor CFO minus kapitaaluitgaven bij beide bedrijven, met de eigen gerapporteerde FCF afzonderlijk. Geen testresultaten geregistreerd.
- Toegang: Moody’s SEC-pagina overschrijdt de limiet van de weblezer; de identieke filing is gelezen via https://cdn.yahoofinance.com/prod/sec-filings/0001059556/000162828026049398/mco-20260630.htm . De resultatenpublicatie is niet gebruikt voor deze verwachtingen.

| Controlepunt | Conceptverwachting | Bron |
|---|---|---|
| Gemeenschappelijke FCF-periode | Januari–juni 2026. Kwartaal-FCF/componenten niet gevonden in de geraadpleegde passages. Als een run toch kwartaalcomponenten vindt, eerst de bron controleren zoals bij T02. | Beide kasstroomtabellen en FCF-aansluitingen. |
| S&P Global — FCF | Primair voor de vergelijking: berekend 2.411,0 miljoen USD = 2.476 operationele kasstroom − 65 kapitaaluitgaven. Afzonderlijk: gerapporteerd 2.249,0 = 2.411 − 162 uitkeringen aan minderheidsaandeelhouders. Capex omvat materiële activa én technologieprojecten; niet zonder toelichting als uitsluitend materiële activa aanduiden. | p. 55–56 en 58, FCF-definitie en aansluiting. |
| Moody’s — FCF | Gerapporteerd 1.532,0 miljoen USD = 1.718 operationele kasstroom − 186 capital additions. Definitie: CFO minus betaalde capital additions. | p. 9 en 80, kasstroomtabel en Non-GAAP Financial Measures. |
| FCF-vergelijkbaarheid | De student kiest dezelfde berekeningsformule CFO minus kapitaaluitgaven: S&P Global 2.411,0 tegenover Moody’s 1.532,0 miljoen USD. S&P Globals eigen gerapporteerde 2.249,0 apart vermelden en de aftrek van 162 aan minderheidsuitkeringen uitleggen. Capexcategorieën blijven bronafhankelijk; geen volledige economische gelijkheid suggereren. | Bovenstaande aansluitingen. |
| S&P Global — schuld | Boekwaarde 15.170,0 miljoen USD = 2.572 kortlopend + 12.598 langlopend; commercial paper 825 zit al in het totaal. Leases apart, geen kasaftrek. Omvat de schuld van Mobility Global op de peildatum; niet aanpassen naar de latere afsplitsing. | p. 14–15, Note 4 — Debt. |
| Moody’s — schuld | Boekwaarde 6.946,0 miljoen USD = 571 kortlopend + 6.375 langlopend. Nominaal 7.128, gecorrigeerd voor swaps −98, discount −46 en uitgiftekosten −38. Leases apart, geen kasaftrek. | p. 36, Note 13 — Indebtedness. |
| S&P Global — omzetgroei | Gerapporteerd 10,0%; Q2-omzet 4.146 tegenover 3.755 miljoen USD. | p. 36–38, Consolidated Review. |
| Moody’s — omzetgroei | Gerapporteerd 15,0%; Q2-omzet 2.185 tegenover 1.898 miljoen USD. Organische groei bij constante valuta 16% is een afzonderlijke maatstaf. | p. 44, Executive Summary; p. 81, reconciliatie. |
| S&P Global — risico’s | Voorbeelden: informatiebeveiligingsproblemen kunnen herstelkosten en boetes veroorzaken (p. 60); verlies van synergie door afsplitsing Mobility kan resultaten schaden (p. 61). Item 1A verwijst naar 10-K (p. 63); dat betekent niet dat er geen risico’s zijn. | Forward-looking statements p. 60–61; Item 1A p. 63. |
| Moody’s — risico’s | Valutarisico en juridische/regulatoire risico’s zijn expliciet vermeld. Volledige risicofactoren worden verwezen naar 10-K 2025 (p. 87). Andere expliciet onderbouwde selecties toegestaan; gevolg en precieze bron controleren. | Item 3 p. 86; Item 1A p. 87; forward-looking statements. |

Deze verwachting is voorbereiding, geen onafhankelijke modelrun. Geef bij de runs alleen v2-instructies en de twee rapporten mee, niet deze testset. Geldbedragen in miljoenen USD, één decimaal.

### T03 — Aanvaarding vóór de runs

De student heeft de gegevens aanvaard en kiest voor een uniforme FCF-berekening zonder aftrek van minderheidsuitkeringen. Deze keuze is na de voorbereiding maar vóór beide runs vastgelegd. Bij uitvoering moet dezelfde aanvullende instructie in beide nieuwe chats staan: "Vergelijk de FCF voor beide bedrijven met dezelfde formule: operationele kasstroom minus kapitaaluitgaven, zonder minderheidsuitkeringen af te trekken. Vermeld de eigen gerapporteerde FCF afzonderlijk als die hiervan afwijkt." De ongewijzigde v2 alleen schrijft deze nieuwe keuze niet expliciet voor.

### T03 — Run 1 met v2 en aanvullende FCF-instructie

De student deelde een uitvoer die bij de leesbaarheidscontrole stopte. S&P Global werd geïdentificeerd als S&P Global Inc., Form 10-Q, kwartaal eindigend op 30 juni 2026. De Moody’s SEC-link gaf volgens de uitvoer twee keer “Internal Error”. De tool vulde geen cijfers of risico’s aan en kon de verslagperiode van Moody’s niet verifiëren.

- Resultaat: technische toegangsbeperking; financiële vergelijking niet uitgevoerd.
- Geen beoordeling van cijferjuistheid mogelijk; geen ontbrekende output als nul of fout cijfer behandelen.
- De stop volgt de instructie voor onleesbare bronnen. De voorbereiding kon dezelfde Moody’s-filing wel via een kopie lezen; dit verschil in toegang blijft zichtbaar.
- Run 2 nog niet ontvangen. Voor een herhaling onder dezelfde voorwaarden dezelfde links gebruiken. Een latere run met een lokaal rapportbestand of andere bronlocatie afzonderlijk als aangepaste invoer registreren.

### T03 — Run 2 met v2 en aanvullende FCF-instructie

Ook de tweede gedeelde uitvoer stopte bij de leesbaarheidscontrole. S&P Global werd opnieuw geïdentificeerd als S&P Global Inc., Form 10-Q, kwartaal eindigend op 30 juni 2026. Moody’s gaf volgens de uitvoer bij twee pogingen een technische fout. Er zijn geen financiële cijfers of risico’s ingevuld. De tool vroeg een bestand of werkende link naar hetzelfde rapport.

### T03 — Vergelijking van de runs

Beide runs eindigen met dezelfde toegangsbeperking bij de oorspronkelijke Moody’s SEC-link. De stop bij een onleesbaar rapport is herhaalbaar en volgt de instructie; de gewenste financiële vergelijking lukt met deze invoer niet. Cijferjuistheid en risicoselectie zijn daardoor niet beoordeelbaar. T03 is tweemaal uitgevoerd, maar levert geen succesvolle financiële vergelijking op. Een aanvullende poging met een bestand of kopie van dezelfde filing moet als gewijzigde invoer worden geregistreerd en vervangt deze twee resultaten niet.


## T04 — Novo Nordisk en Eli Lilly, Q2 2026

- Novo Nordisk (NVO): https://www.sec.gov/Archives/edgar/data/353278/000035327826000023/caq22026.htm
- Eli Lilly (LLY): https://www.sec.gov/Archives/edgar/data/59478/000005947826000081/lly-20260630.htm
- Beide bronnen zijn bij de voorbereiding leesbaar. Novo: financieel halfjaarrapport volgens IAS 34, bijlage bij Form 6-K. Lilly: Form 10-Q volgens US GAAP. Beide eindigen op 30 juni 2026.
- Status: conceptverwachtingen door AI opgezocht op verzoek; nog door de student te controleren/aanvaarden. Geen runs ontvangen.
- Gebruik v2 met onderstaande identieke aanvulling in beide nieuwe chats. Deze variant voorkomt een verzonnen wisselkoers en behoudt de eerder gekozen FCF-formule.

> Vergelijk FCF met dezelfde formule: operationele kasstroom minus uitgaven voor materiële vaste activa. Vermeld afwijkende eigen bedrijfsdefinities afzonderlijk. Behoud voor deze test de oorspronkelijke rapportagevaluta: miljoenen DKK voor Novo Nordisk en miljoenen USD voor Lilly. Zet de valuta bij elke bedrijfskolom en vergelijk geldbedragen niet rechtstreeks tussen valuta. Gebruik geen externe of geschatte wisselkoers. Dit vervangt de instructie om alle geldbedragen in USD te presenteren.

| Controlepunt | Conceptverwachting | Bron |
|---|---|---|
| Gemeenschappelijke FCF-periode | Halfjaar januari–juni 2026: Lilly-kwartaal-CFO niet gevonden in geraadpleegde tabel/toelichting. Novo heeft ook kwartaal-FCF 42.524 miljoen DKK; dat niet naast Lilly-halfjaar zetten. | Novo p. 37; Lilly Consolidated Condensed Statements of Cash Flows, zesmaandskolom. |
| Novo — halfjaar-FCF | 79.283 − 23.986 = 55.297,0 miljoen DKK; ook gerapporteerd volgens dezelfde formule sinds 2026. | p. 37, FCF-aansluiting. |
| Lilly — halfjaar-FCF | Berekend 16.023 − 5.259 = 10.764,0 miljoen USD. Eigen FCF niet gevonden. Uitgaven voor verworven onderzoek/acquisities niet stilzwijgend als PP&E aftrekken. | Consolidated Condensed Statements of Cash Flows. |
| Novo — schuld exclusief leases | 121.794 lang + 18.333 kort − 8.622 leases = 131.505,0 miljoen DKK. Bruto borrowings 140.127 bevat leases; leases apart 8.622. Geen kasaftrek; net debt 86.523 is niet de gevraagde bruto financiële schuld. | p. 28 balans; p. 37 net-debtreconciliatie. |
| Lilly — schuld | Boekwaarde 7.050 kort + 47.858 lang = 54.908,0 miljoen USD; leases apart indien beschikbaar. | Consolidated Condensed Balance Sheets. |
| Novo — omzetgroei | Gerapporteerd Q2: 2% in DKK, 3% bij constante valuta afzonderlijk; omzet 78.488 miljoen DKK. Aangepaste groei 6% DKK/7% CER niet als gerapporteerde groei gebruiken. Vergelijkingsbasis bevat 340B-provisieterugname in Q2 2025. | p. 6, Reported Sales Development; p. 12 aangepaste cijfers. |
| Lilly — omzetgroei | Gerapporteerd 48%; Q2 omzet 22.974 tegenover 15.558 miljoen USD. | p. 24, Executive Overview. |
| Lilly — risicovoorbeelden | Belastingwijzigingen kunnen resultaten/kasstromen schaden; antitrusttoezicht kan acquisities vertragen, bedreigen of duurder maken. Andere expliciet onderbouwde selecties toegestaan. | p. 27, Tax Matters en Acquisitions; verwijzingen naar 10-K niet aanvullen. |
| Novo — risico’s | Selecteer expliciete risico’s uit Forward-looking statements of Legal matters; vermeld bron en mogelijk gevolg. Niet zonder bewijs afleiden uit het feit dat het een farmabedrijf is. | p. 23–26. |
| Valuta en verslaggeving | Miljoenen DKK tegenover miljoenen USD; geen directe vergelijking van omvang zonder onderbouwde omrekening. IAS 34/IFRS tegenover US GAAP expliciet melden als beperking. | Voorbladen en Novo p. 24. |

Deze voorbereiding is geen testresultaat. Dezelfde aanvullende instructie moet in beide runs staan; de testset zelf niet meegeven.

### T03 — Extra run met lokaal Moody’s-pdf

De student verduidelijkte dat deze uitvoer bij SPGI/Moody’s hoort, niet bij T04. Invoer gewijzigd: Moody’s als lokaal bestand `Documents/Sem 1 2026/AI/mco-20260630.pdf`, S&P Global via de oorspronkelijke SEC-link. De twee eerdere mislukte linkruns blijven bewaard. Volgens de uitvoer werd pypdf na toestemming geïnstalleerd en kon het pdf (122 pdf-pagina’s) worden gelezen. Gedeelde duur: 3 minuten en 34 seconden.

| Controlepunt | Ontvangen uitvoer | Beoordeling |
|---|---|---|
| Leesbaarheid/periode | Beide Form 10-Q, Q2 eindigend op 30 juni 2026. | Toegangsprobleem opgelost met aangepaste invoer. |
| FCF | Halfjaar: S&P Global gerapporteerd 2.249,0; Moody’s 1.532,0 miljoen USD. S&P-formule 2.476 − 65 − 162; definitieverschil toegelicht. | Bedrijfs-FCF klopt met voorbereiding, maar voldoet niet aan de gekozen uniforme formule: primaire S&P-vergelijkingswaarde verwacht 2.411,0. Niet vast te stellen uit gedeelde uitvoer of aanvullende instructie daadwerkelijk is meegegeven. Als ze is meegegeven, is dit een instructie-afwijking; anders invoerverschil. |
| Schuld | S&P 15.170,0 = 2.572 + 12.598; Moody’s 6.946,0 = 571 + 6.375. | Komt overeen met vooraf aanvaarde verwachtingen. |
| Omzetgroei | S&P 10,0%; Moody’s 15,0%. | Komt overeen met vooraf aanvaarde verwachtingen. |
| Leases | S&P 578 = 126 + 452; Moody’s operationeel 576 = 93 + 483; financiële leases niet materieel. | Aanvullende bronclaims, nog niet onafhankelijk gecontroleerd. |
| Risico’s | S&P juridische/toezichtsprocedures; Moody’s handel/tarieven, concurrentie/prijsdruk, rechtszaken en niet-naleving. | Andere onderbouwde selecties toegestaan; precieze claims nog zelfstandig beoordelen. |

T04 (NVO/LLY) heeft hiermee nog geen ontvangen run. Voor een volgende SPGI/Moody’s-run dezelfde gewijzigde invoer en de aanvullende uniforme-FCF-instructie gebruiken.

### T03 — Tweede extra run met lokaal Moody’s-pdf

Ontvangen uitvoer gebruikt opnieuw het lokale Moody’s-pdf en het S&P Global-rapport. Gedeelde duur: 3 minuten en 24 seconden. Beide documenten worden geïdentificeerd als Form 10-Q voor Q2 2026.

| Controlepunt | Ontvangen uitvoer |
|---|---|
| Halfjaar-FCF | S&P Global gerapporteerd 2.249,0 miljoen USD = 2.476 − 65 − 162; Moody’s 1.532,0 = 1.718 − 186. Bedrijfsdefinities worden onderscheiden. |
| Schuld | S&P Global 15.170,0 = 2.572 + 12.598; Moody’s 6.946,0 = 571 + 6.375 miljoen USD. |
| Omzetgroei | S&P Global 10,0%; Moody’s 15,0%. |
| Leases | S&P Global operationeel 578; Moody’s operationeel 576 miljoen USD; Moody’s financiële leases niet materieel, apart bedrag niet gevonden. |
| Risico’s | S&P Global systeem/databeveiliging en vervroegde opeisbaarheid bij kredietdefault; Moody’s handelsbeleid, prijsdruk, rechtszaken en cross-default. Bronclaims nog zelfstandig controleren. |

### T03 — Vergelijking van de twee pdf-runs

De financiële kerncijfers en halfjaarperiode komen overeen. Beide runs tonen echter de eigen gerapporteerde S&P-FCF van 2.249,0 in de hoofdtafel, terwijl de student vooraf koos voor CFO minus kapitaaluitgaven zonder minderheidsuitkeringen: 2.411,0. Dit verschil is in beide runs aanwezig. Uit alleen de gedeelde uitvoer blijkt niet of de aanvullende FCF-instructie in beide invoeren stond; daarom geen bewezen instructiefout claimen zonder invoercontrole. Risicoselecties verschillen, wat toegestaan was als ze expliciet worden onderbouwd. Twee oorspronkelijke linkruns stopten; twee extra runs met lokaal pdf leverden een vergelijking op. Deze bronwijziging wordt niet weggewerkt. NVO/LLY (T04) heeft nog geen ontvangen runs.

### T04 — Run 1 met v2 en aanvullende FCF/valuta-instructie

De student reageerde vóór de run met “ok komt in orde” en deelde daarna onderstaande uitvoer. De uitvoer vermeldt expliciet oorspronkelijke valuta en de laatste FCF-instructie.

| Controlepunt | Ontvangen uitvoer | Vergelijking |
|---|---|---|
| Identificatie | Novo financieel halfjaarrapport bij Form 6-K; Lilly Form 10-Q; beide einddatum 30 juni 2026. | Komt overeen. |
| Halfjaar-FCF | Novo 55.297,0 miljoen DKK = 79.283 − 23.986; Lilly 10.764,0 miljoen USD = 16.023 − 5.259. | Komt overeen; gemeenschappelijk halfjaar, uniforme formule. Novo eigen gerapporteerde FCF gelijk; Lilly-definitie niet gevonden. |
| Schuld | Novo 131.505,0 miljoen DKK = 121.794 + 18.333 − 8.622 leases; Lilly 54.908,0 miljoen USD = 7.050 + 47.858. | Komt overeen. Lilly-controle met commercial paper 5.284 + 49.624 is aanvullende bronclaim. |
| Omzetgroei | Novo gerapporteerd 2,0%, CER apart 3%; Lilly 48,0%, omzet 22.974 versus 15.558. | Komt overeen; aangepaste Novo-groei niet als gerapporteerde groei gebruikt. |
| Valuta | Kolomkoppen miljoen DKK versus miljoen USD; geen wisselkoers of directe omvangvergelijking. | Aanvullende instructie uitgevoerd. |
| Risico’s | Novo concurrerende producten en aanvoer/productieonderbrekingen; Lilly prijsbeleid en valuta. | Toegestane selectie. Gevolgen en precieze bronverwijzingen nog zelfstandig controleren. |
| Beperkingen | Lilly kwartaal-FCF, eigen FCF-definitie, leases en CER-groei niet gevonden; verwijzingen naar jaarverslagen niet aangevuld. | Ontbrekende gegevens zichtbaar. Verschil IAS 34/IFRS versus US GAAP niet expliciet toegelicht in deze uitvoer. |

De numerieke kernuitvoer voldoet aan de vastgelegde verwachtingen. Een aantal paginaverwijzingen verschilt van de voorbereiding (bijvoorbeeld Novo omzetgroei p. 4 versus p. 6); meerdere passages kunnen hetzelfde gegeven bevatten. Die verwijzingen zijn nog niet afzonderlijk gecontroleerd en worden niet als bewezen correct of fout aangemerkt. Run 2 nog niet ontvangen.

### T04 — Run 2 met v2 en aanvullende FCF/valuta-instructie

Gedeelde duur: 1 minuut en 51 seconden. Beide rapporten leesbaar, gemeenschappelijke einddatum 30 juni 2026. De uitvoer vermeldt de aanvullende FCF-formule en oorspronkelijke valuta expliciet.

| Controlepunt | Ontvangen uitvoer |
|---|---|
| Halfjaar-FCF | Novo 55.297,0 miljoen DKK = 79.283 − 23.986; Lilly 10.764,0 miljoen USD = 16.023 − 5.259. |
| Schuld | Novo 131.505,0 miljoen DKK = 121.794 + 18.333 − 8.622 leases; Lilly 54.908,0 miljoen USD = 7.050 + 47.858. |
| Omzetgroei | Novo 2,0%, CER apart 3%; Lilly 48,0%, omzet 22.974 tegenover 15.558. |
| Risico’s | Novo bevoorrading/productieonderbrekingen en concurrerende producten; Lilly intense concurrentie en productieproblemen. |
| Beperkingen | Valuta verschillen; geen wisselkoers. IFRS bij Novo versus US GAAP bij Lilly expliciet vermeld. Lilly kwartaal-FCF, eigen definitie en leases niet gevonden; Novo looptijdverdeling leases niet gevonden. |

### T04 — Vergelijking van de runs

Beide runs gebruiken dezelfde halfjaarperiode, uniforme FCF-formule en oorspronkelijke valuta. Alle vooraf vastgelegde financiële kerncijfers komen overeen, zowel tussen runs als met de voorbereiding. Run 2 benoemt ook het verschil IFRS/US GAAP; Run 1 deed dat niet expliciet. Novo-risico’s zijn inhoudelijk gelijk, in een andere volgorde. Lilly-risico’s verschillen: prijsbeleid en valuta in Run 1, concurrentie en productieproblemen in Run 2. Andere onderbouwde selecties waren toegestaan; dit verschil is niet automatisch een fout. Bronpagina’s en risicogevolgen blijven afzonderlijk te controleren; geen volledige bronvalidatie claimen. T04 is tweemaal uitgevoerd. T05 moet nog gekozen en tweemaal uitgevoerd worden.


## T05 — NVIDIA en AMD, afwijkende tweede kwartaalperioden

- NVIDIA (NVDA): https://www.sec.gov/Archives/edgar/data/1045810/000104581026000075/nvda-20260726.htm
- AMD: https://www.sec.gov/Archives/edgar/data/2488/000000248826000123/amd-20260627.htm
- Beide documenten zijn bij de voorbereiding leesbare Form 10-Q’s. NVIDIA kwartaal eindigend op 26 juli 2026 (Q2 boekjaar 2027); AMD kwartaal eindigend op 27 juni 2026 (Q2 2026). Einddata liggen 29 dagen uiteen.
- Status: conceptcijfers door AI opgezocht op verzoek en vóór de runs door de student goedgekeurd met “cijfer kloppen”. De bronverwijzingen en risicoselecties blijven afzonderlijk te controleren. Geen runs ontvangen.
- Gebruik dezelfde v2 in twee nieuwe chats met de aanvullende uniforme-FCF-instructie: “Bereken FCF als operationele kasstroom minus uitgaven voor materiële vaste activa. Vermeld afwijkende eigen bedrijfsdefinities afzonderlijk.” De valuta-instructie voor NVO/LLY is hier niet nodig: beide rapporteren in USD.

| Controlepunt | Conceptverwachting | Bron |
|---|---|---|
| Periodevergelijkbaarheid | Geen exact gemeenschappelijk halfjaar in deze rapporten: NVIDIA zes maanden tot 26 juli, AMD zes maanden tot 27 juni. Niet als januari–juni voor beide presenteren, niet halve/kwartaalbedragen schatten. Geldbedragen hoogstens afzonderlijk met hun eigen perioden; geen directe FCF-vergelijking claimen. | Voorbladen en kasstroomtabellen. |
| AMD — FCF-componenten | Zes maanden tot 27 juni: CFO 5.321 − PP&E 1.197 = berekend 4.124,0 miljoen USD. Geen CFO uit discontinued operations in 2026; 421 aan accrued but unpaid PP&E niet nogmaals aftrekken. Kwartaal-CFO/FCF niet gevonden in geraadpleegde passages. | Consolidated Statements of Cash Flows en supplement. |
| NVIDIA — FCF-componenten | Zes maanden tot 26 juli: CFO 74.421; gecombineerde aankopen PP&E én intangible assets 4.434. Rekenkundig verschil 69.987,0 miljoen USD, maar dit is niet aantoonbaar de gevraagde CFO-minus-uitsluitend-PP&E-maatstaf. Afzonderlijke PP&E-input niet gevonden in geraadpleegde passages; daarom onzeker/niet gevonden voor strikte uniforme FCF. Principal payments 92 niet stilzwijgend bij PP&E-aankopen optellen. | Condensed Consolidated Statements of Cash Flows. |
| NVIDIA — schuld | Boekwaarde 1.000 kort + 32.366 lang = 33.366,0 miljoen USD op 26 juli 2026; nominale maturiteiten 33.500 minus kosten/discount 134. Leases apart, geen kasaftrek. | Balans; Liquidity and Capital Resources, schuldtabel. |
| AMD — schuld | Boekwaarde 875 kort + 2.351 lang = 3.226,0 miljoen USD op 27 juni 2026; nominale hoofdsom 3.250 minus kosten/discount 24. Leases apart. | Note 6 — Debt, schuldentabel. |
| NVIDIA — omzetgroei | Gerapporteerd 106% YoY; kwartaalomzet 96.221 versus 46.743 miljoen USD. Niet verwarren met 18% QoQ. Eigen kwartaalperiode tot 26 juli versus 27 juli 2025. | p. 27, Results of Operations. |
| AMD — omzetgroei | Gerapporteerd 50% YoY; kwartaalomzet in overzicht afgerond 11,5 miljard USD. Niet data-centergroei 107% als totale omzetgroei gebruiken. Eigen kwartaalperiode tot 27 juni versus 28 juni 2025. | MD&A, Overview. |
| Risico’s | Alleen expliciet onderbouwde selecties; NVIDIA Item 1A bevat nieuwe risico’s en verwijst ook naar eerdere documenten. AMD bespreekt onder meer risico van uitgestelde/uitblijvende klantbetalingen en concentratie. Niet aanvullen uit externe jaarverslagen. | NVIDIA Part II Item 1A; AMD Risk Factors, betalingsrisico. |

Dit is een test van omgaan met beperkingen, niet alleen van cijfers vinden. Een duidelijke melding dat FCF niet rechtstreeks vergelijkbaar is, kan hier het correcte resultaat zijn. Bronclaims/paginanummers moeten door de student worden gecontroleerd vóór beoordeling. Deze testset niet meegeven bij de runs.

### T05 — Run 1 met v2 en aanvullende FCF-instructie

| Controlepunt | Ontvangen uitvoer | Beoordeling tegenover verwachting |
|---|---|---|
| Periode | NVIDIA 26 juli 2026 versus AMD 27 juni 2026, 29 dagen verschil; geen gemeenschappelijk halfjaar. | Komt overeen; verschillen expliciet gemeld. |
| NVIDIA FCF | CFO 74.421 en gecombineerde PP&E/intangibles 4.434; afzonderlijke PP&E niet gevonden; geen strikte FCF berekend. | Komt overeen; gecombineerde investeringen niet als uitsluitend materieel voorgesteld. |
| AMD FCF | Afzonderlijk halfjaar berekend 4.124,0 miljoen USD = 5.321 − 1.197; geen directe FCF-vergelijking. | Komt overeen. |
| Schuld | NVIDIA 33.366,0 = 1.000 + 32.366; AMD 3.226,0 = 875 + 2.351 miljoen USD, met eigen peildatums. | Komt overeen. |
| NVIDIA omzetgroei | Gerapporteerd 106,0%, omzet 96.221 tegenover 46.743. | Komt overeen. |
| AMD omzetgroei | Berekend 50,1% uit 11.536 / 7.685; zegt dat percentage niet gevonden is. | Afwijking: voorbereiding vond expliciet gerapporteerde 50% in MD&A Overview. Prompt geeft die voorrang. Rekenkundige uitkomst kan kloppen, maar de claim dat het percentage ontbreekt en de keuze voor eigen berekening voldoen niet aan de verwachting. |
| Leases | NVIDIA operationeel 5.494 = 509 + 4.985; AMD langlopend 1.050, kortlopend niet gevonden. | Aanvullende bronclaims nog afzonderlijk controleren. |
| Risico’s | NVIDIA herfinanciering; AMD klantenconcentratie. | Andere expliciet onderbouwde selecties toegestaan; precieze bronclaims nog controleren. |

Run 1 behandelt de belangrijkste FCF-beperkingen zoals verwacht. Er is een vastgelegde afwijking bij de keuze van AMD’s omzetgroeipercentage. Run 2 moet dezelfde invoer gebruiken zonder feedback of testset, zodat deze afwijking onafhankelijk kan worden beoordeeld. Bronpagina’s en aanvullende claims zijn niet volledig gevalideerd.

### T05 — Run 2 met v2 en aanvullende FCF-instructie

| Controlepunt | Ontvangen uitvoer | Vergelijking |
|---|---|---|
| Perioden/FCF | Geen gemeenschappelijke periode; NVIDIA geen strikte FCF wegens gecombineerde PP&E/intangibles; AMD afzonderlijk 4.124,0 miljoen USD. | Komt overeen met verwachting en Run 1. |
| Schuld | NVIDIA 33.366,0; AMD 3.226,0 miljoen USD, elk met eigen peildatum. | Komt overeen met verwachting en Run 1. |
| Omzetgroei | NVIDIA gerapporteerd 106,0%; AMD gerapporteerd 50,0%. | Komt overeen met verwachting. Run 1 miste AMD’s gerapporteerde 50% en berekende 50,1%. |
| Leases | NVIDIA 5.494,0; AMD langlopend 1.050,0, kortlopend niet gevonden/totaal onzeker. | Zelfde aanvullende bedragen als Run 1; bronnen nog zelfstandig controleren. |
| Risico’s | NVIDIA langlopende verplichtingen en herfinanciering; AMD exportbeperkingen en productieopbrengst. | Selectie verschilt van Run 1; toegestaan mits bronbewijs klopt. |

### T05 — Vergelijking van de runs

Beide runs behandelen het periodeverschil en NVIDIA’s gecombineerde investeringspost zoals vooraf verwacht. Schuld en AMD’s afzonderlijke FCF zijn stabiel. Bij AMD’s omzetgroei verschilt de keuze: Run 1 berekent 50,1% en zegt het percentage niet gevonden te hebben; Run 2 vindt en gebruikt de gerapporteerde 50,0%. Dat is een relevante inconsistentie bij het zoeken en volgen van de voorkeur voor gerapporteerde cijfers. Risicoselecties verschillen binnen de toegestane vrijheid. Paginaverwijzingen en aanvullende claims zijn nog niet volledig gevalideerd.

## Overzicht na vijf testinputs

| Input | Uitgevoerde runs | Belangrijkste bevinding |
|---|---|---|
| T01 Netflix/Uber | V1 tweemaal; V2 eenmaal | Kerncijfers stabiel; v2 verbetert periodekeuze en uniforme presentatie. |
| T02 Amazon/Alphabet | V2 tweemaal | Kerncijfers stabiel; schuldzekerheid en risicoselectie wisselen. Voorbereiding miste eerst Alphabets kwartaalpassage. |
| T03 S&P Global/Moody’s | Twee linkruns; twee extra pdf-runs | Linkruns stoppen bij toegangsfout; pdf maakt vergelijking mogelijk. Beide pdf-runs gebruiken gerapporteerde S&P-FCF in plaats van gekozen uniforme formule; aanvullende invoerinstructie nog te verifiëren. |
| T04 Novo/Lilly | V2 met aanvulling tweemaal | Kerncijfers stabiel; eigen valuta en uniforme formule toegepast; risicoselectie wisselt. |
| T05 NVIDIA/AMD | V2 met aanvulling tweemaal | Periode/definitiebeperkingen herkend; AMD gerapporteerde omzetgroei alleen in Run 2 gevonden. |

Alle vijf inputs zijn minstens tweemaal uitgevoerd. Dat betekent niet dat elke run succesvol was of dat alle bronclaims juist zijn. Varianten van prompt en bronvorm zijn expliciet bijgehouden. Nog te doen vóór afronding van de build: de student beoordeelt de resterende bronclaims en invoeronzekerheid en formuleert zelf de reflectie; waar nodig wordt de definitieve prompt aangescherpt. Er is niets ingediend of gepubliceerd.
