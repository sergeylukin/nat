/* global Modernizr */
/* global Pace */
/* global skrollr */

require('modernizr');
require('skrollr');
require('pace');
require('picturefill');

var scrolling = require('./modules/scrolling');
var city = require('./modules/city');
var svgstars = require('./modules/svgstars');
var viewport = require('./modules/viewport');
var device = require('./modules/device');
var debounce = require('./modules/debounce');
var soundtrack = require('./modules/soundtrack');

// Disable scrolling as soon as possible
// As soon as all elements will be loaded scrolling will be enabled
scrolling.disable();

document.getElementById('YGLF-intro').classList.remove('is-hidden');

if (Modernizr.svg && viewport.width() > 480 && !device.isMobileOrTablet()) {

  svgstars.initPaper();
  svgstars.initFrame();
  svgstars.initStars();
  svgstars.initBackgroundGradient();

} else {

  var logo = document.querySelector('.js-logo');
  logo.dataset['400'] = "opacity: 1; display: inline;";
  logo.removeAttribute('data-1000');
  logo.removeAttribute('data-1100');

  var cityEl = document.getElementById('City');
  cityEl.removeAttribute('data-900');
  cityEl.removeAttribute('data-901');

  var playButton = document.getElementById('PlayButton');
  playButton.dataset['400'] = "opacity: 0;";
  playButton.dataset['401'] = "opacity: 1; transform:translate(0px, 0em);";
  playButton.dataset['450'] = "transform:translate(0px, 3em);";
  playButton.removeAttribute('data-1200');
  playButton.removeAttribute('data-1201');
  playButton.removeAttribute('data-1350');

}


Pace.on('done', function(){

  var SKROLL = skrollr.init();

  var resizeHandler = debounce(function() {
    if (svgstars.initialized()) {
      svgstars.updatePaper();
      svgstars.updateFrame();
      svgstars.positionFrameInCenter();
      svgstars.removeStars();
      svgstars.addStars();
      svgstars.updateBackgroundGradient();
    }

    SKROLL.refresh();
    if (SKROLL.getScrollTop() > 129 && SKROLL.getScrollTop() < 1010) {
      SKROLL.setScrollTop(129);
    }
    city.adjustToScreen();
  }, 250);

  window.addEventListener('resize', resizeHandler);
  window.addEventListener('orientationchange', resizeHandler);

  scrolling.enable();

  document.getElementById('ScrollingHelpfulMessage').classList.remove('is-hidden');

  // Remember to perform this after YGLF-intro container is unhidden
  city.adjustToScreen();

  soundtrack.init();
});

