/*global window*/
(function plainOldJs(window) {
  'use strict';

    var Selez = {};

    Selez.item = 0;
    Selez.dom = window.document.body.getElementsByTagName('*');
    Selez.selector = Selez.dom[Selez.item];

    Selez.highlight = function highlightSelectedElement() {
      Selez.selector.scrollIntoView();
      window.scrollTo(0, Number(Selez.selector.offsetTop - 100).toFixed(0));
      Selez.selector.style.transition = 'outline 0.55s linear';
      Selez.selector.style.outline = '3px inset red';
      Selez.selector.style.outlineOffset = '-2px';
    };

    Selez.dehighlight = function dehighlightSelectedElement() {
      Selez.selector.style.transition = 'outline 0s linear';
      Selez.selector.style.outline = 'inherit';
      Selez.selector.style.outlineOffset = 'inherit';
    };

    Selez.selectNext = function selectNextElement(identifier) {

      var i = Selez.item;

      if (!identifier) {

        Selez.item += 1;

        if (Selez.dom[Selez.item]) {

          Selez.selector = Selez.dom[Selez.item];
          //new selected element event
        } else {
          //no next element restart from first element
          Selez.item = 0;
          Selez.selector = Selez.dom[Selez.item];
          window.console.info('No next elements restarting from the first element in page');
        }
        //if it's #id
      } else if (identifier.indexOf('#') !== -1) {
        for (i; i <= Selez.dom.length; i += 1) {

          if (Selez.dom[i]
            && Selez.dom[i].id
            && Selez.dom[i].id.toString() === identifier.replace('#', '')) {

            Selez.selector = Selez.dom[i];
            Selez.item = i + 1;
            break;
          }
        }
        //if its .class/.class .es
      } else if (identifier.indexOf('.') !== -1) {
        for (i; i <= Selez.dom.length; i += 1) {

          if (Selez.dom[i]
            && Selez.dom[i].className
            && Selez.dom[i].className.toString().indexOf(identifier.replace('.', '')) !== -1) {

            Selez.selector = Selez.dom[i];
            Selez.item = i + 1;
            break;
          }
        }
        //if its <tag>
      } else if (identifier.indexOf('<') !== -1) {
        for (i; i <= Selez.dom.length; i += 1) {

          if (Selez.dom[i]
            && Selez.dom[i].tagName
            && Selez.dom[i].tagName.toString().toLowerCase().indexOf(identifier.replace('<', '').replace('>', '')) !== -1) {

            Selez.selector = Selez.dom[i];
            Selez.item = i + 1;
            break;
          }
        }
      } else {

        window.console.error('You must set a correct #id or .class or <tag> parameter');
      }
    };

    Selez.selectPrev = function selectPrevElement() {

      Selez.item -= 1;

      if (Selez.dom[Selez.item]) {

        Selez.selector = Selez.dom[Selez.item];
        //new selected element event
      } else {
        //no prev element to select event
        Selez.item = 0;
        Selez.selector = Selez.dom[Selez.item];
        window.console.info('No previous elements restarting from the first element in page');
      }
    };

    Selez.skipNext = function skipNextElements(skip) {
      if (Number(skip) > 0) {

        Selez.item += skip;
      }

      if (Number(skip) > Selez.dom.length) {

        Selez.item = 0;
      }
    };

    Selez.skipPrev = function skipPrevElements(skip) {
      if (Number(skip) > 0) {

        Selez.item -= skip;
      }

      if (Selez.item < 0) {

        Selez.item = 0;
      }
    };

    window.Selez = Selez;
}(window));
