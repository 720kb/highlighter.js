/*global window*/
(function plainOldJs(window) {
  'use strict';

  var Pointer = function initPointer() {
    this.position = 0;
    this.dom = window.document.body.getElementsByTagName('*');
    this.selector = this.dom[this.position];
  };

  Pointer.prototype.highlight = function highlightSelectedElement() {
    this.selector.scrollIntoView();
    window.scrollTo(0, Number(this.selector.offsetTop - 100).toFixed(0));
    this.selector.style.transition = 'outline 0.55s linear';
    this.selector.style.outline = '3px inset red';
    this.selector.style.outlineOffset = '-2px';
  };

  Pointer.prototype.dehighlight = function dehighlightSelectedElement() {
    this.selector.style.transition = 'outline none';
    this.selector.style.outline = 'none';
  };

  Pointer.prototype.select = function selectElement(identifier) {
    //select direct element (reset position and selector)
    this.position = 0;
    this.selector = this.dom[0];
    this.next(identifier);
  };

  Pointer.prototype.next = function selectNextElement(identifier) {

    var i = this.position;

    if (!identifier) {

      if (this.dom[this.position + 1]) {

        this.position += 1;
        this.selector = this.dom[this.position];
        //new selected element event
      } else {
        //no next element restart from first element
        this.position = 0;
        this.selector = this.dom[this.position];
        window.console.info('No next elements, restarting from the first element in page');
      }
      //if it's #id
    } else if (identifier.indexOf('#') !== -1) {
      for (i; i <= this.dom.length; i += 1) {

        if (this.dom[i]
          && this.dom[i].id
          && this.dom[i].id.toString() === identifier.replace('#', '')) {

          this.selector = this.dom[i];
          this.position = i + 1;
          break;
        }
      }
      //if it's .class/.class .es
    } else if (identifier.indexOf('.') !== -1) {
      for (i; i <= this.dom.length; i += 1) {

        if (this.dom[i]
          && this.dom[i].className
          && this.dom[i].className.toString().indexOf(identifier.replace('.', '')) !== -1) {

          this.selector = this.dom[i];
          this.position = i + 1;
          break;
        }
      }
    //if it's a <tag>
    } else if (identifier.indexOf('<') > -1) {
      for (i; i <= this.dom.length; i += 1) {

        if (this.dom[i]
          && this.dom[i].tagName
          && this.dom[i].tagName.toString().toLowerCase().indexOf(identifier.replace('<', '').replace('>', '')) !== -1) {

          this.selector = this.dom[i];
          this.position = i + 1;
          break;
        }
      }
    } else {

      window.console.error('You must set a correct #id or .class or <tag> parameter');
    }
  };

  Pointer.prototype.previous = function selectPrevElement(identifier) {

    var i = this.position;

    if (!identifier) {

      if (this.dom[this.position - 1]) {

        this.position -= 1;
        this.selector = this.dom[this.position];
        //new selected element event
      } else {
        //no previous elements, restart from first element
        this.position = 0;
        this.selector = this.dom[this.position];
        window.console.info('No previous elements, restarting from the first element in page');
      }
      //if it's #id
    } else if (identifier.indexOf('#') !== -1) {
      for (i <= this.position; i >= 0; i -= 1) {

        if (this.dom[i]
          && this.dom[i].id
          && this.dom[i].id.toString() === identifier.replace('#', '')) {

          this.selector = this.dom[i];
          this.position = i - 1;

          if (this.position < 0) {
            this.position = 0;
            window.console.info('No previous elements, restarting from the first element in page');
            break;
          }
          break;
        }
      }
      //if it's .class/.class .es
    } else if (identifier.indexOf('.') > -1) {
      for (i <= this.position; i >= 0; i -= 1) {

        if (this.dom[i]
          && this.dom[i].className
          && this.dom[i].className.toString().indexOf(identifier.replace('.', '')) !== -1) {

          this.selector = this.dom[i];
          this.position = i - 1;

          if (this.position < 0) {
            this.position = 0;
            window.console.info('No previous elements, restarting from the first element in page');
            break;
          }
          break;
        }
      }
    //if it's a <tag>
    } else if (identifier.indexOf('<') > -1) {
      for (i <= this.position; i >= 0; i -= 1) {

        if (this.dom[i]
          && this.dom[i].tagName
          && this.dom[i].tagName.toString().toLowerCase().indexOf(identifier.replace('<', '').replace('>', '')) !== -1) {

          this.selector = this.dom[i];
          this.position = i - 1;
          break;
        }
      }
    } else {

      window.console.error('You must set a correct #id or .class or <tag> parameter');
    }
  };

  Pointer.prototype.skipNext = function skipNextElements(skip) {
    if (Number(skip) > 0) {

      this.position += skip;
    }

    if (Number(skip) > this.dom.length) {

      this.position = 0;
      window.console.log('No next elements, restarting from the first DOM element');
    }
  };

  Pointer.prototype.skipPrev = function skipPrevElements(skip) {
    if (Number(skip) > 0) {

      this.position -= skip;
    }

    if (this.position < 0) {

      this.position = 0;
      window.console.log('No previous elements, restarting from the first DOM element');
    }
  };

  window.Pointer = Pointer;
}(window));
