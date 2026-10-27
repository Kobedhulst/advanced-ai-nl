# Kosten

Gemeten op 14 oktober 2026. Prompt v2, input T01. Prijzen uit `cursus/week-04/README.md` (14 oktober 2026). 1 dollar = 0,90 euro (aanname).

## Ronde 1: wat kost één run?

| Model | Context (`/context`) | Totaal (`/cost`) | Jouw deel | Kost per run | Per maand, jouw volume | 10× | 1.000× |
|---|---:|---:|---:|---:|---:|---:|---:|
| Haiku 4.5 | 34,4k | 44,8k (43,6k input, 1,2k output) | 10,4k (9,2k input, 1,2k output) | $0,0152 ≈ €0,014 | €0,89 | €8,89 | €889 |

Kost per run = 9,2k × $1/M (input) + 1,2k × $5/M (output) = $0,0092 + $0,0060 = $0,0152.

### Hoe ik gemeten heb

- Nieuwe sessie van Claude Code in een **lege map**, niet in mijn studentenmap. In mijn map startte `/context` de cursus-skill `context` in plaats van het ingebouwde commando. In een lege map laden mijn `CLAUDE.md` en `context.md` niet mee, dus de context is daar wat kleiner dan in mijn map.
- Model op Haiku 4.5 gezet met `/model claude-haiku-4-5`. Eerst stond het op Haiku 5.5 (`/context` toonde 28,5k/1m). Die prijs staat niet in de tabel.
- Daarna `/context`, één bericht met prompt + T01, en `/cost`.
- In `/cost` stond ook 2,8k input op Haiku 5.5, van voor ik van model wisselde. Die tel ik niet mee.

### Controle: klopt jouw deel?

Mijn prompt met T01 is 523 woorden, ongeveer 800 tot 1.000 tokens. Volgens de methode is mijn input 9,2k tokens. Het verschil van ± 8.000 tokens komt niet van mijn prompt: waarschijnlijk stuurt Claude Code meer mee dan `/context` toont. Een bedrijf dat via de API alleen mijn prompt stuurt, betaalt dat niet.

Realistischer: ± 1k input × $1/M + 1,2k output × $5/M = **± $0,007 ≈ € 0,006 per run**.

De output (1,2k tokens) is groot voor een antwoord van één regel. Dat is het denkwerk van Haiku: ik zie het niet, maar ik betaal het wel. Bij mijn tool is de output het duurste deel.

### Wat de hele sessie kostte

$0,0481 voor Haiku 4.5. Het grootste deel is de cache write: 19,8k × $2/M ≈ $0,04. Dat is Claude Code dat zijn context de eerste keer in de cache zet. Dat zit niet in mijn deel.

### Kwaliteit op Haiku

Haiku 4.5 gaf bij T01 `negeren`, fout. Opus 5.5 gaf twee keer `info`. Mijn 9 op 10 is gemeten met Opus 5.5, niet met Haiku. Zie `log.md`.

### Gecheckt in week 5: welke Haiku?

In week 5 bleek dat `/model haiku` Haiku 5.5 kiest, en dat die een tiende kost van Haiku 4.5. Ik heb het nagekeken: mijn meting is met **Haiku 4.5**. Ik zette het model expliciet met `/model claude-haiku-4-5`, en `/cost` toonde `claude-haiku-4-5`. Mijn prijs ($1 input, $5 output per miljoen) klopt dus. Geen correctie nodig.

Ter vergelijking, Haiku 5.5 ($0,10 input, $0,50 output per miljoen, prijs van 21 oktober 2026): ± 1k input × $0,10/M + 1,2k output × $0,50/M = $0,0007 ≈ **€ 0,0006 per run**. Niet gemeten met Haiku 5.5: ik neem aan dat die evenveel tokens gebruikt. De echte cijfers voor Haiku 5.5 staan in `modellen.md`.

## Ronde 2: wat kost het per maand?

**Volume:** 60 tot 70 schoolmails per maand. Ik telde de mails van de afgelopen twee weken en deed dat × 2. Ik reken met 65. Let op: het zijn de eerste weken van het semester, dan komen er misschien meer mails dan gemiddeld.

| Volume | Mails per maand | Haiku 4.5, methode (€0,0137) | Haiku 4.5, controle (€0,0063) | Opus 5.5, controle (€0,025) |
|---|---:|---:|---:|---:|
| Mijn volume | 65 | €0,89 | €0,41 | €1,64 |
| 10× | 650 | €8,89 | €4,10 | €16,38 |
| 1.000× | 65.000 | €889 | €410 | €1.638 |

Opus 5.5 = ± 1k input × $4/M + 1,2k output × $20/M = $0,028 ≈ €0,025 per run. Niet gemeten: ik neem aan dat Opus evenveel tokens gebruikt als Haiku.

