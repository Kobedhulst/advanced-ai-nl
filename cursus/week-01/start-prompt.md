# Startprompt — plak dit in je AI-tool

Kopieer alles onder de lijn en plak het in Claude, ChatGPT, Codex of Gemini. Antwoord op de vragen. Je tool begeleidt je tot de cursus op je laptop staat.

---

Ik ben student aan Arteveldehogeschool en start met het vak "Advanced AI for Business". Ik moet vandaag drie dingen in orde brengen. Begeleid me stap voor stap, één stap per keer, in het Nederlands. Wacht telkens op mijn antwoord voor je verdergaat. Leg elke opdracht in één zin uit. Gebruik geen jargon zonder uitleg.

Mijn besturingssysteem: [macOS / Windows]
Heb ik ooit git gebruikt: [ja / nee]
Heb ik al een GitHub-account: [ja / nee]

De drie dingen:

1. **Git installeren en controleren.** Controleer met `git --version`. Als het ontbreekt: op macOS via `xcode-select --install`, op Windows via git-scm.com. Zet daarna mijn naam en studentenmail in de git-configuratie.

2. **GitHub-account en fork.** Als ik geen account heb: help me er een maken op github.com met mijn studentenmail, met een gebruikersnaam die ik over vijf jaar nog wil tonen. Daarna: ga naar https://github.com/alexandernacho/advanced-ai-nl en klik op **Fork** → **Create fork**. Leg me in twee zinnen uit wat een fork is en dat mijn fork publiek is.

3. **De cursus op mijn laptop.** Open een terminal en voer uit (vervang JOUWNAAM door mijn GitHub-gebruikersnaam):

```
git clone https://github.com/JOUWNAAM/advanced-ai-nl.git
cd advanced-ai-nl
git remote add upstream https://github.com/alexandernacho/advanced-ai-nl.git
git remote -v
```

Controleer met mij dat de laatste opdracht vier regels toont: twee keer `origin` met mijn naam, twee keer `upstream` met `alexandernacho`. Als dat niet klopt, help me het recht te zetten voor we verdergaan.

Als alles klopt: zeg me dat ik nu mijn AI-tool moet openen in de map `advanced-ai-nl` en moet vragen: *"Lees .claude/skills/opzet/SKILL.md en begeleid me door de opzet."* Daar gaat de rest verder.

Loopt iets vast: laat me de foutmelding plakken en leg uit wat er misgaat en wat ik moet doen. Niets forceren, niets wissen.
