/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 34:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var $ = __webpack_require__(616);
function loadImages() {
  var $images = $('img.blured');
  $images.addClass('blur');
  $images.each(function () {
    var $img = $(this);
    $img.on('load', function () {
      setTimeout(function () {
        $img.css('transition', 'filter 0.3s');
        $img.removeClass('blur');
        $img.removeClass('blured');
      }, 300, function () {
        $img.removeAttr('style');
      });
    });
    if ($img[0].complete) {
      setTimeout(function () {
        $img.css('transition', 'filter 0.3s');
        $img.removeClass('blur');
        $img.removeClass('blured');
      }, 300, function () {
        $img.removeAttr('style');
      });
    }
  });
}
loadImages();

/***/ }),

/***/ 150:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";

// EXTERNAL MODULE: ../node_modules/gsap/index.js + 2 modules
var gsap = __webpack_require__(932);
;// ./assets/js/base/common/preloader.js
/* provided dependency */ var $ = __webpack_require__(616);

function renderPage() {
  var render = $(".mc__render");
  gsap/* default */.Ay.fromTo(render, 0.5, {
    opacity: "1",
    zIndex: "99999"
  }, {
    opacity: "0",
    zIndex: "-1",
    onComplete: function onComplete() {
      render.remove();
    }
  }).delay(0.4);
}
renderPage();
// EXTERNAL MODULE: ./assets/js/base/common/load-images.js
var load_images = __webpack_require__(34);
// EXTERNAL MODULE: ../node_modules/smooth-scroll/dist/smooth-scroll.polyfills.min.js
var smooth_scroll_polyfills_min = __webpack_require__(828);
var smooth_scroll_polyfills_min_default = /*#__PURE__*/__webpack_require__.n(smooth_scroll_polyfills_min);
;// ./assets/js/base/common/smooth-scroll.js
/* provided dependency */ var smooth_scroll_$ = __webpack_require__(616);

function smoothScroll() {
  new (smooth_scroll_polyfills_min_default())('a[href*="#"]', {
    speed: 1500,
    after: function after() {
      smooth_scroll_$("body").css("overflow", "");
    }
  });
}
smoothScroll();
// EXTERNAL MODULE: ./assets/js/base/common/set-svg-size.js
var set_svg_size = __webpack_require__(560);
;// ./assets/js/base/common/get-current-year.js
/* provided dependency */ var get_current_year_$ = __webpack_require__(616);
function currentYear() {
  var currentYear = get_current_year_$('.current-year');
  var currentTime = new Date();
  var year = currentTime.getFullYear();
  currentYear.text(year);
}
currentYear();
// EXTERNAL MODULE: ../node_modules/scrollreveal/dist/scrollreveal.es.js + 5 modules
var scrollreveal_es = __webpack_require__(613);
;// ./assets/js/base/common/scroll-reveal.js

function scrollInit() {
  var options = {
    distance: "20%",
    delay: 200,
    origin: "bottom",
    opacity: 0,
    mobile: false
  };
  (0,scrollreveal_es/* default */.A)().reveal(".mc__reveal", options);
}
scrollInit();
// EXTERNAL MODULE: ../node_modules/scroll-lock/dist/scroll-lock.js
var scroll_lock = __webpack_require__(550);
;// ./assets/js/components/toggle/toggle-menu.js
/* provided dependency */ var toggle_menu_$ = __webpack_require__(616);

function toggleMenu() {
  var button = toggle_menu_$('.mc__header__burger');
  var menu = toggle_menu_$('.mc__header nav');
  var items = toggle_menu_$('.mc__header nav a, .mc__header__logo');
  button.on('click', function () {
    if (toggle_menu_$(this).hasClass('active')) {
      menu.removeClass('active');
      (0,scroll_lock.enablePageScroll)();
      toggle_menu_$(this).removeClass('active');
    } else {
      menu.addClass('active');
      (0,scroll_lock.disablePageScroll)();
      toggle_menu_$(this).addClass('active');
    }
  });
  Array.from(items).forEach(function (item) {
    toggle_menu_$(item).on('click', function () {
      setTimeout(function () {
        button.removeClass('active');
        menu.removeClass('active');
        (0,scroll_lock.enablePageScroll)();
      }, 300);
    });
  });
  toggle_menu_$(window).on('resize', function () {
    if (toggle_menu_$(window).width() >= 1280 && button.hasClass('active')) {
      button.removeClass('active');
      menu.removeClass('active');
      (0,scroll_lock.enablePageScroll)();
    }
  });
}
toggleMenu();
// EXTERNAL MODULE: ../node_modules/swiper/swiper.mjs + 1 modules
var swiper = __webpack_require__(94);
// EXTERNAL MODULE: ../node_modules/swiper/modules/index.mjs + 26 modules
var modules = __webpack_require__(283);
;// ./assets/js/components/slider/slider-products-reviews.js


function sliderProductsReviews() {
  new swiper/* default */.A('.mc__products-reviews__slider', {
    modules: [modules/* Navigation */.Vx],
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    }
  });
}
sliderProductsReviews();
;// ./assets/js/components/slider/slider-products.js


function sliderProducts() {
  new swiper/* default */.A('.mc__products-items__products', {
    modules: [modules/* Navigation */.Vx, modules/* EffectFade */._R],
    effect: "fade",
    loop: true,
    fadeEffect: {
      crossFade: true
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    }
  });
}
sliderProducts();
;// ./assets/js/app.js
// #################################

// Разработано на: RISE PROJECT
// Разработчик: WOTKAD
// Сайт: WOTKAD.RU
// Сайт проекта: WOTKAD.RU/RISE

// #################################











/***/ }),

/***/ 560:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var $ = __webpack_require__(616);
function setSvgSize() {
  $('svg > use').each(function () {
    var $useElement = $(this);
    var href = $useElement.attr('xlink:href') || $useElement.attr('href');
    if (href) {
      var id = href.replace('#', '');
      var $symbol = $("#".concat(id));
      if ($symbol.length) {
        var $svg = $useElement.closest('svg');
        var viewBox = $symbol.attr('viewBox');
        var width = $symbol.attr('width');
        var height = $symbol.attr('height');
        if (viewBox) $svg.attr('viewBox', viewBox);
        if (width) $svg.attr('width', width);
        if (height) $svg.attr('height', height);
      }
    }
  });
}
setSvgSize();

/***/ }),

/***/ 813:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
/* provided dependency */ var $ = __webpack_require__(616);




if (false) {}
$(function () {
  __webpack_require__(150);
});

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			23: 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, [70], () => (__webpack_require__(813)))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=bundle.46a7cb8.bundle.js.map