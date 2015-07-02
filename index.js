/*global window*/
(function plainOldJs(window) {
  'use strict';

    var Pointer = {};

    Pointer.item = 0;
    Pointer.dom = window.document.body.getElementsByTagName('*');
    Pointer.selector = Pointer.dom[Pointer.item];

    Pointer.highlight = function highlightSelectedElement() {
      Pointer.selector.scrollIntoView();
      window.scrollTo(0, Number(Pointer.selector.offsetTop - 100).toFixed(0));
      Pointer.selector.style.transition = 'outline 0.55s linear';
      Pointer.selector.style.outline = '3px inset red';
      Pointer.selector.style.outlineOffset = '-2px';
    };

    Pointer.dehighlight = function dehighlightSelectedElement() {
      Pointer.selector.style.transition = 'outline 0s linear';
      Pointer.selector.style.outline = 'inherit';
      Pointer.selector.style.outlineOffset = 'inherit';
    };

    Pointer.selectNext = function selectNextElement(identifier) {

      var i = Pointer.item;

      if (!identifier) {

        Pointer.item += 1;

        if (Pointer.dom[Pointer.item]) {

          Pointer.selector = Pointer.dom[Pointer.item];
          //new selected element event
        } else {
          //no next element restart from first element
          Pointer.item = 0;
          Pointer.selector = Pointer.dom[Pointer.item];
          window.console.info('No next elements, restarting from the first element in page');
        }
        //if it's #id
      } else if (identifier.indexOf('#') !== -1) {
        for (i; i <= Pointer.dom.length; i += 1) {

          if (Pointer.dom[i]
            && Pointer.dom[i].id
            && Pointer.dom[i].id.toString() === identifier.replace('#', '')) {

            Pointer.selector = Pointer.dom[i];
            Pointer.item = i + 1;
            break;
          }
        }
        //if it's .class/.class .es
      } else if (identifier.indexOf('.') !== -1) {
          for (i; i <= Pointer.dom.length; i += 1) {

            if (Pointer.dom[i]
              && Pointer.dom[i].className
              && Pointer.dom[i].className.toString().indexOf(identifier.replace('.', '')) !== -1) {

              Pointer.selector = Pointer.dom[i];
              Pointer.item = i + 1;
              break;
            }
          }
      //if it's a <tag>
      } else if (identifier.indexOf('<') !== -1) {
        for (i; i <= Pointer.dom.length; i += 1) {

          if (Pointer.dom[i]
            && Pointer.dom[i].tagName
            && Pointer.dom[i].tagName.toString().toLowerCase().indexOf(identifier.replace('<', '').replace('>', '')) !== -1) {

            Pointer.selector = Pointer.dom[i];
            Pointer.item = i + 1;
            break;
          }
        }
      } else {

        window.console.error('You must set a correct #id or .class or <tag> parameter');
      }
    };

    Pointer.selectPrev = function selectNextElement(identifier) {

      var i = Pointer.item;

      if (!identifier) {

        Pointer.item -= 1;

        if (Pointer.dom[Pointer.item]) {

          Pointer.selector = Pointer.dom[Pointer.item];
          //new selected element event
        } else {
          //no previous elements, restart from first element
          Pointer.item = 0;
          Pointer.selector = Pointer.dom[Pointer.item];
          window.console.info('No previous elements, restarting from the first element in page');
        }
        //if it's #id
      } else if (identifier.indexOf('#') !== -1) {
        for (i <= Pointer.item; i >= 0; i -= 1) {

          if (Pointer.dom[i]
            && Pointer.dom[i].id
            && Pointer.dom[i].id.toString() === identifier.replace('#', '')) {

            Pointer.selector = Pointer.dom[i];
            Pointer.item = i - 1;

            if (Pointer.item < 0) {
              Pointer.item = 0;
              window.console.info('No previous elements, restarting from the first element in page');
              break;
            }
            break;
          }
        }
        //if it's .class/.class .es
      } else if (identifier.indexOf('.') !== -1) {
          for (i <= Pointer.item; i >= 0; i -= 1) {

            if (Pointer.dom[i]
              && Pointer.dom[i].className
              && Pointer.dom[i].className.toString().indexOf(identifier.replace('.', '')) !== -1) {

              Pointer.selector = Pointer.dom[i];
              Pointer.item = i - 1;

              if (Pointer.item < 0) {
                Pointer.item = 0;
                window.console.info('No previous elements, restarting from the first element in page');
                break;
              }
              break;
            }
          }
      //if it's a <tag>
      } else if (identifier.indexOf('<') !== -1) {
        for (i <= Pointer.item; i >= 0; i -= 1) {

          if (Pointer.dom[i]
            && Pointer.dom[i].tagName
            && Pointer.dom[i].tagName.toString().toLowerCase().indexOf(identifier.replace('<', '').replace('>', '')) !== -1) {

            Pointer.selector = Pointer.dom[i];
            Pointer.item = i - 1;
            break;
          }
        }
      } else {

        window.console.error('You must set a correct #id or .class or <tag> parameter');
      }
    };

    Pointer.skipNext = function skipNextElements(skip) {
      if (Number(skip) > 0) {

        Pointer.item += skip;
      }

      if (Number(skip) > Pointer.dom.length) {

        Pointer.item = 0;
      }
    };

    Pointer.skipPrev = function skipPrevElements(skip) {
      if (Number(skip) > 0) {

        Pointer.item -= skip;
      }

      if (Pointer.item < 0) {

        Pointer.item = 0;
      }
    };

    window.Pointer = Pointer;
}(window));
