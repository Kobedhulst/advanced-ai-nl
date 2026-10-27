# Modellen, 27 oktober 2026

## Mijn gok (vóór de runs)

- **Best:** Opus 5.5 scoort het best.
- **Goed genoeg voor mijn mailbox:** Haiku 5.5.

## Resultaat

Elke setup één run op T01–T10, met prompt v2, op dezelfde manier als de foutmargetest: `claude -p --model <model> [--effort <niveau>] --tools ""`, in een lege map, nieuwe sessie per mail. Verwachte antwoorden niet aangepast. Setup C is run 1 van v2 uit `foutmarge.md` (zelfde setup, niet opnieuw gedraaid).

| Setup | Model | Effort | Score (n = 10, 1 run) | Binnen mijn foutmarge (8–9)? | Output-tokens per run | Kost per run | Per jaar (650 mails) |
|---|---|---|---:|---|---:|---:|---:|
| A | Sonnet 5.5 (`claude-sonnet-5-5`) | medium | 9/10 | ja | 118 | $0,0032 ≈ € 0,0029 | € 1,86 |
| B | Haiku 5.5 (`claude-haiku-5-5`) | standaard | 9/10 | ja | 284 | $0,00024 ≈ € 0,0002 | € 0,14 |
| C | Opus 5.5 (`claude-opus-5-5`) | standaard | 9/10 | ja | 136 | $0,0067 ≈ € 0,0060 | € 3,93 |

De enige fout in alle drie: T07 `later` (verwacht `dringend`).

**Kost per run** = ± 1.000 input-tokens (mijn deel, controle uit week 4: prompt + mail) × inputprijs + output-tokens van deze setup × outputprijs. Prijzen van 21 oktober 2026 (README week 5): Haiku 5.5 $0,10 / $0,50, Sonnet 5.5 $2 / $10, Opus 5.5 $4 / $20 per miljoen. 1 dollar = 0,90 euro.

- A: 1.000 × $2/M + 118 × $10/M = $0,0032
- B: 1.000 × $0,10/M + 284 × $0,50/M = $0,00024
- C: 1.000 × $4/M + 136 × $20/M = $0,0067

Let op: in week 4 schatte ik Opus op € 0,025 per run, met 1.200 output-tokens zoals Haiku 4.5. Gemeten gebruikt Opus maar ± 136 output-tokens. Mijn schatting van week 4 voor Opus was dus ± 4× te hoog.

Haiku 5.5 gebruikt de meeste output-tokens (284), maar is per token zo goedkoop dat hij toch 28× goedkoper is dan Opus.

## Klopte mijn gok?

Half juist. Opus scoorde niet beter: alle drie 9 op 10. Haiku 5.5 is wel goed genoeg.

## In productie

Haiku 5.5, want even goed en het goedkoopst.

## Haiku 5.5, 3 runs

Omdat elke setup maar één run was, draaide ik Haiku 5.5 nog 2 keer, op dezelfde manier.

| Model | Run 1 | Run 2 | Run 3 | Foutmarge (min–max) | Output-tokens per run (gem.) |
|---|---:|---:|---:|---:|---:|
| Haiku 5.5 | 9/10 | 9/10 | 8/10 | 8–9 | 284 · 350 · 297 |
| Opus 5.5 (v2, uit `foutmarge.md`) | 9/10 | 9/10 | 8/10 | 8–9 | 136 · 137 · 116 |

Fouten Haiku 5.5: T07 `later` (3×), T01 `negeren` (1×, run 3). T01 is dezelfde fout die Haiku 4.5 in week 4 maakte.

Haiku 5.5 en Opus 5.5 hebben dezelfde foutmarge, 8–9 (n = 10, 3 runs). Op score is er geen verschil.
