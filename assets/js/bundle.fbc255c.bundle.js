(()=>{var e,t={700:(e,t,o)=>{"use strict";o.r(t);var n,r=o(932),s=o(616);n=s(".render"),r.Ay.fromTo(n,.5,{opacity:"1",zIndex:"99999"},{opacity:"0",zIndex:"-1",onComplete:function(){n.remove()}}).delay(.4);var c=o(828),i=o.n(c),a=o(616);new(i())('a[href*="#"]',{speed:1500,after:function(){a("body").css("overflow","")}});var l=o(616);!function(){var e=l(".currentYear"),t=(new Date).getFullYear();e.text(t)}();o(661);var u=o(550),d=o.n(u),m=document.querySelector(".mobile__btn"),v=document.querySelector(".menu"),p=document.querySelector(".menu__link-projects"),_=document.querySelector(".menu__link-contacts"),b=document.querySelector(".menu__block-projects"),f=document.querySelector(".menu__block-contacts");m.addEventListener("click",(function(){m.classList.toggle("mobile__btn-open"),v.classList.toggle("menu-open"),m.classList.contains("mobile__btn-open")?d().disablePageScroll():d().enablePageScroll(),v.classList.contains("menu-open")||(p.classList.remove("menu__link-active"),_.classList.remove("menu__link-active"),f.classList.remove("menu__block-open"),b.classList.remove("menu__block-open"))})),p.addEventListener("click",(function(){_.classList.remove("menu__link-active"),p.classList.toggle("menu__link-active"),b.classList.toggle("menu__block-open"),f.classList.remove("menu__block-open")})),_.addEventListener("click",(function(){p.classList.remove("menu__link-active"),_.classList.toggle("menu__link-active"),f.classList.toggle("menu__block-open"),b.classList.remove("menu__block-open")}));o(513);var g=o(94),L=o(582);new g.A(".clients__swiper",{modules:[L.Ij],speed:3e3,slidesPerView:4,autoplay:{delay:0,disableOnInteraction:!1},spaceBetween:13,grabCursor:!0,loop:!0,breakpoints:{768:{slidesPerView:4,spaceBetween:40},1024:{slidesPerView:4,spaceBetween:56},1280:{slidesPerView:5}}});o(746);new g.A(".home-slider__swiper",{modules:[L.Vx,L.Ij],autoplay:{delay:3e3,disableOnInteraction:!1},slidesPerView:1,grabCursor:!0,loop:!0,breakpoints:{1024:{navigation:{prevEl:".home-slider__prev",nextEl:".home-slider__next"}}}});var y=document.querySelector(".open-popup"),h=document.querySelector(".popup__btn"),k=document.querySelector(".popup");k&&document.documentElement.clientWidth<768&&(y.addEventListener("click",(function(){k.classList.add("open"),d().disablePageScroll()})),h.addEventListener("click",(function(){k.classList.remove("open"),d().enablePageScroll()})));o(125),o(696)},661:(e,t,o)=>{var n,r=o(616);n=r(".header").outerHeight(),document.documentElement.style.setProperty("--header-height","".concat(n,"px"))},125:()=>{var e=document.querySelector(".open-form"),t=document.querySelector(".about-form");e&&document.documentElement.clientWidth>=768&&e.addEventListener("click",(function(){t.classList.toggle("open"),setTimeout((function(){window.scrollTo({top:document.body.scrollHeight,behavior:"smooth"})}),300)}))},696:()=>{var e;e=document.querySelector(".cursor"),document.addEventListener("mousemove",(function(t){var o=t.target,n=t.clientX,r=t.clientY;e.classList.remove("cursor-hide"),e.style.left=n+"px",e.style.top=r+"px","A"===o.tagName||"BUTTON"===o.tagName?e.classList.add("cursor-hover"):e.classList.remove("cursor-hover"),"VIDEO"===o.tagName?e.classList.add("cursor-watch"):e.classList.remove("cursor-watch"),o.classList.contains("footer__box-top")||o.classList.contains("open-form")||o.closest(".open-form")||o.classList.contains("card-link")||o.closest(".card-link")||o.classList.contains("about__card-social")||o.closest(".about__card-social")?e.classList.add("cursor-open"):e.classList.remove("cursor-open")})),document.addEventListener("mouseout",(function(t){e.classList.add("cursor-hide")}))},513:()=>{var e=document.querySelector(".footer__box");e.addEventListener("click",(function(){e.classList.toggle("footer__box-open"),setTimeout((function(){window.scrollTo({top:document.body.scrollHeight,behavior:"smooth"})}),300)}))},746:()=>{var e=document.querySelectorAll(".tabs__btn"),t=document.querySelectorAll(".tabs-content"),o=document.querySelector(".events"),n=document.querySelector(".marketing"),r=document.querySelector(".pr"),s=document.querySelector(".education"),c=document.querySelector(".digital"),i=document.querySelector(".consulting");e.forEach((function(a){a.addEventListener("click",(function(){e.forEach((function(e){e.classList.remove("tabs__btn-active")})),t.forEach((function(e){e.classList.add("d-none")})),a.classList.add("tabs__btn-active"),"1"===a.getAttribute("data-id")&&o.classList.remove("d-none"),"2"===a.getAttribute("data-id")&&n.classList.remove("d-none"),"3"===a.getAttribute("data-id")&&r.classList.remove("d-none"),"4"===a.getAttribute("data-id")&&s.classList.remove("d-none"),"5"===a.getAttribute("data-id")&&c.classList.remove("d-none"),"6"===a.getAttribute("data-id")&&i.classList.remove("d-none")}))}))},813:(e,t,o)=>{"use strict";o(616)((function(){o(700)}))}},o={};function n(e){var r=o[e];if(void 0!==r)return r.exports;var s=o[e]={exports:{}};return t[e].call(s.exports,s,s.exports,n),s.exports}n.m=t,e=[],n.O=(t,o,r,s)=>{if(!o){var c=1/0;for(u=0;u<e.length;u++){for(var[o,r,s]=e[u],i=!0,a=0;a<o.length;a++)(!1&s||c>=s)&&Object.keys(n.O).every((e=>n.O[e](o[a])))?o.splice(a--,1):(i=!1,s<c&&(c=s));if(i){e.splice(u--,1);var l=r();void 0!==l&&(t=l)}}return t}s=s||0;for(var u=e.length;u>0&&e[u-1][2]>s;u--)e[u]=e[u-1];e[u]=[o,r,s]},n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e={23:0};n.O.j=t=>0===e[t];var t=(t,o)=>{var r,s,[c,i,a]=o,l=0;if(c.some((t=>0!==e[t]))){for(r in i)n.o(i,r)&&(n.m[r]=i[r]);if(a)var u=a(n)}for(t&&t(o);l<c.length;l++)s=c[l],n.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return n.O(u)},o=self.webpackChunk=self.webpackChunk||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))})();var r=n.O(void 0,[751],(()=>n(813)));r=n.O(r)})();
//# sourceMappingURL=bundle.fbc255c.bundle.js.map