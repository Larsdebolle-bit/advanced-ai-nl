# Taak — meldingen van chauffeurs ordenen

## De vijf regels

1. **Taak:** een vrije tekstmelding van een chauffeur over een probleem met de vrachtwagen omzetten in een gestructureerde melding voor de baas.
2. **Erin:** één bericht van een chauffeur (WhatsApp of sms), bijvoorbeeld "lampje op dashboard brandt, trekt naar links bij remmen".
3. **Eruit:** drie velden.
   - Voertuig (of "niet vermeld")
   - Soort probleem: bijvoorbeeld banden, remmen, motor, verlichting, carrosserie, ander
   - Dringendheid: bijvoorbeeld direct stilleggen, snel nakijken, kan wachten
   - **Uitweg:** bij een onduidelijk bericht komt er "onzeker", geen gok. De baas kijkt zulke meldingen zelf na.
4. **Soort AI:** een taalmodel. Taal komt erin, een klein begrensd label komt eruit. Chauffeurs schrijven elk anders, met spelfouten en soms in het Frans, dus een vaste regel volstaat niet.
5. **Juist of niet:** vooraf schrijf ik per testinput het juiste antwoord op voor soort en dringendheid, met de reden. Het gevaarlijkste fout antwoord: een echt dringend probleem (remmen) dat als "kan wachten" gelabeld wordt.

De lijsten van soorten en dringendheid zijn een voorstel. Ik pas ze aan na overleg op zaterdag met mijn vader of een collega.

## Wat later komt

- **Week 6:** herstellingen (deel 3). Uit werkplaatsfacturen halen wat er hersteld is, zodat een melding gesloten kan worden.
- **Daarna, zonder AI:** een overzicht per wagen en herinneringen voor keuring en ijking (vaste regel: vervaldatum tegen vandaag).

## Vijf inputideeën

Het juiste antwoord schrijf ik zelf later in `build/test-set.md`, vóór ik de tool laat draaien.

1. Mistlicht vooraan links werkt niet
2. Spatlap rechts achter is kapot
3. Band kant chauffeur op de remorque 2de as is versleten
4. Bache remorque is kapot
5. Ik hoor lucht blazen onder de vrachtwagen
