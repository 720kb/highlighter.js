###Default
if no next elements to select restart selecting the first element in the dom
if no prev elements to select restart selecting the first element in the dom

###Select next element
window.Selez.selectNext()

###Select prev element
window.Selez.selectPrev()

###Highlight element
window.Selez.highlight();

###De-highlight
window.Selez.dehighlight();

###Select Next by ID
window.selectNext('#test');

###Select Next by class/es
window.selectNext('.class .class-2');

###Select Prev by ID
window.selectPrev('#test');

###Select Prev by class/es
window.selectPrev('.class .class-2');

###TO-DO

1 - events on selection and errors
2 - select by tag name (next and prev)
