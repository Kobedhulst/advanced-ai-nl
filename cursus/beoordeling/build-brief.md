# De Build

15% van je cijfer. Start in week 2. Nagekeken in week 4, 8 en 12.

Je bouwt één klein AI-hulpmiddel voor een echte taak. Je test het op echte inputs. Je schrijft op wat het fout doet. En dat blijf je doen, twaalf weken lang.

## Waarom

Elke week van dit vak stelt een vraag over een AI-systeem: wat kost het, waar breekt het, wat is het waard, mag het? Over iets echts zijn die vragen te beantwoorden. Over iets hypothetisch niet.

Twee zinnen uit een memo:

"AI kan de afhandeling van klantenvragen aanzienlijk versnellen."

"Ik bouwde een sorteerhulp en testte hem op vijftien echte klantenmails. Twaalf juist. Twee keer een verzonnen leverdatum. Eén keer geweigerd. Aan 80% bespaart dat vier minuten per mail. Maar: de twee verzinsels zijn net de mails die bij een klant zouden belanden."

De eerste is een mening. De tweede is bewijs. De Build is hoe je aan de tweede komt.

## Wat je bouwt

Een hulpmiddel dat één afgebakende taak doet. Plus een testset van echte inputs. Plus een logboek van wat het fout doet.

De vorm kies je zelf. Een prompt, een skill, een klein programma, een agent, een geplande taak. Zo geavanceerd als je aankan. Drie voorwaarden:

1. Minstens één stap gebruikt een taalmodel.
2. Die stap geeft een uitvoer die je kan controleren: een categorie, een veld, ja of nee, een gestructureerd record.
3. Die stap heeft een eigen testset, met het juiste antwoord vooraf opgeschreven.

## De regel die beslist of het lukt

Kies een taak waarbij je kan zeggen of de uitvoer juist is.

De test: kunnen twee mensen, met dezelfde input en dezelfde uitvoer, los van elkaar beslissen of het klopt? Ja: meetbaar. Nee: smaak, en dan kan je elf weken niets meten.

Meetbaar: "sorteer deze mail in een van vijf categorieën", "haal ordernummer, datum en klachttype uit deze mail", "is dit een productfout, een leverfout, of geen van beide", "welke clausules moeten naar de juridische dienst".

Niet meetbaar: "schrijf een pakkende tekst", "vat dit goed samen", "geef strategisch advies", "verbeter dit".

Het verschil: een begrensde uitvoer. Begrensd kan je controleren.

## Ideeën

Winkel of horeca: reden van een retour afleiden uit een bericht. Reserveringsmails sorteren. De verplichte velden uit een productfiche halen.

Logistiek: velden uit een leverbon halen. Welke zendingen een douanecontrole nodig hebben.

Kantoor: inkomende mails naar de juiste persoon sturen. Welke vragen echt een verantwoordelijke nodig hebben.

HR of studentenjob: vereisten uit een vacature halen. Welke cv-claims gecontroleerd moeten worden.

Vereniging of eigen leven: inschrijvingsmails van de jeugdbeweging sorteren. Welke berichten in de familiegroep een actie vragen. Uitgaven in categorieën zetten.

Een taak die je in tien seconden kan uitleggen, heeft de juiste grootte.

## De testset

Week 2: vijf inputs. Week 3: tien. Echt is belangrijker dan veel.

Eerst publieke bronnen: reviews, forums, vacatures, open data. Dan je eigen leven: mails die je kreeg, formulieren die je invulde. Anonimiseer alles met een echte naam erin voor het in de repo of in een model gaat. Niets vertrouwelijks van een werkgever.

Zelf inputs verzinnen is de noodoplossing. Verzonnen inputs zijn onbewust makkelijk. Doe je het toch: zeg het in je logboek, en beschouw je cijfer als een bovengrens.

Neem de lastige mee. De dubbelzinnige. Die in het Frans. De heel korte. Die waar het juiste antwoord "ik weet het niet" is. Daar zitten de fouten. De fouten zijn wat je inlevert.

