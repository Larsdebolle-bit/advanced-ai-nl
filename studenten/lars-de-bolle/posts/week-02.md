# Week 2 — De fout zat tussen twee AI-stappen

## Wat bouw ik?
De spraakfunctie van OpMaat, mijn app voor aannemers. Erin gaat een gesproken
werfopname plus de eigen materialenlijst van de aannemer. Eruit komt een lijst
offerteposten in JSON, elk met omschrijving, eenheid, aantal, eenheidsprijs en
een label `bron` dat zegt waar die prijs vandaan komt: `eigen` uit zijn
bibliotheek, `geschat` op Belgische richtprijs, of `open` als het product nog
niet gekozen is.

## Waarom een taalmodel?
Omdat ik structuur uit vrije spraak haal. Whisper doet de transcriptie, GPT-4o
verdeelt die tekst over zes velden en maakt de posten. Bij een foto komt Vision
erbij. Het label `bron` is de uitweg: het model mag niet doen alsof een gok een
eigen prijs is. De server controleert dat label daarna zelf tegen de echte
lijst, dus het model stelt de herkomst voor en de server stelt ze vast.

## Eén testinput
Input T01: "Ik moet een badkamer gaan uitbreken die badkamer is 5 op 7 meter
euh ik bedoel 5 op 6 meter."

Juist antwoord: rekenen met 5 op 6, en de verspreking melden in plaats van ze
stil weg te werken.

Wat het deed: Whisper schreef de verspreking letterlijk op. Het tweede model
verdeelde de transcriptie over de zes velden en loste de tegenspraak daar stil
op, zonder dat ergens in de code vastligt welke maat wint. Het ruwe transcript
ging daarna niet mee, dus de controlelaag zag enkel die zes velden. Alle vier de
regelcontroles zwegen. De rekensomcontrole heeft een expliciet m²-getal naast de
maten nodig. De onrealistisch-controle begint pas boven 100 m². De
tegenspraakcontrole zag 35 tegenover 30 wel, maar liet het door, want 14,3
procent viel onder de marge van 25 procent. Netto 5 m² te veel tegelwerk,
ongeveer 17 procent, zonder één signaal. Het enige vangnet was dat de aannemer
de vooringevulde velden zelf nalas.

Nu meldt het systeem de correctie ("Je zei eerst 5 op 7 en daarna 5 op 6; ik
reken met 5 op 6"), en als beide maten tóch als m² in twee velden belanden,
vraagt het welke moet gelden.

De les: de fout zat niet in de spraakherkenning en niet in het rekenen. Die
werkten. De fout zat op de overdracht tussen twee AI-stappen, waar de tweede
stap een beslissing nam die ze niet mocht nemen en de informatie om ze te
betwisten weggooide. Een deterministische controlelaag ernaast dekt dat niet af,
want die krijgt alleen het resultaat te zien. En een drempel die ruim genoeg
staat om ruis te slikken, slikt ook precies de verspreking die een mens op een
werf echt maakt.
