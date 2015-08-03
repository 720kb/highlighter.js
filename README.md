![highlighter javascript ](http://i.imgur.com/XmHz6mj.png)
<br>
<p align="center">
Highlighter**.js** is a tiny (pure javascript) library, to allow you to easily navigate, select and highlight the DOM elements.
<br>
<a href="https://gitter.im/720kb/highlighter.js?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge" target="_blank">
<img src="https://badges.gitter.im/Join%20Chat.svg"/>
</a>
</p>
<br>
###Browser Support

Depending on

[Query Selector](http://caniuse.com/#feat=queryselector)

[Array Filter](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)

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

  var Highlighter = new window.Highlighter();

  Highlighter.next('<div>');
  Highlighter.underline();

  window.console.log('Highlighter underlined this element:', Highlighter.element);
});
```
###Demo
[Live demo](http://720kb.github.io/highlighter.js/ "Highlighter.js")

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

####Skip Previous
_Skip a bunch of previous elements starting from the current selected element_
```javascript
Highlighter.skipPrev(35);
```

####Underline
_Highlight the current selected element_
```javascript
Highlighter.underline();
```

#### Erase
_Remove highlighting from the current selected element_
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
var Highlighter = new window.Highlighter({
  'viewable':true //this way Highlighter.js will exclude/avoid selecting or highlighting hidden/invisible elements
});
```

####Scroll to the underlined element
Sometime you could need to scroll to the current underlined element, so, to automatically scroll to it once is underlined you can set the options ```{scroll:true, scrollDuration: 500 }```
```javascript
var Highlighter = new window.Highlighter({
  'scroll':true, //Automatically scroll to the underlined element
  'scrollDuration': 500 //milliseconds
});
```
##Events
There is a set of events that you could use for your needs.

```javascript
window.addEventListener('Highlighter:selected', function (evt) {

 console.log('This element has been selected', evt.eventData);
});
```
```javascript
window.addEventListener('Highlighter:underlined', function (evt) {

 console.log('This element has been underlined', evt.eventData);
});
```
```javascript
window.addEventListener('Highlighter:erased', function (evt) {

 console.log('This element has been erased', evt.eventData);
});
```
```javascript
window.addEventListener('Highlighter:skipped', function () {

 console.log('Elements were skipped');
});
```
```javascript
window.addEventListener('Highlighter:scrolled', function (evt) {

 console.log('Scrolled to this element', evt.eventData);
});
```
```javascript
window.addEventListener('Highlighter:restart', function () {

 console.log('Highlighter restarted from the first DOM element');
});
```

##Gtk
- Not yet 100% ready for production
- If your element/s has ```outline:``` CSS rule setted up, there could be problems or maybe not.
- isVisible() control need a deep check, it could probably mistake at any time
- Scroller is a bit horrible atm
- If no selectable next elements, Highlighter will restart from the first element in DOM
- If no selectable previous elements, Highlighter will restart from the first element in DOM

##License
The MIT License (MIT)

Copyright (c) 2015 Filippo Oretti, Dario Andrei

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
