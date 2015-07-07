###Default

if no selectable next element, Pointer will restart selecting the first element in the dom

if no selectable prev element, Pointer will restart selecting the first element in the dom

###Initialize
```
var Pointer = new window.Pointer();
//options {} yet to come
```
###Select Element By ID
_Select first element in the DOM by ID_
```
Pointer.select('#id');
```
###Select Element by class/es
_Select first element in the DOM by class or classes_
```
Pointer.select('.class .class2');
```
###Select Element by tag name
_Select first element in the DOM by < tag > name_
```
Pointer.select('<span>');
```

###Select Next element
_Select next element starting from the current selected element (by default is the first DOM element)_
```
Pointer.next();
```

###Select Prev element
_Select previous element starting from the current selected element ( by default is the first DOM element)_
```
Pointer.previous();
```

###Highlight Selected element
_Scroll to and highlight current selected element in view_
```
Pointer.highlight();
```

###De-highlight Selected element
_De-highlight current selected element in view_
```
Pointer.dehighlight();
```

###Select Next by ID
_Select next element (by ID) starting from the current selected element (by default is the first DOM element)_
```
Pointer.next('#test');
```

###Select Next by class/es
_Select next element (by class/classes) starting from the current selected element (by default is the first DOM element)_
```
Pointer.next('.class .class-2');
```
###Select Next by < tag > name
_Select next element (by < tag > name) starting from the current selected element (by default is the first DOM element)_
```
Pointer.next('<span>');
```

###Select Prev by ID
_Select previous element (by ID) starting from the current selected element (by default is the first DOM element)_
```
Pointer.previous('#test');
```

###Select Prev by class/es
_Select previous element (by class/classes) starting from the current selected element (by default is the first DOM element)_
```
Pointer.previous('.class .class-2');
```
###Select Prev by < tag > name
_Select previous element (by < tag > name) starting from the current selected element (by default is the first DOM element)_
```
Pointer.previous('<span>');
```

###TO-DO

1 - events on selection and errors

2 - Select by attribute/s

3 - option to specify if to select or not invisible/hidden/out-of-screen elements

4 - better general code and structure

5 - bower, npm and tasks

6 - testing
