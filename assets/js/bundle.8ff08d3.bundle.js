(()=>{var e,t={530:(e,t,a)=>{"use strict";a.r(t);var o,r=a(932),i=a(616);o=i(".render"),r.Ay.fromTo(o,.5,{opacity:"1",zIndex:"99999"},{opacity:"0",zIndex:"-1",onComplete:function(){o.remove()}}).delay(.4);var n=a(828),s=a.n(n),l=a(616);new(s())('a[href*="#"]',{speed:400,after:function(){l("body").css("overflow","")}});var d,c=a(613),u=a(616);d={duration:600,afterReveal:function(e){u(e).addClass("drawed")}},(0,c.A)().reveal(".reveal-drawed",d),(0,c.A)().reveal(".reveal-showed",{duration:1e3,delay:800,opacity:0,mobile:!1}),(0,c.A)().reveal(".reveal-showed-up",{duration:1e3,origin:"bottom",distance:"50px",delay:300,opacity:0,mobile:!1}),(0,c.A)().reveal(".reveal-showed-up-delayed-400",{duration:1e3,origin:"bottom",distance:"50px",delay:400,opacity:0,mobile:!1}),(0,c.A)().reveal(".reveal-showed-up-delayed-500",{duration:1e3,origin:"bottom",distance:"50px",delay:500,opacity:0,mobile:!1}),(0,c.A)().reveal(".reveal-showed-up-delayed-600",{duration:1e3,origin:"bottom",distance:"50px",delay:600,opacity:0,mobile:!1}),(0,c.A)().reveal(".reveal-showed-up-delayed-700",{duration:1e3,origin:"bottom",distance:"50px",delay:700,opacity:0,mobile:!1}),(0,c.A)().reveal(".reveal-showed-delayed-400",{duration:1e3,delay:400,opacity:0,mobile:!1}),(0,c.A)().reveal(".reveal-showed-delayed-500",{duration:1e3,delay:500,opacity:0,mobile:!1}),(0,c.A)().reveal(".reveal-showed-delayed-600",{duration:1e3,delay:600,opacity:0,mobile:!1}),(0,c.A)().reveal(".reveal-showed-delayed-700",{duration:1e3,delay:700,opacity:0,mobile:!1}),(0,c.A)().reveal(".reveal-showed-delayed-800",{duration:1e3,delay:800,opacity:0,mobile:!1}),(0,c.A)().reveal(".reveal-showed-delayed-1000",{duration:1e3,delay:1e3,opacity:0,mobile:!1}),(0,c.A)().reveal(".reveal-showed-down",{duration:1e3,origin:"top",distance:"50px",delay:300,opacity:0,mobile:!1});var p=a(616);!function(){var e=p(".currentYear"),t=(new Date).getFullYear();e.text(t)}();a(661);var v,m,f,h,b,w,_,y,g,C=a(550),A=a(616);v=A(".header__menu"),m=A(".header-mobile"),f=A(".header-mobile__close"),h=A(".search-popup"),b=A(".header-mobile__blocks"),w=A(".header-mobile__list"),_=A(".header-tablet"),y=A(".header-mobile__input"),g=A(".header-mobile__block"),v.on("click",(function(){m.addClass("active"),(0,C.disablePageScroll)()})),f.on("click",(function(){y.removeClass("focus"),y.val(""),h.removeClass("active"),m.removeClass("active"),(0,C.enablePageScroll)(),b.hasClass("active")&&(b.removeClass("active").show(),b.children(w).removeClass("active"),b.children(_).removeClass("active"),b.children(g).removeClass("active"))})),function(){var e=A(".header-mobile__block");e.on("click",(function(){var t=A(this).next(".header-mobile__list"),a=A(this).next().next(".header-tablet");A(window).width()<768?(A(this).toggleClass("active"),t.toggleClass("active"),e.not(A(this)).toggle(),(0,C.disablePageScroll)()):(A(this).toggleClass("active"),a.toggleClass("active"),e.not(A(this)).toggle(),(0,C.enablePageScroll)())}))}(),function(){var e=A(".header__catalog");e.on("mouseenter",(function(){var e=A(this).data("menu");A("#"+e).addClass("active")})),e.on("mouseleave",(function(){var e=A(this).data("menu");A("#"+e).removeClass("active")}))}(),function(){var e=A(".search-popup"),t=A(".header__input"),a=A(".header__form"),o=A(".header__form button"),r=A(".header-mobile__input"),i=A(".header-mobile__form button"),n=A(".header__button"),s=A(".header-mobile");A(window).width()>=1280?(o.on("click",(function(){t.toggleClass("active"),t.removeAttr("disabled"),t.hasClass("active")?(t.attr("placeholder","Поиск..."),t.removeAttr("disabled","disabled")):(t.removeAttr("placeholder"),t.attr("disabled","disabled"),e.removeClass("active"),t.removeClass("focus"),t.val(""))})),t.on("input",(function(){""!==A(this).val()?(o.attr("type","submit"),t.addClass("focus"),e.addClass("active")):(t.removeClass("focus"),e.removeClass("active"),o.attr("type","button"))})),A(document).mouseup((function(o){a.is(o.target)||0!==a.has(o.target).length||(t.removeClass("active"),t.removeClass("focus"),t.removeAttr("placeholder"),t.attr("disabled","disabled"),t.val(""),e.removeClass("active"))}))):(n.on("click",(function(){s.addClass("active")})),r.on("input",(function(){""!==r.val()?(r.addClass("focus"),e.addClass("active"),i.attr("type","submit")):(r.removeClass("focus"),e.removeClass("active"),i.attr("type","button"))})))}();var x=a(94),P=a(245);new x.A(".hero .swiper",{modules:[P.Vx,P.dK],slidesPerView:1,spaceBetween:30,speed:800,loop:!0,navigation:{nextEl:".hero .swiper-button-next",prevEl:".hero .swiper-button-prev"},pagination:{clickable:!0,el:".hero .swiper-pagination"}}),function(){for(var e=document.querySelectorAll(".main-new .swiper"),t=document.querySelectorAll(".main-new"),a=0;a<e.length;a++)e[a].classList.add("swiper-"+a),t[a].classList.add("main-new-"+a),new x.A(".main-new-"+a+" .swiper-"+a,{modules:[P.Vx],speed:800,slidesPerView:1.5,observeParents:!0,observer:!0,observeSlideChildren:!0,observerUpdate:!0,spaceBetween:10,navigation:{nextEl:".main-new-".concat(a," .swiper-button-next"),prevEl:".main-new-".concat(a," .swiper-button-prev")},breakpoints:{375:{slidesPerView:1.77},768:{slidesPerView:3},1280:{slidesPerView:4,spaceBetween:10}}})}(),new x.A(".main-news .swiper",{speed:800,slidesPerView:1.26,spaceBetween:10,breakpoints:{768:{slidesPerView:3,allowTouchMove:!1,spaceBetween:10}}}),new x.A(".swiper-others",{speed:800,slidesPerView:1.37,spaceBetween:10,breakpoints:{768:{slidesPerView:3,allowTouchMove:!1,spaceBetween:10}}});var k,V,S=a(616);!function(){var e=S(".filter"),t=S(".popup-filter__close"),a=S(".popup-filter"),o=S(".popup-filter__button-submit"),r=S(".cover");e.on("click",(function(){a.addClass("active"),r.addClass("active"),(0,C.disablePageScroll)()})),t.on("click",(function(){a.removeClass("active"),r.removeClass("active"),(0,C.enablePageScroll)()})),o.on("click",(function(){a.removeClass("active"),r.removeClass("active"),(0,C.enablePageScroll)()})),S(document).mouseup((function(e){a.is(e.target)||0!==a.has(e.target).length||(a.removeClass("active"),r.removeClass("active"),(0,C.enablePageScroll)())}))}(),k=new x.A(".product-card-info .swiper-main",{modules:[P.WO,P._R],spaceBetween:10,loop:!0,slidesPerView:1,loopedSlides:1,effect:"fade",fadeEffect:{crossFade:!0},thumbs:{swiper:V}}),V=new x.A(".product-card-info .swiper-products",{modules:[P.Vx,P.WO],spaceBetween:10,slidesPerView:4,loop:!0,freeMode:!0,navigation:{nextEl:".product-card-info .swiper-button-next",prevEl:".product-card-info .swiper-button-prev"},thumbs:{swiper:k}});a(4);!function(){var e=new x.A(".swiper-brand-cube",{modules:[P.hw,P.WO],allowTouchMove:!1,effect:"cube",speed:1200,loop:!0,thumbs:{swiper:t}}),t=new x.A(".swiper-brand-bg",{modules:[P._R,P.FJ,P.WO,P.dK],allowTouchMove:!1,loop:!0,effect:"fade",speed:1200,mousewheel:!0,fadeEffect:{crossFade:!0},thumbs:{swiper:e},pagination:{el:".brand-hero-pagination .swiper-pagination",type:"fraction"}})}(),function(){var e=document.querySelector(".brand-hero__cursor"),t=document.querySelector(".brand-hero");if(null!==t&&null!==e){t.addEventListener("mousemove",(function(t){e.style.opacity="1",e.style.left="".concat(t.clientX,"px"),e.style.top="".concat(t.clientY,"px")})),t.addEventListener("mouseleave",(function(){e.style.opacity="0"})),t.addEventListener("mouseleave",(function(){e.style.opacity="0"}))}}();var E=a(616);!function(){var e=E(".brand-hero__link"),t=E(".brand-popup"),a=E(".brand-popup__button");e.on("click",(function(){t.addClass("active"),(0,C.disablePageScroll)()})),a.on("click",(function(){t.removeClass("active"),(0,C.enablePageScroll)()}))}();var O=a(616);!function(){if(O(".brand-popup").length>0){var e,t=window.matchMedia("(min-width:768px)"),a=function(){if(!0!==t.matches)return!1===t.matches?o():void 0;void 0!==e&&e.destroy(!0,!0)},o=function(){e=new x.A(".brand-popup .swiper",{modules:[P.Vx],speed:800,slidesPerView:1,spaceBetween:20,loop:!0,navigation:{nextEl:" .brand-popup__navigation .swiper-button-next"}})};t.addListener(a),a()}}();a(721);!function(){for(var e=document.querySelectorAll(".brand-product__item .swiper"),t=document.querySelectorAll(".brand-product__item"),a=0;a<e.length;a++)e[a].classList.add("swiper-"+a),t[a].classList.add("brand-product__item-"+a),new x.A(".brand-product__item-"+a+" .swiper-"+a,{modules:[P.dK,P.Vx],speed:1300,slidesPerView:1,spaceBetween:10,loop:!0,navigation:{nextEl:".brand-product__item-".concat(a," .swiper-button-next"),prevEl:".brand-product__item-".concat(a," .swiper-button-prev")},pagination:{clickable:!0,el:".brand-product__item-".concat(a," .swiper-pagination")},breakpoints:{1280:{slidesPerView:2.6},1440:{slidesPerView:2.77},1920:{slidesPerView:2.9}}})}();a(202);!function(){var e=new x.A(".brands-card-thumbs1",{modules:[P.xA],spaceBetween:10,slidesPerView:3,breakpoints:{1280:{direction:"horizontal",slidesPerView:3,grid:{rows:1}},768:{direction:"vertical"}}});new x.A(".brands-card-slider1",{modules:[P._R,P.WO],slidesPerView:1,grabCursor:!0,effect:"fade",fadeEffect:{crossFade:!0},thumbs:{swiper:e}});var t=new x.A(".brands-card-thumbs2",{modules:[P.xA],spaceBetween:10,slidesPerView:3,breakpoints:{1280:{direction:"horizontal",slidesPerView:3,grid:{rows:1}},768:{direction:"vertical"}}});new x.A(".brands-card-slider2",{modules:[P._R,P.WO],slidesPerView:1,grabCursor:!0,effect:"fade",fadeEffect:{crossFade:!0},thumbs:{swiper:t}});var a=new x.A(".brands-card-thumbs3",{modules:[P.xA],spaceBetween:10,slidesPerView:3,breakpoints:{1280:{direction:"horizontal",slidesPerView:3,grid:{rows:1}},768:{direction:"vertical"}}});new x.A(".brands-card-slider3",{modules:[P._R,P.WO],slidesPerView:1,grabCursor:!0,effect:"fade",fadeEffect:{crossFade:!0},thumbs:{swiper:a}})}();a(939);var B=a(616);!function(){for(var e=B(".stores__buttons button"),t=B(".stores__items"),a=function(a){B(e[a]).on("click",(function(){var o=this,i=e[a].getAttribute("data-id"),n=B('.stores__items[data-id="'+i+'"]');e.removeClass("active"),B(this).addClass("active"),r.Ay.to(t,{opacity:0,duration:.3,onComplete:function(){r.Ay.to(t,{display:"none",duration:0}),r.Ay.to(B(n).attr("data-id",B(o).attr("data-id")),{display:"grid",duration:0,onComplete:function(){B(n).attr("data-id",B(o).attr("data-id")).removeClass("active"),B('.stores__items[data-id="'+i+'"]').addClass("active"),r.Ay.to(B(n).attr("data-id",B(o).attr("data-id")),{opacity:1,duration:.3})}})}})}))},o=0;o<Array.from(e).length;o++)a(o)}();var L=a(680),T=a.n(L),F=a(616);function M(e){var t=new FormData(F(e).get(0));return fetch("/assets/files/mail.php",{method:"POST",body:t})}var j=a(616);function q(){var e,t,a=function(){var e=j(this).val();return!function(e){if(e.length>=2&&e.length<50)return e.match(/^[а-яА-Я]/)}(e)?(j(this).addClass("error").removeClass("filled"),j(".footer-callback__error").show()):j(this).removeClass("error").addClass("filled"),""==e&&j(this).removeClass("error").removeClass("filled"),!1},o=function(){var e=j(this).val();return!function(e){return e.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)}(e)?(j(this).addClass("error"),j(this).removeClass("filled")):(j(this).removeClass("error"),j(this).addClass("filled")),""==e&&j(this).removeClass("error").removeClass("filled"),!1},r=function(){var e=j(this).val();return function(e){return e.match(/^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/)}(e)&&e.length>0?(j(this).removeClass("error"),j(this).addClass("filled")):(j(this).addClass("error"),j(this).removeClass("filled"),j(".footer-callback__error").show()),""==e&&j(this).removeClass("error").removeClass("filled"),!1};j('input[name="name"]').on("input",(function(){a.call(this)})),j('input[name="email"]').on("input",(function(){o.call(this)})),j('input[name="phone"]').on("input",(function(){r.call(this)})),j(".footer-callback__form input").on("input",(function(){j(".footer-callback__form input").hasClass("error")||j(".footer-callback__error").hide()})),(e=j(".footer-callback__form"))&&e.on("submit",(function(t){t.preventDefault(),j('input[name="name"]').hasClass("error")||j('input[name="phone"]').hasClass("error")||M(e).then((function(){e.get(0).reset(),j("input").removeClass("error").removeClass("filled"),j(".footer-callback__error").hide()}))})),function(){var e=j(".footer-mailing__form");e&&e.on("submit",(function(t){t.preventDefault(),j('input[name="email"]').hasClass("error")||M(e).then((function(){e.get(0).reset(),j("input").removeClass("error").removeClass("filled")}))}))}(),t=j('input[type="tel"]'),Array.from(t).forEach((function(e){new(T())("+7 (999) 999-99-99").mask(e)}))}setTimeout((function(){q()}),100)},661:(e,t,a)=>{var o,r=a(616);o=r(".header").outerHeight(),document.documentElement.style.setProperty("--header-height","".concat(o,"px"))},721:()=>{!function(){var e=document.querySelector(".brand-popup__cursor"),t=document.querySelector(".brand-popup__inner");if(null!==t){t.addEventListener("mousemove",(function(t){e.style.opacity="1",e.style.left="".concat(t.clientX,"px"),e.style.top="".concat(t.clientY,"px")})),t.addEventListener("mouseleave",(function(){e.style.opacity="0"})),t.addEventListener("mouseleave",(function(){e.style.opacity="0"}))}}()},202:(e,t,a)=>{var o,r,i=a(616);o=i(".brand-product__button"),r=i(".brand-product-popup"),o.on("click",(function(){i(this).parent().next(r).toggleClass("active");var e=i(this).find("span");"Состав"===e.text()?e.text("Закрыть"):e.text("Состав")}))},939:(e,t,a)=>{var o,r,i,n=a(616);o=n(".news-filter-dropdown__button"),r=n(".news-filter-dropdown__items"),i=n(".news-filter-dropdown__items span"),o.on("click",(function(){n(this).toggleClass("active"),r.toggleClass("active")})),Array.from(i).forEach((function(e){n(e).on("click",(function(){n(".news-filter-dropdown__value").text(n(this).text()),n(".news-filter-dropdown__input").val(n(this).text()),o.removeClass("active"),r.removeClass("active")}))})),n(document).mouseup((function(e){r.is(e.target)||0!==r.has(e.target).length||o.is(e.target)||0!==o.has(e.target).length||(o.removeClass("active"),r.removeClass("active"))}))},4:(e,t,a)=>{var o,r=a(616);(o=r(".product-card-dropdown__title")).on("click",(function(){r(this).addClass("active"),o.not(this).removeClass("active")}))},813:(e,t,a)=>{"use strict";a(616)((function(){a(530)}))}},a={};function o(e){var r=a[e];if(void 0!==r)return r.exports;var i=a[e]={exports:{}};return t[e].call(i.exports,i,i.exports,o),i.exports}o.m=t,e=[],o.O=(t,a,r,i)=>{if(!a){var n=1/0;for(c=0;c<e.length;c++){for(var[a,r,i]=e[c],s=!0,l=0;l<a.length;l++)(!1&i||n>=i)&&Object.keys(o.O).every((e=>o.O[e](a[l])))?a.splice(l--,1):(s=!1,i<n&&(n=i));if(s){e.splice(c--,1);var d=r();void 0!==d&&(t=d)}}return t}i=i||0;for(var c=e.length;c>0&&e[c-1][2]>i;c--)e[c]=e[c-1];e[c]=[a,r,i]},o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var a in t)o.o(t,a)&&!o.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e={23:0};o.O.j=t=>0===e[t];var t=(t,a)=>{var r,i,[n,s,l]=a,d=0;if(n.some((t=>0!==e[t]))){for(r in s)o.o(s,r)&&(o.m[r]=s[r]);if(l)var c=l(o)}for(t&&t(a);d<n.length;d++)i=n[d],o.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return o.O(c)},a=self.webpackChunk=self.webpackChunk||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))})();var r=o.O(void 0,[994],(()=>o(813)));r=o.O(r)})();
//# sourceMappingURL=bundle.8ff08d3.bundle.js.map