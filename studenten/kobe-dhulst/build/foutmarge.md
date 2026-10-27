# Foutmarge, 27 oktober 2026

Model: Claude Opus 5.5 (`claude-opus-5-5`), standaard effort. Hetzelfde model als mijn testset in week 3 en 4. n = 10 (T01–T10), 3 runs per versie. Zelfde inputs voor beide versies.

Hoe: elke run in een nieuwe, aparte sessie met `claude -p --model claude-opus-5-5 --tools ""`, in een lege map, met alleen de prompt en één mail. Het model kreeg nooit de verwachte antwoorden. v1 komt uit git (commit `8ad20b2`), v2 is `build/prompt.md`. De verwachte antwoorden in `test-set.md` zijn niet aangepast.

| Versie | Run 1 | Run 2 | Run 3 | Foutmarge (min–max) |
|---|---:|---:|---:|---:|
| v1 | 7/10 | 7/10 | 7/10 | 7–7 |
| v2 | 9/10 | 9/10 | 8/10 | 8–9 |

## Fouten per run

| Versie | Run | Fout |
|---|---|---|
| v1 | 1, 2, 3 | T05 `info` (verwacht `negeren`) · T06 `info` (verwacht `negeren`) · T07 `later` (verwacht `dringend`) |
| v2 | 1, 2 | T07 `later` |
| v2 | 3 | T06 `info` · T07 `later` |

- **T05** (betalingsbevestiging): v1 drie keer fout, v2 drie keer juist. Dat is de fout die ik in week 3 wilde oplossen.
- **T06** (Phished-mail): v1 drie keer fout, v2 één keer op drie fout. Reden in v2, run 3: "de student moet de feedback van IT afwachten en de mail ondertussen niet openen". Dat is F6 (wisselend): in de Claude-app was het twee keer `negeren`.
- **T07** (verificatiecode): in alle zes runs fout, met beide versies. Een vaste fout, geen toeval.

## Mijn claim

Mijn claim (week 3): de wijziging aan `info` en `negeren` maakte T05 juist. "Het model zei nu negeren, met bijna letterlijk mijn want als reden." Toen schreef ik dat het nog geen bewijs was: één mail, één run.

**Bevestigd of ingetrokken:** bevestigd, want de laagste score van v2 (8) ligt hoger dan de hoogste van v1 (7).

## Zelf nagekeken

Twee antwoorden zelf geopend en gecheckt:
- v1, run 1, T05: `{"label": "info", "reden": "Dit is een bevestiging dat de betaling voor de inschrijving goed is ontvangen, dus de student hoeft niets te doen."}` Terecht fout: een betaling is afgerond, dus volgens mijn regel `negeren`.
- v2, run 3, T06: `{"label": "info", "reden": "Een bevestiging van een melding die de student al deed; er is geen nieuwe taak, maar de student moet de feedback van IT afwachten en de mail ondertussen niet openen."}` Terecht fout: ik meldde de mail zelf, dus er staat niets nieuws in. `negeren`.

Eerst dacht ik dat beide `info` waren, maar ik was vergeten wat mijn eigen regels voor `info` en `negeren` zeiden. Ik heb niets herlabeld.
