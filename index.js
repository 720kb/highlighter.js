/*global window*/
(function plainOldJs(window) {
  'use strict';

    var Selez = {};

    Selez.item =  0;
    Selez.dom = document.body.getElementsByTagName('*');
    Selez.selector =  Selez.dom[Selez.item];

    Selez.highlight =  function () {
      Selez.selector.style.transition = 'outline 0.15s linear';
      Selez.selector.style.outline = '3px inset red';
      Selez.selector.style.outlineOffset = '-2px';
    };

    Selez.dehighlight =  function dehighlightSelector() {
      Selez.selector.style.transition = 'outline 0s linear';
      Selez.selector.style.outline = 'inherit';
      Selez.selector.style.outlineOffset = 'inherit';
    };

    Selez.selectNext =  function selectNextElement() {

      Selez.item += 1;

      if (Selez.dom[Selez.item]) {

        Selez.dehighlight(Selez.selector);
        Selez.selector = Selez.dom[Selez.item];
        //new selected element event
      } else {
        //no next element to select event
        Selez.item -= 1;
        window.console.info('No next elements to select');
      }
    };

    Selez.selectPrev =  function selectPrevElement() {

      Selez.item -= 1;

      if (Selez.dom[Selez.item]) {

        Selez.dehighlight(Selez.selector);
        Selez.selector = Selez.dom[Selez.item];
        //new selected element event
      } else {
        //no prev element to select event
        Selez.item += 1;
        window.console.info('No previous elements to select');
      }
    };

    Selez.skipNext = function skipNextElements(skip) {
      if (Number(skip) > 0) {

        Selez.item += skip;
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