**Ander model:** Opus 5.5 kost 4× zoveel als Haiku 4.5. Maar mijn 9 op 10 is met Opus gemeten, en Haiku had T01 al fout. Goedkoper is dus niet gratis: ik weet nog niet hoe vaak Haiku juist is.

**Vanaf welk volume doet het bedrag ertoe?** Voor mezelf niet: € 0,41 tot € 1,64 per maand zou ik zeker betalen. Voor Artevelde, bij 1.000 studenten (€ 410 tot € 1.638 per maand), wel: dat zou de school overwegen. Dan moet iemand kunnen tonen dat het meer oplevert dan het kost.

## Waarde: hoeveel tijd wint mijn tool?

| Schakel | Waarde | Bron |
|---|---|---|
| Met de hand | Openen en lezen 25 s · beslissen 10 s · verplaatsen 5 s = **40 s** | gemeten |
| Met de tool, zoals nu (copy-paste) | Draaien 40 s · nakijken 8 s = **48 s** | gemeten, 1 mail |
| Met de tool, automatisch in de mailbox | Draaien 0 s · nakijken 8 s = **8 s** | nakijken gemeten, draaien aanname |
| Winst per mail | Nu: 40 − 48 = **−8 s**. Automatisch: 40 − 8 = **32 s** | |
| Volume | ± 3 per dag · ± 15 per week · 65 per maand · **650 per jaar** | geteld (2 weken × 2), 10 maanden per jaar (aanname) |
| Uren gewonnen (automatisch) | 1,6 min per dag · 8 min per week · 35 min per maand · **5,8 u per jaar** | 650 × 32 s |
| Uurkost | **€ 14** | mijn loon als jobstudent in een rusthuis, ongeveer |
| Waarde (automatisch) | 5,8 × 14 = **€ 81 per jaar** | |
| Kost van de tool | 650 × € 0,025 = **€ 16 per jaar** (Opus 5.5) · 650 × € 0,0063 = **€ 4 per jaar** (Haiku 4.5) | kosten hierboven |
| Netto (automatisch) | **± € 65 per jaar** (Opus) · **± € 77 per jaar** (Haiku) | |
| Netto (copy-paste) | 650 × −8 s = −1,4 u × 14 = −€ 20, min € 16 = **± −€ 36 per jaar** (Opus) | |
| Zwakste cijfer | Nakijken 8 s: gemeten op één mail. Is het 16 s, dan wint de tool 24 s per mail: 4,3 u en ± € 45 per jaar netto (Opus). | |

## Value chain week 5: met de foutmarge erin

Haiku 5.5, automatisch in mijn mailbox. Score uit `modellen.md`: 8–9 op 10 (n = 10, 3 runs).

| Schakel | Waarde | Bron |
|---|---|---|
| Met de hand | Openen en lezen 25 s · beslissen 10 s · verplaatsen 5 s = **40 s** | gemeten (week 4) |
| Score | 9 op 10 (foutmarge 8–9, n = 10, 3 runs) | gemeten, Haiku 5.5 |
| Met de tool | Draaien 0 s · nakijken 8 s · fouten herstellen 10% × 40 s = 4 s · samen **12 s** | nakijken gemeten (1 mail), draaien aanname |
| Winst per mail | 40 − 12 = **28 s** | |
| Volume | ± 3 per dag · ± 15 per week · 65 per maand · **650 per jaar** | geteld (2 weken × 2), 10 maanden per jaar (aanname) |
| Uren gewonnen | ± 1,4 min per dag · 7 min per week · 30 min per maand · **5,1 u per jaar** | 650 × 28 s |
| Uurkost | **€ 14 bruto ≈ € 21 voor de werkgever** | mijn loon als jobstudent, × 1,5 (Acerta, Securex: vakantiegeld, 13de maand, 25–27% sociale bijdragen) |
| Waarde | 5,1 × 21 = **€ 106 per jaar** | |
| Kost van de tool | 650 × € 0,00023 = **± € 0,15 per jaar** (Haiku 5.5: ± 1.000 tokens in, ± 310 uit) | gemeten (`modellen.md`) |
| Netto | **± € 106 per jaar** | |
| Bereik | Bij 8 op 10: 16 s met de tool, 24 s winst, 4,3 u, **± € 91** · bij 9 op 10: **± € 106** | foutmarge |
| Zwakste cijfer | Het volume van 65 mails per maand: geteld in de eerste weken van het semester. Is het de helft, dan blijft er ± € 53 per jaar over. Het volume verschuift het netto met ± € 53, de foutmarge maar met ± € 15. | |

Met mijn echte loon (€ 14, zonder × 1,5) is het netto € 61 tot € 71 per jaar.
