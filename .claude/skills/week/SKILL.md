---
name: week
description: De wekelijkse lus van de cursus. "start week 5" haalt nieuw lesmateriaal op en maakt de weekbranch. "dien week 5 in" commit de eigen map, pusht en opent de pull request. Ook bij "waar was ik", "waar is mijn map", "pull request", "indienen".
---

# Week: starten en indienen

Twee momenten per week. Aan het begin van de les: starten. Voor vrijdag: indienen. Eén stap per keer, elk commando tonen voor je het uitvoert, in het Nederlands.

Wie is de student? Kijk naar de map waarin je zit, of naar `context.md`. De map heet `studenten/<naam>/`. Twijfel je, vraag het.

## Eerst: waar is je map?

De regel van de cursus: de student start de tool in de eigen map, `studenten/<naam>/`. Alleen daar leest de tool `context.md`, en alleen daar mag hij schrijven. Check dat altijd eerst.

1. Staat er `context.md` in de map waar je zit, en eindigt `git rev-parse --show-toplevel` op `advanced-ai-nl`? Dan zit je goed. Ga naar stap 4.
2. Zit je in de repo, maar niet in `studenten/<naam>/` (bijvoorbeeld in de hoofdmap)? Zoek de map van de student in `studenten/` en ga naar stap 3.
   Zit je niet in de repo? Zoek de map:
   - macOS, of Claude Code op Windows: `find ~ -maxdepth 5 -type d -path "*advanced-ai-nl/studenten/*" -not -name "_voorbeeld" 2>/dev/null`
   - Windows PowerShell: `Get-ChildItem $HOME -Recurse -Depth 4 -Directory -Filter advanced-ai-nl -ErrorAction SilentlyContinue`, dan `studenten/` erin bekijken.

   Meerdere resultaten: toon ze en laat de student kiezen. Niets gevonden: de clone is woensdag niet afgeraakt. Lees dan `.claude/skills/opzet/SKILL.md` (raw: https://raw.githubusercontent.com/alexandernacho/advanced-ai-nl/main/.claude/skills/opzet/SKILL.md) en ga verder vanaf stap 4. Bestaat `studenten/<naam>/` nog niet: ga verder vanaf stap 5 van de opzet.
3. Gevonden? **Ga er niet zelf heen en werk niet verder vanaf hier.** Stuur de student terug naar de regel. Toon dit, met het echte pad ingevuld en tussen aanhalingstekens (paden met spaties breken anders):

   > Je map staat hier. Sluit deze sessie (`/exit`, of twee keer Ctrl+C) en plak dan:
   > ```
   > cd "<volledig pad naar studenten/<naam>>"
   > claude
   > ```
   > Plak daarna dezelfde regel opnieuw.

   Gebruikt de student Codex? Dan `codex` in plaats van `claude`. Windows met een map op een andere schijf (bv. `D:`) in cmd: `cd /d "<pad>"`.

   Voeg één zin toe voor volgende keer: "Pin deze map in Finder (sleep naar de zijbalk) of Verkenner (rechtsklik → Aan Snelle toegang vastmaken). Volgende keer: rechtsklik op de map → Openen in Terminal."

   Stop hier. Dit gesprek is klaar.
4. Je zit in `studenten/<naam>/`. `git remote -v`: `origin` moet de GitHub-naam van de student bevatten, `upstream` moet `alexandernacho` bevatten. Klopt het niet, herstel het zoals in stap 4 van de opzet. Ga dan verder met wat de student vroeg.

**Paden hieronder staan vanaf de hoofdmap van de repo.** Jij zit in `studenten/<naam>/`, twee niveaus dieper. Ga niet naar de hoofdmap met `cd`: sommige tools laten dat niet toe. Vertaal zo:
- Bestanden: `studenten/<naam>/posts/week-01.md` wordt `posts/week-01.md`. `cursus/week-01/...` wordt `../../cursus/week-01/...`.
- Git: zet `-C ../..` na `git`. `git add studenten/<naam>` wordt `git -C ../.. add studenten/<naam>`.

## Starten: "start week N"

Doel: de nieuwste cursusbestanden binnen, en een schone branch voor deze week.

1. Alle git-commando's in dit deel met `-C ../..`, zoals hierboven.
2. Check `git status`. Staan er niet-gecommitte wijzigingen in `studenten/<naam>/`? Commit ze eerst op de huidige branch: `git add studenten/<naam>` en een korte boodschap. Wijzigingen buiten de eigen map: toon ze, en gooi ze weg met `git checkout -- <bestand>`. Vraag eerst.
3. Haal het lesmateriaal op:
   ```
   git checkout main
   git pull upstream main
   git push origin main
   ```
4. Maak de branch: `git checkout -b week-NN` (twee cijfers: `week-05`). Bestaat hij al? Dan `git checkout week-NN` en `git merge main`.
5. Zeg wat er nieuw is: `ls cursus/week-NN/` en open de README daar.

Fouten:
- `upstream` bestaat niet: `git remote add upstream https://github.com/alexandernacho/advanced-ai-nl.git`.
- Conflict bij de pull: bijna altijd omdat er iets buiten de eigen map gewijzigd is. `git checkout --theirs <bestand>` voor alles in `cursus/`, dan `git add` en `git commit`. Bij twijfel: stop, roep de docent.
- `Your local changes would be overwritten`: stap 2.

## Indienen: "dien week N in"

Doel: de post staat in de pull request, met de juiste titel, vóór vrijdag.

**Week 1 is anders.** De pull request van de opzet komt vanaf branch `main`. Werk zo:

1. Schrijf de post in `studenten/<naam>/posts/week-01.md`. Template: `cursus/week-01/post-template.md`. Stel de drie vragen één voor één, schrijf op wat de student zegt, niet mooier.
2. `git add studenten/<naam>`, commit met `week 01: eerste post`, `git push origin main`.
3. Staat de pull request nog open? Check met `gh pr list --repo alexandernacho/advanced-ai-nl --author @me --state all`. Zonder `gh`: laat de student https://github.com/alexandernacho/advanced-ai-nl/pulls openen en de eigen pull request zoeken.
   - **Open:** klaar. De pull request werkt zichzelf bij. Toon de link.
   - **Merged of closed:** de push komt er niet meer in. Maak een nieuwe pull request zoals in stap 6 hieronder, maar met `--head <githubnaam>:main` en titel `week-01 — Voornaam Achternaam`.
   - **Geen pull request te vinden:** maak er een zoals in stap 6 hieronder, met `--head <githubnaam>:main`.

De rest van dit hoofdstuk is voor week 2 en later.

1. Op de goede branch? `git branch --show-current` moet `week-NN` geven. Zo niet: `git checkout week-NN`.
2. Bestaat `studenten/<naam>/posts/week-NN.md`? Zo niet: stop. Schrijf de post eerst. Template: `cursus/week-01/post-template.md`. Stel de vragen, schrijf op wat de student zegt, niet mooier.
3. Check `git status`. Alleen bestanden in `studenten/<naam>/` mogen mee. Staat er iets anders? Toon het en laat het buiten de commit.
4. Geen sleutels: `grep -rniE "sk-|api[_-]?key|token|password" studenten/<naam>/` moet leeg zijn, behalve de woorden zelf in een tekst. Afbeeldingen: alleen in `posts/`, maximaal twee, maximaal 300 KB.
5. Commit en push:
   ```
   git add studenten/<naam>
   git commit -m "week NN: <drie woorden over de inhoud>"
   git push origin week-NN
   ```
6. Pull request. Titel exact `week-NN — Voornaam Achternaam`, met een lang streepje.
   ```
   gh pr create --repo alexandernacho/advanced-ai-nl --base main --head <githubnaam>:week-NN --title "week-NN — Voornaam Achternaam" --body "Post week NN."
   ```
   Geen `gh`? Fork openen op github.com → Contribute → Open pull request → titel invullen.
7. Toon de link naar de pull request. Op GitHub draait een controle. Rood kruis? Lees de melding: bijna altijd een bestand buiten de eigen map, of een te grote afbeelding. Herstel, commit, push opnieuw. De pull request werkt zichzelf bij.

Bestaat er al een pull request voor deze branch? Dan hoef je er geen nieuwe te maken. Pushen volstaat.

## Peer review

Na het indienen: één klasgenoot krijgt drie regels van jou in de pull request. Regel: reageer op de pull request die net vóór de jouwe geopend werd in de lijst op github.com. Is die er niet, neem de eerste in de lijst zonder reactie.

Drie regels: één ding dat duidelijk is, één bewering zonder cijfer, één zin die van een machine lijkt te komen. Meer niet.

## Wat je niet doet

- Niet `git add .` en niet `git add -A`. Altijd `git add studenten/<naam>`.
- Niet mergen. De docent merget.
- Niet pushen naar `upstream`. Dat geeft een 403, en dat is juist.
- Niet aan `cursus/` of aan de map van een andere student komen. Ook niet om "een typfout te verbeteren". Meld het aan de docent.
