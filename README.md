###Default

if no next elements to select restart selecting the first element in the dom

if no prev elements to select restart selecting the first element in the dom

###Select Next element
_Select next element starting from the current selected element (by default is the first DOM element)_
```
window.Pointer.selectNext()
```

###Select Prev element
_Select previous element starting from the current selected element ( by default is the first DOM element)_
```
window.Pointer.selectPrev()
```

###Highlight Selected element
_Scroll to and highlight current selected element in view_
```
window.Pointer.highlight();
```

###De-highlight Selected element
_De-highlight current selected element in view_
```
window.Pointer.dehighlight();
```

###Select Next by ID
_Select next element (by ID) starting from the current selected element (by default is the first DOM element)_
```
window.Pointer.selectNext('#test');
```

###Select Next by class/es
_Select next element (by class/classes) starting from the current selected element (by default is the first DOM element)_
```
window.Pointer.selectNext('.class .class-2');
```
###Select Next by < tag > name
_Select next element (by < tag > name) starting from the current selected element (by default is the first DOM element)_
```
window.Pointer.selectNext('<span>');
```

###Select Prev by ID
_Select previous element (by ID) starting from the current selected element (by default is the first DOM element)_
```
window.Pointer.selectPrev('#test');
```

###Select Prev by class/es
_Select previous element (by class/classes) starting from the current selected element (by default is the first DOM element)_
```
window.Pointer.selectPrev('.class .class-2');
```
###Select Prev by < tag > name
_Select previous element (by < tag > name) starting from the current selected element (by default is the first DOM element)_
```
window.Pointer.selectPrev('<span>');
```
###Select Prev by < tag > name
_Select previous element (by < tag > name) starting from the current selected element (by default is the first DOM element)_
```
window.Pointer.selectPrev('<span>');
```

###TO-DO

1 - events on selection and errors

2 - option to specify if to select or not invisible/hidden/out-of-screen elements

3 - better general code and structure

4 - bower, npm and tasks

5 - testing
