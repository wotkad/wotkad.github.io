/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/js/app.js":
/*!**************************!*\
  !*** ./assets/js/app.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _base_common_preloader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base/common/preloader */ "./assets/js/base/common/preloader.js");
/* harmony import */ var _base_common_smooth_scroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base/common/smooth-scroll */ "./assets/js/base/common/smooth-scroll.js");
/* harmony import */ var _base_common_get_current_year__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./base/common/get-current-year */ "./assets/js/base/common/get-current-year.js");
/* harmony import */ var _base_common_get_header_height__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./base/common/get-header-height */ "./assets/js/base/common/get-header-height.js");
/* harmony import */ var _base_common_get_header_height__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_base_common_get_header_height__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_toggle_toggle_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/toggle/toggle-menu */ "./assets/js/components/toggle/toggle-menu.js");
/* harmony import */ var _components_toggle_toggle_blocks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/toggle/toggle-blocks */ "./assets/js/components/toggle/toggle-blocks.js");
/* harmony import */ var _components_toggle_toggle_blocks_popup__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/toggle/toggle-blocks-popup */ "./assets/js/components/toggle/toggle-blocks-popup.js");
/* harmony import */ var _components_toggle_toggle_blocks_popup__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_components_toggle_toggle_blocks_popup__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_toggle_toggle_blocks_popup_mobile__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/toggle/toggle-blocks-popup-mobile */ "./assets/js/components/toggle/toggle-blocks-popup-mobile.js");
/* harmony import */ var _components_toggle_toggle_galleries__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/toggle/toggle-galleries */ "./assets/js/components/toggle/toggle-galleries.js");
/* harmony import */ var _components_toggle_toggle_about__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/toggle/toggle-about */ "./assets/js/components/toggle/toggle-about.js");
/* harmony import */ var _components_toggle_toggle_about_list__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/toggle/toggle-about-list */ "./assets/js/components/toggle/toggle-about-list.js");
/* harmony import */ var _components_toggle_toggle_about_list__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_components_toggle_toggle_about_list__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_toggle_toggle_sign_in_popup__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/toggle/toggle-sign-in-popup */ "./assets/js/components/toggle/toggle-sign-in-popup.js");
/* harmony import */ var _components_toggle_toggle_model_popup__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/toggle/toggle-model-popup */ "./assets/js/components/toggle/toggle-model-popup.js");
/* harmony import */ var _components_slider_slider_gallery__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/slider/slider-gallery */ "./assets/js/components/slider/slider-gallery.js");
/* harmony import */ var _components_slider_slider_popup_model__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/slider/slider-popup-model */ "./assets/js/components/slider/slider-popup-model.js");
/* harmony import */ var _components_form_sendForm_SignUp__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/form/sendForm-SignUp */ "./assets/js/components/form/sendForm-SignUp.js");
/* harmony import */ var _components_form_sendForm_Callback__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/form/sendForm-Callback */ "./assets/js/components/form/sendForm-Callback.js");
/* harmony import */ var _components_form_sendForm_Estimate__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/form/sendForm-Estimate */ "./assets/js/components/form/sendForm-Estimate.js");
// #################################

// Разработано на: RISE PROJECT
// Разработчик: WOTKAD
// Сайт: WOTKAD.RU
// Сайт проекта: WOTKAD.RU/RISE

// #################################




















/***/ }),

/***/ "./assets/js/base/common/get-current-year.js":
/*!***************************************************!*\
  !*** ./assets/js/base/common/get-current-year.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ currentYear)
/* harmony export */ });
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "../node_modules/jquery/dist/jquery.js");
function currentYear() {
  var currentYear = $('.currentYear');
  var currentTime = new Date();
  var year = currentTime.getFullYear();
  currentYear.text(year);
}
currentYear();

/***/ }),

/***/ "./assets/js/base/common/get-header-height.js":
/*!****************************************************!*\
  !*** ./assets/js/base/common/get-header-height.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "../node_modules/jquery/dist/jquery.js");
function getHeaderHeight() {
  var height = $('.header').outerHeight();
  document.documentElement.style.setProperty('--header-height', "".concat(height, "px"));
}
getHeaderHeight();

/***/ }),

/***/ "./assets/js/base/common/preloader.js":
/*!********************************************!*\
  !*** ./assets/js/base/common/preloader.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ "../node_modules/gsap/index.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "../node_modules/jquery/dist/jquery.js");

function renderPage() {
  var render = $(".render");
  gsap__WEBPACK_IMPORTED_MODULE_0__["default"].fromTo(render, 0.5, {
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

/***/ }),

