/*global window*/
(function plainOldJs(window) {
  'use strict';

  var Highlighter = function initHighlighter () {
    this.position = 0;
    this.dom = window.document.body.getElementsByTagName('*');
    this.element = this.dom[this.position];
  };

  Highlighter.prototype.underline = function underlineSelectedElement() {
    this.element.scrollIntoView();
    this.element.style.transition = 'outline 0.55s linear';
    this.element.style.outline = '3px inset red';
    this.element.style.outlineOffset = '-2px';
  };

  Highlighter.prototype.erase = function eraseSelectedElement() {
    this.element.style.transition = 'outline none';
    this.element.style.outline = 'none';
  };

  Highlighter.prototype.select = function selectElement(identifier) {
    //select direct element (reset position and element)
    this.position = 0;
    this.element = this.dom[0];
    this.next(identifier);
  };

  Highlighter.prototype.next = function selectNextElement(identifier) {

    var i = this.position;

    if (!identifier && this.dom[this.position + 1]) {

      this.element = this.dom[this.position];
      this.position += 1;
    } else {
      //no next element restart from first element
      this.position = 0;
      this.element = this.dom[this.position];
      window.console.info('No next elements, restarting from the first element in page');
    }

    if (identifier) {
      //if it's #id
      if (identifier.indexOf('#') !== -1) {
        for (i; i <= this.dom.length; i += 1) {

          if (this.dom[i]
            && this.dom[i].id
            && this.dom[i].id.toString() === identifier.replace('#', '')) {

            this.element = this.dom[i];
            this.position = i + 1;

            if (this.position > this.dom.length) {

              this.position = 0;
              window.console.info('No next elements, restarting from the first element in page');
              break;
            }
            break;
          }
        }
        //if it's .class/.class .es
      } else if (identifier.indexOf('.') !== -1) {
        for (i; i <= this.dom.length; i += 1) {

          if (this.dom[i]
            && this.dom[i].className
            && this.dom[i].className.toString().indexOf(identifier.replace('.', '')) !== -1) {

            this.element = this.dom[i];
            this.position = i + 1;
            if (this.position > this.dom.length) {

              this.position = 0;
              window.console.info('No next elements, restarting from the first element in page');
              break;
            }
            break;
          }
        }
      //if it's a <tag>
      } else if (identifier.indexOf('<') > -1) {
        for (i; i <= this.dom.length; i += 1) {

          if (this.dom[i]
            && this.dom[i].tagName
            && this.dom[i].tagName.toString().toLowerCase().indexOf(identifier.replace('<', '').replace('>', '')) !== -1) {

            this.element = this.dom[i];
            this.position = i + 1;
            if (this.position > this.dom.length) {

              this.position = 0;
              window.console.info('No next elements, restarting from the first element in page');
              break;
            }
            break;
          }
        }
      } else {

        window.console.error('Please set a correct #id or .class or <tag> identifier');
      }
    }
  };

  Highlighter.prototype.previous = function selectPrevElement(identifier) {

    var i = this.position;

    if (!identifier && this.dom[this.position - 1]) {

      this.element = this.dom[this.position];
      this.position -= 1;
    } else {
      //no next element restart from first element
      this.position = 0;
      this.element = this.dom[this.position];
      window.console.info('No previous elements, restarting from the first element in page');
    }
    //if it's #id
    if (identifier.indexOf('#') !== -1) {
      for (i <= this.position; i >= 0; i -= 1) {

        if (this.dom[i]
          && this.dom[i].id
          && this.dom[i].id.toString() === identifier.replace('#', '')) {

          this.element = this.dom[i];
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

          this.element = this.dom[i];
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

          this.element = this.dom[i];
          this.position = i - 1;
          break;
        }
      }
    } else {

      window.console.error('You must set a correct #id or .class or <tag> parameter');
    }
  };

  Highlighter.prototype.skipNext = function skipNextElements(skip) {
    if (Number(skip) > 0) {

      this.position += skip;
    }

    if (Number(skip) > this.dom.length) {

      this.position = 0;
      window.console.log('No next elements, restarting from the first DOM element');
    }
  };

  Highlighter.prototype.skipPrev = function skipPrevElements(skip) {
    if (Number(skip) > 0) {

      this.position -= skip;
    }

    if (this.position < 0) {

      this.position = 0;
      window.console.log('No previous elements, restarting from the first DOM element');
    }
  };

  window.Highlighter = Highlighter;
}(window));
