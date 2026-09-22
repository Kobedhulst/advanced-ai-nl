# De Build — opdracht

**15% van je cijfer · start in week 2 · checkpoints in week 4, 8 en 12**

Je bouwt één klein AI-hulpmiddel voor een echte taak. Je test het op echte inputs en je zoekt uit hoe het precies faalt. Daarna blijf je het meten, de hele cursus lang. Elke week die vraagt om een AI-systeem te beoordelen, gaat over het jouwe.

---

## Waarom

Twaalf weken lang vraagt dit vak: wat kost dit, waar breekt het, wat is het waard, hoe wordt het aangevallen, mag het? Elk van die vragen is makkelijker te beantwoorden over iets echts dan over iets hypothetisch.

Het is ook het verschil tussen twee zinnen in een memo:

> "AI zou de afhandeltijd van klantenvragen aanzienlijk kunnen verkorten."

> "Ik bouwde een sorteerhulp en testte die op vijftien echte klantenmails. Twaalf juist, twee keer een verzonnen leverdatum, één keer geweigerd. Bij 80% bespaart dat een medewerker ongeveer vier minuten per mail. Maar de twee verzinsels zijn net de mails die bij een klant zouden belanden."

De eerste zin is een mening. De tweede is bewijs. **De Build is hoe je aan de tweede zin komt.**

## Wat je bouwt

**Een hulpmiddel dat één afgebakende taak doet, plus een testset van echte inputs en een eerlijk logboek van wat het fout doet.**

De vorm kies je zelf: een skill, een prompt, een klein programma, een agent, een geplande taak. Zo geavanceerd als jij aankan. Drie voorwaarden:

1. **Minstens één stap gebruikt een taalmodel.** Anders kan je kosten en waarde niet meten.
2. **Die AI-stap heeft een controleerbare uitvoer.** Een categorie, een veld, een ja/nee, een gestructureerd record.
3. **Die stap heeft een eigen testset.** Inputs met het juiste antwoord vooraf opgeschreven.

### De regel die beslist of het lukt

**Kies een taak waarbij je kan zeggen of de uitvoer juist is.**

De test: kunnen twee mensen, met dezelfde input en dezelfde uitvoer, los van elkaar beslissen of het klopt? Ja: meetbaar. Nee, het is een kwestie van smaak: niet meetbaar, en dan kan je elf weken niets meten.

| Werkt | Werkt niet | Waarom |
|---|---|---|
| "Sorteer deze klantenmail in een van vijf categorieën" | "Schrijf pakkende marketingtekst" | Pakkend is smaak |
| "Haal ordernummer, datum en klachttype uit deze mail" | "Vat dit document goed samen" | Goed is niet te toetsen |
| "Is deze review een productfout, een leverfout, of geen van beide?" | "Geef strategisch advies" | Geen controleerbaar antwoord |
| "Welke van deze clausules moet naar juridische dienst?" | "Verbeter deze tekst" | Verbeterd ten opzichte van wat? |

Wat de linkerkolom gemeen heeft: een **begrensde uitvoer**. Begrensd is controleerbaar. Open is dat niet.

### Startideeën

- **Winkel, horeca, e-commerce** — reden van een retour afleiden uit een bericht; de zes verplichte velden uit een productfiche halen; reserveringsmails sorteren
- **Logistiek** — velden uit een leverbon halen; welke zendingen een douanecontrole nodig hebben
- **Diensten, kantoor** — inkomende mails naar de juiste persoon sturen; welke vragen echt een antwoord van een verantwoordelijke nodig hebben
- **HR, studentenjobs** — vereisten uit een vacature halen; welke CV-claims gecontroleerd moeten worden
- **Vereniging, eigen leven** — inschrijvingsmails van een jeugdbeweging sorteren; welke berichten in de familiegroep een actie vragen; welke uitgaven in welke categorie horen

**Een taak die je in tien seconden kan uitleggen, heeft de juiste grootte.**

## De testset

**In week 2: 5 inputs. In week 3: 10. Bij checkpoint 1: minstens 10.** Echt is belangrijker dan veel.

**Waar je ze haalt.** Eerst publieke bronnen: reviews, forumposts, vacatures, gepubliceerde klachten, open data. Dan je eigen leven: mails die je kreeg, formulieren die je invulde. **Anonimiseer alles met een echte naam of echte gegevens voor het in de repo of in een model gaat.** Niets vertrouwelijks van een werkgever.

**Zelf inputs verzinnen is de noodoplossing, niet het plan.** Verzonnen inputs zijn onbewust makkelijk. Moet je het toch doen: zeg het in je logboek en behandel je succespercentage als een bovengrens.

**Neem de lastige mee.** De dubbelzinnige, die in een andere taal, de heel korte, de heel lange, die waar het juiste antwoord "ik weet het niet" is. Daar zitten de fouten, en de fouten zijn wat je inlevert.

**Schrijf het juiste antwoord op voor je de tool laat draaien.** Elke keer. Achteraf beslissen wat juist was, is de makkelijkste manier om jezelf te bedriegen.

## Meten

Laat elke input lopen. Noteer wat terugkwam. Vergelijk met wat je opschreef.

**Laat elke input twee keer lopen.** Dezelfde input kan een ander antwoord geven. Dat moet je weten voor je er een kostenmodel op bouwt.

### De zes soorten fouten

