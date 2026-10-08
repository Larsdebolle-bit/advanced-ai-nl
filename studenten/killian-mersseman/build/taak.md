# Build — Kwartaalrapporten vergelijken

1. **Taak:** twee kwartaalrapporten vergelijken voor mijn eigen onderzoek naar beleggingen op meer dan vijf jaar.
2. **Input:** twee kwartaalrapporten van bedrijven, liefst over dezelfde verslagperiode.
3. **Output:** een tabel met FCF (vrije kasstroom), totale schuld, omzetgroei en expliciet genoemde risico’s, telkens met pagina of citaat. Bij ontbrekende of onduidelijke informatie: "niet gevonden" of "onzeker".
4. **AI:** een taalmodel haalt gegevens en risico’s uit de tekst; eventuele berekeningen gebeuren met vaste formules.
5. **Controle:** ik controleer de gegevens en bronverwijzingen in de rapporten en schrijf voor elke test vooraf het juiste antwoord op.

## Vijf inputideeën

Elk testvoorbeeld bestaat uit twee echte kwartaalrapporten. De juiste antwoorden schrijf ik later zelf in `build/test-set.md`, voordat ik de tool laat draaien.

1. **Netflix (NFLX) en Uber (UBER), Q2 2026:** het recentste gepubliceerde kwartaal gevonden op 2 oktober 2026; beide rapporten eindigen op 30 juni 2026.
   - [Netflix Form 10-Q](https://www.sec.gov/Archives/edgar/data/1065280/000106528026000212/nflx-20260630.htm)
   - [Uber Form 10-Q](https://www.sec.gov/Archives/edgar/data/1543151/000154315126000032/uber-20260630.htm)

2. **Amazon (AMZN) en Alphabet (GOOGL), Q2 2026:** beide rapporten eindigen op 30 juni 2026.
   - [Amazon Form 10-Q](https://www.sec.gov/Archives/edgar/data/1018724/000101872426000026/amzn-20260630.htm)
   - [Alphabet Form 10-Q](https://www.sec.gov/Archives/edgar/data/1652044/000165204426000071/goog-20260630.htm)

3. **S&P Global (SPGI) en Moody’s (MCO), Q2 2026:** beide rapporten eindigen op 30 juni 2026.
   - [S&P Global Form 10-Q](https://www.sec.gov/Archives/edgar/data/64040/000006404026000045/spgi-20260630.htm)
   - [Moody’s Form 10-Q](https://www.sec.gov/Archives/edgar/data/1059556/000162828026049398/mco-20260630.htm)

4. **Novo Nordisk (NVO) en Eli Lilly (LLY), Q2 2026:** gemeenschappelijke einddatum 30 juni; verschillende rapportagevaluta.
   - [Novo Nordisk financieel rapport, bijlage bij Form 6-K](https://www.sec.gov/Archives/edgar/data/353278/000035327826000023/caq22026.htm)
   - [Eli Lilly Form 10-Q](https://www.sec.gov/Archives/edgar/data/59478/000005947826000081/lly-20260630.htm)

5. **NVIDIA (NVDA) en AMD, laatste beschikbare tweede kwartaalrapporten:** NVIDIA eindigt op 26 juli 2026, AMD op 27 juni 2026. Test voor afwijkende perioden en investeringsdefinities.
   - [NVIDIA Form 10-Q](https://www.sec.gov/Archives/edgar/data/1045810/000104581026000075/nvda-20260726.htm)
   - [AMD Form 10-Q](https://www.sec.gov/Archives/edgar/data/2488/000000248826000123/amd-20260627.htm)

## Eerste versie

We beginnen met alleen Netflix en Uber in Q2 2026 en sturen daarna bij indien nodig. De eerste versie staat in `prompt-v1.md`. De verwachte antwoorden en twee runs worden bijgehouden in `test-set.md`. Alle vijf testinputs zijn inmiddels minstens tweemaal uitgevoerd; resultaten, afwijkingen en resterende controles staan in `test-set.md`.
