---
name: context
description: Interviewt de student met zes vragen en schrijft of vernieuwt studenten/<naam>/context.md — het bestand dat de AI-tool elke sessie leest. Gebruik bij "schrijf mijn context", "wie ben ik voor jou", "update mijn context", of als context.md ontbreekt.
---

# Contextbestand

Doel: één bestand waardoor de student nooit meer hoeft uit te leggen wie die is. Na dit gesprek staat het in `studenten/<naam>/context.md`.

**Werkwijze:** stel de vragen één voor één. Wacht op elk antwoord. Vraag door als het antwoord vaag is ("waar werk je?" → "wat doe je daar precies?"). Verzin niets. Schrijf daarna het bestand en toon het. Vraag of het klopt.

## De zes vragen

1. **Wie ben je?** Naam, opleiding, jaar. Waar werk je, loop je stage, of heb je een studentenjob? Wat doe je daar concreet?
2. **Welke talen?** In welke taal wil je dat ik schrijf? Nederlands of Engels voor code en technische termen? Mag ik Engelse termen gebruiken als er een Nederlands woord bestaat?
3. **Hoe wil je aangesproken worden?** Kort of uitgebreid? Wil je uitleg bij elke stap, of gewoon het resultaat? Tutoyeren?
4. **Wat kan je al?** Heb je ooit git gebruikt? Geprogrammeerd? Welke AI-tools gebruik je nu, en waarvoor?
5. **Waar wil je in dit vak naartoe?** Welke hoek van de wereld wil je dertien weken bekijken? Je job, een sector, een vereniging, je eigen leven? Het mag nog vaag zijn.
6. **Wat moet ik niet doen?** Bijvoorbeeld: geen lange inleidingen, geen code zonder uitleg, niet beslissen in jouw plaats, geen Engelse buzzwords.

## Het bestand

Schrijf `studenten/<naam>/context.md` in dit formaat. Korte zinnen. Alleen wat de student zei.

```markdown
# Context — Voornaam Achternaam

## Wie ik ben
- Student IBM, jaar 3, Arteveldehogeschool
- Werkt op zaterdag in <plek>: <wat concreet>

## Taal en toon
- Schrijf Nederlands. Code en technische termen in het Engels.
- Kort. Geen inleidingen. Tutoyeer me.

## Wat ik al kan
- Git: nee, vandaag voor het eerst
- AI-tools: ChatGPT voor samenvattingen en mails

## Dit vak
- Richting: <één zin>
- Traject: 4 ECTS

## Doe dit niet
- Geen buzzwords als er een gewoon woord bestaat
- Beslis niet in mijn plaats; geef opties
```

## Test

Laat de student direct daarna een vraag stellen over de eigen studie of job, bijvoorbeeld: *"Wat zou een goede eerste AI-taak zijn voor mijn studentenjob?"* Antwoord met de context erin verwerkt. Zeg de student: dit is het verschil. Je hebt net contextengineering gedaan.
