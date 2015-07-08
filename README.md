![highlighter javascript ](http://i.imgur.com/xcwmSM4.png)


Highlighter.js is a tiny (pure javascript) library, to allow you to easily navigate, select and highlight the DOM elements.

###Browser Support
http://caniuse.com/#feat=queryselector

###Installation

####HTML
```
<!DOCTYPE html>
<html>
<head>
<script src="../path/to/highlighter.min.js"></script>
</head>
<body>
//your body here...
//If you prefer performances, you can load the script at the bottom of your <body> instead of inside <head>
</body>
```
####Bower
```
bower install highlighter.js
```

####Npm
```
....
```

###Usage
```
var Highlighter = new window.Highlighter();

Highlighter.next('<div>');
Highlighter.underline();

window.console.log('Highlighter underlined this element:', Highlighter.element);
```
###Demo ...

##Commands

####Select Next
_Select next element starting from the current selected element (by default is the first DOM element)_
```
Highlighter.next();
```

####Select Previous
_Select previous element starting from the current selected element ( by default is the first DOM element)_
```
Highlighter.previous();
```
####Skip Next
_Skip a bunch of next elements starting from the current selected element_
```
Highlighter.skipNext(50);
```

####Skip Next
_Skip a bunch of previous elements starting from the current selected element_
```
Highlighter.skipPrev(35);
```

####Underline
_Scroll to and highlight the current selected element_
```
Highlighter.underline();
```

#### Erase
_Remove underline from the current selected element_
```
Highlighter.erase();
```

####Select Next by ID
_Select next element (by ID) starting from the current selected element (by default is the first DOM element)_
```
Highlighter.next('#test');
```

####Select Next by class/es
_Select next element (by class/classes) starting from the current selected element (by default is the first DOM element)_
```
Highlighter.next('.class .class-2');
```
####Select Next by < tag > name
_Select next element (by < tag > name) starting from the current selected element (by default is the first DOM element)_
```
Highlighter.next('<span>');
```

####Select Previous by ID
_Select previous element (by ID) starting from the current selected element (by default is the first DOM element)_
```
Highlighter.previous('#test');
```

####Select Previous by class/es
_Select previous element (by class/classes) starting from the current selected element (by default is the first DOM element)_
```
Highlighter.previous('.class .class-2');
```
####Select Previous by < tag > name
_Select previous element (by < tag > name) starting from the current selected element (by default is the first DOM element)_
```
Highlighter.previous('<span>');
```

####Select Element By ID
_Select first element in the DOM by ID_
```
Highlighter.select('#id');
```
####Select Element by class/es
_Select first element in the DOM by class or classes_
```
Highlighter.select('.class .class2');
```
####Select Element by tag name
_Select first element in the DOM by < tag > name_
```
Highlighter.select('<span>');
```
##Options

####Exclude hidden/invisible elements
Sometime you could need to work only on visible/viewable elements, so, to skip invisible or hidden elements, set the option ```{ viewable:true}```

```
var Highlighter = new window.Highlighter({
  'viewable':true //this way Highlighter.js will exclude/avoid selecting or highlighting hidden/invisible elements
});
```

##Gtk
- Not yet 100% ready for production
- If no selectable next elements, Highlighter will restart from the first element in DOM
- If no selectable previous elements, Highlighter will restart from the first element in DOM
