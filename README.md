# Advanced AI for Business — Nederlandstalige groep

Dertien weken, één vraag: **moeten we hier AI voor gebruiken?**

Je bouwt één klein AI-hulpmiddel voor een echte taak, je meet wat het kan, en je leert beslissen of het de moeite waard is. Elke week publiceer je wat je gedaan hebt.

## Hoe deze repo werkt

- `cursus/` — het lesmateriaal, per week. **Alleen lezen.** Ik vul het aan.
- `cursus/beoordeling/` — hoe je beoordeeld wordt, en de opdrachten.
- `studenten/<jouw-naam>/` — jouw map. **Alleen hier werk je.**
- `.claude/skills/` — hulpjes die je AI-tool kan gebruiken (bijvoorbeeld voor de opzet).

De repo is publiek. Alles wat je erin zet, kan iedereen lezen. Dat is de bedoeling: het is je portfolio.

## De weekcyclus

```bash
git checkout main
git pull upstream main        # nieuw lesmateriaal ophalen
git push origin main          # je fork bijwerken
git checkout -b week-05       # een tak voor deze week
# ... werk in studenten/<jouw-naam>/ ...
git add studenten/<jouw-naam>
git commit -m "week 5: contextaudit"
git push origin week-05
```

Daarna open je een pull request naar deze repo, met als titel `week-05 — Voornaam Achternaam`. Eén klasgenoot reageert, ik merge. Zodra het gemerged is, staat je post publiek. Dat is De Signal.

## Eerste keer? Start hier

1. Lees `cursus/week-01/README.md`.
2. Volg `cursus/week-01/checklist.md`, of laat je AI-tool je begeleiden met de prompt in `cursus/week-01/start-prompt.md`.

## Regels

1. Je komt alleen aan `studenten/<jouw-naam>/`.
2. Nooit een sleutel, wachtwoord of vertrouwelijk bedrijfsdocument in de repo.
3. Afbeeldingen alleen in je `posts/`-map, maximaal twee per post, maximaal 300 KB.
4. Terminaluitvoer in een codeblok, niet als screenshot.
5. Loopt iets vast: eerst je AI-tool, dan je buur, dan ik.

## Beoordeling

Zes onderdelen, één pagina: `cursus/beoordeling/overzicht.md`.

---

Docent: Alexander Coenegrachts · Arteveldehogeschool · International Business Management · 2026–27
