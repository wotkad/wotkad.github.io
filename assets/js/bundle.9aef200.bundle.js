(()=>{var e,t={203:(e,t,a)=>{"use strict";a.r(t);var o,n=a(667),i=a(638);o=i(".render"),n.ZP.fromTo(o,.5,{opacity:"1",zIndex:"99999"},{opacity:"0",zIndex:"-1",onComplete:function(){o.remove()}}).delay(.4);var r=a(872),c=a.n(r),s=a(638);new(c())('a[href*="#"]',{speed:1500,after:function(){s("body").css("overflow","")}}),(0,a(401).Z)().reveal(".reveal",{distance:"20%",origin:"bottom",opacity:0,mobile:!1});var l=a(638);!function(){var e=l(".currentYear"),t=(new Date).getFullYear();e.text(t)}();a(243);var d,v,u,h=a(444),f=a(638);d=f(".header__burger"),v=f(".header__mobmenu"),u=f(".header nav a, .header__logo"),d.on("click",(function(){f(this).hasClass("active")?(v.removeClass("active"),(0,h.enablePageScroll)(),f(this).removeClass("active")):(v.addClass("active"),(0,h.disablePageScroll)(),f(this).addClass("active"))})),Array.from(u).forEach((function(e){f(e).on("click",(function(){setTimeout((function(){d.removeClass("active"),v.removeClass("active"),(0,h.enablePageScroll)()}),300)}))})),f(window).on("resize",(function(){f(window).width()>=1366&&d.hasClass("active")&&(d.removeClass("active"),v.removeClass("active"),(0,h.enablePageScroll)())}));var y=a(638);!function(){for(var e=y(".why__button"),t=y(".why__block"),a=y(".why__switcher"),o=y(".why__container"),i=function(i){y(e[i]).on("click",(function(){var r=this,c=e[i].getAttribute("data-id"),s=y('.why__block[data-id="'+c+'"]');a.removeClass("active"),o.removeClass("active"),e.removeClass("active"),y('.why__button[data-id="'+c+'"]').addClass("active"),n.ZP.to(t,{opacity:0,duration:.3,onComplete:function(){n.ZP.to(t,{display:"none",duration:0}),n.ZP.to(y(s).attr("data-id",y(r).attr("data-id")),{display:"block",duration:0,onComplete:function(){n.ZP.to(y(s).attr("data-id",y(r).attr("data-id")),{opacity:1,duration:.3})}})}})}))},r=0;r<Array.from(e).length;r++)i(r)}();a(746);var m=a(638);function p(){for(var e=m(".why__switcher"),t=m(".why__containers .why__container"),a=m(".why__bg"),o=m(".why__close"),i=function(o){m(e[o]).on("click",(function(){var i=this,r=e[o].getAttribute("data-id"),c=m('.why__containers .why__container[data-id="'+r+'"]');c.hasClass("active")?a.removeClass("active"):a.addClass("active"),n.ZP.to(t,{opacity:0,duration:.3,onComplete:function(){n.ZP.to(t,{display:"none",duration:0}),n.ZP.to(m(c).attr("data-id",m(i).attr("data-id")),{display:"block",duration:0,onComplete:function(){n.ZP.to(m(c).attr("data-id",m(i).attr("data-id")),{opacity:1,zIndex:100,duration:.3})}})}})}))},r=0;r<Array.from(e).length;r++)i(r);o.on("click",(function(){a.removeClass("active"),n.ZP.to(t,{opacity:0,zIndex:-1,duration:.3,onComplete:function(){n.ZP.to(t,{display:"none",duration:0})}})}))}m(window).on("resize",(function(){m(window).width()<=1366&&p()})),m(window).width()<=1366&&p()},243:(e,t,a)=>{var o,n=a(638);o=n(".header").outerHeight(),document.documentElement.style.setProperty("--header-height","".concat(o,"px"))},746:(e,t,a)=>{var o,n,i,r=a(638);o=r(".why__switcher"),n=r(".why__close"),i=r(".why__container"),o.on("click",(function(){o.not(this).removeClass("active"),o.not(this).next().removeClass("active"),o.not(this).parent().removeClass("active"),r(this).toggleClass("active"),r(this).parent().toggleClass("active"),r(this).next().toggleClass("active")})),n.on("click",(function(){o.removeClass("active"),o.next().removeClass("active"),o.parent().removeClass("active")})),r(document).mouseup((function(e){i.is(e.target)||o.is(e.target)||0!==o.has(e.target).length||(i.removeClass("active"),o.parent().removeClass("active"),o.removeClass("active"))}))},109:(e,t,a)=>{"use strict";a(638)((function(){a(203)}))}},a={};function o(e){var n=a[e];if(void 0!==n)return n.exports;var i=a[e]={exports:{}};return t[e].call(i.exports,i,i.exports,o),i.exports}o.m=t,e=[],o.O=(t,a,n,i)=>{if(!a){var r=1/0;for(d=0;d<e.length;d++){for(var[a,n,i]=e[d],c=!0,s=0;s<a.length;s++)(!1&i||r>=i)&&Object.keys(o.O).every((e=>o.O[e](a[s])))?a.splice(s--,1):(c=!1,i<r&&(r=i));if(c){e.splice(d--,1);var l=n();void 0!==l&&(t=l)}}return t}i=i||0;for(var d=e.length;d>0&&e[d-1][2]>i;d--)e[d]=e[d-1];e[d]=[a,n,i]},o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var a in t)o.o(t,a)&&!o.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e={296:0};o.O.j=t=>0===e[t];var t=(t,a)=>{var n,i,[r,c,s]=a,l=0;if(r.some((t=>0!==e[t]))){for(n in c)o.o(c,n)&&(o.m[n]=c[n]);if(s)var d=s(o)}for(t&&t(a);l<r.length;l++)i=r[l],o.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return o.O(d)},a=self.webpackChunk=self.webpackChunk||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))})();var n=o.O(void 0,[720],(()=>o(109)));n=o.O(n)})();
//# sourceMappingURL=bundle.9aef200.bundle.js.map