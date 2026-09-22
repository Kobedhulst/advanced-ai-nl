# Week 1 — checklist opzet

Je werkt in duo's. Klaar? Help je buur. Loopt iets vast: eerst je AI-tool, dan je buur, dan ik.

Liever begeleid worden? Plak `start-prompt.md` in je AI-tool. Die neemt stap 1 tot 4 over. Vanaf stap 5 neemt de skill `opzet` in de repo het over.

---

## 1. Kies je AI-tool (10 min)

Kies er één. Je hebt een betalende versie nodig (~25 euro per maand, staat in de ECTS-fiche).

- **Claude Code** of **Claude desktop** — Anthropic
- **Codex** — OpenAI
- **Gemini CLI** — Google

Welke maakt niet uit. Installeer hem nu en log in.

## 2. Git en GitHub (10 min)

Open een terminal en typ `git --version`. Zie je een versienummer? Ga verder. Zo niet: macOS → `xcode-select --install`, Windows → git-scm.com.

Maak een account op [github.com](https://github.com) met je studentenmail. Kies een gebruikersnaam die je over vijf jaar nog op een sollicitatie wil zetten.

## 3. Fork de cursus (5 min)

1. Ga naar `github.com/alexandernacho/advanced-ai-nl`
2. Klik rechtsboven op **Fork**
3. Klik **Create fork**

Je hebt nu je eigen kopie, onder je eigen naam. Die is publiek. Je posts komen straks publiek op github.com te staan, met je naam erbij. Dat is de bedoeling: het is je portfolio. Wil je liever een schuilnaam, zeg het me vandaag.

## 4. Haal de cursus naar je laptop (10 min)

Vervang `JOUWNAAM` door je GitHub-gebruikersnaam.

```bash
git clone https://github.com/JOUWNAAM/advanced-ai-nl.git
cd advanced-ai-nl
git remote add upstream https://github.com/alexandernacho/advanced-ai-nl.git
git remote -v
```

De laatste opdracht toont vier regels: twee keer `origin` (jouw fork) en twee keer `upstream` (mijn cursus). Zie je `upstream` niet? Los het op voor je verdergaat, anders zie je volgende week het nieuwe lesmateriaal niet.

## 5. Open je AI-tool in de map (5 min)

Start je tool in de map `advanced-ai-nl`. Vraag:

> Lees `.claude/skills/opzet/SKILL.md` en begeleid me door de opzet.

De tool doet stap 6 tot 9 samen met jou. Wil je het zelf doen? Lees dan verder.

## 6. Eigen map en profiel (10 min)

```bash
mkdir -p studenten/voornaam-achternaam/posts studenten/voornaam-achternaam/build
```

**Eén regel die de hele cursus geldt: je komt alleen aan je eigen map.** Niet aan `cursus/`, niet aan de map van iemand anders.

Maak `studenten/voornaam-achternaam/profile.md`:

```markdown
# Voornaam Achternaam
- Opleiding: IBM, jaar 3
- Traject: 4 ECTS (of 6 ECTS)
- Mijn richting: nog niet gekozen
- GitHub: jouwnaam
```

## 7. Je contextbestand (20 min)

Dit is het bestand dat je AI-tool elke sessie leest. Zonder dit bestand begin je elk gesprek opnieuw met uitleggen wie je bent.

Vraag je tool: *"Lees `.claude/skills/context/SKILL.md` en interview me."* Of schrijf `context.md` zelf met:

- wie je bent, wat je studeert, waar je werkt
- in welke taal je wil dat er tegen je geschreven wordt, en hoe
- welke richting je in dit vak wil bekijken
- wat je tool **niet** moet doen

Test het: stel je tool een vraag over je studie of je job. Merk je het verschil? Dat is contextengineering.

## 8. Nooit een sleutel in je repo (5 min)

Alles in een publieke repo is publiek. Een API-sleutel die je pusht, wordt binnen minuten gevonden en gebruikt. Sleutels zet je in `.env`. Dat bestand staat in `.gitignore` en gaat nooit mee. Wijzig `.gitignore` niet, het is een cursusbestand.

Afbeeldingen: alleen in `posts/`, maximaal twee per post, maximaal 300 KB. Terminaluitvoer in een codeblok, niet als screenshot.

## 9. Push en pull request (10 min)

```bash
git add studenten/voornaam-achternaam
git commit -m "week 1: profiel en context"
git push origin main
```

Ververs je fork op github.com. Staat je map er? Dan: **Contribute** → **Open pull request** → titel `week-01 — Voornaam Achternaam` → **Create pull request**.

Dat is elke week je indienmoment. Ik merge, en dan staat je werk publiek in de cursusrepo. Dat is De Signal.

---

## Elke week daarna

```bash
git checkout main
git pull upstream main      # nieuw lesmateriaal
git push origin main
git checkout -b week-05     # deze week
# werk in studenten/jouw-naam/
git add studenten/jouw-naam
git commit -m "week 5: contextaudit"
git push origin week-05
```

Daarna: pull request openen, één klasgenoot laten reageren, ik merge.

## De drie fouten die je gaat zien

| Fout | Oorzaak | Oplossing |
|---|---|---|
| `git: command not found` | Git niet geïnstalleerd | Stap 2 |
| `upstream` ontbreekt bij `git remote -v` | Stap 4 half gedaan | `git remote add upstream https://github.com/alexandernacho/advanced-ai-nl.git` |
| `permission denied (403)` bij push | Je pusht naar mijn repo, niet naar je fork | `git remote -v`: bij `origin` moet jouw naam staan |
