const skrollr = require("skrollr");

var scrolling = require("./modules/scrolling");
var city = require("./modules/city");
var svgstars = require("./modules/svgstars");
var viewport = require("./modules/viewport");
var device = require("./modules/device");
var debounce = require("./modules/debounce");
var soundtrack = require("./modules/soundtrack");

// Disable scrolling as soon as possible
// As soon as all elements will be loaded scrolling will be enabled
scrolling.disable();

document.getElementById("YGLF-intro").classList.remove("is-hidden");

svgstars.initPaper();
svgstars.initFrame();
svgstars.initStars();
svgstars.initBackgroundGradient();

window.shootStars = function () {
  var SKROLL = skrollr.init();

  var resizeHandler = debounce(function () {
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

  window.addEventListener("resize", resizeHandler);
  window.addEventListener("orientationchange", resizeHandler);

  scrolling.enable();

  document
    .getElementById("ScrollingHelpfulMessage")
    .classList.remove("is-hidden");

  // Remember to perform this after YGLF-intro container is unhidden
  city.adjustToScreen();

  // soundtrack.init();
};

document.addEventListener("load", function () {
  var p = document.getElementById("auth-input"),
    s = window.getSelection(),
    r = document.createRange();
  p.trigger("click");
  // p.innerHTML = '\u00a0';
  // r.selectNodeContents(p);
  // s.removeAllRanges();
  // s.addRange(r);
  // document.execCommand('delete', false, null);
});
