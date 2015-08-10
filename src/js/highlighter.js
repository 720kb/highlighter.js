/*eslint-disable*/
//jscs:disable
/**
 * Author: Jason Farrell
 * Author URI: http://useallfive.com/
 *
 * Description: Checks if a DOM element is truly visible.
 * Package URL: https://github.com/UseAllFive/true-visibility
 */
Element.prototype.isVisible=function(){"use strict";function e(f,n,i,d,r,u,l){var s=f.parentNode,p=2;return o(f)?9===s.nodeType?!0:"0"===t(f,"opacity")||"none"===t(f,"display")||"hidden"===t(f,"visibility")?!1:(("undefined"==typeof n||"undefined"==typeof i||"undefined"==typeof d||"undefined"==typeof r||"undefined"==typeof u||"undefined"==typeof l)&&(n=f.offsetTop,r=f.offsetLeft,d=n+f.offsetHeight,i=r+f.offsetWidth,u=f.offsetWidth,l=f.offsetHeight),s?"hidden"!==t(s,"overflow")&&"scroll"!==t(s,"overflow")||!(r+p>s.offsetWidth+s.scrollLeft||r+u-p<s.scrollLeft||n+p>s.offsetHeight+s.scrollTop||n+l-p<s.scrollTop)?(f.offsetParent===s&&(r+=s.offsetLeft,n+=s.offsetTop),e(s,n,i,d,r,u,l)):!1:!0):!1}function t(e,t){return window.getComputedStyle?document.defaultView.getComputedStyle(e,null)[t]:e.currentStyle?e.currentStyle[t]:void 0}function o(e){for(;e=e.parentNode;)if(e==document)return!0;return!1}return e(this)};
/**
* Author: Copyright (c) 2013 Alice Lieutier
* Author URI: https://github.com/alicelieutier/smoothScroll
*/
window.smoothScroll=function(){if(void 0!==document.querySelectorAll&&void 0!==window.pageYOffset&&void 0!==history.pushState){var a=function(a){return"HTML"===a.nodeName?-window.pageYOffset:a.getBoundingClientRect().top+window.pageYOffset},b=function(a){return.5>a?4*a*a*a:(a-1)*(2*a-2)*(2*a-2)+1},c=function(a,c,d,e){return d>e?c:a+(c-a)*b(d/e)},d=function(b,d,e){d=d||500;var f=window.pageYOffset;if("number"==typeof b)var g=parseInt(b);else var g=a(b);var h=Date.now(),i=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||function(a){window.setTimeout(a,15)},j=function(){var a=Date.now()-h;window.scroll(0,c(f,g,a,d)),a>d?"function"==typeof e&&e(b):i(j)};j()},e=function(a){a.preventDefault(),location.hash!==this.hash&&window.history.pushState(null,null,this.hash),d(document.getElementById(this.hash.substring(1)),500,function(a){location.replace("#"+a.id)})};return document.addEventListener("DOMContentLoaded",function(){for(var b,a=document.querySelectorAll('a[href^="#"]:not([href="#"])'),c=a.length;b=a[--c];)b.addEventListener("click",e,!1)}),d}}();
//jscs:enable
/*eslint-enable*/
/*global window*/
(function plainOldJs(window) {
  'use strict';

  var Highlighter = function initHighlighter(opt) {

    var newDOM = []
      , i = 0;

    this.onSelectedEvent = new window.CustomEvent('Highlighter:selected');
    this.onUnderlinedEvent = new window.CustomEvent('Highlighter:underlined');
    this.onErasedEvent = new window.CustomEvent('Highlighter:erased');
    this.onSkippedEvent = new window.CustomEvent('Highlighter:skipped');
    this.onScrolledEvent = new window.CustomEvent('Highlighter:scrolled');
    this.onRestartEvent = new window.CustomEvent('Highlighter:restart');

    this.position = 0;
    this.dom = window.document.body.getElementsByTagName('*');
    this.element = this.dom[this.position];
    this.scroll = false;
    this.scrollDuration = 500;
    this.classAliasList = [];
    this.identifierClassArray = [];
    this.color = '#08FD31';

    if (opt) {

      if (opt.color) {

        this.color = opt.color;
      }
      if (opt.scroll) {

        this.scroll = true;
      }

      if (opt.scrollDuration) {

        this.scrollDuration = Number(opt.scrollDuration);
      }

      if (opt.viewable) {

        for (i; i <= this.dom.length; i += 1) {

          if (this.dom[i]
          && this.dom[i].isVisible()) {

            newDOM.push(this.dom[i]);
          }
        }
        this.dom = newDOM;
      }
    }
  };

  Highlighter.prototype.scroller = function scrollingTo(element) {

    if (this.scroll) {

      window.smoothScroll(element, this.scrollDuration);
      this.onScrolledEvent.eventData = {
        'element': element
      };
      window.dispatchEvent(this.onScrolledEvent);
    }
  };
  Highlighter.prototype.underline = function underlineSelectedElement() {

    this.scroller(this.element, 500);

    if (this.element
      && this.element.style) {
      this.element.style.transition = 'outline 0.55s linear';
      this.element.style.outline = '3px inset ' + this.color;
      this.element.style.outlineOffset = '-2px';
      this.onUnderlinedEvent.eventData = {
        'element': this.element
      };
      window.dispatchEvent(this.onUnderlinedEvent);
    }
  };

  Highlighter.prototype.erase = function eraseSelectedElement() {

    if (this.element
      && this.element.style) {
      this.element.style.transition = 'outline none';
      this.element.style.outline = 'none';
      this.onErasedEvent.eventData = {
        'element': this.element
      };
      window.dispatchEvent(this.onErasedEvent);
    }
  };

  Highlighter.prototype.select = function selectElement(identifier) {
    //select direct element (reset position and element)
    this.position = 0;
    this.element = this.dom[this.position];
    this.next(identifier);
    this.onSelectedEvent.eventData = {
      'element': this.element
    };
    window.dispatchEvent(this.onSelectedEvent);
  };

  Highlighter.prototype.point = function pointStartingElement(element) {
    var i = 0;

    if (element
      && this.dom
      && this.dom.length > 0) {
      for (i; i <= this.dom.length; i += 1) {
        if (this.dom[i] === element) {

          this.position = i;
          this.element = this.dom[i];
          window.console.log('Highlighter pointing to element:', this.element);
          break;
        }
      }
    } else {

      window.console.error('Unable to retrieve starting element');
    }
  };

  Highlighter.prototype.arrayCompared = function comparedArray(firstArray, secondArray) {

    return firstArray.filter(function returnOne(one) {

      return secondArray.indexOf(one) > -1;
    });
  };

  Highlighter.prototype.next = function selectNextElement(identifier) {

    var i = this.position;

    if (identifier) {
      //if it's #id
      if (identifier.indexOf('#') !== -1) {
        for (i; i <= this.dom.length; i += 1) {

          if (this.dom[i]
            && this.dom[i].id
            && this.dom[i].id.toString() === identifier.replace('#', '')) {

            this.element = this.dom[i];
            this.position = i + 1;
            this.onSelectedEvent.eventData = {
              'element': this.element
            };
            window.dispatchEvent(this.onSelectedEvent);
            break;
          }
          if (i >= this.dom.length) {
            this.position = 0;
            window.dispatchEvent(this.onRestartEvent);
            window.console.info('No next elements, restarting from the first element in page');
            break;
          }
        }
        //if it's .class/.class .es
      } else if (identifier.indexOf('.') !== -1) {

        this.identifierClassArray = identifier.toString().replace('.', '').split(' ');

        for (i; i <= this.dom.length; i += 1) {

          if (this.dom[i]
            && this.dom[i].classList
            && identifier.indexOf('.') !== -1) {

            this.classAliasList = this.dom[i].classList.toString().split(' ');

            if (this.arrayCompared(this.classAliasList, this.identifierClassArray).length > 0) {

              this.element = this.dom[i];
              this.position = i + 1;
              this.onSelectedEvent.eventData = {
                'element': this.element
              };
              window.dispatchEvent(this.onSelectedEvent);
              break;
            }
          }
          if (i >= this.dom.length) {
            this.position = 0;
            window.dispatchEvent(this.onRestartEvent);
            window.console.info('No next elements, restarting from the first element in page');
            break;
          }
        }
      //if it's a <tag>
      } else if (identifier.indexOf('<') > -1) {
        for (i; i <= this.dom.length; i += 1) {

          if (this.dom[i]
            && this.dom[i].tagName
            && this.dom[i].tagName.toString().toLowerCase() === identifier.replace('<', '').replace('>', '')) {

            this.element = this.dom[i];
            this.position = i + 1;
            this.onSelectedEvent.eventData = {
              'element': this.element
            };
            window.dispatchEvent(this.onSelectedEvent);
            break;
          }
          if (i >= this.dom.length) {
            this.position = 0;
            window.dispatchEvent(this.onRestartEvent);
            window.console.info('No next elements, restarting from the first element in page');
            break;
          }
        }
      } else {

        window.console.error('Please set a correct #id or .class or <tag> identifier');
      }
    } else {

      this.position += 1;

      if (this.position > this.dom.length) {

        this.position = 0;
        this.element = this.dom[this.position];
        window.dispatchEvent(this.onRestartEvent);
        window.console.info('No next elements, restarting from the first element in page');
      }

      this.element = this.dom[this.position];

      this.onSelectedEvent.eventData = {
        'element': this.element
      };
      window.dispatchEvent(this.onSelectedEvent);
    }
  };

  Highlighter.prototype.previous = function selectPrevElement(identifier) {

    var i = this.position;

    if (identifier) {
      //if it's #id
      if (identifier.indexOf('#') !== -1) {
        for (i <= this.position; i >= 0; i -= 1) {

          if (this.dom[i]
            && this.dom[i].id
            && this.dom[i].id.toString() === identifier.replace('#', '')) {

            this.element = this.dom[i];
            this.position = i - 1;
            this.onSelectedEvent.eventData = {
              'element': this.element
            };
            window.dispatchEvent(this.onSelectedEvent);
            break;
          }
          if (i < this.dom.length) {
            this.position = 0;
            window.dispatchEvent(this.onRestartEvent);
            window.console.info('No previous elements, restarting from the first element in page');
            break;
          }
        }
        //if it's .class/.class .es
      } else if (identifier.indexOf('.') > -1) {

        this.identifierClassArray = identifier.toString().replace('.', '').split(' ');

        for (i <= this.position; i >= 0; i -= 1) {

          if (this.dom[i]
            && this.dom[i].classList
            && identifier.indexOf('.') !== -1) {

            this.classAliasList = this.dom[i].classList.toString().split(' ');

            if (this.arrayCompared(this.classAliasList, this.identifierClassArray).length > 0) {

              this.element = this.dom[i];
              this.position = i - 1;
              this.onSelectedEvent.eventData = {
                'element': this.element
              };
              window.dispatchEvent(this.onSelectedEvent);
              break;
            }
          }
          if (i < this.dom.length) {
            this.position = 0;
            window.dispatchEvent(this.onRestartEvent);
            window.console.info('No previous elements, restarting from the first element in page');
            break;
          }
        }
      //if it's a <tag>
      } else if (identifier.indexOf('<') > -1) {
        for (i <= this.position; i >= 0; i -= 1) {

          if (this.dom[i]
            && this.dom[i].tagName
            && this.dom[i].tagName.toString().toLowerCase() === identifier.replace('<', '').replace('>', '')) {

            this.element = this.dom[i];
            this.position = i - 1;
            this.onSelectedEvent.eventData = {
              'element': this.element
            };
            window.dispatchEvent(this.onSelectedEvent);
            break;
          }
          if (i < this.dom.length) {
            this.position = 0;
            window.dispatchEvent(this.onRestartEvent);
            window.console.info('No previous elements, restarting from the first element in page');
            break;
          }
        }
      } else {

        window.console.error('You must set a correct #id or .class or <tag> parameter');
      }
    } else {

      this.position -= 1;

      if (this.position < 0) {

        this.position = 0;
        window.dispatchEvent(this.onRestartEvent);
        window.console.info('No previous elements, restarting from the first element in page');
      }
      this.element = this.dom[this.position];
      this.onSelectedEvent.eventData = {
        'element': this.element
      };
      window.dispatchEvent(this.onSelectedEvent);
    }
  };

  Highlighter.prototype.skipNext = function skipNextElements(skip) {
    if (Number(skip) > 0) {

      this.position += skip;
      this.onSkippedEvent.eventData = {
        'element': this.dom[this.position]
      };
      window.dispatchEvent(this.onSkippedEvent);
    }

    if (Number(skip) > this.dom.length) {

      this.position = 0;
      this.element = this.dom[this.position];
      window.dispatchEvent(this.onRestartEvent);
      window.console.log('No next elements, restarting from the first DOM element');
    }
  };

  Highlighter.prototype.skipPrev = function skipPrevElements(skip) {
    if (Number(skip) > 0) {

      this.position -= skip;
      this.onSkippedEvent.eventData = {
        'element': this.dom[this.position]
      };
      window.dispatchEvent(this.onSkippedEvent);
    }

    if (this.position < 0) {

      this.position = 0;
      this.element = this.dom[this.position];
      window.dispatchEvent(this.onRestartEvent);
      window.console.log('No previous elements, restarting from the first DOM element');
    }
  };

  window.Highlighter = Highlighter;
}(window));
