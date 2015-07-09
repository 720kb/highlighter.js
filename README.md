![highlighter javascript ](http://i.imgur.com/XmHz6mj.png)


Highlighter**.js** is a tiny (pure javascript) library, to allow you to easily navigate, select and highlight the DOM elements.

###Browser Support

Depending on this:
http://caniuse.com/#feat=queryselector

###Installation

####HTML
```html
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
```shell
bower install highlighter.js
```

####Npm
```shell
npm install highlighter.js
```

###Usage
```javascript
document.addEventListener("DOMContentLoaded", function() {

  var Highlighter = new Highlighter();

  Highlighter.next('<div>');
  Highlighter.underline();

  window.console.log('Highlighter underlined this element:', Highlighter.element);
});
```
###Demo ...

##Commands

####Select Next
_Select next element starting from the current selected element (by default is the first DOM element)_
```javascript
Highlighter.next();
```

####Select Previous
_Select previous element starting from the current selected element ( by default is the first DOM element)_
```javascript
Highlighter.previous();
```
####Skip Next
_Skip a bunch of next elements starting from the current selected element_
```javascript
Highlighter.skipNext(50);
```

####Skip Next
_Skip a bunch of previous elements starting from the current selected element_
```javascript
Highlighter.skipPrev(35);
```

####Underline
_Scroll to and highlight the current selected element_
```javascript
Highlighter.underline();
```

#### Erase
_Remove underline from the current selected element_
```javascript
Highlighter.erase();
```

####Select Next by ID
_Select next element (by ID) starting from the current selected element (by default is the first DOM element)_
```javascript
Highlighter.next('#test');
```

####Select Next by class/es
_Select next element (by class/classes) starting from the current selected element (by default is the first DOM element)_
```javascript
Highlighter.next('.class .class-2');
```
####Select Next by < tag > name
_Select next element (by < tag > name) starting from the current selected element (by default is the first DOM element)_
```javascript
Highlighter.next('<span>');
```

####Select Previous by ID
_Select previous element (by ID) starting from the current selected element (by default is the first DOM element)_
```javascript
Highlighter.previous('#test');
```

####Select Previous by class/es
_Select previous element (by class/classes) starting from the current selected element (by default is the first DOM element)_
```javascript
Highlighter.previous('.class .class-2');
```
####Select Previous by < tag > name
_Select previous element (by < tag > name) starting from the current selected element (by default is the first DOM element)_
```javascript
Highlighter.previous('<span>');
```

####Select Element By ID
_Select first element in the DOM by ID_
```javascript
Highlighter.select('#id');
```
####Select Element by class/es
_Select first element in the DOM by class or classes_
```javascript
Highlighter.select('.class .class2');
```
####Select Element by tag name
_Select first element in the DOM by < tag > name_
```javascript
Highlighter.select('<span>');
```
##Options

####Exclude hidden/invisible elements
Sometime you could need to work only on visible/viewable elements, so, to skip invisible or hidden elements, set the option ```{ viewable:true}```

```javascript
var Highlighter = new Highlighter({
  'viewable':true //this way Highlighter.js will exclude/avoid selecting or highlighting hidden/invisible elements
});
```

####Scroll to the underlined element
Sometime you could need to scroll to the current underlined element, so, to automatically scroll to it once is underlined you can set the options ```{scroll:true, scrollDuration: 500 }```
```javascript
var Highlighter = new Highlighter({
  'scroll':true, //Automatically scroll to the underlined element
  'scrollDuration': 500 //milliseconds
});
```

##Gtk
- Not yet 100% ready for production
- Scroller is a bit horrible atm
- If no selectable next elements, Highlighter will restart from the first element in DOM
- If no selectable previous elements, Highlighter will restart from the first element in DOM
