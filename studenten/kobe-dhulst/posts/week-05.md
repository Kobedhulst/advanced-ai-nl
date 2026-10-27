# Week 5: Testset uitbreiden

## Mijn foutmarge
Ik heb v1 en v2 drie keer gedraaid op 10 mails met Opus 5.5. v1 had drie keer 7, v2 had 9, 9 en 8. Mijn claim is bevestigd, want de laagste score van v2 (8) is hoger dan de hoogste van v1 (7). Het is wel weinig verschil. T07 blijft een vaste fout in de prompt. Ik ga eerst meer dringende mails testen en dan een regel toevoegen.

## Model en effort
Mijn gok was dat Opus het best zou scoren. Dat was half juist, want alle drie scoorden 9 op 10: Sonnet 5.5, Haiku 5.5 en Opus 5.5. Haiku is veel goedkoper: € 0,14 per jaar. Opus is het duurst (€ 3,93 per jaar), maar even goed. Ik kies Haiku 5.5, want hij is even goed en het goedkoopst. Ik heb hem 3 keer gedraaid: 8 tot 9 op 10. In week 4 had Haiku 4.5 T01 fout, nu haalt Haiku 5.5 hetzelfde als Opus. De duurste en beste is dus niet altijd nodig.

## Mijn value chain, met de foutmarge erin
Met de hand duurt één mail ongeveer 40 seconden. Dat heb ik getimed. Met de tool is het 12 seconden, na draaien, nakijken en rekening gehouden met fouten. Ik win dus 28 seconden per mail, of 5,1 uur per jaar. Ik reken met € 21 per uur: mijn studentenloon (€ 14) × 1,5 voor de werkgever (Acerta, Securex). Dat is € 106 per jaar, min € 0,15 voor de tool. Bij 8 op 10 is het € 91. Het volume vertrouw ik het minst. Bij de helft blijft er nog € 53 over. Dit geldt alleen als de tool automatisch in mijn mailbox draait. Met copy-paste ben ik trager (48 seconden tegenover 40 met de hand), en dan verlies ik geld.

## Mijn dashboard
https://claude.ai/artifact/5LziHC1fBi8yqP6zfY6wdy

Een lezer moet eerst de score met foutmarge zien, want dat is het belangrijkste. Daarna staan er ook de foutmarge, de setups en de value chain op.

## Mijn AI-ismen

1. Week 3: "Ik was wel zeer tevreden dat de drie "moeilijke" inputs (een Engelse mail, een mail met alleen een bijlage en een reclamemail) alle drie juist waren."
   Herschreven: In week 3 waren mijn 3 lastige mails juist. In week 5 ging de Engelse mail toch 1 keer op 3 fout.

2. Week 4: "Goedkoper is niet zomaar even goed: Haiku gaf bij T01 negeren, Opus twee keer info."
   Herschreven: Haiku 4.5 had T01 1 keer fout, Opus 5.5 2 keer juist.

3. Week 4: "Eén 0 weegt zwaarder dan € 65 per jaar."
   Herschreven: T07 ging in week 5 9 keer op 9 fout. Mis ik zo een deadline, dan is het een 0.

4. Week 4: "Het verraste me ook dat het voor mij maar een paar cent per maand kost."
   Herschreven: Haiku 5.5 kost ± € 0,15 per jaar voor 650 mails.

5. Week 3: "Het model deed dus exact wat ik vroeg."
   Herschreven: Het model zei info bij T05, omdat mijn regel zei dat de student niets hoeft te doen.

## Mijn testset groeit
Ik koos de 20 nieuwe mails uit oude mails uit mijn mailbox, met verschillende labels. Eén mail (T16) heb ik zelf verzonnen. De mail die mijn tool het meest verraste, was T29, want de tool zag het als taak. Het was een oproep om buddy te worden, en die is niet verplicht. Mijn score op set v2 is 23 op 30 (set v2, n = 30, 1 run, Haiku 5.5). Op T01–T10 was het 8 op 10, op de controle T11–T30 15 op 20. De controle is misschien een beetje slechter, maar dat kan toeval zijn.
