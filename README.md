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

#### Uiteindelijke resultaat/website: 
![BT](https://user-images.githubusercontent.com/45541885/82237499-0470b380-9936-11ea-8f3f-e096b5825dbf.png)

### De wireflow
#### De website zonder css
![photo_2020-03-18_14-27-55](https://user-images.githubusercontent.com/45541885/76965498-b08d2280-6924-11ea-9a1e-1015ae867de0.jpg)

#### De website met css
![photo_2020-03-18_14-23-52](https://user-images.githubusercontent.com/45541885/76965237-3d83ac00-6924-11ea-821e-7869d0743512.jpg)

Ik ben iets afgeweken van mijn wireframe. Na de feedbackgesprekken met Koop heb ik besloten het formulier op te splitsen in meerdere pagina’s en form’s. Zo voelt het, ook als je het zonder css invult, niet als een eindeloos lange formulier. 

Tijdens mijn proces heb ik hier en daar ook de vragen wat anders aangepakt. Dit komt vooral omdat ik met verschillende input types wilde testen. 

### Hoe heb ik de problemen uit mijn use case opgelost?
#### Er moeten verschillende antwoordmogelijkheden zijn.
De gebruiker gaat door een formulier heen met verschillende antwoordmogelijkheden. Zo kan de gebruiker met radio buttons 1 keuze maken of met checkboxes meerdere. Ook heeft de gebruiker de mogelijk een langer antwoord of verhaaltje te typen in een text area. Korte antwoorden worden geplaatst in een input type text. Er moeten ook meerdere waardes ingevuld worden zoals geboortedatum, telefoonnummer, emailadres en meningen. 

#### De gebruiker moet terug kunnen waar diegene gebleven is en de vorige velden moeten ingevuld zijn.
De gebruiker krijgt de kans om pauze te houden van het formulier. De waardes die de gebruiker invult (dit moet je nooit doen met wachtwoorden) worden opgeslagen in de url. Met de submit knop worden de waardes ook daadwerkelijk in de url geplaatst. De gebruiker kan nadat hij op submit heeft geklikt de url opslaan via de copy button of door de url in de browser te copy pasten. Zodra de gebruiker terug wilt en de juiste url in de browser zet, zal hij weer op de pagina komen waar hij was gebleven en de antwoorden die al waren ingevuld staan er weer alsof hij dat net nog heeft ingevuld. Dit werkt allemaal via de server dus ook zonder javascript en css werkt deze feature.   

### Tab probleem in firefox en safari
Toen ik mijn site in firefox en safari ging testen kon ik al op de hoofdpagina niet met het toetsenbord erdoorheen. Ik heb gegoogled en blijkbaar ligt het aan de browser en de user instellingen. Ik probeerde dit probleem op te lossen met tab indexen (ook al is dat bad practice) maar ook dat werkte niet. 

Ik maak gebruik van de a tag en dat zou focusable moeten zijn maar in firefox en safari worden deze elementen niet gepakt.

Dit probleem ligt aan de instellingen van de gebruiker en ik kan helaas niet oplossen. Ik vind het heel raar dat dit zo werkt en ik zou hier graag nog wel een oplossing voor willen. Misschien een html oplossing als dat nog semantisch blijft. 

Hier staat onder andere het probleem beschreven en hoe je dat als gebruiker kan oplossen.
https://stackoverflow.com/questions/11704828/how-to-allow-keyboard-focus-of-links-in-firefox/11713537

### Onderzoeken en documentatie 
Om het overzicht te behouden heb ik mijn onderzoeken in mijn wiki geschreven hieronder zie je de linkjes:
- [Mijn website in 3 lagen](https://github.com/ManoukK/browser-technologies-1920/wiki/De-website-in-3-lagen---opdracht-2)
- [Wat zijn progressive enhancement en feature detection?](https://github.com/ManoukK/browser-technologies-1920/wiki/Wat-zijn-progressive-enhancement-en-feature-detection%3F)
- [De 8 features testen die we in de les hadden besproken](https://github.com/ManoukK/browser-technologies-1920/wiki/8-features-testen---opdracht-2)
- [Feature detection van mijn website](https://github.com/ManoukK/browser-technologies-1920/wiki/Feature-detection---opdracht-2)
- [Conclusie](https://github.com/ManoukK/browser-technologies-1920/wiki/Conclusie)

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


