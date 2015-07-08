###Highlighter.js
Highlighter.js is a tiny (pure javascript) library, to allow you to easily navigate, select and highlight the DOM elements.

###Installation

.....

###Usage
```
var Highlighter = new window.Highlighter();

Highlighter.next('<div>');
Highlighter.underline();

window.console.log('Highlighter underlined this element:', Highlighter.element);
```
##Commands

###Select Next
_Select next element starting from the current selected element (by default is the first DOM element)_
```
Highlighter.next();
```

###Select Previous
_Select previous element starting from the current selected element ( by default is the first DOM element)_
```
Highlighter.previous();
```

###Underline
_Scroll to and highlight the current selected element_
```
Highlighter.underline();
```

### Erase
_Remove underline from the current selected element_
```
Highlighter.erase();
```

###Select Next by ID
_Select next element (by ID) starting from the current selected element (by default is the first DOM element)_
```
Highlighter.next('#test');
```

###Select Next by class/es
_Select next element (by class/classes) starting from the current selected element (by default is the first DOM element)_
```
Highlighter.next('.class .class-2');
```
###Select Next by < tag > name
_Select next element (by < tag > name) starting from the current selected element (by default is the first DOM element)_
```
Highlighter.next('<span>');
```

###Select Previous by ID
_Select previous element (by ID) starting from the current selected element (by default is the first DOM element)_
```
Highlighter.previous('#test');
```

###Select Previous by class/es
_Select previous element (by class/classes) starting from the current selected element (by default is the first DOM element)_
```
Highlighter.previous('.class .class-2');
```
###Select Previous by < tag > name
_Select previous element (by < tag > name) starting from the current selected element (by default is the first DOM element)_
```
Highlighter.previous('<span>');
```

###Select Element By ID
_Select first element in the DOM by ID_
```
Highlighter.select('#id');
```
###Select Element by class/es
_Select first element in the DOM by class or classes_
```
Highlighter.select('.class .class2');
```
###Select Element by tag name
_Select first element in the DOM by < tag > name_
```
Highlighter.select('<span>');
```
##Options

##TBK

if no selectable next elements, Highlighter will restart from the first element in DOM
if no selectable previous elements, Highlighter will restart from the first element in DOM
