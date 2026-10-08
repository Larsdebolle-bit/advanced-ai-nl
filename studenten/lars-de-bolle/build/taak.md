# Build: taak

De spraakfunctie van OpMaat, mijn app voor aannemers en zelfstandigen in de bouw. De aannemer spreekt op de werf in wat hij ziet en wat er moet gebeuren. Daaruit komt een concept-offerte in zijn eigen huisstijl, die hij van gsm of pc direct kan doorsturen.

## De vijf regels

**De taak:** zet een gesproken werfopname om in gestructureerde offerteposten, elk met een omschrijving, eenheid, aantal, eenheidsprijs en de herkomst van die prijs.

**Wat erin gaat:** spraak van de aannemer op de werf, eventueel aangevuld met getypte notities en een foto. Plus zijn eigen materialenlijst uit de app.

**Wat eruit komt:** een lijst posten in JSON. Per post een verplicht label `bron` dat zegt waar de prijs vandaan komt: `eigen` (exact uit zijn materialenbibliotheek), `geschat` (Belgische richtprijs, moet nagekeken worden) of `open` (product nog niet gekozen, prijs blijft 0). Dat label is de uitweg: het model mag niet doen alsof een gok een eigen prijs is.

**Soort AI:** een taalmodel, want je haalt structuur uit vrije spraak. Whisper voor de transcriptie, GPT-4o voor de structuur. Bij een foto ook GPT-4o Vision.

**Hoe je meet:** twee mensen beluisteren de opname en vergelijken onafhankelijk hun lijst met die van het model. Per post: klopt het aantal, klopt de eenheid, klopt de bron. Elk veld is objectief na te kijken tegen wat er gezegd is.

## Hoe het werkt

Drie manieren om in te spreken:

1. **Interview.** Zes stappen, elk met een vraag en een voorbeeldantwoord als leidraad: type werk, ruimte en staat, te verrichten werken, maten en hoeveelheden, materialen en kwaliteit, budget en bijzonderheden. Per stap inspreken of typen.
2. **Doorlopend inspreken.** De aannemer praat vrij, Whisper transcribeert, GPT-4o verdeelt die tekst over dezelfde zes velden. De aannemer controleert de verdeling voor de offerte gemaakt wordt.
3. **Getypte werkbeschrijving.** Rechtstreeks vanuit de offerte-editor, zonder spraak.

De materialenlijst gaat mee in de prompt. Staat een post in die lijst, dan neemt het model omschrijving, eenheid en prijs exact over en zet `bron` op `eigen`. Staat ze er niet in, dan schat het op Belgische richtprijzen met `bron: geschat`. De server controleert dat label daarna zelf tegen de echte lijst: het model stelt de herkomst voor, de server stelt ze vast.

De uitvoer is begrensd. Eenheden mogen alleen `stuk`, `m²`, `m³`, `m`, `uur`, `forfait` of `set` zijn. Minimum 2 posten, maximum 15. Temperatuur staat op 0 voor het verdelen en 0,1 voor het genereren.

## Bekende beperking

De output verslechtert als de aannemer vaag of onvolledig spreekt. De leidraad met voorbeeldantwoorden stuurt het taalgebruik bij, maar maakt de testinputs daardoor gecontroleerder dan een echte werf. Dat is een bovengrens op het succespercentage die ik in de memo moet benoemen.

## Inputideeën (vijf echte voorbeelden, antwoorden komen later in test-set.md)

<!-- Het juiste antwoord schrijf ik zelf in build/test-set.md, vóór ik de tool laat draaien. -->

1. "Ik moet een badkamer gaan uitbreken die badkamer is 5 op 7 meter euh ik bedoel 5 op 6 meter."
2. "Ik moet een ruimte schilderen en nadien de belichting regelen."
3. "Ik moet de tegels uitbreken, douche uitbreken en bad ook en nadien de chape leggen en nieuwe tegels opleggen."
4. "Vierkante meter, kubieke meter." (vakterm zonder context)
5. "Tegels leggen 5 op 5 meter."