Schrijf het juiste antwoord op vóór je de tool laat draaien. Achteraf beslissen wat juist was, is de makkelijkste manier om jezelf te bedriegen.

## Meten

Elke input laten lopen. Twee keer. Dezelfde input geeft soms een ander antwoord, en dat moet je weten voor je er iets op bouwt.

Fouten tel je niet, je classificeert ze:

| | | |
|---|---|---|
| F1 | Fout | Vol overtuiging het verkeerde antwoord |
| F2 | Verzonnen | Een detail dat niet in de input stond. De gevaarlijkste |
| F3 | Gemist | Iets niet gevonden dat er wel stond |
| F4 | Vorm | Juiste inhoud, onbruikbare vorm |
| F5 | Geweigerd | Weigert, twijfelt, stelt een vraag terug |
| F6 | Wisselend | Ander antwoord bij dezelfde input |

F2 en F6 zijn de gevaarlijke. Een tool die 20% fout is op een voorspelbare manier, kan je rond bouwen. Een tool die geloofwaardig verzint of elke keer anders antwoordt, niet.

## Waar het staat

```
studenten/jouw-naam/build/
├── README.md      wat het doet, hoe je het draait, elke versie en wat er veranderde
├── test-set.md    inputs en juiste antwoorden
├── log.md         elke run, elk resultaat, elke wijziging
└── je code, skill of prompt
```

Oude versies bewaar je. Het logboek leest als een geschiedenis.

## Door de cursus heen

Geen extra werk per week. Je doet de oefening van de week op je eigen tool.

| Week | |
|---|---|
| 2 | Taak kiezen. v1 draait. Vijf inputs met antwoord |
| 3 | Tien inputs. Twee keer laten lopen. Fouten classificeren |
| 4 | Eén verbetering. Opnieuw meten. Mens met chronometer ernaast |
| 5 | Tokens per run. Context inkorten. Goedkoper model proberen. Wat kost het aan 10× en 100× |
| 6 | Je tool documenten laten lezen |
| 7 | Draaien op een tweede model |
| 8 | Draaien op een model op je eigen laptop |
| 9 | Je eigen tool aanvallen |
| 10 | Je eigen tool classificeren onder de AI Act |
| 12 | De cijfers worden het bewijs in je memo |

## Nagekeken

**Week 4.** Het bestaat en draait. Tien of meer inputs, antwoord vooraf. Elke fout geclassificeerd. Een succespercentage, met de steekproefgrootte erbij.

**Week 8.** Minstens één wijziging, met de reden vooraf opgeschreven. Opnieuw gemeten. Gekost. Het verschil verklaard, ook als de wijziging niets opleverde.

**Week 12.** Eindversie. Volledig logboek. De cijfers klaar voor de memo, met de beperking in je eigen woorden: hoe groot was de steekproef, welk cijfer vertrouw je het minst, wat verandert er aan je advies als dat cijfer fout is.

Een tool die 60% haalt met elke fout geclassificeerd, scoort hoger dan een die 95% claimt zonder testset. Wis nooit een fout.

## AI gebruiken om te bouwen

Ja. Laat je AI de v1 schrijven als je wil. Maar: het kan niet je taak kiezen, je testset samenstellen, beslissen wat juist is, of zeggen welke fout bij een klant zou belanden. Dat zijn de delen die beoordeeld worden.

Eén goed gebruik: plak je fouten terug in je AI en vraag waarom het die maakt. Je hoeft het antwoord niet te geloven. Het geeft je iets om te testen.

## Nog vragen

Werkt het meteen? Dan is je testset te makkelijk.

Geen echte inputs? Zeg het, schrijf ze zelf, cijfer is een bovengrens. Vanaf week 2 staat er een startset in `cursus/data/starterset/`.

Van taak veranderen mag één keer, vóór week 4, met de reden erbij.

Samenwerken: de tool is van jou. Elkaars tool testen wordt aangemoedigd. Andermans inputs breken je tool op manieren die de jouwe nooit doen.