/***/ "./assets/js/base/common/smooth-scroll.js":
/*!************************************************!*\
  !*** ./assets/js/base/common/smooth-scroll.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var smooth_scroll__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! smooth-scroll */ "../node_modules/smooth-scroll/dist/smooth-scroll.polyfills.min.js");
/* harmony import */ var smooth_scroll__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(smooth_scroll__WEBPACK_IMPORTED_MODULE_0__);
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "../node_modules/jquery/dist/jquery.js");

function smoothScroll() {
  new (smooth_scroll__WEBPACK_IMPORTED_MODULE_0___default())('a[href*="#"]', {
    speed: 300,
    after: function after() {
      $("body").css("overflow", "");
    }
  });
}
smoothScroll();

/***/ }),

/***/ "./assets/js/components/form/sendForm-Callback.js":
/*!********************************************************!*\
  !*** ./assets/js/components/form/sendForm-Callback.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sendMail_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sendMail.js */ "./assets/js/components/form/sendMail.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "../node_modules/jquery/dist/jquery.js");

function sendFormCallback() {
  var validateName = function validateName(name) {
    if (name.length >= 2 && name.length < 50) {
      return name.match(/^[а-яА-Я]/);
    }
  };
  var validatePhone = function validatePhone(phone) {
    return phone.match(/^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/);
  };
  var validatedName = function validatedName() {
    var name = $(this).val();
    if (validateName(name)) {
      $(this).removeClass('not-valid').addClass('filled');
    } else {
      $(this).addClass('not-valid').addClass('filled');
    }
    if (name == '') {
      $(this).removeClass('not-valid').removeClass('filled');
    }
    return false;
  };
  var validatedPhone = function validatedPhone() {
    var phone = $(this).val();
    if (validatePhone(phone) && phone.length > 0) {
      $(this).removeClass('not-valid');
      $(this).addClass('filled');
    } else {
      $(this).addClass('filled');
      $(this).addClass('not-valid');
    }
    if (phone == '') {
      $(this).removeClass('not-valid').removeClass('filled');
    }
    return false;
  };
  $('input[name="name"]').on('input', function () {
    validatedName.call(this);
  });
  $('input[name="phone"]').on('input', function () {
    validatedPhone.call(this);
  });
  function sender() {
    var form = $('.callback__form');
    var button = $('.callback__form button[type="submit"');
    var buttonContent = $('.callback__form button span');
    var timer = 0;
    button.on('click', function () {
      Array.from($('.callback__form input')).forEach(function (input) {
        if ($(input).val() == '') {
          $(input).addClass('not-valid');
        } else {
          $(input).removeClass('not-valid');
        }
      });
    });
    if (form) {
      form.on('submit', function (e) {
        e.preventDefault();
        if (!$('.callback__form input[name="name"]').hasClass('not-valid') && !$('.callback__form input[name="phone"]').hasClass('not-valid')) {
          (0,_sendMail_js__WEBPACK_IMPORTED_MODULE_0__["default"])(form).then(function () {
            form.get(0).reset();
            $('.callback__form input').removeClass('not-valid');
            $('.callback__form input').removeClass('filled');
            buttonContent.text('Отправлено!');
            timer = setTimeout(function () {
              buttonContent.text('Отправить');
              clearTimeout(timer);
            }, 2000);
          });
        }
      });
    }
  }
  sender();
  $('input[type="tel"]').on('keydown', function (e) {
    if (e.key !== undefined) {
      if (e.key.length == 1 && e.key.match(/[^0-9'".]/)) {
        return false;
      }
    }
  });
}
sendFormCallback();

/***/ }),

/***/ "./assets/js/components/form/sendForm-Estimate.js":
/*!********************************************************!*\
  !*** ./assets/js/components/form/sendForm-Estimate.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sendMail_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sendMail.js */ "./assets/js/components/form/sendMail.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "../node_modules/jquery/dist/jquery.js");

