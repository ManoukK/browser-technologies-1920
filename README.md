# Browser Technologies 

## Opdracht 1
#### OBA website
Link naar mijn OBA website: https://manoukk.github.io/project-1-1920/

Verder heb ik de code in een mapje geplaatst in deze repo, onder OBA_CODE. 

#### Documentatie
Mijn aantekeningen en onderzoek hou ik allemaal bij in mijn wiki. 

https://github.com/ManoukK/browser-technologies-1920/wiki

## Opdracht 2
Ik heb gekozen voor use case 1, de enquete. 

> Ik wil een enquete kunnen invullen over de minor Web Development, met verschillende antwoord mogelijkheden. Als ik de enquete niet afkrijg, wil ik later weer verder gaan met waar ik ben gebleven.

Ik wil graag leren om goede formulieren te maken die toegankelijk zijn voor iedereen. daar past deze use case het beste bij. Mijn plan is om de website server side te redeneren want een van de core functionaliteit is dat de gebruiker terug moet kunnen waar diegene gebleven is. Wat betekend dat de velden ook ingevuld blijven. Tot nu toe heb ik alleen maar kunnen vinden dat het werkt met javascript maar als dat uit staat kan de gebruiker daar geen gebruik meer van maken. 

Ik wil graag de antwoorden opslaan in queries vanuit de url. Deze antwoorden kan ik meenemen naar de volgende pagina's en de gebruiker kan de url kopiëren en later verder gaan. Ik wil de enquete opdelen in meerdere stapjes om tussentijds ook feedback te geven of het de goede antwoorden zijn en laten weten dat de gebruiker de url kan opslaan. In de eerste laag moet de gebruiker de url zelf kopiëren maar uiteindelijk wil ik een knop maken en als je die activeerd heb je de url gekopieërd. 

#### Core functionaliteiten: 
- Er moeten verschillende antwoord mogelijkheden zijn. 
- De gebruiker moet terug kunnen waar diegene gebleven is en de vorige velden moeten ingevuld zijn. 

### De wireflow
#### De website zonder css
![photo_2020-03-18_14-27-55](https://user-images.githubusercontent.com/45541885/76965498-b08d2280-6924-11ea-9a1e-1015ae867de0.jpg)

#### De website met css
![photo_2020-03-18_14-23-52](https://user-images.githubusercontent.com/45541885/76965237-3d83ac00-6924-11ea-821e-7869d0743512.jpg)

Ik ben iets afgeweken van mijn wireframe. Na de feedbackgesprekken met Koop heb ik besloten het formulier op te splitsen in meerdere pagina’s en form’s. Zo voelt het, ook als je het zonder css invult, niet als een eindeloos lange formulier. 

Tijdens mijn proces heb ik hier en daar ook de vragen wat anders aangepakt. Dit komt vooral omdat ik met verschillende input types wilde testen. 

### Onderzoek
Om het overzicht te behouden heb ik mijn onderzoeken in mijn wiki geschreven hieronder zie je de linkjes:
- [Feature detection]()
- [De 8 features testen die we in de les hadden besproken](https://github.com/ManoukK/browser-technologies-1920/wiki/8-features-testen---opdracht-2)
- [Mijn website in 3 lagen]()
- [Conclusie]()

### To Do voor als ik meer tijd had voor dit project
- Input van het formulier groter maken als de focus erop ligt. 
- Een mooie offline pagina.
- Bij het langzaam laden van een pagina een laadscherm laten zien. 

### Bronnen (code)
- [Hoe je een kopie knop kan maken](https://stackoverflow.com/questions/37658524/copying-text-of-textarea-in-clipboard-when-button-is-clicked)
- [Laatste (feest) icoon](https://thenounproject.com/search/?q=party&i=1098631)
- [Hoe je een event listener kan maken voor toetsenbord](https://developer.mozilla.org/en-US/docs/Web/API/Document/keypress_event)
- [Hoe je een event listener kan maken voor touch](https://developer.mozilla.org/en-US/docs/Web/API/Touch_events)
- [Pagina switch animatie](https://stackoverflow.com/questions/39513705/make-html-element-disappear-with-css-animation)
- [Feature detection voor het kopiëren van de url](https://stackoverflow.com/questions/36153898/how-to-detect-copy-to-clipboard-functionality-before-using-it)

### Credits 
- Daniel had ontdekt dat je input waardes kan opslaan in de url. Hij heeft mij hiermee geholpen zodat ik dat ook kon gebruiken. 
- Bas gaf mij het idee om een pagina animatie te maken met javascript toggles. Ik wilde het eerst in AJAX doen maar dat lukte me niet.


