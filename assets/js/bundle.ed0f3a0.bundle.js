/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 125:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ../node_modules/gsap/index.js + 2 modules
var gsap = __webpack_require__(667);
;// CONCATENATED MODULE: ./assets/js/base/common/preloader.js
/* provided dependency */ var $ = __webpack_require__(638);

function renderPage() {
  var render = $(".render");
  gsap/* default */.ZP.fromTo(render, 0.5, {
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
// EXTERNAL MODULE: ../node_modules/smooth-scroll/dist/smooth-scroll.polyfills.min.js
var smooth_scroll_polyfills_min = __webpack_require__(872);
var smooth_scroll_polyfills_min_default = /*#__PURE__*/__webpack_require__.n(smooth_scroll_polyfills_min);
;// CONCATENATED MODULE: ./assets/js/base/common/smooth-scroll.js
/* provided dependency */ var smooth_scroll_$ = __webpack_require__(638);

function smoothScroll() {
  new (smooth_scroll_polyfills_min_default())('a[href*="#"]', {
    speed: 1500,
    after: function after() {
      smooth_scroll_$("body").css("overflow", "");
    }
  });
}
smoothScroll();
// EXTERNAL MODULE: ../node_modules/scrollreveal/dist/scrollreveal.es.js + 5 modules
var scrollreveal_es = __webpack_require__(401);
;// CONCATENATED MODULE: ./assets/js/base/common/scroll-reveal.js

function scrollInit() {
  var options = {
    distance: "20%",
    origin: "bottom",
    opacity: 0,
    mobile: false
  };
  (0,scrollreveal_es/* default */.Z)().reveal(".reveal", options);
}
scrollInit();
// EXTERNAL MODULE: ./assets/js/base/checks/check-internal-links.js
var check_internal_links = __webpack_require__(706);
// EXTERNAL MODULE: ./assets/js/base/checks/check-target.js
var check_target = __webpack_require__(547);
;// CONCATENATED MODULE: ./assets/js/base/common/get-current-year.js
/* provided dependency */ var get_current_year_$ = __webpack_require__(638);
function currentYear() {
  var currentYear = get_current_year_$('.currentYear');
  var currentTime = new Date();
  var year = currentTime.getFullYear();
  currentYear.text(year);
}
currentYear();
// EXTERNAL MODULE: ./assets/js/base/common/get-header-height.js
var get_header_height = __webpack_require__(243);
// EXTERNAL MODULE: ../node_modules/swiper/swiper.mjs + 1 modules
var swiper = __webpack_require__(904);
// EXTERNAL MODULE: ../node_modules/swiper/modules/index.mjs + 25 modules
var modules = __webpack_require__(165);
;// CONCATENATED MODULE: ./assets/js/components/gallery.js


function gallery() {
  new swiper/* default */.Z('.gallery__slider', {
    modules: [modules/* Navigation */.W_],
    spaceBetween: 20,
    slidesPerView: 1,
    breakpoints: {
      768: {
        slidesPerView: 1.8
      },
      1320: {
        slidesPerView: 2.3
      }
    },
    navigation: {
      nextEl: ".gallery .swiper-button-next",
      prevEl: ".gallery .swiper-button-prev"
    }
  });
}
gallery();
// EXTERNAL MODULE: ./assets/js/components/vacancies.js
var vacancies = __webpack_require__(901);
// EXTERNAL MODULE: ../node_modules/scroll-lock/dist/scroll-lock.js
var scroll_lock = __webpack_require__(444);
;// CONCATENATED MODULE: ./assets/js/components/popup.js
/* provided dependency */ var popup_$ = __webpack_require__(638);

function popup() {
  var button = popup_$('.vacancies__popup');
  var popup = popup_$('.popup__bg');
  var close = popup_$('.popup__close');
  var scrollableElement = document.querySelector('.popup__bg');
  button.on('click', function () {
    if (button.hasClass('active')) {
      popup.hide();
      (0,scroll_lock.enablePageScroll)();
    } else {
      popup.show();
      (0,scroll_lock.disablePageScroll)(scrollableElement);
    }
  });
  close.on('click', function () {
    popup.hide();
    (0,scroll_lock.enablePageScroll)();
  });
  popup_$(window).on('keydown', function (e) {
    if (e.keyCode == 27) {
      popup.hide();
      (0,scroll_lock.enablePageScroll)();
    }
  });
}
popup();
;// CONCATENATED MODULE: ./assets/js/app.js
// #################################

// Разработано на: RISE PROJECT
// Разработчик: WOTKAD
// Сайт: WOTKAD.RU
// Сайт проекта: WOTKAD.RU/RISE

// #################################












/***/ }),

/***/ 706:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var $ = __webpack_require__(638);
function checkInternalLinks() {
  var links = $("a[href^='/']");
  Array.from(links).forEach(function (link) {
    fetch(link.href, {
      mode: "cors",
      headers: {
        "Content-Type": "application/json;charset=utf-8"
      }
    }).then(function (response) {
      if (response.status == 404) {
        $(link).attr("href", "/404");
      }
    });
  });
}
checkInternalLinks();

/***/ }),

/***/ 547:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var $ = __webpack_require__(638);
function checkTarget() {
  $(document.links).filter(function () {
    return this.hostname != window.location.hostname;
  }).attr('target', '_blank');
}
checkTarget();

/***/ }),

/***/ 243:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var $ = __webpack_require__(638);
function getHeaderHeight() {
  var height = $('.header').outerHeight();
  document.documentElement.style.setProperty('--header-height', "".concat(height, "px"));
}
getHeaderHeight();

/***/ }),

/***/ 901:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var $ = __webpack_require__(638);
function vacancies() {
  var button = $('.vacancies__button');
  var container = $('.vacancies__container');
  var _loop = function _loop(i) {
    $(button[i]).on('click', function () {
      var id = button[i].getAttribute('data-id');
      var block = $('.vacancies__container[data-id="' + id + '"]');
      container.removeClass('active');
      button.removeClass('active');
      $(block).attr('data-id', $(this).attr('data-id')).addClass('active');
      $(this).addClass('active');
    });
  };
  for (var i = 0; i < Array.from(button).length; i++) {
    _loop(i);
  }
}
vacancies();
function vacanciesToggle() {
  var button = $('.vacancies__header__toggle');
  button.on('click', function () {
    $(this).parent().toggleClass('active');
    $(this).parent().next().toggleClass('active');
  });
}
vacanciesToggle();

/***/ }),

/***/ 109:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
/* provided dependency */ var $ = __webpack_require__(638);



if (false) {}
$(function () {
  __webpack_require__(125);
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
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
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
/******/ 			296: 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, [370], () => (__webpack_require__(109)))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=bundle.ed0f3a0.bundle.js.map