function sendFormEstimate() {
  var validateName = function validateName(name) {
    if (name.length >= 2 && name.length < 50) {
      return name.match(/^[а-яА-Я]/);
    }
  };
  var validatePhone = function validatePhone(phone) {
    return phone.match(/^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/);
  };
  var validatedName = function validatedName() {
    var name = $(this).val();
    if (validateName(name)) {
      $(this).removeClass('not-valid').addClass('filled');
    } else {
      $(this).addClass('not-valid').addClass('filled');
    }
    if (name == '') {
      $(this).removeClass('not-valid').removeClass('filled');
    }
    return false;
  };
  var validatedPhone = function validatedPhone() {
    var phone = $(this).val();
    if (validatePhone(phone) && phone.length > 0) {
      $(this).removeClass('not-valid');
      $(this).addClass('filled');
    } else {
      $(this).addClass('filled');
      $(this).addClass('not-valid');
    }
    if (phone == '') {
      $(this).removeClass('not-valid').removeClass('filled');
    }
    return false;
  };
  $('input[name="name"]').on('input', function () {
    validatedName.call(this);
  });
  $('input[name="phone"]').on('input', function () {
    validatedPhone.call(this);
  });
  function sender() {
    var form = $('.estimate__form');
    var button = $('.estimate__form button[type="submit"');
    var buttonContent = $('.estimate__form button span');
    var timer = 0;
    button.on('click', function () {
      Array.from($('.estimate__form input')).forEach(function (input) {
        if ($(input).val() == '') {
          $(input).addClass('not-valid');
        } else {
          $(input).removeClass('not-valid');
        }
      });
    });
    if (form) {
      form.on('submit', function (e) {
        e.preventDefault();
        if (!$('.estimate__form input[name="name"]').hasClass('not-valid') && !$('.estimate__form input[name="phone"]').hasClass('not-valid')) {
          (0,_sendMail_js__WEBPACK_IMPORTED_MODULE_0__["default"])(form).then(function () {
            form.get(0).reset();
            $('.estimate__form input').removeClass('not-valid');
            $('.estimate__form input').removeClass('filled');
            buttonContent.text('Отправлено!');
            timer = setTimeout(function () {
              buttonContent.text('Отправить');
              clearTimeout(timer);
            }, 2000);
          });
        }
      });
    }
  }
  sender();
  $('input[type="tel"]').on('keydown', function (e) {
    if (e.key !== undefined) {
      if (e.key.length == 1 && e.key.match(/[^0-9'".]/)) {
        return false;
      }
    }
  });
}
sendFormEstimate();

/***/ }),

/***/ "./assets/js/components/form/sendForm-SignUp.js":
/*!******************************************************!*\
  !*** ./assets/js/components/form/sendForm-SignUp.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sendMail_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sendMail.js */ "./assets/js/components/form/sendMail.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "../node_modules/jquery/dist/jquery.js");

function sendFormSignUp() {
  var validateName = function validateName(name) {
    if (name.length >= 2 && name.length < 50) {
      return name.match(/^[а-яА-Я]/);
    }
  };
  var validatePhone = function validatePhone(phone) {
    return phone.match(/^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/);
  };
  var validatedName = function validatedName() {
    var name = $(this).val();
    if (validateName(name)) {
      $(this).removeClass('not-valid').addClass('filled');
    } else {
      $(this).addClass('not-valid').addClass('filled');
    }
    if (name == '') {
      $(this).removeClass('not-valid').removeClass('filled');
    }
    return false;
  };
  var validatedPhone = function validatedPhone() {
    var phone = $(this).val();
    if (validatePhone(phone) && phone.length > 0) {
      $(this).removeClass('not-valid');
      $(this).addClass('filled');
    } else {
      $(this).addClass('filled');
      $(this).addClass('not-valid');
    }
    if (phone == '') {
      $(this).removeClass('not-valid').removeClass('filled');
    }
    return false;
  };
  $('input[name="name"]').on('input', function () {
    validatedName.call(this);
  });
  $('input[name="phone"]').on('input', function () {
    validatedPhone.call(this);
  });
  function sender() {
    var form = $('.popup-sign-up__form');
    var button = $('.popup-sign-up__button').not('.popup-sign-up__button-success');
    var success = $('.popup-sign-up__success');
    var wrapper = $('.popup-sign-up__wrapper');
    button.on('click', function () {
      Array.from($('.popup-sign-up__form input')).forEach(function (input) {
        if ($(input).val() == '') {
          $(input).addClass('not-valid');
        } else {
          $(input).removeClass('not-valid');
        }
      });
    });
    if (form) {
      form.on('submit', function (e) {
        e.preventDefault();
        if (!$('.popup-sign-up__form input[name="name"]').hasClass('not-valid') && !$('.popup-sign-up__form input[name="phone"]').hasClass('not-valid')) {
          (0,_sendMail_js__WEBPACK_IMPORTED_MODULE_0__["default"])(form).then(function () {
            form.get(0).reset();
            $('.popup-sign-up__form input').removeClass('not-valid');
            $('.popup-sign-up__form input').removeClass('filled');
            success.show();
            wrapper.hide();
          });
        }
      });
    }
  }
  sender();
  $('input[type="tel"]').on('keydown', function (e) {
    if (e.key !== undefined) {
      if (e.key.length == 1 && e.key.match(/[^0-9'".]/)) {
        return false;
      }
    }
  });
}
sendFormSignUp();

/***/ }),

