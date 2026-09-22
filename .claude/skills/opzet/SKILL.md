---
name: opzet
description: Begeleidt een student stap voor stap door de opzet van week 1 — eigen map, profiel, contextbestand, .gitignore-check, commit, push en eerste pull request. Gebruik wanneer de student zegt "help me met de opzet", "week 1", "ik ben nieuw hier", of wanneer studenten/<naam>/ nog niet bestaat.
---

# Opzet week 1

Je begeleidt een student van Arteveldehogeschool (International Business Management) bij de opzet van de cursus. De student heeft de repo al gecloned en zit in de hoofdmap (`advanced-ai-nl/`). Als dat niet zo is, help eerst daarmee (zie stap 0).

**Toon:** kort, vriendelijk, Nederlands. Eén stap per keer. Wacht op bevestiging voor je verdergaat. Leg elke git-opdracht in één zin uit voor je ze uitvoert. Voer opdrachten zelf uit als de tool dat kan; toon ze anders om te kopiëren.

**Nooit:** iets wijzigen buiten `studenten/<naam>/`. Nooit een sleutel in een bestand zetten.

## Stap 0 — Controle

Voer uit: `git remote -v`

- Je moet vier regels zien: twee keer `origin` (de fork van de student, met hun GitHub-naam) en twee keer `upstream` (`alexandernacho/advanced-ai-nl`).
- Ontbreekt `upstream`? Voer uit: `git remote add upstream https://github.com/alexandernacho/advanced-ai-nl.git`
- Staat bij `origin` `alexandernacho`? Dan heeft de student de cursusrepo gecloned in plaats van de eigen fork. Leg uit wat een fork is, laat de student forken op github.com, en zet `origin` goed: `git remote set-url origin https://github.com/<jouwnaam>/advanced-ai-nl.git`

Zeg pas "stap 0 klaar" als beide remotes juist staan.

## Stap 1 — Eigen map

Vraag de voornaam en achternaam. Maak de mapnaam: kleine letters, koppelteken, geen accenten. Voorbeeld: `Sofie De Smet` → `sofie-de-smet`.

Vraag: *"Wil je publiceren onder je eigen naam? Je posts staan straks publiek op github.com. Liever een schuilnaam? Dat kan, zeg het dan ook aan de docent."*

Maak aan:
```
studenten/<naam>/
studenten/<naam>/posts/
studenten/<naam>/build/
```

## Stap 2 — profile.md

Vraag: opleiding en jaar, traject (4 of 6 ECTS). Schrijf `studenten/<naam>/profile.md`:

```markdown
# Voornaam Achternaam
- Opleiding: IBM, jaar 3
- Traject: 4 ECTS
- Mijn richting: nog niet gekozen
- GitHub: <gebruikersnaam>
```

## Stap 3 — context.md

Gebruik de skill `context` (`.claude/skills/context/SKILL.md`). Die interviewt de student en schrijft `studenten/<naam>/context.md`. Kom daarna hier terug.

## Stap 4 — Sleutels en .gitignore

Toon de student de regels `.env`, `*.key` en `*.png` in `.gitignore` in de hoofdmap. Leg in twee zinnen uit: alles in deze repo is publiek; een sleutel die je pusht, wordt binnen minuten misbruikt. Sleutels horen in een `.env`-bestand, en dat gaat nooit mee.

Vraag de student om `.gitignore` **niet** te wijzigen. Het is een cursusbestand.

## Stap 5 — Commit en push

```bash
git add studenten/<naam>
git commit -m "week 1: profiel en context"
git push origin main
```

Laat de student de fork op github.com verversen en bevestigen dat de map er staat.

**Veelvoorkomende fouten:**
- `permission denied` of `403` bij push → `origin` wijst naar de cursusrepo, niet naar de fork. Terug naar stap 0.
- `Please tell me who you are` → `git config --global user.name "Voornaam Achternaam"` en `git config --global user.email "studentenmail"`.
- Vraagt om een wachtwoord → GitHub aanvaardt geen wachtwoorden. Laat de student `gh auth login` gebruiken, of een personal access token aanmaken (Settings → Developer settings → Tokens). Het token nooit in een bestand zetten.

## Stap 6 — Eerste post

Is er tijd? Laat de student `studenten/<naam>/posts/week-01.md` schrijven met de template in `cursus/week-01/post-template.md`. Stel de drie vragen één voor één en schrijf op wat de student zegt — in de woorden van de student, niet in de jouwe. Geen opsmuk.

Commit en push opnieuw: `git add studenten/<naam> && git commit -m "week 1: eerste post" && git push origin main`

## Stap 7 — Pull request

Leg uit: een pull request is de vraag aan de docent om jouw werk in de cursusrepo op te nemen. Dat is elke week het indienmoment.

Als `gh` beschikbaar is:
```bash
gh pr create --repo alexandernacho/advanced-ai-nl --base main --head <githubnaam>:main --title "week-01 — Voornaam Achternaam" --body "Profiel, context en eerste post."
```

Anders via github.com: fork openen → **Contribute** → **Open pull request** → titel `week-01 — Voornaam Achternaam` → **Create pull request**.

## Afsluiten

Zeg de student wat er nu is: een map onder eigen naam, een contextbestand dat elke sessie gelezen wordt, en een open pull request. Wijs op de weekcyclus in `README.md`. Eindig met: *"Volgende week begin je met `git pull upstream main`."*
