# Taak

- **Taak:** uit een bundel nieuwsberichten over één wielrenner afleiden in welke fysieke toestand hij nu is.
- **Input:** twee tot vier gedateerde nieuwsberichten, interviews of quotes over dezelfde renner.
- **Output:** één label, `uitgeschakeld`, `in herstel`, `vermoeid` of `goed`, met één zin als reden. De uitweg is `geen info`, voor als de berichten niets zeggen over de fysieke toestand of elkaar tegenspreken zonder duidelijke winnaar.
- **Soort AI:** een taalmodel, omdat er vrije tekst in gaat en er een label uit komt. Statistieken en uitslagen horen niet bij deze stap.
- **Controle:** vóór de run het juiste label per bundel opschrijven, volgens de labeldefinities en de regel voor tegenstrijdige berichten. Een klasgenoot met dezelfde definities moet los van mij op hetzelfde label uitkomen.

## Inputideeën

1. **Uitgeschakeld:** WK wielrennen 27 september, vrouwenelite. Grote valpartij waarin de Zweedse Caroline Andersson een complexe open sleutelbeenbreuk en een hersenschudding opliep.
2. **In herstel:** Tadej Pogačar kwam ten val in de Vuelta 2026 en brak zijn sleutelbeen. De operatie is voorbij (volgens artikels), hij traint opnieuw op de fiets, maar rijdt nog geen wedstrijden. Trainen maar nog niet koersen is een vorm van herstel.
3. **Vermoeid:** Enric Mas, winnaar van het eindklassement van de Vuelta 2026, reed ook het WK bij de mannenelite, maar met een zeer zwak resultaat: hij moest al vroeg lossen. Dit komt door de vermoeidheid na een zware ronde.
4. **Goed:** Demi Vollering won het WK wegwielrennen bij de vrouwen. Uit interviews vooraf bleek al dat ze in grote vorm zou zijn, en dat bewees ze met de wereldtitel.
5. **Geen info:** een renner die geen ploeg meer heeft of stopt met wielrennen, bijvoorbeeld Julian Alaphilippe (ex-wereldkampioen), die dit jaar stopt.