/***/ "./assets/js/components/form/sendMail.js":
/*!***********************************************!*\
  !*** ./assets/js/components/form/sendMail.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ sendMail)
/* harmony export */ });
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "../node_modules/jquery/dist/jquery.js");
function sendMail(selector) {
  var formData = new FormData($(selector).get(0));
  return fetch('/assets/files/mail.php', {
    method: 'POST',
    body: formData
  });
}
;

/***/ }),

/***/ "./assets/js/components/slider/slider-gallery.js":
/*!*******************************************************!*\
  !*** ./assets/js/components/slider/slider-gallery.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "../node_modules/swiper/swiper.mjs");
/* harmony import */ var swiper_modules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper/modules */ "../node_modules/swiper/modules/index.mjs");


function sliderGallery() {
  new swiper__WEBPACK_IMPORTED_MODULE_0__["default"]('.swiper-gallery', {
    modules: [swiper_modules__WEBPACK_IMPORTED_MODULE_1__.Scrollbar],
    grabCursor: true,
    spaceBetween: 10,
    slidesPerView: 1,
    scrollbar: {
      el: ".gallery__slider .swiper-scrollbar"
    },
    breakpoints: {
      1366: {
        slidesPerView: 1.3,
        spaceBetween: 32
      }
    }
  });
  new swiper__WEBPACK_IMPORTED_MODULE_0__["default"](".swiper-gallery-inner", {
    modules: [swiper_modules__WEBPACK_IMPORTED_MODULE_1__.Navigation],
    spaceBetween: 16,
    nested: true,
    allowTouchMove: false,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    }
  });
}
sliderGallery();

/***/ }),

/***/ "./assets/js/components/slider/slider-popup-model.js":
/*!***********************************************************!*\
  !*** ./assets/js/components/slider/slider-popup-model.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "../node_modules/swiper/swiper.mjs");
/* harmony import */ var swiper_modules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper/modules */ "../node_modules/swiper/modules/index.mjs");


function sliderPopupModel() {
  new swiper__WEBPACK_IMPORTED_MODULE_0__["default"]('.swiper-popup-model', {
    modules: [swiper_modules__WEBPACK_IMPORTED_MODULE_1__.Navigation],
    grabCursor: true,
    spaceBetween: 10,
    slidesPerView: 1,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    }
  });
}
sliderPopupModel();

/***/ }),

/***/ "./assets/js/components/toggle/toggle-about-list.js":
/*!**********************************************************!*\
  !*** ./assets/js/components/toggle/toggle-about-list.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "../node_modules/jquery/dist/jquery.js");
function toggleAboutList() {
  var button = $('.about__current');
  var buttonContent = $('.about__current span');
  var list = $('.about__list');
  var items = $('.about__city ');
  button.on('click', function () {
    $(this).toggleClass('active');
    list.toggleClass('active');
  });
  Array.from(items).forEach(function (item) {
    $(item).on('click', function () {
      items.removeClass('active');
      $(this).addClass('active');
      list.removeClass('active');
      buttonContent.text($(this).text());
    });
  });
  $(document).mouseup(function (e) {
    if (!list.is(e.target) && !button.is(e.target) && button.has(e.target).length === 0) {
      list.removeClass('active');
      button.removeClass('active');
    }
  });
}
toggleAboutList();

/***/ }),

