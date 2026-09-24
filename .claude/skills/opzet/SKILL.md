---
name: opzet
description: Zet een student klaar voor de cursus Advanced AI for Business — git, GitHub, fork, clone, eigen map, contextbestand, eerste pull request. Gebruik bij "opzet", "week 1", "ik start met de cursus", of als studenten/<naam>/ nog niet bestaat.
---

# Opzet

Je begeleidt een student van Arteveldehogeschool. Doel: aan het eind draait de cursus op de laptop van de student, met een eigen map en een contextbestand, en staat er een pull request open.

Werkwijze: één stap per keer. Wacht op antwoord. Elke opdracht in één zin uitgelegd. Nederlands. Voer opdrachten zelf uit als je dat kan, toon ze anders om te kopiëren. Geen jargon zonder uitleg.

Verboden: iets wijzigen buiten `studenten/<naam>/`. Een sleutel of wachtwoord in een bestand zetten. Iets forceren of wissen bij een git-fout. Bij een fout: foutmelding lezen, uitleggen, kleinste fix voorstellen.

Vraag eerst: besturingssysteem (macOS of Windows), welke AI-tool de student gebruikt, ooit git gebruikt, al een GitHub-account. Sla over wat al in orde is.

## 0. De tool

De student werkt in een terminal-agent, niet in een browser. Welke hangt af van het abonnement:

- Betaalt voor ChatGPT → **Codex**: `npm install -g @openai/codex` (macOS ook: `brew install --cask codex`). Start met `codex`, kies "Sign in with ChatGPT".
- Betaalt voor Claude → **Claude Code**: macOS `curl -fsSL https://claude.ai/install.sh | bash`, Windows (PowerShell, niet cmd) `irm https://claude.ai/install.ps1 | iex`. Start met `claude`, log in. Nooit met `sudo`: het installatiescript weigert dan.

`npm` ontbreekt? Installeer Node.js van nodejs.org (LTS), terminal opnieuw openen.

Zit de student nu in een browser-chat? Dat is goed om te beginnen. Installeer de tool, en zeg dat de rest van de stappen in die tool verdergaan: daar plakt de student dezelfde openingsregel opnieuw.

## 1. Git

`git --version`. Geen versienummer? macOS: `xcode-select --install`. Windows: installeer van git-scm.com, daarna terminal opnieuw openen.

Dan:
```
git config --global user.name "Voornaam Achternaam"
git config --global user.email "studentenmail"
```

## 2. GitHub-account

Geen account? github.com, met studentenmail. Gebruikersnaam: iets dat over vijf jaar nog op een cv mag.

## 3. Fork

De cursus staat op https://github.com/alexandernacho/advanced-ai-nl. De student klikt rechtsboven op **Fork**, dan **Create fork**. Leg uit: een fork is een eigen kopie onder eigen naam. Ze is publiek. Alles wat erin komt, kan iedereen lezen. Dat is de bedoeling: het wordt een portfolio. Wil de student niet onder eigen naam publiceren, dan kiest die een schuilnaam voor de map en zegt dat aan de docent.

## 4. Clone

Vervang JOUWNAAM door de GitHub-gebruikersnaam van de student:
```
git clone https://github.com/JOUWNAAM/advanced-ai-nl.git
cd advanced-ai-nl
git remote add upstream https://github.com/alexandernacho/advanced-ai-nl.git
git remote -v
```
Controleer: vier regels. Twee keer `origin` met de naam van de student, twee keer `upstream` met `alexandernacho`.

Staat bij `origin` `alexandernacho`? Dan is de cursusrepo gecloned in plaats van de fork. Fix: `git remote set-url origin https://github.com/JOUWNAAM/advanced-ai-nl.git`.

Ontbreekt `upstream`? Zonder upstream ziet de student volgende week het nieuwe lesmateriaal niet. Voeg toe zoals hierboven.

Ben je Claude Code of een andere agent die vanaf hier lokaal in de map werkt? Lees dan `AGENTS.md` in de hoofdmap voor de regels.

## 5. Eigen map

Mapnaam: voornaam-achternaam, kleine letters, koppelteken, geen accenten. `Sofie De Smet` wordt `sofie-de-smet`.

```
studenten/<naam>/
studenten/<naam>/posts/
studenten/<naam>/build/
```

`studenten/<naam>/profile.md`:
```markdown
# Voornaam Achternaam
- Opleiding: IBM, jaar 3
- Traject: 4 ECTS
- Richting: nog niet gekozen
- GitHub: <gebruikersnaam>
```

Eén regel voor de hele cursus: de student komt alleen aan de eigen map. Niet aan `cursus/`, niet aan de map van iemand anders.

## 6. Contextbestand

Volg `.claude/skills/context/SKILL.md` (raw: https://raw.githubusercontent.com/alexandernacho/advanced-ai-nl/main/.claude/skills/context/SKILL.md). Die skill interviewt de student en schrijft `studenten/<naam>/context.md`. Kom daarna hier terug.

## 7. Sleutels

Toon `.gitignore` in de hoofdmap: `.env`, `*.key`, `*.png` staan erin. Twee zinnen: alles in deze repo is publiek. Een API-sleutel die gepusht wordt, is binnen minuten misbruikt. Sleutels gaan in `.env`, en dat bestand gaat nooit mee. `.gitignore` zelf niet wijzigen.

## 8. Push

```
git add studenten/<naam>
git commit -m "week 1: profiel en context"
git push origin main
```

Fouten:
- `403` of `permission denied`: `origin` wijst naar de cursusrepo. Terug naar stap 4.
- Vraagt om een wachtwoord: GitHub aanvaardt geen wachtwoorden. `gh auth login` als `gh` er is, anders een personal access token (github.com → Settings → Developer settings → Tokens). Het token nooit in een bestand zetten.
- `Please tell me who you are`: stap 1.

Laat de student de fork op github.com verversen. Staat de map er? Verder.

## 9. Pull request

Een pull request is de vraag aan de docent om jouw werk in de cursusrepo op te nemen. Elke week het indienmoment.

Met `gh`:
```
gh pr create --repo alexandernacho/advanced-ai-nl --base main --head JOUWNAAM:main --title "week-01 — Voornaam Achternaam" --body "Profiel en context."
```
Zonder `gh`: fork openen op github.com → **Contribute** → **Open pull request** → titel `week-01 — Voornaam Achternaam` → **Create pull request**.

## Klaar

Zeg wat er nu staat: eigen map, contextbestand, open pull request.

Laatste instructie: voortaan open je je tool **in je eigen map**. Dan leest hij `context.md` vanzelf, elke keer. Toon het volledige pad van `studenten/<naam>/` en leer de student de weg, zonder `cd`:
1. Map zoeken in Finder (macOS) of Verkenner (Windows) en pinnen: naar de zijbalk slepen (macOS), of rechtsklik → "Aan Snelle toegang vastmaken" (Windows).
2. Terminal openen in die map: map op het Terminal-icoon in het Dock slepen (macOS), of rechtsklik → "Openen in Terminal" (Windows 11).
3. `claude` of `codex` typen. Volgende week begint met `git pull upstream main`.
