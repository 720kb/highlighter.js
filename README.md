###Default

if no next elements to select restart selecting the first element in the dom

if no prev elements to select restart selecting the first element in the dom

###Select Next element
_Select next element starting from the current selected element (by default is the first DOM element)_
```
window.Selez.selectNext()
```

###Select Prev element
_Select previous element starting from the current selected element ( by default is the first DOM element)_
```
window.Selez.selectPrev()
```

###Highlight Selected element
_Scroll to and highlight current selected element in view_
```
window.Selez.highlight();
```

###De-highlight Selected element
_De-highlight current selected element in view_
```
window.Selez.dehighlight();
```

###Select Next by ID
_Select next element (by ID) starting from the current selected element (by default is the first DOM element)_
```
window.selectNext('#test');
```

###Select Next by class/es
_Select next element (by class/classes) starting from the current selected element (by default is the first DOM element)_
```
window.selectNext('.class .class-2');
```
###Select Next by <tag> name
_Select next element (by <tag> name) starting from the current selected element (by default is the first DOM element)_
```
window.selectNext('<span>');
```

###Select Prev by ID
_Select previous element (by ID) starting from the current selected element (by default is the first DOM element)_
```
window.selectPrev('#test');
```

###Select Prev by class/es
_Select previous element (by class/classes) starting from the current selected element (by default is the first DOM element)_
```
window.selectPrev('.class .class-2');
```

###TO-DO

1 - events on selection and errors

2 - select PREV by ID, class/es, <tag>

3 - option to specify if to select or not invisible/hidden/out-of-screen elements

4 - better general code and structure

5 - linter, bower, npm and tasks