/***/ "./assets/js/components/toggle/toggle-about.js":
/*!*****************************************************!*\
  !*** ./assets/js/components/toggle/toggle-about.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ "../node_modules/gsap/index.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "../node_modules/jquery/dist/jquery.js");

function toggleAbout() {
  var button = $('.about__switch');
  var container = $('.about__container');
  var _loop = function _loop(i) {
    $(button[i]).on('click', function () {
      var _this = this;
      var id = button[i].getAttribute('data-id');
      var block = $('.about__container[data-id="' + id + '"]');
      container.removeClass('active');
      button.removeClass('active');
      $('.about__switch[data-id="' + id + '"]').addClass('active');
      gsap__WEBPACK_IMPORTED_MODULE_0__["default"].to(container, {
        opacity: 0,
        duration: 0.3,
        onComplete: function onComplete() {
          gsap__WEBPACK_IMPORTED_MODULE_0__["default"].to(container, {
            display: 'none',
            duration: 0
          });
          gsap__WEBPACK_IMPORTED_MODULE_0__["default"].to($(block).attr('data-id', $(_this).attr('data-id')), {
            display: 'block',
            duration: 0,
            onComplete: function onComplete() {
              gsap__WEBPACK_IMPORTED_MODULE_0__["default"].to($(block).attr('data-id', $(_this).attr('data-id')), {
                opacity: 1,
                duration: 0.3
              });
            }
          });
        }
      });
    });
  };
  for (var i = 0; i < Array.from(button).length; i++) {
    _loop(i);
  }
}
toggleAbout();

/***/ }),

/***/ "./assets/js/components/toggle/toggle-blocks-popup-mobile.js":
/*!*******************************************************************!*\
  !*** ./assets/js/components/toggle/toggle-blocks-popup-mobile.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ "../node_modules/gsap/index.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "../node_modules/jquery/dist/jquery.js");

function toggleBlocksPopupMobile() {
  var switcher = $('.why__switcher');
  var container = $('.why__containers .why__container');
  var bg = $('.why__bg');
  var close = $('.why__close');
  var _loop = function _loop(i) {
    $(switcher[i]).on('click', function () {
      var _this = this;
      var id = switcher[i].getAttribute('data-id');
      var block = $('.why__containers .why__container[data-id="' + id + '"]');
      if (block.hasClass('active')) {
        bg.removeClass('active');
      } else {
        bg.addClass('active');
      }
      gsap__WEBPACK_IMPORTED_MODULE_0__["default"].to(container, {
        opacity: 0,
        duration: 0.3,
        onComplete: function onComplete() {
          gsap__WEBPACK_IMPORTED_MODULE_0__["default"].to(container, {
            display: 'none',
            duration: 0
          });
          gsap__WEBPACK_IMPORTED_MODULE_0__["default"].to($(block).attr('data-id', $(_this).attr('data-id')), {
            display: 'block',
            duration: 0,
            onComplete: function onComplete() {
              gsap__WEBPACK_IMPORTED_MODULE_0__["default"].to($(block).attr('data-id', $(_this).attr('data-id')), {
                opacity: 1,
                zIndex: 100,
                duration: 0.3
              });
            }
          });
        }
      });
    });
  };
  for (var i = 0; i < Array.from(switcher).length; i++) {
    _loop(i);
  }
  close.on('click', function () {
    bg.removeClass('active');
    gsap__WEBPACK_IMPORTED_MODULE_0__["default"].to(container, {
      opacity: 0,
      zIndex: -1,
      duration: 0.3,
      onComplete: function onComplete() {
        gsap__WEBPACK_IMPORTED_MODULE_0__["default"].to(container, {
          display: 'none',
          duration: 0
        });
      }
    });
  });
}
$(window).on('resize', function () {
  if ($(window).width() <= 1366) {
    toggleBlocksPopupMobile();
  }
});
if ($(window).width() <= 1366) {
  toggleBlocksPopupMobile();
}

/***/ }),

/***/ "./assets/js/components/toggle/toggle-blocks-popup.js":
/*!************************************************************!*\
  !*** ./assets/js/components/toggle/toggle-blocks-popup.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "../node_modules/jquery/dist/jquery.js");
function toggleBlocksPopup() {
  var button = $('.why__switcher');
  var close = $('.why__close');
  var container = $('.why__container');
  button.on('click', function () {
    button.not(this).removeClass('active');
    button.not(this).next().removeClass('active');
    button.not(this).parent().removeClass('active');
    $(this).toggleClass('active');
    $(this).parent().toggleClass('active');
    $(this).next().toggleClass('active');
  });
  close.on('click', function () {
    button.removeClass('active');
    button.next().removeClass('active');
    button.parent().removeClass('active');
  });
  $(document).mouseup(function (e) {
    if (!container.is(e.target) && !button.is(e.target) && button.has(e.target).length === 0) {
      container.removeClass('active');
      button.parent().removeClass('active');
      button.removeClass('active');
    }
  });
}
toggleBlocksPopup();

/***/ }),

