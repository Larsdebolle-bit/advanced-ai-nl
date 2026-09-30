# Instructies voor AI-tools in deze repo

Geldt voor elke tool: Claude Code, Codex of een andere agent. `CLAUDE.md` importeert dit bestand, dus bewerk alleen `AGENTS.md`.

Dit is de cursusrepo van "Advanced AI for Business" (Nederlandstalige groep, Arteveldehogeschool). De gebruiker is een student.

## Lees eerst
- Studenten openen hun tool normaal in `studenten/<naam>/`. Daar staat een `CLAUDE.md` en een `AGENTS.md` die `context.md` inladen. Zit je daar, dan is dit al gebeurd.
- Zit je in de hoofdmap? Vraag de naam van de student en lees `studenten/<naam>/context.md` voor je iets doet.
- Bestaat `context.md` niet? Gebruik de skill `context`.

## Regels
1. Wijzig alleen bestanden in `studenten/<naam>/` van de gebruiker. Nooit in `cursus/`, nooit in de map van een andere student. Ook niet om een typfout te verbeteren: meld het aan de docent. Lees ook geen bestanden in de map van een andere student, tenzij de student daar zelf om vraagt.
2. Schrijf nooit een API-sleutel, wachtwoord of token in een bestand dat in git komt. Sleutels horen in `.env`.
3. Schrijf in het Nederlands, tenzij de student anders vraagt in `context.md`.
4. Doe het denkwerk niet in de plaats van de student. Bij posts, testinputs en reflecties: stel vragen, structureer, verbeter — maar de inhoud komt van de student.
5. Git: altijd `git add studenten/<naam>`, nooit `git add .`. Nooit mergen, nooit naar `upstream` pushen.

## Skills
Elke skill is een gewoon markdownbestand. Lees het en volg de stappen, welke tool je ook bent.

De skills staan twee keer: in `.claude/skills/` (Claude Code, `/week`) en in `.agents/skills/` (Codex, `$week`). De bron is `.claude/skills/`. `.agents/skills/` is een kopie: `node scripts/sync-skills.mjs`.

- `.claude/skills/opzet/SKILL.md` — opzet in week 1: tool, git, fork, clone, eigen map, context, push, pull request.
- `.claude/skills/context/SKILL.md` — interviewt de student en schrijft `context.md`.
- `.claude/skills/week/SKILL.md` — `start week N` (pull upstream, weekbranch) en `dien week N in` (commit eigen map, push, pull request).
- `.claude/skills/brainstorm/SKILL.md` — van een vaag idee naar één keuze. Algemeen bruikbaar, ook buiten de cursus.

Zegt de student "start week 5", "dien week 5 in", "schrijf mijn context", "help me met de opzet", "brainstorm", of iets over een post, pushen of een pull request? Lees dan de bijbehorende skill eerst.

## De Build kiezen
Brainstormt de student over de Build (het ding dat hij of zij twaalf weken bouwt)? Gebruik de skill `brainstorm`, met twee extra's:
- Schrijf het resultaat niet in `idee.md`, maar in `studenten/<naam>/build/taak.md`.
- Zet onder de vijf regels vijf inputideeën van de student. Het juiste antwoord bij elke input schrijft de student zelf, later, in `build/test-set.md`. Vul het niet in.

Wat de Build moet zijn: `cursus/beoordeling/build-brief.md`.

## Posts
Elke week één post in `studenten/<naam>/posts/week-NN.md`. Template: `cursus/week-01/post-template.md`. Voorbeeld: `studenten/_voorbeeld/posts/week-01.md`. Wat telt en hoe lang: `cursus/beoordeling/wekelijkse-post.md`. Indienen gaat via de skill `week`.
