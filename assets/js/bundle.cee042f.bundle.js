/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 118:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ../node_modules/gsap/index.js + 2 modules
var gsap = __webpack_require__(932);
;// CONCATENATED MODULE: ./assets/js/base/common/preloader.js
/* provided dependency */ var $ = __webpack_require__(616);

function renderPage() {
  var render = $(".render");
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
// EXTERNAL MODULE: ../node_modules/smooth-scroll/dist/smooth-scroll.polyfills.min.js
var smooth_scroll_polyfills_min = __webpack_require__(828);
var smooth_scroll_polyfills_min_default = /*#__PURE__*/__webpack_require__.n(smooth_scroll_polyfills_min);
;// CONCATENATED MODULE: ./assets/js/base/common/smooth-scroll.js
/* provided dependency */ var smooth_scroll_$ = __webpack_require__(616);

function smoothScroll() {
  new (smooth_scroll_polyfills_min_default())('a[href*="#"]', {
    speed: 300,
    after: function after() {
      smooth_scroll_$("body").css("overflow", "");
    }
  });
}
smoothScroll();
// EXTERNAL MODULE: ../node_modules/scrollreveal/dist/scrollreveal.es.js + 5 modules
var scrollreveal_es = __webpack_require__(613);
;// CONCATENATED MODULE: ./assets/js/base/common/scroll-reveal.js
/* provided dependency */ var scroll_reveal_$ = __webpack_require__(616);

function scrollInit() {
  var options = {
    delay: 500,
    distance: "20%",
    origin: "bottom",
    opacity: 0,
    mobile: false
  };
  var revealItemsByScale = {
    delay: 300,
    opacity: 1,
    afterReveal: function afterReveal(el) {
      scroll_reveal_$(el).addClass('active');
    }
  };
  var revealBorderOptions = {
    duration: 600,
    opacity: 1,
    afterReveal: function afterReveal(el) {
      scroll_reveal_$(el).addClass('active');
    }
  };
  (0,scrollreveal_es/* default */.A)().reveal(".reveal", options);
  (0,scrollreveal_es/* default */.A)().reveal(".reveal-border", revealBorderOptions);
  (0,scrollreveal_es/* default */.A)().reveal(".reveal-scaled", revealItemsByScale);
}
scrollInit();
// EXTERNAL MODULE: ../node_modules/rellax/rellax.js
var rellax = __webpack_require__(965);
var rellax_default = /*#__PURE__*/__webpack_require__.n(rellax);
;// CONCATENATED MODULE: ./assets/js/base/common/scroll-rellax.js

function scrollRellax() {
  var fastOptions2x = {
    speed: 3,
    center: false,
    wrapper: null,
    round: true,
    vertical: true,
    horizontal: false
  };
  var fastOptions4x = {
    speed: 4,
    center: false,
    wrapper: null,
    round: true,
    vertical: true,
    horizontal: false
  };
  new (rellax_default())('.rellax-fast-2x', fastOptions2x);
  new (rellax_default())('.rellax-fast-4x', fastOptions4x);
}
scrollRellax();
// EXTERNAL MODULE: ../node_modules/scroll-lock/dist/scroll-lock.js
var scroll_lock = __webpack_require__(550);
;// CONCATENATED MODULE: ./assets/js/components/toggle/toggle-menu.js
/* provided dependency */ var toggle_menu_$ = __webpack_require__(616);

function toggleMenu() {
  var button = toggle_menu_$('.header__burger');
  var menu = toggle_menu_$('.header nav');
  var items = toggle_menu_$('.header nav a, .header__logo');
  var trigger = toggle_menu_$('.header__trigger');
  var list = toggle_menu_$('.header__list');
  var header = toggle_menu_$('.header');
  var scrollableElement = document.querySelector('.header__nav');
  button.on('click', function () {
    if (toggle_menu_$(this).hasClass('active')) {
      menu.removeClass('active');
      (0,scroll_lock.enablePageScroll)();
      toggle_menu_$(this).removeClass('active');
    } else {
      menu.addClass('active');
      (0,scroll_lock.disablePageScroll)(scrollableElement);
      toggle_menu_$(this).addClass('active');
    }
    if (toggle_menu_$(window).scrollTop() == 0 || toggle_menu_$(window).scrollTop() > 0) {
      header.addClass('active');
    } else {
      header.removeClass('active');
    }
  });
  toggle_menu_$(window).on('resize', function () {
    if (toggle_menu_$(window).width() <= 1180 && button.hasClass('active')) {
      trigger.on('click', function () {
        if (toggle_menu_$(this).hasClass('active')) {
          toggle_menu_$(this).removeClass('active');
          list.removeClass('active');
        } else {
          toggle_menu_$(this).addClass('active');
          list.addClass('active');
        }
      });
    }
  });
  trigger.on('click', function () {
    if (toggle_menu_$(window).width() <= 1180 && button.hasClass('active')) {
      if (toggle_menu_$(this).hasClass('active')) {
        toggle_menu_$(this).removeClass('active');
        list.removeClass('active');
      } else {
        toggle_menu_$(this).addClass('active');
        list.addClass('active');
      }
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
    if (toggle_menu_$(window).width() >= 1180 && button.hasClass('active')) {
      button.removeClass('active');
      menu.removeClass('active');
      (0,scroll_lock.enablePageScroll)();
    }
  });
}
toggleMenu();
// EXTERNAL MODULE: ./assets/js/components/toggle/toggle-filters.js
var toggle_filters = __webpack_require__(203);
;// CONCATENATED MODULE: ./assets/js/components/toggle/toggle-contacts.js
/* provided dependency */ var toggle_contacts_$ = __webpack_require__(616);

function toggleContacts() {
  var button = toggle_contacts_$('.contacts__button');
  var container = toggle_contacts_$('.contacts__block');
  var _loop = function _loop(i) {
    toggle_contacts_$(button[i]).on('click', function () {
      var _this = this;
      var id = button[i].getAttribute('data-id');
      var block = toggle_contacts_$('.contacts__block[data-id="' + id + '"]');
      button.removeClass('active');
      toggle_contacts_$('.contacts__button[data-id="' + id + '"]').addClass('active');
      gsap/* default */.Ay.to(container, {
        opacity: 0,
        duration: 0.3,
        onComplete: function onComplete() {
          gsap/* default */.Ay.to(container, {
            display: 'none',
            duration: 0
          });
          gsap/* default */.Ay.to(toggle_contacts_$(block).attr('data-id', toggle_contacts_$(_this).attr('data-id')), {
            display: 'block',
            duration: 0,
            onComplete: function onComplete() {
              gsap/* default */.Ay.to(toggle_contacts_$(block).attr('data-id', toggle_contacts_$(_this).attr('data-id')), {
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
toggleContacts();
// EXTERNAL MODULE: ./assets/js/components/toggle/toggle-filter-mob.js
var toggle_filter_mob = __webpack_require__(751);
// EXTERNAL MODULE: ./assets/js/components/toggle/toggle-engineering.js
var toggle_engineering = __webpack_require__(15);
;// CONCATENATED MODULE: ./assets/js/components/toggle/toggle-popup.js
/* provided dependency */ var toggle_popup_$ = __webpack_require__(616);

function togglePopup() {
  var button = toggle_popup_$('.callback__button');
  var header = toggle_popup_$('.header');
  var footer = toggle_popup_$('.footer');
  var main = toggle_popup_$('main');
  var bg = toggle_popup_$('.popup__bg');
  var popup = toggle_popup_$('.popup');
  var scrollableElement = toggle_popup_$('.popup__form');
  var close = toggle_popup_$('.popup__close');
  button.on('click', function () {
    (0,scroll_lock.disablePageScroll)(scrollableElement);
    header.addClass('blur');
    footer.addClass('blur');
    main.addClass('blur');
    popup.addClass('active');
    bg.addClass('active');
  });
  bg.on('click', function () {
    (0,scroll_lock.enablePageScroll)();
    header.removeClass('blur');
    footer.removeClass('blur');
    main.removeClass('blur');
    popup.removeClass('active');
    bg.removeClass('active');
  });
  close.on('click', function () {
    (0,scroll_lock.enablePageScroll)();
    header.removeClass('blur');
    footer.removeClass('blur');
    main.removeClass('blur');
    popup.removeClass('active');
    bg.removeClass('active');
  });
}
togglePopup();
// EXTERNAL MODULE: ./assets/js/base/common/get-footer-height.js
var get_footer_height = __webpack_require__(799);
;// CONCATENATED MODULE: ./assets/js/base/common/get-current-year.js
/* provided dependency */ var get_current_year_$ = __webpack_require__(616);
function currentYear() {
  var currentYear = get_current_year_$('.currentYear');
  var currentTime = new Date();
  var year = currentTime.getFullYear();
  currentYear.text(year);
}
currentYear();
// EXTERNAL MODULE: ../node_modules/swiper/swiper.mjs + 1 modules
var swiper = __webpack_require__(94);
// EXTERNAL MODULE: ../node_modules/swiper/modules/index.mjs + 27 modules
var modules = __webpack_require__(463);
;// CONCATENATED MODULE: ./assets/js/components/slider/slider-hero.js


function sliderBrands() {
  new swiper/* default */.A('.swiper-hero', {
    modules: [modules/* Pagination */.dK, modules/* Autoplay */.Ij],
    slidesPerView: 1,
    speed: 1000,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false
    },
    loop: true,
    watchSlidesProgress: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    breakpoints: {
      1635: {
        allowTouchMove: false
      }
    }
  });
}
sliderBrands();
;// CONCATENATED MODULE: ./assets/js/components/slider/slider-brands.js


function slider_brands_sliderBrands() {
  new swiper/* default */.A('.swiper-brands', {
    modules: [modules/* Pagination */.dK],
    spaceBetween: 10,
    speed: 1000,
    slidesPerView: 1,
    breakpoints: {
      768: {
        slidesPerView: 2
      },
      1280: {
        slidesPerView: 4
      },
      1635: {
        slidesPerView: 4
      }
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    }
  });
}
slider_brands_sliderBrands();
;// CONCATENATED MODULE: ./assets/js/components/slider/slider-gallery.js


function sliderGallery() {
  new swiper/* default */.A('.swiper-gallery .swiper', {
    modules: [modules/* Navigation */.Vx],
    slidesPerView: 1,
    grabCursor: true,
    speed: 1000,
    spaceBetween: 20,
    loop: true,
    navigation: {
      prevEl: '.swiper-gallery .swiper-button-prev',
      nextEl: '.swiper-gallery .swiper-button-next'
    }
  });
}
sliderGallery();
;// CONCATENATED MODULE: ./assets/js/components/slider/slider-includes.js


function slider_includes_sliderGallery() {
  new swiper/* default */.A('.swiper-includes .swiper', {
    modules: [modules/* Navigation */.Vx],
    slidesPerView: 1.5,
    grabCursor: true,
    speed: 1000,
    spaceBetween: 20,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false
    },
    loop: true,
    breakpoints: {
      768: {
        slidesPerView: 3,
        spaceBetween: 20
      },
      1180: {
        slidesPerView: 6,
        spaceBetween: 20
      },
      1635: {
        slidesPerView: 6,
        spaceBetween: 32
      }
    },
    navigation: {
      prevEl: '.swiper-includes .swiper-button-prev',
      nextEl: '.swiper-includes .swiper-button-next'
    }
  });
}
slider_includes_sliderGallery();
;// CONCATENATED MODULE: ./assets/js/components/slider/slider-products.js


function sliderProducts() {
  new swiper/* default */.A('.swiper-products .swiper', {
    modules: [modules/* Navigation */.Vx],
    slidesPerView: 1.5,
    grabCursor: true,
    speed: 1000,
    spaceBetween: 10,
    loop: true,
    breakpoints: {
      768: {
        slidesPerView: 2.5,
        spaceBetween: 10
      },
      1180: {
        slidesPerView: 4,
        spaceBetween: 27
      }
    },
    navigation: {
      prevEl: '.swiper-products .swiper-button-prev',
      nextEl: '.swiper-products .swiper-button-next'
    }
  });
}
sliderProducts();
;// CONCATENATED MODULE: ./assets/js/components/slider/slider-two.js


function sliderTwo() {
  new swiper/* default */.A('.swiper-slider-two .swiper', {
    modules: [modules/* Navigation */.Vx],
    slidesPerView: 1,
    grabCursor: true,
    speed: 1000,
    spaceBetween: 10,
    breakpoints: {
      1180: {
        slidesPerView: 2,
        spaceBetween: 30
      }
    },
    navigation: {
      prevEl: '.swiper-slider-two .swiper-button-prev',
      nextEl: '.swiper-slider-two .swiper-button-next'
    }
  });
}
sliderTwo();
;// CONCATENATED MODULE: ./assets/js/components/slider/slider-three.js


function sliderThree() {
  new swiper/* default */.A('.swiper-slider-three .swiper', {
    modules: [modules/* Navigation */.Vx],
    slidesPerView: 1,
    grabCursor: true,
    speed: 1000,
    spaceBetween: 10,
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      1180: {
        slidesPerView: 3,
        spaceBetween: 30
      }
    },
    navigation: {
      prevEl: '.swiper-slider-three .swiper-button-prev',
      nextEl: '.swiper-slider-three .swiper-button-next'
    }
  });
}
sliderThree();
;// CONCATENATED MODULE: ./assets/js/components/slider/slider-history.js


function sliderHistory() {
  var swiperSm = new swiper/* default */.A('.swiper-history-sm', {
    modules: [modules/* Navigation */.Vx],
    slidesPerView: 3,
    allowTouchMove: false,
    initialSlide: 1,
    centeredSlides: true,
    speed: 1000,
    navigation: {
      prevEl: '.history .swiper-button-prev',
      nextEl: '.history .swiper-button-next'
    }
  });
  new swiper/* default */.A('.swiper-history-lg', {
    modules: [modules/* Navigation */.Vx, modules/* Thumbs */.WO],
    slidesPerView: 1,
    initialSlide: 1,
    allowTouchMove: false,
    centeredSlides: true,
    freeMode: true,
    watchSlidesProgress: true,
    speed: 1000,
    thumbs: {
      swiper: swiperSm
    },
    navigation: {
      prevEl: '.history .swiper-button-prev',
      nextEl: '.history .swiper-button-next'
    }
  });
}
sliderHistory();
;// CONCATENATED MODULE: ./assets/js/components/slider/slider-construction.js


function sliderConstructon() {
  new swiper/* default */.A('.construction__slider .swiper', {
    modules: [modules/* Pagination */.dK, modules/* EffectFade */._R, modules/* Autoplay */.Ij],
    slidesPerView: 1,
    speed: 1000,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false
    },
    loop: true,
    watchSlidesProgress: true,
    fadeEffect: {
      crossFade: true
    },
    effect: 'fade',
    pagination: {
      el: '.construction .swiper-pagination',
      dynamicBullets: true
    }
  });
}
sliderConstructon();
;// CONCATENATED MODULE: ./assets/js/components/slider/slider-services.js


function slider_services_sliderTwo() {
  new swiper/* default */.A('.services__table .swiper', {
    modules: [modules/* Navigation */.Vx],
    slidesPerView: 1,
    speed: 1000,
    breakpoints: {
      1180: {
        slidesPerView: 4,
        spaceBetween: 40,
        allowTouchMove: false
      }
    },
    navigation: {
      prevEl: '.services__table .swiper-button-prev',
      nextEl: '.services__table .swiper-button-next'
    }
  });
}
slider_services_sliderTwo();
// EXTERNAL MODULE: ./assets/js/components/scroll/scroll-header.js
var scroll_header = __webpack_require__(781);
// EXTERNAL MODULE: ../node_modules/lightgallery/lightgallery.es5.js
var lightgallery_es5 = __webpack_require__(996);
// EXTERNAL MODULE: ../node_modules/lightgallery/plugins/pager/lg-pager.es5.js
var lg_pager_es5 = __webpack_require__(116);
;// CONCATENATED MODULE: ./assets/js/components/gallery.js
/* provided dependency */ var gallery_$ = __webpack_require__(616);



function gallery() {
  var galleries = gallery_$('.gallery');
  Array.from(galleries).forEach(function (gallery) {
    (0,lightgallery_es5/* default */.A)(gallery, {
      licenseKey: 'UNLICENSED',
      controls: true,
      plugins: [lg_pager_es5/* default */.A]
    });
  });
  gallery_$('.swiper-includes .swiper-slide, .lg-outer').on('click', function () {
    if (gallery_$('html').hasClass('lg-on')) {
      (0,scroll_lock.disablePageScroll)();
    } else {
      (0,scroll_lock.clearQueueScrollLocks)();
      (0,scroll_lock.enablePageScroll)();
    }
  });
  gallery_$('.swiper-includes .swiper-slide').on('click', function () {
    gallery_$(this).next().find('img').trigger("click");
    gallery_$(this).next().next().find('img').trigger("click");
  });
  gallery_$(document).keyup(function (e) {
    if (e.key === "Escape") {
      (0,scroll_lock.clearQueueScrollLocks)();
      (0,scroll_lock.enablePageScroll)();
    }
  });
}
gallery();
// EXTERNAL MODULE: ../node_modules/inputmask/dist/inputmask.js
var inputmask = __webpack_require__(680);
var inputmask_default = /*#__PURE__*/__webpack_require__.n(inputmask);
;// CONCATENATED MODULE: ./assets/js/components/form/sendMail.js
/* provided dependency */ var sendMail_$ = __webpack_require__(616);
function sendMail(selector) {
  var formData = new FormData(sendMail_$(selector).get(0));
  return fetch('/assets/files/mail.php', {
    method: 'POST',
    body: formData
  });
}
;
;// CONCATENATED MODULE: ./assets/js/components/form/sendForm.js
/* provided dependency */ var sendForm_$ = __webpack_require__(616);


function sendForm() {
  var validateName = function validateName(name) {
    if (name.length >= 2 && name.length < 50) {
      return name.match(/^[а-яА-Я]/);
    }
  };
  var validateEmail = function validateEmail(email) {
    return email.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
  };
  var validatePhone = function validatePhone(phone) {
    return phone.match(/^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/);
  };
  var validatedName = function validatedName() {
    var name = sendForm_$('input[name="name"]').val();
    if (validateName(name)) {
      sendForm_$('input[name="name"]').removeClass('error');
    } else {
      sendForm_$('input[name="name"]').addClass('error');
    }
    if (name == 0) {
      sendForm_$('input[name="name"]').removeClass('error');
    }
    return false;
  };
  var validatedEmail = function validatedEmail() {
    var email = sendForm_$('input[name="email"]').val();
    if (validateEmail(email)) {
      sendForm_$('input[name="email"]').removeClass('error');
    } else {
      sendForm_$('input[name="email"]').addClass('error');
    }
    if (email == 0) {
      sendForm_$('input[name="email"]').removeClass('error');
    }
    return false;
  };
  var validatedPhone = function validatedPhone() {
    var phone = sendForm_$('input[name="phone"]').val();
    if (validatePhone(phone) && phone.length > 0) {
      sendForm_$('input[name="phone"]').removeClass('error');
      if (!sendForm_$('.popup__file').hasClass('error')) {
        sendForm_$('.popup__button').removeClass('disabled');
      }
    } else {
      sendForm_$('input[name="phone"]').addClass('error');
      sendForm_$('.popup__button').addClass('disabled');
    }
    return false;
  };
  sendForm_$('input[name="name"]').on('input', validatedName);
  sendForm_$('input[name="email"]').on('input', validatedEmail);
  sendForm_$('input[name="phone"]').on('input', validatedPhone);
  var file = sendForm_$('form input[type="file"]');
  var extension;
  file.on('input', function () {
    extension = file[0].files[0].name.split('.')[1];
    var name = file[0].files[0].name;
    var size = file[0].files[0].size;
    if (size < 10485760 && ('pdf' == extension || 'doc' == extension || 'docx' == extension || 'odt' == extension)) {
      sendForm_$('.popup__file span').text("\u0424\u0430\u0439\u043B ".concat(name, " \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D!"));
      sendForm_$('.popup__file').removeClass('error').addClass('ok');
      if (sendForm_$('input[name="phone"]').val().length > 0 && !sendForm_$('input[name="phone"]').hasClass('error')) {}
    } else if (size > 10485760) {
      sendForm_$('.popup__file span').text('Слишком большой файл!');
      sendForm_$('.popup__file').removeClass('ok').addClass('error');
      errorMessage('Слишком большой файл!');
    } else {
      sendForm_$('.popup__file span').text('Неверный формат файла!');
      sendForm_$('.popup__file').removeClass('ok').addClass('error');
    }
  });
  function sendPopupForm() {
    var form = sendForm_$('form');
    var timer = 0;
    if (form) {
      form.on('submit', function (e) {
        e.preventDefault();
        if (!sendForm_$('input[name="name"]').hasClass('error') && !sendForm_$('input[name="email"]').hasClass('error') && !sendForm_$('input[name="phone"]').hasClass('error')) {
          sendMail(form).then(function () {
            form.get(0).reset();
            sendForm_$('.popup__file span').text('Прикрепить файл');
            sendForm_$('.popup__file').removeClass('ok').removeClass('error');
            sendForm_$('input').removeClass('error');
            sendForm_$('.popup__button').addClass('disabled');
            button.text('Отправлено!');
            timer = setTimeout(function () {
              button.text('Оставить отзыв');
              clearTimeout(timer);
            }, 2000);
          });
        }
      });
    }
  }
  sendPopupForm();
  function inputMask() {
    var input = sendForm_$('input[type="tel"]');
    Array.from(input).forEach(function (element) {
      var mask = new (inputmask_default())('+7 (999) 999-99-99');
      mask.mask(element);
    });
  }
  inputMask();
}
setTimeout(function () {
  sendForm();
}, 100);
;// CONCATENATED MODULE: ./assets/js/app.js
// #################################

// Разработано на: RISE PROJECT
// Разработчик: WOTKAD
// Сайт: WOTKAD.RU
// Сайт проекта: WOTKAD.RU/RISE

// #################################



























/***/ }),

/***/ 799:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var $ = __webpack_require__(616);
function getFooterHeight() {
  var height = $('.footer').outerHeight();
  document.documentElement.style.setProperty('--footer-height', "".concat(height, "px"));
}
getFooterHeight();
$(window).on('resize', function () {
  getFooterHeight();
});

/***/ }),

/***/ 781:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var $ = __webpack_require__(616);
function scrollHeader() {
  var header = $('.header');
  $(window).on('scroll', function () {
    if ($(window).scrollTop() > 0) {
      header.addClass('active');
    } else {
      header.removeClass('active');
    }
  });
  if ($(window).scrollTop() > 0) {
    header.addClass('active');
  } else {
    header.removeClass('active');
  }
}
scrollHeader();

/***/ }),

/***/ 15:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var $ = __webpack_require__(616);
function toggleEngineering() {
  var button = $('.engineering__header');
  var innerButton = $('.engineering__col__header');
  button.on('click', function () {
    $(this).next().toggleClass('active');
    $(this).toggleClass('active');
    button.not(this).removeClass('active');
    button.not(this).next().removeClass('active');
    innerButton.next().removeClass('active');
    innerButton.removeClass('active');
  });
  innerButton.on('click', function () {
    $(this).next().toggleClass('active');
    $(this).toggleClass('active');
    innerButton.not(this).removeClass('active');
    innerButton.not(this).next().removeClass('active');
  });
}
toggleEngineering();

/***/ }),

/***/ 751:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var $ = __webpack_require__(616);
function toggleFilterMob() {
  var button = $('.contacts__current');
  var list = $('.contacts__buttons');
  var items = $('.contacts__button');
  button.on('click', function () {
    button.toggleClass('active');
    list.toggleClass('active');
  });
  items.on('click', function () {
    button.removeClass('active');
    list.removeClass('active');
  });
}
toggleFilterMob();

/***/ }),

/***/ 203:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var $ = __webpack_require__(616);
function toggleFilters() {
  var button = $('.objects__current');
  var items = $('.objects__element');
  var clear = $('.objects__clear');
  var years = $('.objects__years');
  var types = $('.objects__types');
  var list = $('.objects__list');
  button.on('click', function () {
    $(this).next().toggleClass('active');
    $(this).toggleClass('active');
    button.not(this).removeClass('active');
    button.not(this).next().removeClass('active');
  });
  items.on('click', function () {
    $(this).parent().prev().find('span').text($(this).text());
    $(this).parent().removeClass('active');
    button.removeClass('active');
  });
  clear.on('click', function () {
    years.find('span').text('По годам');
    types.find('span').text('По виду деятельности');
  });
  $(document).mouseup(function (e) {
    if (!list.is(e.target) && !button.is(e.target) && list.has(e.target).length === 0) {
      list.removeClass('active');
      button.removeClass('active');
    }
  });
}
toggleFilters();

/***/ }),

/***/ 813:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
/* provided dependency */ var $ = __webpack_require__(616);








if (false) {}
$(function () {
  __webpack_require__(118);
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, [946], () => (__webpack_require__(813)))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=bundle.cee042f.bundle.js.map