/***/ "./assets/js/components/toggle/toggle-blocks.js":
/*!******************************************************!*\
  !*** ./assets/js/components/toggle/toggle-blocks.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ "../node_modules/gsap/index.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "../node_modules/jquery/dist/jquery.js");

function toggleBlocks() {
  var button = $('.why__button');
  var container = $('.why__block');
  var popupButton = $('.why__switcher');
  var popupContainer = $('.why__container');
  var _loop = function _loop(i) {
    $(button[i]).on('click', function () {
      var _this = this;
      var id = button[i].getAttribute('data-id');
      var block = $('.why__block[data-id="' + id + '"]');
      popupButton.removeClass('active');
      popupContainer.removeClass('active');
      button.removeClass('active');
      $('.why__button[data-id="' + id + '"]').addClass('active');
      gsap__WEBPACK_IMPORTED_MODULE_0__["default"].to(container, {
        opacity: 0,
        duration: 0.3,
        onComplete: function onComplete() {
          gsap__WEBPACK_IMPORTED_MODULE_0__["default"].to(container, {
            display: 'none',
            duration: 0
          });
          gsap__WEBPACK_IMPORTED_MODULE_0__["default"].to($(block).attr('data-id', $(_this).attr('data-id')), {
            display: 'block',
            duration: 0,
            onComplete: function onComplete() {
              gsap__WEBPACK_IMPORTED_MODULE_0__["default"].to($(block).attr('data-id', $(_this).attr('data-id')), {
                opacity: 1,
                duration: 0.3
              });
            }
          });
        }
      });
    });
  };
  for (var i = 0; i < Array.from(button).length; i++) {
    _loop(i);
  }
}
toggleBlocks();

/***/ }),

/***/ "./assets/js/components/toggle/toggle-galleries.js":
/*!*********************************************************!*\
  !*** ./assets/js/components/toggle/toggle-galleries.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ "../node_modules/gsap/index.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "../node_modules/jquery/dist/jquery.js");

function toggleGalleries() {
  var button = $('.gallery__button');
  var container = $('.gallery__slider');
  var _loop = function _loop(i) {
    $(button[i]).on('click', function () {
      var _this = this;
      var id = button[i].getAttribute('data-id');
      var block = $('.gallery__slider[data-id="' + id + '"]');
      button.removeClass('active');
      $('.gallery__button[data-id="' + id + '"]').addClass('active');
      gsap__WEBPACK_IMPORTED_MODULE_0__["default"].to(container, {
        opacity: 0,
        duration: 0.3,
        onComplete: function onComplete() {
          gsap__WEBPACK_IMPORTED_MODULE_0__["default"].to(container, {
            display: 'none',
            duration: 0
          });
          gsap__WEBPACK_IMPORTED_MODULE_0__["default"].to($(block).attr('data-id', $(_this).attr('data-id')), {
            display: 'block',
            duration: 0,
            onComplete: function onComplete() {
              gsap__WEBPACK_IMPORTED_MODULE_0__["default"].to($(block).attr('data-id', $(_this).attr('data-id')), {
                opacity: 1,
                duration: 0.3
              });
            }
          });
        }
      });
    });
  };
  for (var i = 0; i < Array.from(button).length; i++) {
    _loop(i);
  }
}
toggleGalleries();

/***/ }),

/***/ "./assets/js/components/toggle/toggle-menu.js":
/*!****************************************************!*\
  !*** ./assets/js/components/toggle/toggle-menu.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var scroll_lock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! scroll-lock */ "../node_modules/scroll-lock/dist/scroll-lock.js");
/* harmony import */ var scroll_lock__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(scroll_lock__WEBPACK_IMPORTED_MODULE_0__);
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "../node_modules/jquery/dist/jquery.js");

