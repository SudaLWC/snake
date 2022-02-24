!function(){var e={485:function(e,t,n){"use strict";var r=n(81),o=n.n(r),i=n(645),a=n.n(i)()(o());a.push([e.id,"* {\n  margin: 0;\n  padding: 0;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\nbody {\n  font: bold 20px Courier;\n}\n#main {\n  margin: auto;\n  border: 10px solid #000;\n  border-radius: 20px;\n  width: 360px;\n  height: 420px;\n  background-color: #b7d4a8;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: column;\n          flex-flow: column;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n#main #stage {\n  width: 304px;\n  height: 304px;\n  border: 2px solid #000;\n  position: relative;\n}\n#main #stage #snake > div {\n  width: 10px;\n  height: 10px;\n  background-color: #000;\n  border: 1px solid #b7d4a8;\n  position: absolute;\n}\n#main #stage #food {\n  left: 100px;\n  top: 150px;\n  width: 10px;\n  height: 10px;\n  border: 1px solid #b7d4a8;\n  position: absolute;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: row wrap;\n          flex-flow: row wrap;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -ms-flex-line-pack: justify;\n      align-content: space-between;\n}\n#main #stage #food > div {\n  width: 4px;\n  height: 4px;\n  background-color: #000;\n  -webkit-transform: rotate(45deg);\n          transform: rotate(45deg);\n}\n#main #scoreboard {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  width: 304px;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n#keyboard {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  width: 360px;\n  height: 100px;\n  margin: auto;\n}\n#keyboard > div {\n  width: 360px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n}\n#keyboard > div i {\n  font-size: 40px;\n}\n",""]),t.Z=a},982:function(e,t,n){"use strict";var r=n(81),o=n.n(r),i=n(645),a=n.n(i),s=n(667),c=n.n(s),f=new URL(n(618),n.b),l=new URL(n(970),n.b),u=new URL(n(130),n.b),d=new URL(n(861),n.b),p=a()(o()),h=c()(f),b=c()(f,{hash:"#iefix"}),y=c()(l),v=c()(u),w=c()(d,{hash:"#icomoon"});p.push([e.id,"@font-face {\n  font-family: 'icomoon';\n  src:  url("+h+");\n  src:  url("+b+") format('embedded-opentype'),\n    url("+y+") format('truetype'),\n    url("+v+") format('woff'),\n    url("+w+') format(\'svg\');\n  font-weight: normal;\n  font-style: normal;\n  font-display: block;\n}\n\n[class^="icon-"], [class*=" icon-"] {\n  /* use !important to prevent issues with browser extensions that change fonts */\n  font-family: \'icomoon\' !important;\n  speak: never;\n  font-style: normal;\n  font-weight: normal;\n  font-variant: normal;\n  text-transform: none;\n  line-height: 1;\n\n  /* Better Font Rendering =========== */\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.icon-circle-up:before {\n  content: "\\ea41";\n}\n.icon-circle-right:before {\n  content: "\\ea42";\n}\n.icon-circle-down:before {\n  content: "\\ea43";\n}\n.icon-circle-left:before {\n  content: "\\ea44";\n}\n',""]),t.Z=p},645:function(e){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(a[c]=!0)}for(var f=0;f<e.length;f++){var l=[].concat(e[f]);r&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),t.push(l))}},t}},667:function(e){"use strict";e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:function(e){"use strict";e.exports=function(e){return e[1]}},705:function(e,t,n){var r=n(639).Symbol;e.exports=r},239:function(e,t,n){var r=n(705),o=n(607),i=n(333),a=r?r.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":a&&a in Object(e)?o(e):i(e)}},561:function(e,t,n){var r=n(990),o=/^\s+/;e.exports=function(e){return e?e.slice(0,r(e)+1).replace(o,""):e}},957:function(e,t,n){var r="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g;e.exports=r},607:function(e,t,n){var r=n(705),o=Object.prototype,i=o.hasOwnProperty,a=o.toString,s=r?r.toStringTag:void 0;e.exports=function(e){var t=i.call(e,s),n=e[s];try{e[s]=void 0;var r=!0}catch(e){}var o=a.call(e);return r&&(t?e[s]=n:delete e[s]),o}},333:function(e){var t=Object.prototype.toString;e.exports=function(e){return t.call(e)}},639:function(e,t,n){var r=n(957),o="object"==typeof self&&self&&self.Object===Object&&self,i=r||o||Function("return this")();e.exports=i},990:function(e){var t=/\s/;e.exports=function(e){for(var n=e.length;n--&&t.test(e.charAt(n)););return n}},279:function(e,t,n){var r=n(218),o=n(771),i=n(841),a=Math.max,s=Math.min;e.exports=function(e,t,n){var c,f,l,u,d,p,h=0,b=!1,y=!1,v=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function w(t){var n=c,r=f;return c=f=void 0,h=t,u=e.apply(r,n)}function m(e){return h=e,d=setTimeout(x,t),b?w(e):u}function g(e){var n=e-p;return void 0===p||n>=t||n<0||y&&e-h>=l}function x(){var e=o();if(g(e))return k(e);d=setTimeout(x,function(e){var n=t-(e-p);return y?s(n,l-(e-h)):n}(e))}function k(e){return d=void 0,v&&c?w(e):(c=f=void 0,u)}function E(){var e=o(),n=g(e);if(c=arguments,f=this,p=e,n){if(void 0===d)return m(p);if(y)return clearTimeout(d),d=setTimeout(x,t),w(p)}return void 0===d&&(d=setTimeout(x,t)),u}return t=i(t)||0,r(n)&&(b=!!n.leading,l=(y="maxWait"in n)?a(i(n.maxWait)||0,t):l,v="trailing"in n?!!n.trailing:v),E.cancel=function(){void 0!==d&&clearTimeout(d),h=0,c=p=f=d=void 0},E.flush=function(){return void 0===d?u:k(o())},E}},218:function(e){e.exports=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}},5:function(e){e.exports=function(e){return null!=e&&"object"==typeof e}},448:function(e,t,n){var r=n(239),o=n(5);e.exports=function(e){return"symbol"==typeof e||o(e)&&"[object Symbol]"==r(e)}},771:function(e,t,n){var r=n(639);e.exports=function(){return r.Date.now()}},493:function(e,t,n){var r=n(279),o=n(218);e.exports=function(e,t,n){var i=!0,a=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return o(n)&&(i="leading"in n?!!n.leading:i,a="trailing"in n?!!n.trailing:a),r(e,t,{leading:i,maxWait:t,trailing:a})}},841:function(e,t,n){var r=n(561),o=n(218),i=n(448),a=/^[-+]0x[0-9a-f]+$/i,s=/^0b[01]+$/i,c=/^0o[0-7]+$/i,f=parseInt;e.exports=function(e){if("number"==typeof e)return e;if(i(e))return NaN;if(o(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=o(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=r(e);var n=s.test(e);return n||c.test(e)?f(e.slice(2),n?2:8):a.test(e)?NaN:+e}},379:function(e){"use strict";var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var i={},a=[],s=0;s<e.length;s++){var c=e[s],f=r.base?c[0]+r.base:c[0],l=i[f]||0,u="".concat(f," ").concat(l);i[f]=l+1;var d=n(u),p={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==d)t[d].references++,t[d].updater(p);else{var h=o(p,r);r.byIndex=s,t.splice(s,0,{identifier:u,updater:h,references:1})}a.push(u)}return a}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var i=r(e=e||[],o=o||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var s=n(i[a]);t[s].references--}for(var c=r(e,o),f=0;f<i.length;f++){var l=n(i[f]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}i=c}}},569:function(e){"use strict";var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:function(e){"use strict";e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:function(e,t,n){"use strict";e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:function(e){"use strict";e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:function(e){"use strict";e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},804:function(){var e,t,n,r,o,i,a,s,c;t="ipad"==(e=navigator.userAgent.toLowerCase()).match(/ipad/i),n="iphone os"==e.match(/iphone os/i),r="midp"==e.match(/midp/i),o="rv:1.2.3.4"==e.match(/rv:1.2.3.4/i),i="ucweb"==e.match(/ucweb/i),a="android"==e.match(/android/i),s="windows ce"==e.match(/windows ce/i),c="windows mobile"==e.match(/windows mobile/i),window.keyboard=!!(t||n||r||o||i||a||s||c)},618:function(e,t,n){"use strict";e.exports=n.p+"df6a9ba37fe1107c3186.eot?ibnaty"},861:function(e,t,n){"use strict";e.exports=n.p+"1c5d93a3ff60d765bf95.svg?ibnaty"},970:function(e,t,n){"use strict";e.exports=n.p+"749781117668c93a329e.ttf?ibnaty"},130:function(e,t,n){"use strict";e.exports=n.p+"4dfdb7def4caf67c9c61.woff?ibnaty"}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={id:r,exports:{}};return e[r](i,i.exports,n),i.exports}n.m=e,n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,{a:t}),t},n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e}(),n.b=document.baseURI||self.location.href,function(){"use strict";var e=n(379),t=n.n(e),r=n(795),o=n.n(r),i=n(569),a=n.n(i),s=n(565),c=n.n(s),f=n(216),l=n.n(f),u=n(589),d=n.n(u),p=n(485),h={};h.styleTagTransform=d(),h.setAttributes=c(),h.insert=a().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=l(),t()(p.Z,h),p.Z&&p.Z.locals&&p.Z.locals;var b=n(982),y={};function v(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}y.styleTagTransform=d(),y.setAttributes=c(),y.insert=a().bind(null,"head"),y.domAPI=o(),y.insertStyleElement=l(),t()(b.Z,y),b.Z&&b.Z.locals&&b.Z.locals,n(804);var w=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.foodEle=document.getElementById("food")}var t,n;return t=e,(n=[{key:"X",get:function(){return this.foodEle.offsetLeft}},{key:"Y",get:function(){return this.foodEle.offsetTop}},{key:"changePosition",value:function(){var e=10*Math.floor(30*Math.random()),t=10*Math.floor(30*Math.random());this.foodEle.style.left=e+"px",this.foodEle.style.top=t+"px"}}])&&v(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var g=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.snakeEle=document.getElementById("snake"),this.bodyEle=this.snakeEle.getElementsByTagName("div"),this.head=document.querySelector("#snake>div")}var t,n;return t=e,(n=[{key:"X",get:function(){return this.head.offsetLeft},set:function(e){if(this.X!==e){if(e>290||e<0)throw new Error("撞墙了!");this.moveBody(),this.head.style.left=e+"px",this.check()}}},{key:"Y",get:function(){return this.head.offsetTop},set:function(e){if(this.Y!==e){if(e>290||e<0)throw new Error("撞墙了!");this.moveBody(),this.head.style.top=e+"px",this.check()}}},{key:"addBody",value:function(){this.snakeEle.insertAdjacentHTML("beforeend","<div/>")}},{key:"moveBody",value:function(){for(var e=this.bodyEle.length-1;e>0;e--){var t=this.bodyEle[e-1].offsetLeft,n=this.bodyEle[e-1].offsetTop;this.bodyEle[e].style.left=t+"px",this.bodyEle[e].style.top=n+"px"}}},{key:"check",value:function(){for(var e=1;e<this.bodyEle.length;e++)if(this.bodyEle[e].offsetLeft===this.X&&this.bodyEle[e].offsetTop===this.Y)throw new Error("撞到自己了!")}}])&&m(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function x(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function k(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var E=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;x(this,e),this.maxLevel=t,this.upScore=n,this.score=0,this.level=1,this.scoreEle=document.getElementById("score"),this.levelEle=document.getElementById("level")}var t,n;return t=e,(n=[{key:"addScore",value:function(){this.scoreEle.innerHTML=++this.score+"",this.score%this.upScore==0&&this.levelUp()}},{key:"levelUp",value:function(){this.level<this.maxLevel&&(this.levelEle.innerHTML=++this.level+"")}}])&&k(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),j=E;function A(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function T(e,t,n){return t&&A(e.prototype,t),n&&A(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}var L=T((function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.keyboardEle=document.getElementById("keyboard")}));function O(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var S=n(493);new(function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.direction="",this.deathOrLive=!0,this.food=new w,this.snake=new g,this.scoreboard=new j(10,2),this.keyboard=new L,this.init()}var t,n;return t=e,(n=[{key:"init",value:function(){window&&window.keyboard?this.keyboard.keyboardEle.addEventListener("click",this.directionHandler.bind(this)):(this.keyboard.keyboardEle.style.display="none",document.addEventListener("keydown",S(this.keydownHandler.bind(this),150))),this.run()}},{key:"directionHandler",value:function(e){switch(e.preventDefault(),e.target.className){case"icon-circle-up":if("ArrowUp"===this.direction)return;if(this.snake.bodyEle[1]&&"ArrowDown"===this.direction)return;this.direction="ArrowUp";break;case"icon-circle-left":if("ArrowLeft"===this.direction)return;if(this.snake.bodyEle[1]&&"ArrowRight"===this.direction)return;this.direction="ArrowLeft";break;case"icon-circle-down":if("ArrowDown"===this.direction)return;if(this.snake.bodyEle[1]&&"ArrowUp"===this.direction)return;this.direction="ArrowDown";break;case"icon-circle-right":if("ArrowRight"===this.direction)return;if(this.snake.bodyEle[1]&&"ArrowLeft"===this.direction)return;this.direction="ArrowRight"}}},{key:"keydownHandler",value:function(e){e.preventDefault();var t=e.key,n=this.direction;switch(t){case"ArrowUp":case"Up":if("ArrowUp"===n||"Up"===n)return;if(this.snake.bodyEle[1]&&"ArrowDown"===n||"Down"===n)return;this.direction=t;break;case"ArrowLeft":case"Left":if("ArrowLeft"===n||"Left"===n)return;if(this.snake.bodyEle[1]&&"ArrowRight"===n||"Right"===n)return;this.direction=t;break;case"ArrowDown":case"Down":if("ArrowDown"===n||"Down"===n)return;if(this.snake.bodyEle[1]&&"ArrowUp"===n||"Up"===n)return;this.direction=t;break;case"ArrowRight":case"Right":if("ArrowRight"===n||"Right"===n)return;if(this.snake.bodyEle[1]&&"ArrowLeft"===n||"Left"===n)return;this.direction=t}}},{key:"run",value:function(){var e=this.snake.X,t=this.snake.Y;switch(this.direction){case"ArrowUp":case"Up":t-=10;break;case"ArrowDown":case"Down":t+=10;break;case"ArrowLeft":case"Left":e-=10;break;case"ArrowRight":case"Right":e+=10}this.check(e,t);try{this.snake.X=e,this.snake.Y=t}catch(e){var n=confirm("\n                               GAME OVER\n                               ".concat(e.message,"\n                               投币复活?"));n&&(window.location.href=window.location.href),this.deathOrLive=n}var r=15*this.scoreboard.maxLevel-15*(this.scoreboard.level-1);this.deathOrLive&&setTimeout(this.run.bind(this),r)}},{key:"check",value:function(e,t){e===this.food.X&&t===this.food.Y&&(this.food.changePosition(),this.scoreboard.addScore(),this.snake.addBody())}}])&&O(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}())}()}();