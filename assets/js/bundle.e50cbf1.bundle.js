(()=>{var e,t={402:(e,t,a)=>{"use strict";a.r(t);var n=a(932),o=a(613);var s,i=a(616);s=i(".render"),n.Ay.fromTo(s,.5,{opacity:"1",zIndex:"99999"},{opacity:"0",zIndex:"-1",onComplete:function(){s.remove(),(0,o.A)().reveal(".reveal",{distance:"20%",origin:"bottom",delay:300,opacity:0,mobile:!0}),(0,o.A)().reveal(".reveal-top",{distance:"20%",origin:"top",opacity:0,mobile:!0}),(0,o.A)().reveal(".reveal-delay-300",{distance:"20%",origin:"bottom",opacity:0,delay:300,mobile:!0}),(0,o.A)().reveal(".reveal-delay-500",{distance:"20%",origin:"bottom",opacity:0,delay:500,mobile:!0}),(0,o.A)().reveal(".reveal-delay-700",{distance:"20%",origin:"bottom",opacity:0,delay:700,mobile:!0}),(0,o.A)().reveal(".reveal-delay-900",{distance:"20%",origin:"bottom",opacity:0,delay:900,mobile:!0})}}).delay(.4);var r=a(828),l=a.n(r),c=a(616);new(l())('a[href*="#"]',{speed:400,after:function(){c("body").css("overflow","")},offset:20});var u=a(616);!function(){var e=u(".currentYear"),t=(new Date).getFullYear();e.text(t)}();a(661);var v,m,d,p=a(550),h=a(616);v=h(".header__burger"),m=h(".header__navmob"),d=h(".header nav a, .header__logo"),v.on("click",(function(){h(this).hasClass("active")?(m.removeClass("active"),(0,p.enablePageScroll)(),h(this).removeClass("active")):(m.addClass("active"),(0,p.disablePageScroll)(),h(this).addClass("active"))})),Array.from(d).forEach((function(e){h(e).on("click",(function(){setTimeout((function(){v.removeClass("active"),m.removeClass("active"),(0,p.enablePageScroll)()}),300)}))})),h(window).on("resize",(function(){h(window).width()>=1280&&v.hasClass("active")&&(v.removeClass("active"),m.removeClass("active"),(0,p.enablePageScroll)())}));var f=a(680),_=a.n(f),C=a(616);var b=a(616);function y(){var e,t;b('input[name="name"]').on("input",(function(){var e=b('input[name="name"]').val();return!function(e){if(e.length>=2&&e.length<50)return e.match(/^[а-яА-Я]/)}(e)?b('input[name="name"]').closest(".contacts__input").addClass("error").removeClass("valid"):b('input[name="name"]').closest(".contacts__input").removeClass("error").addClass("valid"),0==e&&b('input[name="name"]').closest(".contacts__input").removeClass("error").removeClass("valid"),!1})),b('input[name="email"]').on("input",(function(){var e=b('input[name="email"]').val();return!function(e){return e.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)}(e)?b('input[name="email"]').closest(".contacts__input").addClass("error").removeClass("valid"):b('input[name="email"]').closest(".contacts__input").removeClass("error").addClass("valid"),0==e&&b('input[name="email"]').closest(".contacts__input").removeClass("error").removeClass("valid"),!1})),b('input[name="phone"]').on("input",(function(){var e=b('input[name="phone"]').val();return function(e){return e.match(/^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/)}(e)&&e.length>0?b('input[name="phone"]').closest(".contacts__input").removeClass("error").addClass("valid"):b('input[name="phone"]').closest(".contacts__input").addClass("error").removeClass("valid"),0==e&&b('input[name="phone"]').closest(".contacts__input").removeClass("error").removeClass("valid"),!1})),b(".contacts__input input").on("input",(function(){b('input[name="name"]').val().length>0?b('input[name="name"]').next().addClass("active"):b('input[name="name"]').next().removeClass("active"),b('input[name="phone"]').val().length>0?b('input[name="phone"]').next().addClass("active"):b('input[name="phone"]').next().removeClass("active"),b('input[name="email"]').val().length>0?b('input[name="email"]').next().addClass("active"):b('input[name="email"]').next().removeClass("active"),b('input[name="name"]').closest(".contacts__input").hasClass("valid")&&b('input[name="email"]').closest(".contacts__input").hasClass("valid")&&b('input[name="phone"]').closest(".contacts__input").hasClass("valid")?b(".contacts__button").removeClass("disabled"):b(".contacts__button").addClass("disabled")})),e=b("form"),t=0,e&&e.on("submit",(function(a){var o,s;a.preventDefault(),b('input[name="name"]').closest(".contacts__input").hasClass("valid")&&b('input[name="email"]').closest(".contacts__input").hasClass("valid")&&b('input[name="phone"]').closest(".contacts__input").hasClass("valid")?(o=e,s=new FormData(C(o).get(0)),fetch("/assets/files/mail.php",{method:"POST",body:s})).then((function(){e.get(0).reset(),b("input").closest(".contacts__input").removeClass("error"),b("input").closest(".contacts__input").removeClass("valid"),n.removeClass("active"),b(".contacts__button").addClass("disabled"),b(".contacts__button").text("Ваша заявка отправлена!"),t=setTimeout((function(){b(".contacts__button").text("Отправить"),clearTimeout(t)}),2e3)})):b(".contacts__button").text("Ошибка отправки!")}));var a,n=b(".contacts__icon");n.on("click",(function(){b(this).prev().val(""),b(this).removeClass("active"),b(this).parent().removeClass("error"),b(".contacts__button").addClass("disabled")})),a=b('input[type="tel"]'),Array.from(a).forEach((function(e){new(_())("+7 (999) 999-99-99").mask(e)}))}setTimeout((function(){y()}),100)},661:(e,t,a)=>{var n,o=a(616);n=o(".header").outerHeight(),document.documentElement.style.setProperty("--header-height","".concat(n,"px"))},813:(e,t,a)=>{"use strict";a(616)((function(){a(402)}))}},a={};function n(e){var o=a[e];if(void 0!==o)return o.exports;var s=a[e]={exports:{}};return t[e].call(s.exports,s,s.exports,n),s.exports}n.m=t,e=[],n.O=(t,a,o,s)=>{if(!a){var i=1/0;for(u=0;u<e.length;u++){for(var[a,o,s]=e[u],r=!0,l=0;l<a.length;l++)(!1&s||i>=s)&&Object.keys(n.O).every((e=>n.O[e](a[l])))?a.splice(l--,1):(r=!1,s<i&&(i=s));if(r){e.splice(u--,1);var c=o();void 0!==c&&(t=c)}}return t}s=s||0;for(var u=e.length;u>0&&e[u-1][2]>s;u--)e[u]=e[u-1];e[u]=[a,o,s]},n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e={23:0};n.O.j=t=>0===e[t];var t=(t,a)=>{var o,s,[i,r,l]=a,c=0;if(i.some((t=>0!==e[t]))){for(o in r)n.o(r,o)&&(n.m[o]=r[o]);if(l)var u=l(n)}for(t&&t(a);c<i.length;c++)s=i[c],n.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return n.O(u)},a=self.webpackChunk=self.webpackChunk||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))})();var o=n.O(void 0,[574],(()=>n(813)));o=n.O(o)})();
//# sourceMappingURL=bundle.e50cbf1.bundle.js.map