function toggleMenu() {
  var button = $('.header__burger');
  var menu = $('.header__mobmenu');
  var items = $('.header nav a, .header__logo');
  button.on('click', function () {
    if ($(this).hasClass('active')) {
      menu.removeClass('active');
      (0,scroll_lock__WEBPACK_IMPORTED_MODULE_0__.enablePageScroll)();
      $(this).removeClass('active');
    } else {
      menu.addClass('active');
      (0,scroll_lock__WEBPACK_IMPORTED_MODULE_0__.disablePageScroll)();
      $(this).addClass('active');
    }
  });
  Array.from(items).forEach(function (item) {
    $(item).on('click', function () {
      setTimeout(function () {
        button.removeClass('active');
        menu.removeClass('active');
        (0,scroll_lock__WEBPACK_IMPORTED_MODULE_0__.enablePageScroll)();
      }, 300);
    });
  });
  $(window).on('resize', function () {
    if ($(window).width() >= 1366 && button.hasClass('active')) {
      button.removeClass('active');
      menu.removeClass('active');
      (0,scroll_lock__WEBPACK_IMPORTED_MODULE_0__.enablePageScroll)();
    }
  });
}
toggleMenu();

/***/ }),

/***/ "./assets/js/components/toggle/toggle-model-popup.js":
/*!***********************************************************!*\
  !*** ./assets/js/components/toggle/toggle-model-popup.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var scroll_lock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! scroll-lock */ "../node_modules/scroll-lock/dist/scroll-lock.js");
/* harmony import */ var scroll_lock__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(scroll_lock__WEBPACK_IMPORTED_MODULE_0__);
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "../node_modules/jquery/dist/jquery.js");

function toggleModelPopup() {
  var button = $('.trigger-model');
  var popup = $('.popup-model');
  var bg = $('.popup-model__bg');
  var close = $('.popup-model__close, .popup-model__back');
  var scrollableElement = document.querySelector('.popup-model__content');
  button.on('click', function () {
    popup.addClass('active');
    bg.addClass('active');
    (0,scroll_lock__WEBPACK_IMPORTED_MODULE_0__.disablePageScroll)(scrollableElement);
  });
  close.on('click', function () {
    popup.removeClass('active');
    bg.removeClass('active');
    (0,scroll_lock__WEBPACK_IMPORTED_MODULE_0__.enablePageScroll)();
  });
}
toggleModelPopup();

/***/ }),

/***/ "./assets/js/components/toggle/toggle-sign-in-popup.js":
/*!*************************************************************!*\
  !*** ./assets/js/components/toggle/toggle-sign-in-popup.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var scroll_lock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! scroll-lock */ "../node_modules/scroll-lock/dist/scroll-lock.js");
/* harmony import */ var scroll_lock__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(scroll_lock__WEBPACK_IMPORTED_MODULE_0__);
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "../node_modules/jquery/dist/jquery.js");

function toggleSignInPopup() {
  var button = $('.trigger-sign-in');
  var popup = $('.popup-sign-up');
  var bg = $('.popup-sign-up__bg');
  var close = $('.popup-sign-up__close, .popup-sign-up__button-success');
  var success = $('.popup-sign-up__success');
  var wrapper = $('.popup-sign-up__wrapper');
  button.on('click', function () {
    popup.addClass('active');
    bg.addClass('active');
    (0,scroll_lock__WEBPACK_IMPORTED_MODULE_0__.disablePageScroll)();
  });
  close.on('click', function () {
    popup.removeClass('active');
    bg.removeClass('active');
    (0,scroll_lock__WEBPACK_IMPORTED_MODULE_0__.enablePageScroll)();
    success.hide();
    wrapper.show();
  });
}
toggleSignInPopup();

/***/ }),

/***/ "./bundle.js":
/*!*******************!*\
  !*** ./bundle.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper/css */ "../node_modules/swiper/swiper.css");
/* harmony import */ var swiper_css_scrollbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper/css/scrollbar */ "../node_modules/swiper/modules/scrollbar.css");
/* harmony import */ var swiper_css_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper/css/navigation */ "../node_modules/swiper/modules/navigation.css");
/* harmony import */ var _assets_styles_app_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/styles/app.scss */ "./assets/styles/app.scss");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "../node_modules/jquery/dist/jquery.js");




if (false) {}
$(function () {
  __webpack_require__(/*! ./assets/js/app */ "./assets/js/app.js");
});

/***/ }),

/***/ "./assets/styles/app.scss":
/*!********************************!*\
  !*** ./assets/styles/app.scss ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
/******/ 			"bundle": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendor-node_modules_gsap_index_js-node_modules_jquery_dist_jquery_js-node_modules_swiper_modu-fc2e99"], () => (__webpack_require__("./bundle.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=bundle.0246c8f.bundle.js.map