| Code | Fout | Hoe het eruitziet | Waarom het telt |
|---|---|---|---|
| **F1** | **Fout** | Vol overtuiging het verkeerde antwoord | Kost wat een fout antwoord verderop kost |
| **F2** | **Verzonnen** | Een detail dat niet in de input stond | De gevaarlijkste, want het moeilijkst te zien |
| **F3** | **Gemist** | Iets niet gevonden dat er wel stond | Stil. Niemand merkt een gat tot het telt |
| **F4** | **Vorm** | Juiste inhoud, onbruikbare vorm | Goedkoop te fixen, breekt toch een koppeling |
| **F5** | **Geweigerd** | Weigert, twijfelt, stelt een vraag terug | Lijkt veilig. In een pijplijn is het een storing |
| **F6** | **Wisselend** | Ander antwoord bij dezelfde input | Vergiftigt alles. Niet te kosten, niet te verdedigen |

**F2 en F6 zijn de gevaarlijke.** Een tool die 20% fout is op een voorspelbare manier, kan je rond bouwen. Een tool die geloofwaardig verzint of elke keer anders antwoordt, niet.

## Waar het staat

```
studenten/jouw-naam/
├── profile.md
├── context.md
├── reflecties.md       ← drie reflecties, W4/W8/W12
├── posts/
│   └── week-01.md …
└── build/
    ├── README.md       ← wat het doet, hoe je het draait, elke versie met wat er veranderde
    ├── test-set.md     ← inputs en juiste antwoorden
    ├── log.md          ← elke run, elk resultaat, elke wijziging
    └── (je code, skill of prompt)
```

Bewaar oude versies. Het logboek moet lezen als een geschiedenis: v1, v2, v3, met per versie één regel over wat er veranderde en waarom.

## Hoe het door de cursus loopt

Je doet geen extra werk per week. Je doet de oefening van de week **op je eigen tool** in plaats van op een aangeleverde case.

| Week | Vaardigheid | Wat je met je Build doet |
|---|---|---|
| **2** | Modaliteit kiezen | Taak kiezen. v1 draait. 5 inputs met het juiste antwoord |
| **3** | Meten | Testset naar 10. Twee keer laten lopen. Fouten classificeren. Ruisvloer |
| **4** | Waarde en kosten | Eén verbetering, opnieuw meten. Mens met chronometer als vergelijking |
| **5** | Context en kosten | Tokens per run meten. Context inkorten. Goedkoper model proberen. 10× en 100× |
| **6** | Bronnen | Je tool documenten laten lezen |
| **7** | Integratie | Draaien op een tweede model. Verschil meten |
| **8** | Lokaal | Draaien op een model op je eigen laptop. Verschil meten |
| **9** | Veiligheid | Je eigen tool aanvallen. Wat werkte, opschrijven |
| **10** | Governance | Je eigen tool classificeren onder de AI Act |
| **12** | Synthese | De gemeten cijfers worden het bewijs in je memo |

## Checkpoints

| | Week | Wat beoordeeld wordt |
|---|---|---|
| **CP1** | 4 | Het bestaat en draait. 10+ inputs met het antwoord vooraf. Elke fout geclassificeerd. Succespercentage **met steekproefgrootte** |
| **CP2** | 8 | Minstens één wijziging, met de reden vooraf opgeschreven. Opnieuw gemeten. Gekost. **Het verschil verklaard** |
| **CP3** | 12 | Eindversie. Volledig logboek. De cijfers klaar om in de memo te citeren, met de beperking in je eigen woorden |

### Beoordeeld op bewijs, niet op prestatie

**Een tool die 60% haalt, met elke fout geclassificeerd, scoort hoger dan een die 95% claimt zonder testset.** Bedrijven mislukken niet met AI omdat hun model 8% minder nauwkeurig was. Ze mislukken omdat niemand mat, niemand wist welke fouten gevaarlijk waren, en niemand kon zeggen wat er zou gebeuren als het misging.

Dus: **wis nooit een fout.** Een logboek vol successen is een opgeschoond logboek, en dat is niets waard.

## AI gebruiken om het te bouwen

Ja. Uiteraard. Laat Claude, ChatGPT of Gemini de v1 schrijven als je wil.

Dezelfde regel als bij de Signal: **de AI doet het loodgieterswerk, jij doet het denkwerk.** Het kan niet je taak kiezen, je testset samenstellen, beslissen wat juist is, of zeggen welke fout bij een klant zou belanden. Dat zijn de delen die beoordeeld worden.

Eén goed gebruik: plak je fouten terug in de tool en vraag *waarom* het die maakt. Je hoeft het antwoord niet te geloven, maar het is een snelle manier om hypotheses te krijgen die je kan testen.

## Veelgestelde vragen

**"Wat als het meteen werkt?"** Niet op vijftien inputs met de lastige erbij. Werkt het echt? Dan is je testset te makkelijk. Zoek hardere inputs.

**"Wat als ik geen echte inputs vind?"** Zeg het, schrijf ze zelf, en behandel je cijfer als bovengrens. Vanaf week 2 staat er een startset in `cursus/data/starterset/`.

**"Mag ik samenwerken?"** De tool is van jou. Elkaars tool testen wordt aangemoedigd: andermans inputs breken je tool op manieren die de jouwe nooit doen.

**"Mag ik van taak veranderen?"** Eén keer, voor week 4, met de reden erbij. Daarna zit je vast. Het hele punt is hetzelfde ding herhaaldelijk meten.

**"Is dit iets voor mijn portfolio?"** Ja. "Ik bouwde een sorteerhulp, testte hem op echte mails, mat 73%, en dit zijn de zes manieren waarop hij faalt" is een beter antwoord op een sollicitatie dan de meeste afgestudeerden hebben.
