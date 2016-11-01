webpackJsonp([1],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _reactDom = __webpack_require__(1);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _react = __webpack_require__(162);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(168);

	var _IndexStore = __webpack_require__(232);

	var _IndexStore2 = _interopRequireDefault(_IndexStore);

	var _IndexContainer = __webpack_require__(233);

	var _IndexContainer2 = _interopRequireDefault(_IndexContainer);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_reactDom2.default.render(_react2.default.createElement(
	    _reactRedux.Provider,
	    { store: _IndexStore2.default },
	    _react2.default.createElement(_IndexContainer2.default, null)
	), document.getElementById('page'));

/***/ },

/***/ 203:
/***/ function(module, exports) {

	/* Zepto v1.1.4-86-g0616279 - zepto event ajax form ie fx fx_methods touch - zeptojs.com/license */
	var Zepto=function(){function A(t){return null==t?String(t):j[S.call(t)]||"object"}function D(t){return"function"==A(t)}function Z(t){return null!=t&&t==t.window}function $(t){return null!=t&&t.nodeType==t.DOCUMENT_NODE}function R(t){return"object"==A(t)}function k(t){return R(t)&&!Z(t)&&Object.getPrototypeOf(t)==Object.prototype}function F(t){return"number"==typeof t.length}function z(t){return s.call(t,function(t){return null!=t})}function _(t){return t.length>0?n.fn.concat.apply([],t):t}function I(t){return t.replace(/::/g,"/").replace(/([A-Z]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/_/g,"-").toLowerCase()}function q(t){return t in c?c[t]:c[t]=new RegExp("(^|\\s)"+t+"(\\s|$)")}function H(t,e){return"number"!=typeof e||l[I(t)]?e:e+"px"}function U(t){var e,n;return f[t]||(e=u.createElement(t),u.body.appendChild(e),n=getComputedStyle(e,"").getPropertyValue("display"),e.parentNode.removeChild(e),"none"==n&&(n="block"),f[t]=n),f[t]}function X(t){return"children"in t?a.call(t.children):n.map(t.childNodes,function(t){return 1==t.nodeType?t:void 0})}function B(t,e){var n,i=t?t.length:0;for(n=0;i>n;n++)this[n]=t[n];this.length=i,this.selector=e||""}function V(n,i,r){for(e in i)r&&(k(i[e])||L(i[e]))?(k(i[e])&&!k(n[e])&&(n[e]={}),L(i[e])&&!L(n[e])&&(n[e]=[]),V(n[e],i[e],r)):i[e]!==t&&(n[e]=i[e])}function Y(t,e){return null==e?n(t):n(t).filter(e)}function J(t,e,n,i){return D(e)?e.call(t,n,i):e}function W(t,e,n){null==n?t.removeAttribute(e):t.setAttribute(e,n)}function G(e,n){var i=e.className||"",r=i&&i.baseVal!==t;return n===t?r?i.baseVal:i:void(r?i.baseVal=n:e.className=n)}function K(t){try{return t?"true"==t||("false"==t?!1:"null"==t?null:+t+""==t?+t:/^[\[\{]/.test(t)?n.parseJSON(t):t):t}catch(e){return t}}function Q(t,e){e(t);for(var n=0,i=t.childNodes.length;i>n;n++)Q(t.childNodes[n],e)}var t,e,n,i,P,N,r=[],o=r.concat,s=r.filter,a=r.slice,u=window.document,f={},c={},l={"column-count":1,columns:1,"font-weight":1,"line-height":1,opacity:1,"z-index":1,zoom:1},h=/^\s*<(\w+|!)[^>]*>/,p=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,d=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,m=/^(?:body|html)$/i,g=/([A-Z])/g,y=["val","css","html","text","data","width","height","offset"],v=["after","prepend","before","append"],w=u.createElement("table"),x=u.createElement("tr"),b={tr:u.createElement("tbody"),tbody:w,thead:w,tfoot:w,td:x,th:x,"*":u.createElement("div")},E=/complete|loaded|interactive/,T=/^[\w-]*$/,j={},S=j.toString,C={},O=u.createElement("div"),M={tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},L=Array.isArray||function(t){return t instanceof Array};return C.matches=function(t,e){if(!e||!t||1!==t.nodeType)return!1;var n=t.webkitMatchesSelector||t.mozMatchesSelector||t.oMatchesSelector||t.matchesSelector;if(n)return n.call(t,e);var i,r=t.parentNode,o=!r;return o&&(r=O).appendChild(t),i=~C.qsa(r,e).indexOf(t),o&&O.removeChild(t),i},P=function(t){return t.replace(/-+(.)?/g,function(t,e){return e?e.toUpperCase():""})},N=function(t){return s.call(t,function(e,n){return t.indexOf(e)==n})},C.fragment=function(e,i,r){var o,s,f;return p.test(e)&&(o=n(u.createElement(RegExp.$1))),o||(e.replace&&(e=e.replace(d,"<$1></$2>")),i===t&&(i=h.test(e)&&RegExp.$1),i in b||(i="*"),f=b[i],f.innerHTML=""+e,o=n.each(a.call(f.childNodes),function(){f.removeChild(this)})),k(r)&&(s=n(o),n.each(r,function(t,e){y.indexOf(t)>-1?s[t](e):s.attr(t,e)})),o},C.Z=function(t,e){return new B(t,e)},C.isZ=function(t){return t instanceof C.Z},C.init=function(e,i){var r;if(!e)return C.Z();if("string"==typeof e)if(e=e.trim(),"<"==e[0]&&h.test(e))r=C.fragment(e,RegExp.$1,i),e=null;else{if(i!==t)return n(i).find(e);r=C.qsa(u,e)}else{if(D(e))return n(u).ready(e);if(C.isZ(e))return e;if(L(e))r=z(e);else if(R(e))r=[e],e=null;else if(h.test(e))r=C.fragment(e.trim(),RegExp.$1,i),e=null;else{if(i!==t)return n(i).find(e);r=C.qsa(u,e)}}return C.Z(r,e)},n=function(t,e){return C.init(t,e)},n.extend=function(t){var e,n=a.call(arguments,1);return"boolean"==typeof t&&(e=t,t=n.shift()),n.forEach(function(n){V(t,n,e)}),t},C.qsa=function(t,e){var n,i="#"==e[0],r=!i&&"."==e[0],o=i||r?e.slice(1):e,s=T.test(o);return t.getElementById&&s&&i?(n=t.getElementById(o))?[n]:[]:1!==t.nodeType&&9!==t.nodeType&&11!==t.nodeType?[]:a.call(s&&!i&&t.getElementsByClassName?r?t.getElementsByClassName(o):t.getElementsByTagName(e):t.querySelectorAll(e))},n.contains=u.documentElement.contains?function(t,e){return t!==e&&t.contains(e)}:function(t,e){for(;e&&(e=e.parentNode);)if(e===t)return!0;return!1},n.type=A,n.isFunction=D,n.isWindow=Z,n.isArray=L,n.isPlainObject=k,n.isEmptyObject=function(t){var e;for(e in t)return!1;return!0},n.inArray=function(t,e,n){return r.indexOf.call(e,t,n)},n.camelCase=P,n.trim=function(t){return null==t?"":String.prototype.trim.call(t)},n.uuid=0,n.support={},n.expr={},n.noop=function(){},n.map=function(t,e){var n,r,o,i=[];if(F(t))for(r=0;r<t.length;r++)n=e(t[r],r),null!=n&&i.push(n);else for(o in t)n=e(t[o],o),null!=n&&i.push(n);return _(i)},n.each=function(t,e){var n,i;if(F(t)){for(n=0;n<t.length;n++)if(e.call(t[n],n,t[n])===!1)return t}else for(i in t)if(e.call(t[i],i,t[i])===!1)return t;return t},n.grep=function(t,e){return s.call(t,e)},window.JSON&&(n.parseJSON=JSON.parse),n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(t,e){j["[object "+e+"]"]=e.toLowerCase()}),n.fn={constructor:C.Z,length:0,forEach:r.forEach,reduce:r.reduce,push:r.push,sort:r.sort,splice:r.splice,indexOf:r.indexOf,concat:function(){var t,e,n=[];for(t=0;t<arguments.length;t++)e=arguments[t],n[t]=C.isZ(e)?e.toArray():e;return o.apply(C.isZ(this)?this.toArray():this,n)},map:function(t){return n(n.map(this,function(e,n){return t.call(e,n,e)}))},slice:function(){return n(a.apply(this,arguments))},ready:function(t){return E.test(u.readyState)&&u.body?t(n):u.addEventListener("DOMContentLoaded",function(){t(n)},!1),this},get:function(e){return e===t?a.call(this):this[e>=0?e:e+this.length]},toArray:function(){return this.get()},size:function(){return this.length},remove:function(){return this.each(function(){null!=this.parentNode&&this.parentNode.removeChild(this)})},each:function(t){return r.every.call(this,function(e,n){return t.call(e,n,e)!==!1}),this},filter:function(t){return D(t)?this.not(this.not(t)):n(s.call(this,function(e){return C.matches(e,t)}))},add:function(t,e){return n(N(this.concat(n(t,e))))},is:function(t){return this.length>0&&C.matches(this[0],t)},not:function(e){var i=[];if(D(e)&&e.call!==t)this.each(function(t){e.call(this,t)||i.push(this)});else{var r="string"==typeof e?this.filter(e):F(e)&&D(e.item)?a.call(e):n(e);this.forEach(function(t){r.indexOf(t)<0&&i.push(t)})}return n(i)},has:function(t){return this.filter(function(){return R(t)?n.contains(this,t):n(this).find(t).size()})},eq:function(t){return-1===t?this.slice(t):this.slice(t,+t+1)},first:function(){var t=this[0];return t&&!R(t)?t:n(t)},last:function(){var t=this[this.length-1];return t&&!R(t)?t:n(t)},find:function(t){var e,i=this;return e=t?"object"==typeof t?n(t).filter(function(){var t=this;return r.some.call(i,function(e){return n.contains(e,t)})}):1==this.length?n(C.qsa(this[0],t)):this.map(function(){return C.qsa(this,t)}):n()},closest:function(t,e){var i=this[0],r=!1;for("object"==typeof t&&(r=n(t));i&&!(r?r.indexOf(i)>=0:C.matches(i,t));)i=i!==e&&!$(i)&&i.parentNode;return n(i)},parents:function(t){for(var e=[],i=this;i.length>0;)i=n.map(i,function(t){return(t=t.parentNode)&&!$(t)&&e.indexOf(t)<0?(e.push(t),t):void 0});return Y(e,t)},parent:function(t){return Y(N(this.pluck("parentNode")),t)},children:function(t){return Y(this.map(function(){return X(this)}),t)},contents:function(){return this.map(function(){return this.contentDocument||a.call(this.childNodes)})},siblings:function(t){return Y(this.map(function(t,e){return s.call(X(e.parentNode),function(t){return t!==e})}),t)},empty:function(){return this.each(function(){this.innerHTML=""})},pluck:function(t){return n.map(this,function(e){return e[t]})},show:function(){return this.each(function(){"none"==this.style.display&&(this.style.display=""),"none"==getComputedStyle(this,"").getPropertyValue("display")&&(this.style.display=U(this.nodeName))})},replaceWith:function(t){return this.before(t).remove()},wrap:function(t){var e=D(t);if(this[0]&&!e)var i=n(t).get(0),r=i.parentNode||this.length>1;return this.each(function(o){n(this).wrapAll(e?t.call(this,o):r?i.cloneNode(!0):i)})},wrapAll:function(t){if(this[0]){n(this[0]).before(t=n(t));for(var e;(e=t.children()).length;)t=e.first();n(t).append(this)}return this},wrapInner:function(t){var e=D(t);return this.each(function(i){var r=n(this),o=r.contents(),s=e?t.call(this,i):t;o.length?o.wrapAll(s):r.append(s)})},unwrap:function(){return this.parent().each(function(){n(this).replaceWith(n(this).children())}),this},clone:function(){return this.map(function(){return this.cloneNode(!0)})},hide:function(){return this.css("display","none")},toggle:function(e){return this.each(function(){var i=n(this);(e===t?"none"==i.css("display"):e)?i.show():i.hide()})},prev:function(t){return n(this.pluck("previousElementSibling")).filter(t||"*")},next:function(t){return n(this.pluck("nextElementSibling")).filter(t||"*")},html:function(t){return 0 in arguments?this.each(function(e){var i=this.innerHTML;n(this).empty().append(J(this,t,e,i))}):0 in this?this[0].innerHTML:null},text:function(t){return 0 in arguments?this.each(function(e){var n=J(this,t,e,this.textContent);this.textContent=null==n?"":""+n}):0 in this?this[0].textContent:null},attr:function(n,i){var r;return"string"!=typeof n||1 in arguments?this.each(function(t){if(1===this.nodeType)if(R(n))for(e in n)W(this,e,n[e]);else W(this,n,J(this,i,t,this.getAttribute(n)))}):this.length&&1===this[0].nodeType?!(r=this[0].getAttribute(n))&&n in this[0]?this[0][n]:r:t},removeAttr:function(t){return this.each(function(){1===this.nodeType&&t.split(" ").forEach(function(t){W(this,t)},this)})},prop:function(t,e){return t=M[t]||t,1 in arguments?this.each(function(n){this[t]=J(this,e,n,this[t])}):this[0]&&this[0][t]},data:function(e,n){var i="data-"+e.replace(g,"-$1").toLowerCase(),r=1 in arguments?this.attr(i,n):this.attr(i);return null!==r?K(r):t},val:function(t){return 0 in arguments?this.each(function(e){this.value=J(this,t,e,this.value)}):this[0]&&(this[0].multiple?n(this[0]).find("option").filter(function(){return this.selected}).pluck("value"):this[0].value)},offset:function(t){if(t)return this.each(function(e){var i=n(this),r=J(this,t,e,i.offset()),o=i.offsetParent().offset(),s={top:r.top-o.top,left:r.left-o.left};"static"==i.css("position")&&(s.position="relative"),i.css(s)});if(!this.length)return null;if(!n.contains(u.documentElement,this[0]))return{top:0,left:0};var e=this[0].getBoundingClientRect();return{left:e.left+window.pageXOffset,top:e.top+window.pageYOffset,width:Math.round(e.width),height:Math.round(e.height)}},css:function(t,i){if(arguments.length<2){var r,o=this[0];if(!o)return;if(r=getComputedStyle(o,""),"string"==typeof t)return o.style[P(t)]||r.getPropertyValue(t);if(L(t)){var s={};return n.each(t,function(t,e){s[e]=o.style[P(e)]||r.getPropertyValue(e)}),s}}var a="";if("string"==A(t))i||0===i?a=I(t)+":"+H(t,i):this.each(function(){this.style.removeProperty(I(t))});else for(e in t)t[e]||0===t[e]?a+=I(e)+":"+H(e,t[e])+";":this.each(function(){this.style.removeProperty(I(e))});return this.each(function(){this.style.cssText+=";"+a})},index:function(t){return t?this.indexOf(n(t)[0]):this.parent().children().indexOf(this[0])},hasClass:function(t){return t?r.some.call(this,function(t){return this.test(G(t))},q(t)):!1},addClass:function(t){return t?this.each(function(e){if("className"in this){i=[];var r=G(this),o=J(this,t,e,r);o.split(/\s+/g).forEach(function(t){n(this).hasClass(t)||i.push(t)},this),i.length&&G(this,r+(r?" ":"")+i.join(" "))}}):this},removeClass:function(e){return this.each(function(n){if("className"in this){if(e===t)return G(this,"");i=G(this),J(this,e,n,i).split(/\s+/g).forEach(function(t){i=i.replace(q(t)," ")}),G(this,i.trim())}})},toggleClass:function(e,i){return e?this.each(function(r){var o=n(this),s=J(this,e,r,G(this));s.split(/\s+/g).forEach(function(e){(i===t?!o.hasClass(e):i)?o.addClass(e):o.removeClass(e)})}):this},scrollTop:function(e){if(this.length){var n="scrollTop"in this[0];return e===t?n?this[0].scrollTop:this[0].pageYOffset:this.each(n?function(){this.scrollTop=e}:function(){this.scrollTo(this.scrollX,e)})}},scrollLeft:function(e){if(this.length){var n="scrollLeft"in this[0];return e===t?n?this[0].scrollLeft:this[0].pageXOffset:this.each(n?function(){this.scrollLeft=e}:function(){this.scrollTo(e,this.scrollY)})}},position:function(){if(this.length){var t=this[0],e=this.offsetParent(),i=this.offset(),r=m.test(e[0].nodeName)?{top:0,left:0}:e.offset();return i.top-=parseFloat(n(t).css("margin-top"))||0,i.left-=parseFloat(n(t).css("margin-left"))||0,r.top+=parseFloat(n(e[0]).css("border-top-width"))||0,r.left+=parseFloat(n(e[0]).css("border-left-width"))||0,{top:i.top-r.top,left:i.left-r.left}}},offsetParent:function(){return this.map(function(){for(var t=this.offsetParent||u.body;t&&!m.test(t.nodeName)&&"static"==n(t).css("position");)t=t.offsetParent;return t})}},n.fn.detach=n.fn.remove,["width","height"].forEach(function(e){var i=e.replace(/./,function(t){return t[0].toUpperCase()});n.fn[e]=function(r){var o,s=this[0];return r===t?Z(s)?s["inner"+i]:$(s)?s.documentElement["scroll"+i]:(o=this.offset())&&o[e]:this.each(function(t){s=n(this),s.css(e,J(this,r,t,s[e]()))})}}),v.forEach(function(t,e){var i=e%2;n.fn[t]=function(){var t,o,r=n.map(arguments,function(e){return t=A(e),"object"==t||"array"==t||null==e?e:C.fragment(e)}),s=this.length>1;return r.length<1?this:this.each(function(t,a){o=i?a:a.parentNode,a=0==e?a.nextSibling:1==e?a.firstChild:2==e?a:null;var f=n.contains(u.documentElement,o);r.forEach(function(t){if(s)t=t.cloneNode(!0);else if(!o)return n(t).remove();o.insertBefore(t,a),f&&Q(t,function(t){null==t.nodeName||"SCRIPT"!==t.nodeName.toUpperCase()||t.type&&"text/javascript"!==t.type||t.src||window.eval.call(window,t.innerHTML)})})})},n.fn[i?t+"To":"insert"+(e?"Before":"After")]=function(e){return n(e)[t](this),this}}),C.Z.prototype=B.prototype=n.fn,C.uniq=N,C.deserializeValue=K,n.zepto=C,n}();window.Zepto=Zepto,void 0===window.$&&(window.$=Zepto),function(t){function l(t){return t._zid||(t._zid=e++)}function h(t,e,n,i){if(e=p(e),e.ns)var r=d(e.ns);return(s[l(t)]||[]).filter(function(t){return!(!t||e.e&&t.e!=e.e||e.ns&&!r.test(t.ns)||n&&l(t.fn)!==l(n)||i&&t.sel!=i)})}function p(t){var e=(""+t).split(".");return{e:e[0],ns:e.slice(1).sort().join(" ")}}function d(t){return new RegExp("(?:^| )"+t.replace(" "," .* ?")+"(?: |$)")}function m(t,e){return t.del&&!u&&t.e in f||!!e}function g(t){return c[t]||u&&f[t]||t}function y(e,i,r,o,a,u,f){var h=l(e),d=s[h]||(s[h]=[]);i.split(/\s/).forEach(function(i){if("ready"==i)return t(document).ready(r);var s=p(i);s.fn=r,s.sel=a,s.e in c&&(r=function(e){var n=e.relatedTarget;return!n||n!==this&&!t.contains(this,n)?s.fn.apply(this,arguments):void 0}),s.del=u;var l=u||r;s.proxy=function(t){if(t=T(t),!t.isImmediatePropagationStopped()){t.data=o;var i=l.apply(e,t._args==n?[t]:[t].concat(t._args));return i===!1&&(t.preventDefault(),t.stopPropagation()),i}},s.i=d.length,d.push(s),"addEventListener"in e&&e.addEventListener(g(s.e),s.proxy,m(s,f))})}function v(t,e,n,i,r){var o=l(t);(e||"").split(/\s/).forEach(function(e){h(t,e,n,i).forEach(function(e){delete s[o][e.i],"removeEventListener"in t&&t.removeEventListener(g(e.e),e.proxy,m(e,r))})})}function T(e,i){return(i||!e.isDefaultPrevented)&&(i||(i=e),t.each(E,function(t,n){var r=i[t];e[t]=function(){return this[n]=w,r&&r.apply(i,arguments)},e[n]=x}),(i.defaultPrevented!==n?i.defaultPrevented:"returnValue"in i?i.returnValue===!1:i.getPreventDefault&&i.getPreventDefault())&&(e.isDefaultPrevented=w)),e}function j(t){var e,i={originalEvent:t};for(e in t)b.test(e)||t[e]===n||(i[e]=t[e]);return T(i,t)}var n,e=1,i=Array.prototype.slice,r=t.isFunction,o=function(t){return"string"==typeof t},s={},a={},u="onfocusin"in window,f={focus:"focusin",blur:"focusout"},c={mouseenter:"mouseover",mouseleave:"mouseout"};a.click=a.mousedown=a.mouseup=a.mousemove="MouseEvents",t.event={add:y,remove:v},t.proxy=function(e,n){var s=2 in arguments&&i.call(arguments,2);if(r(e)){var a=function(){return e.apply(n,s?s.concat(i.call(arguments)):arguments)};return a._zid=l(e),a}if(o(n))return s?(s.unshift(e[n],e),t.proxy.apply(null,s)):t.proxy(e[n],e);throw new TypeError("expected function")},t.fn.bind=function(t,e,n){return this.on(t,e,n)},t.fn.unbind=function(t,e){return this.off(t,e)},t.fn.one=function(t,e,n,i){return this.on(t,e,n,i,1)};var w=function(){return!0},x=function(){return!1},b=/^([A-Z]|returnValue$|layer[XY]$)/,E={preventDefault:"isDefaultPrevented",stopImmediatePropagation:"isImmediatePropagationStopped",stopPropagation:"isPropagationStopped"};t.fn.delegate=function(t,e,n){return this.on(e,t,n)},t.fn.undelegate=function(t,e,n){return this.off(e,t,n)},t.fn.live=function(e,n){return t(document.body).delegate(this.selector,e,n),this},t.fn.die=function(e,n){return t(document.body).undelegate(this.selector,e,n),this},t.fn.on=function(e,s,a,u,f){var c,l,h=this;return e&&!o(e)?(t.each(e,function(t,e){h.on(t,s,a,e,f)}),h):(o(s)||r(u)||u===!1||(u=a,a=s,s=n),(u===n||a===!1)&&(u=a,a=n),u===!1&&(u=x),h.each(function(n,r){f&&(c=function(t){return v(r,t.type,u),u.apply(this,arguments)}),s&&(l=function(e){var n,o=t(e.target).closest(s,r).get(0);return o&&o!==r?(n=t.extend(j(e),{currentTarget:o,liveFired:r}),(c||u).apply(o,[n].concat(i.call(arguments,1)))):void 0}),y(r,e,u,a,s,l||c)}))},t.fn.off=function(e,i,s){var a=this;return e&&!o(e)?(t.each(e,function(t,e){a.off(t,i,e)}),a):(o(i)||r(s)||s===!1||(s=i,i=n),s===!1&&(s=x),a.each(function(){v(this,e,s,i)}))},t.fn.trigger=function(e,n){return e=o(e)||t.isPlainObject(e)?t.Event(e):T(e),e._args=n,this.each(function(){e.type in f&&"function"==typeof this[e.type]?this[e.type]():"dispatchEvent"in this?this.dispatchEvent(e):t(this).triggerHandler(e,n)})},t.fn.triggerHandler=function(e,n){var i,r;return this.each(function(s,a){i=j(o(e)?t.Event(e):e),i._args=n,i.target=a,t.each(h(a,e.type||e),function(t,e){return r=e.proxy(i),i.isImmediatePropagationStopped()?!1:void 0})}),r},"focusin focusout focus blur load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(e){t.fn[e]=function(t){return 0 in arguments?this.bind(e,t):this.trigger(e)}}),t.Event=function(t,e){o(t)||(e=t,t=e.type);var n=document.createEvent(a[t]||"Events"),i=!0;if(e)for(var r in e)"bubbles"==r?i=!!e[r]:n[r]=e[r];return n.initEvent(t,i,!0),T(n)}}(Zepto),function(t){function h(e,n,i){var r=t.Event(n);return t(e).trigger(r,i),!r.isDefaultPrevented()}function p(t,e,i,r){return t.global?h(e||n,i,r):void 0}function d(e){e.global&&0===t.active++&&p(e,null,"ajaxStart")}function m(e){e.global&&!--t.active&&p(e,null,"ajaxStop")}function g(t,e){var n=e.context;return e.beforeSend.call(n,t,e)===!1||p(e,n,"ajaxBeforeSend",[t,e])===!1?!1:void p(e,n,"ajaxSend",[t,e])}function y(t,e,n,i){var r=n.context,o="success";n.success.call(r,t,o,e),i&&i.resolveWith(r,[t,o,e]),p(n,r,"ajaxSuccess",[e,n,t]),w(o,e,n)}function v(t,e,n,i,r){var o=i.context;i.error.call(o,n,e,t),r&&r.rejectWith(o,[n,e,t]),p(i,o,"ajaxError",[n,i,t||e]),w(e,n,i)}function w(t,e,n){var i=n.context;n.complete.call(i,e,t),p(n,i,"ajaxComplete",[e,n]),m(n)}function x(){}function b(t){return t&&(t=t.split(";",2)[0]),t&&(t==f?"html":t==u?"json":s.test(t)?"script":a.test(t)&&"xml")||"text"}function E(t,e){return""==e?t:(t+"&"+e).replace(/[&?]{1,2}/,"?")}function T(e){e.processData&&e.data&&"string"!=t.type(e.data)&&(e.data=t.param(e.data,e.traditional)),!e.data||e.type&&"GET"!=e.type.toUpperCase()||(e.url=E(e.url,e.data),e.data=void 0)}function j(e,n,i,r){return t.isFunction(n)&&(r=i,i=n,n=void 0),t.isFunction(i)||(r=i,i=void 0),{url:e,data:n,success:i,dataType:r}}function C(e,n,i,r){var o,s=t.isArray(n),a=t.isPlainObject(n);t.each(n,function(n,u){o=t.type(u),r&&(n=i?r:r+"["+(a||"object"==o||"array"==o?n:"")+"]"),!r&&s?e.add(u.name,u.value):"array"==o||!i&&"object"==o?C(e,u,i,n):e.add(n,u)})}var i,r,e=0,n=window.document,o=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,s=/^(?:text|application)\/javascript/i,a=/^(?:text|application)\/xml/i,u="application/json",f="text/html",c=/^\s*$/,l=n.createElement("a");l.href=window.location.href,t.active=0,t.ajaxJSONP=function(i,r){if(!("type"in i))return t.ajax(i);var f,h,o=i.jsonpCallback,s=(t.isFunction(o)?o():o)||"jsonp"+ ++e,a=n.createElement("script"),u=window[s],c=function(e){t(a).triggerHandler("error",e||"abort")},l={abort:c};return r&&r.promise(l),t(a).on("load error",function(e,n){clearTimeout(h),t(a).off().remove(),"error"!=e.type&&f?y(f[0],l,i,r):v(null,n||"error",l,i,r),window[s]=u,f&&t.isFunction(u)&&u(f[0]),u=f=void 0}),g(l,i)===!1?(c("abort"),l):(window[s]=function(){f=arguments},a.src=i.url.replace(/\?(.+)=\?/,"?$1="+s),n.head.appendChild(a),i.timeout>0&&(h=setTimeout(function(){c("timeout")},i.timeout)),l)},t.ajaxSettings={type:"GET",beforeSend:x,success:x,error:x,complete:x,context:null,global:!0,xhr:function(){return new window.XMLHttpRequest},accepts:{script:"text/javascript, application/javascript, application/x-javascript",json:u,xml:"application/xml, text/xml",html:f,text:"text/plain"},crossDomain:!1,timeout:0,processData:!0,cache:!0},t.ajax=function(e){var a,u,o=t.extend({},e||{}),s=t.Deferred&&t.Deferred();for(i in t.ajaxSettings)void 0===o[i]&&(o[i]=t.ajaxSettings[i]);d(o),o.crossDomain||(a=n.createElement("a"),a.href=o.url,a.href=a.href,o.crossDomain=l.protocol+"//"+l.host!=a.protocol+"//"+a.host),o.url||(o.url=window.location.toString()),(u=o.url.indexOf("#"))>-1&&(o.url=o.url.slice(0,u)),T(o);var f=o.dataType,h=/\?.+=\?/.test(o.url);if(h&&(f="jsonp"),o.cache!==!1&&(e&&e.cache===!0||"script"!=f&&"jsonp"!=f)||(o.url=E(o.url,"_="+Date.now())),"jsonp"==f)return h||(o.url=E(o.url,o.jsonp?o.jsonp+"=?":o.jsonp===!1?"":"callback=?")),t.ajaxJSONP(o,s);var P,p=o.accepts[f],m={},w=function(t,e){m[t.toLowerCase()]=[t,e]},j=/^([\w-]+:)\/\//.test(o.url)?RegExp.$1:window.location.protocol,S=o.xhr(),C=S.setRequestHeader;if(s&&s.promise(S),o.crossDomain||w("X-Requested-With","XMLHttpRequest"),w("Accept",p||"*/*"),(p=o.mimeType||p)&&(p.indexOf(",")>-1&&(p=p.split(",",2)[0]),S.overrideMimeType&&S.overrideMimeType(p)),(o.contentType||o.contentType!==!1&&o.data&&"GET"!=o.type.toUpperCase())&&w("Content-Type",o.contentType||"application/x-www-form-urlencoded"),o.headers)for(r in o.headers)w(r,o.headers[r]);if(S.setRequestHeader=w,S.onreadystatechange=function(){if(4==S.readyState){S.onreadystatechange=x,clearTimeout(P);var e,n=!1;if(S.status>=200&&S.status<300||304==S.status||0==S.status&&"file:"==j){f=f||b(o.mimeType||S.getResponseHeader("content-type")),e=S.responseText;try{"script"==f?(1,eval)(e):"xml"==f?e=S.responseXML:"json"==f&&(e=c.test(e)?null:t.parseJSON(e))}catch(i){n=i}n?v(n,"parsererror",S,o,s):y(e,S,o,s)}else v(S.statusText||null,S.status?"error":"abort",S,o,s)}},g(S,o)===!1)return S.abort(),v(null,"abort",S,o,s),S;if(o.xhrFields)for(r in o.xhrFields)S[r]=o.xhrFields[r];var N="async"in o?o.async:!0;S.open(o.type,o.url,N,o.username,o.password);for(r in m)C.apply(S,m[r]);return o.timeout>0&&(P=setTimeout(function(){S.onreadystatechange=x,S.abort(),v(null,"timeout",S,o,s)},o.timeout)),S.send(o.data?o.data:null),S},t.get=function(){return t.ajax(j.apply(null,arguments))},t.post=function(){var e=j.apply(null,arguments);return e.type="POST",t.ajax(e)},t.getJSON=function(){var e=j.apply(null,arguments);return e.dataType="json",t.ajax(e)},t.fn.load=function(e,n,i){if(!this.length)return this;var a,r=this,s=e.split(/\s/),u=j(e,n,i),f=u.success;return s.length>1&&(u.url=s[0],a=s[1]),u.success=function(e){r.html(a?t("<div>").html(e.replace(o,"")).find(a):e),f&&f.apply(r,arguments)},t.ajax(u),this};var S=encodeURIComponent;t.param=function(e,n){var i=[];return i.add=function(e,n){t.isFunction(n)&&(n=n()),null==n&&(n=""),this.push(S(e)+"="+S(n))},C(i,e,n),i.join("&").replace(/%20/g,"+")}}(Zepto),function(t){t.fn.serializeArray=function(){var e,n,i=[],r=function(t){return t.forEach?t.forEach(r):void i.push({name:e,value:t})};return this[0]&&t.each(this[0].elements,function(i,o){n=o.type,e=o.name,e&&"fieldset"!=o.nodeName.toLowerCase()&&!o.disabled&&"submit"!=n&&"reset"!=n&&"button"!=n&&"file"!=n&&("radio"!=n&&"checkbox"!=n||o.checked)&&r(t(o).val())}),i},t.fn.serialize=function(){var t=[];return this.serializeArray().forEach(function(e){t.push(encodeURIComponent(e.name)+"="+encodeURIComponent(e.value))}),t.join("&")},t.fn.submit=function(e){if(0 in arguments)this.bind("submit",e);else if(this.length){var n=t.Event("submit");this.eq(0).trigger(n),n.isDefaultPrevented()||this.get(0).submit()}return this}}(Zepto),function(){try{getComputedStyle(void 0)}catch(t){var e=getComputedStyle;window.getComputedStyle=function(t){try{return e(t)}catch(n){return null}}}}(),function(t,e){function y(t){return t.replace(/([a-z])([A-Z])/,"$1-$2").toLowerCase()}function v(t){return i?i+t:t.toLowerCase()}var i,a,u,f,c,l,h,p,d,m,n="",r={Webkit:"webkit",Moz:"",O:"o"},o=document.createElement("div"),s=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i,g={};t.each(r,function(t,r){return o.style[t+"TransitionProperty"]!==e?(n="-"+t.toLowerCase()+"-",i=r,!1):void 0}),a=n+"transform",g[u=n+"transition-property"]=g[f=n+"transition-duration"]=g[l=n+"transition-delay"]=g[c=n+"transition-timing-function"]=g[h=n+"animation-name"]=g[p=n+"animation-duration"]=g[m=n+"animation-delay"]=g[d=n+"animation-timing-function"]="",t.fx={off:i===e&&o.style.transitionProperty===e,speeds:{_default:400,fast:200,slow:600},cssPrefix:n,transitionEnd:v("TransitionEnd"),animationEnd:v("AnimationEnd")},t.fn.animate=function(n,i,r,o,s){return t.isFunction(i)&&(o=i,r=e,i=e),t.isFunction(r)&&(o=r,r=e),t.isPlainObject(i)&&(r=i.easing,o=i.complete,s=i.delay,i=i.duration),i&&(i=("number"==typeof i?i:t.fx.speeds[i]||t.fx.speeds._default)/1e3),s&&(s=parseFloat(s)/1e3),this.anim(n,i,r,o,s)},t.fn.anim=function(n,i,r,o,v){var w,b,j,x={},E="",T=this,S=t.fx.transitionEnd,C=!1;if(i===e&&(i=t.fx.speeds._default/1e3),v===e&&(v=0),t.fx.off&&(i=0),"string"==typeof n)x[h]=n,x[p]=i+"s",x[m]=v+"s",x[d]=r||"linear",S=t.fx.animationEnd;else{b=[];for(w in n)s.test(w)?E+=w+"("+n[w]+") ":(x[w]=n[w],b.push(y(w)));E&&(x[a]=E,b.push(a)),i>0&&"object"==typeof n&&(x[u]=b.join(", "),x[f]=i+"s",x[l]=v+"s",x[c]=r||"linear")}return j=function(e){if("undefined"!=typeof e){if(e.target!==e.currentTarget)return;t(e.target).unbind(S,j)}else t(this).unbind(S,j);C=!0,t(this).css(g),o&&o.call(this)},i>0&&(this.bind(S,j),setTimeout(function(){C||j.call(T)},1e3*(i+v)+25)),this.size()&&this.get(0).clientLeft,this.css(x),0>=i&&setTimeout(function(){T.each(function(){j.call(this)})},0),this},o=null}(Zepto),function(t,e){function a(n,i,r,o,s){"function"!=typeof i||s||(s=i,i=e);var a={opacity:r};return o&&(a.scale=o,n.css(t.fx.cssPrefix+"transform-origin","0 0")),n.animate(a,i,null,s)}function u(e,n,i,r){return a(e,n,0,i,function(){o.call(t(this)),r&&r.call(this)})}var n=window.document,r=(n.documentElement,t.fn.show),o=t.fn.hide,s=t.fn.toggle;t.fn.show=function(t,n){return r.call(this),t===e?t=0:this.css("opacity",0),a(this,t,1,"1,1",n)},t.fn.hide=function(t,n){return t===e?o.call(this):u(this,t,"0,0",n)},t.fn.toggle=function(n,i){return n===e||"boolean"==typeof n?s.call(this,n):this.each(function(){var e=t(this);e["none"==e.css("display")?"show":"hide"](n,i)})},t.fn.fadeTo=function(t,e,n){return a(this,t,e,null,n)},t.fn.fadeIn=function(t,e){var n=this.css("opacity");return n>0?this.css("opacity",0):n=1,r.call(this).fadeTo(t,n,e)},t.fn.fadeOut=function(t,e){return u(this,t,null,e)},t.fn.fadeToggle=function(e,n){return this.each(function(){var i=t(this);i[0==i.css("opacity")||"none"==i.css("display")?"fadeIn":"fadeOut"](e,n)})}}(Zepto),function(t){function u(t,e,n,i){return Math.abs(t-e)>=Math.abs(n-i)?t-e>0?"Left":"Right":n-i>0?"Up":"Down"}function f(){o=null,e.last&&(e.el.trigger("longTap"),e={})}function c(){o&&clearTimeout(o),o=null}function l(){n&&clearTimeout(n),i&&clearTimeout(i),r&&clearTimeout(r),o&&clearTimeout(o),n=i=r=o=null,e={}}function h(t){return("touch"==t.pointerType||t.pointerType==t.MSPOINTER_TYPE_TOUCH)&&t.isPrimary}function p(t,e){return t.type=="pointer"+e||t.type.toLowerCase()=="mspointer"+e}var n,i,r,o,a,e={},s=750;t(document).ready(function(){var d,m,v,w,g=0,y=0;"MSGesture"in window&&(a=new MSGesture,a.target=document.body),t(document).bind("MSGestureEnd",function(t){var n=t.velocityX>1?"Right":t.velocityX<-1?"Left":t.velocityY>1?"Down":t.velocityY<-1?"Up":null;n&&(e.el.trigger("swipe"),e.el.trigger("swipe"+n))}).on("touchstart MSPointerDown pointerdown",function(i){(!(w=p(i,"down"))||h(i))&&(v=w?i:i.touches[0],i.touches&&1===i.touches.length&&e.x2&&(e.x2=void 0,e.y2=void 0),d=Date.now(),m=d-(e.last||d),e.el=t("tagName"in v.target?v.target:v.target.parentNode),n&&clearTimeout(n),e.x1=v.pageX,e.y1=v.pageY,m>0&&250>=m&&(e.isDoubleTap=!0),e.last=d,o=setTimeout(f,s),a&&w&&a.addPointer(i.pointerId))}).on("touchmove MSPointerMove pointermove",function(t){(!(w=p(t,"move"))||h(t))&&(v=w?t:t.touches[0],c(),e.x2=v.pageX,e.y2=v.pageY,g+=Math.abs(e.x1-e.x2),y+=Math.abs(e.y1-e.y2))}).on("touchend MSPointerUp pointerup",function(o){(!(w=p(o,"up"))||h(o))&&(c(),e.x2&&Math.abs(e.x1-e.x2)>30||e.y2&&Math.abs(e.y1-e.y2)>30?r=setTimeout(function(){e.el.trigger("swipe"),e.el.trigger("swipe"+u(e.x1,e.x2,e.y1,e.y2)),e={}},0):"last"in e&&(30>g&&30>y?i=setTimeout(function(){var i=t.Event("tap");i.cancelTouch=l,e.el.trigger(i),e.isDoubleTap?(e.el&&e.el.trigger("doubleTap"),e={}):n=setTimeout(function(){n=null,e.el&&e.el.trigger("singleTap"),e={}},250)},0):e={}),g=y=0)}).on("touchcancel MSPointerCancel pointercancel",l),t(window).on("scroll",l)}),["swipe","swipeLeft","swipeRight","swipeUp","swipeDown","doubleTap","tap","singleTap","longTap"].forEach(function(e){t.fn[e]=function(t){return this.on(e,t)}})}(Zepto);
	module.exports = Zepto;

/***/ },

/***/ 232:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _redux = __webpack_require__(175);

	var _reduxThunk = __webpack_require__(191);

	var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

	var _RootReducer = __webpack_require__(192);

	var _RootReducer2 = _interopRequireDefault(_RootReducer);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//devTools
	// import { devTools, persistState } from 'redux-devtools';
	// import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';
	// import DiffMonitor from 'redux-devtools-diff-monitor';

	var createStoreWithMiddleware = (0, _redux.applyMiddleware)(_reduxThunk2.default)((0, _redux.compose)()(
	// devTools(),
	// persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
	_redux.createStore));

	var store = createStoreWithMiddleware(_RootReducer2.default);

	exports.default = store;

/***/ },

/***/ 233:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	__webpack_require__(195);

	var _react = __webpack_require__(162);

	var _react2 = _interopRequireDefault(_react);

	var _redux = __webpack_require__(175);

	var _reactRedux = __webpack_require__(168);

	var _Action = __webpack_require__(199);

	var actions = _interopRequireWildcard(_Action);

	var _banner = __webpack_require__(234);

	var _banner2 = _interopRequireDefault(_banner);

	var _exchselection = __webpack_require__(238);

	var _exchselection2 = _interopRequireDefault(_exchselection);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var imglazyload = __webpack_require__(243);

	var IndexContainer = function (_Component) {
	    _inherits(IndexContainer, _Component);

	    function IndexContainer(props) {
	        _classCallCheck(this, IndexContainer);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(IndexContainer).call(this, props));

	        _this.state = _this.props;
	        return _this;
	    }

	    _createClass(IndexContainer, [{
	        key: 'componentWillMount',
	        value: function componentWillMount() {
	            var _props = this.props;
	            var dispatch = _props.dispatch;
	            var smartData = _props.smartData;
	            var commonParams = _props.commonParams;

	            smartData.commonParams = commonParams;
	            console.log('commonParams : ', commonParams);
	            //dispatch(actions.init());
	        }
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            this.lazyloadInit();
	        }
	    }, {
	        key: 'lazyloadInit',
	        value: function lazyloadInit() {
	            var lazyImgs = $('img[src$="placeholder.png"]');
	            console.log(lazyImgs);
	            lazyImgs.lazyload({
	                data_attribute: 'data-lazy-src',
	                effect: 'fadeIn',
	                skip_invisible: false
	            });
	        }
	    }, {
	        key: 'componentDidUpdate',
	        value: function componentDidUpdate() {
	            this.lazyloadInit();
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            console.log('render data : ', this.props);
	            return _react2.default.createElement(
	                'div',
	                { className: 'page-wrap' },
	                _react2.default.createElement(_banner2.default, null),
	                _react2.default.createElement(_exchselection2.default, null)
	            );
	        }
	    }]);

	    return IndexContainer;
	}(_react.Component);

	function mapStateToProps(state) {
	    return {
	        smartData: state.SmartReducer
	    };
	}
	exports.default = (0, _reactRedux.connect)(mapStateToProps)(IndexContainer);

/***/ },

/***/ 234:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(162);

	var _react2 = _interopRequireDefault(_react);

	__webpack_require__(235);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Banner = function (_Component) {
		_inherits(Banner, _Component);

		function Banner(props) {
			_classCallCheck(this, Banner);

			return _possibleConstructorReturn(this, Object.getPrototypeOf(Banner).call(this, props));
		}

		_createClass(Banner, [{
			key: 'render',
			value: function render() {
				console.log(({"host":"./build"}).host, 111111);
				return _react2.default.createElement(
					'div',
					null,
					_react2.default.createElement(
						'div',
						{ className: 'banner-wrap' },
						_react2.default.createElement('img', { src: ({"host":"./build"}).host + "/htmlImg/placeholder.png", 'data-lazy-src': ({"host":"./build"}).host + "/htmlImg/test/test1.jpg" })
					),
					_react2.default.createElement(
						'div',
						{ className: 'winning-info' },
						'恭喜中奖：楚留得获得iPad一台'
					)
				);
			}
		}]);

		return Banner;
	}(_react.Component);

	exports.default = Banner;

/***/ },

/***/ 235:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(236);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(198)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../../../../node_modules/css-loader/index.js!./../../../../../../../node_modules/sass-loader/index.js!./banner.scss", function() {
				var newContent = require("!!./../../../../../../../node_modules/css-loader/index.js!./../../../../../../../node_modules/sass-loader/index.js!./banner.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 236:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(197)();
	// imports


	// module
	exports.push([module.id, ".page-wrap {\n  width: 100%; }\n\n.img-wrap {\n  position: absolute;\n  width: 100%;\n  padding-top: 50%;\n  overflow: hidden; }\n  .img-wrap img {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%; }\n\n.banner-wrap {\n  position: relative;\n  width: 100%;\n  padding-top: 50%;\n  overflow: hidden; }\n  .banner-wrap img {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%; }\n\n.winning-info {\n  line-height: 50px;\n  font-size: 1.6rem;\n  color: #666;\n  padding-left: 50px;\n  background: url(" + __webpack_require__(237) + ") 18px 12px no-repeat;\n  background-size: 24px; }\n", ""]);

	// exports


/***/ },

/***/ 237:
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAeCAYAAABNChwpAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MjU1NURBMUUyMTVGMTFFNjk0MzBDQzVBQ0M1OUM0MEYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MjU1NURBMUYyMTVGMTFFNjk0MzBDQzVBQ0M1OUM0MEYiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoyNTU1REExQzIxNUYxMUU2OTQzMENDNUFDQzU5QzQwRiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoyNTU1REExRDIxNUYxMUU2OTQzMENDNUFDQzU5QzQwRiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pp64/9oAAAK7SURBVHjavJdbiE1RGMfPmXMMk8uMywumxJF5QgqhFGGKUholpCMjueX2IjPJw7hkPHhiJEOUhFxzeWBMEw+UKRo8oJlxK8p9NEbC+C39Ty2rc/Y+Zx/bV7/2aa291/qf9a31fd+KdicjQW0inIRWKIfuIIPEA06+DOqgFwyHfvA5yEAFOb7fEw7AEU3uZzGolMi8BYyEW7AKfsI2eOjzzQQ4DPchmY8As+T3NOBbmAPbs/D7XdgHfeEY7MpVwFA4pSXvA40wFq5lKdys1DqogK9QBVvcTXgGxmUYYIh8/Q1qoBZ+BdhrF7RqRvgOaIYG0xHlGHoto5nsEmyGJ2n6W2A0DIL3VvtUeAHPnfcrtSfa9V1nygVfoAwSDgNhXobJbett/R4ATfAIFjrvGVde0alYa++Bj5qkzeFTgOX+APsl6gQscPqrtHk3Qo+CSDi2Xv8wCvVQavU9gBswGGaFJSCiSFmvI1jt9J3Wc3aYAiIKVj9gMRRa7U2pQBW2gNdwG4phjNXeqhgxLGwBxh7rWeocb7PxS/6HAC8rjOc5wGXogjce75Tp+cpJAf3hXb4Cqn36TSifrEDXYrUnlKrbwnZBrfLNcfhutU/TszlMARtgCXSkScOp6HgxHsLEMVVNKxRyVzr+N0loho5oU9xKIAnFcde6lI6ztRGavBOWq56wbbdC9F4TpPzScUrAQdiqQW1bA6OUWGybq5j/zC8dGwFn+THdQ0CJFJvotUhlllsPFMvXXmaW/apcVK7q6s95nC8XZGIKPJWLbsLSNINHfSavUGFTqKPbmEtRegfGw3mVZ0flv1iW9446lX1FsBP2BKmKO7RSNdrZmySoyOe7SbBagSipffT30gW4mpkvDjnptSTDzSgml12Hl+kGiwa8G86Ecyo2vAT886tZyhpU+barvOoIGrV+CzAAOaGdv3GdlQMAAAAASUVORK5CYII="

/***/ },

/***/ 238:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(162);

	var _react2 = _interopRequireDefault(_react);

	__webpack_require__(239);

	var _ExchList = __webpack_require__(241);

	var _ExchList2 = _interopRequireDefault(_ExchList);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ExchangeSelection = function (_Component) {
		_inherits(ExchangeSelection, _Component);

		function ExchangeSelection(props) {
			_classCallCheck(this, ExchangeSelection);

			return _possibleConstructorReturn(this, Object.getPrototypeOf(ExchangeSelection).call(this, props));
		}

		_createClass(ExchangeSelection, [{
			key: 'render',
			value: function render() {

				return _react2.default.createElement(
					'div',
					{ className: 'exchange-wrap' },
					_react2.default.createElement(
						'div',
						{ className: 'title-wrap' },
						_react2.default.createElement('img', { src: ({"host":"./build"}).host + "/htmlImg/placeholder.png", 'data-lazy-src': ({"host":"./build"}).host + "/htmlImg/exchange.jpg" })
					),
					_react2.default.createElement(_ExchList2.default, null),
					_react2.default.createElement(_ExchList2.default, null),
					_react2.default.createElement(_ExchList2.default, null),
					_react2.default.createElement(_ExchList2.default, null)
				);
			}
		}]);

		return ExchangeSelection;
	}(_react.Component);

	exports.default = ExchangeSelection;

/***/ },

/***/ 239:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(240);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(198)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../../../../node_modules/css-loader/index.js!./../../../../../../../node_modules/sass-loader/index.js!./exchangeselection.scss", function() {
				var newContent = require("!!./../../../../../../../node_modules/css-loader/index.js!./../../../../../../../node_modules/sass-loader/index.js!./exchangeselection.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 240:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(197)();
	// imports


	// module
	exports.push([module.id, ".exchange-wrap {\n  width: 100%;\n  min-height: 40px; }\n  .exchange-wrap .title-wrap {\n    position: relative;\n    width: 100%;\n    padding-top: 12.5%;\n    overflow: hidden; }\n    .exchange-wrap .title-wrap img {\n      position: absolute;\n      top: 0;\n      left: 0;\n      width: 100%; }\n\n.exch-list {\n  width: 100%;\n  padding: 15px;\n  border-bottom: 1px solid #d7d7d7;\n  display: table; }\n  .exch-list .exch-list-img {\n    position: relative;\n    width: 36%;\n    padding-top: 36%;\n    border: 1px solid #dcdcdc;\n    overflow: hidden;\n    display: table-cell; }\n    .exch-list .exch-list-img img {\n      position: absolute;\n      top: 0;\n      left: 0;\n      width: 100%; }\n  .exch-list .exch-list-left {\n    width: 64%;\n    display: table-cell;\n    padding-left: 15px;\n    vertical-align: middle; }\n    .exch-list .exch-list-left h3 {\n      color: #333;\n      font-size: 1.5rem;\n      line-height: 2rem; }\n      .exch-list .exch-list-left h3 span {\n        padding-left: 10px; }\n\n.exch-button-wrap {\n  height: 50px;\n  position: relative; }\n  .exch-button-wrap .process-bg {\n    border-radius: 5px;\n    height: 10px;\n    background-color: #ffc9c6;\n    display: inline-block;\n    width: 70%;\n    position: absolute;\n    top: 20px;\n    overflow: hidden; }\n    .exch-button-wrap .process-bg .process-ing {\n      height: 10px;\n      width: 20%;\n      background-color: #ff3a2f;\n      border-radius: 5px; }\n  .exch-button-wrap .exch-button-bg {\n    background-color: #ffc9c6;\n    width: 50px;\n    border-radius: 50%;\n    height: 50px;\n    display: inline-block;\n    margin-left: 10px;\n    position: absolute;\n    right: 0;\n    transition: all ease-out .1s; }\n    .exch-button-wrap .exch-button-bg .exch-button {\n      background-color: #ff3a2f;\n      width: 40px;\n      border-radius: 50%;\n      line-height: 40px;\n      font-size: 2.1rem;\n      color: #fff;\n      text-align: center;\n      position: absolute;\n      top: 5px;\n      left: 5px; }\n    .exch-button-wrap .exch-button-bg.on-tap {\n      background-color: transparent; }\n\n.exch-process {\n  font-size: 1.5rem; }\n  .exch-process span {\n    color: #ff3a2f; }\n", ""]);

	// exports


/***/ },

/***/ 241:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(162);

	var _react2 = _interopRequireDefault(_react);

	var _TextButton = __webpack_require__(217);

	var _TextButton2 = _interopRequireDefault(_TextButton);

	var _ExchButton = __webpack_require__(242);

	var _ExchButton2 = _interopRequireDefault(_ExchButton);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ExchList = function (_Component) {
		_inherits(ExchList, _Component);

		function ExchList(props) {
			_classCallCheck(this, ExchList);

			return _possibleConstructorReturn(this, Object.getPrototypeOf(ExchList).call(this, props));
		}

		_createClass(ExchList, [{
			key: 'render',
			value: function render() {

				return _react2.default.createElement(
					'div',
					{ className: 'exch-list' },
					_react2.default.createElement(
						'div',
						{ className: 'exch-list-img' },
						_react2.default.createElement('img', { src: ({"host":"./build"}).host + "/htmlImg/placeholder.png", 'data-lazy-src': ({"host":"./build"}).host + "/htmlImg/test/goods.jpg" })
					),
					_react2.default.createElement(
						'div',
						{ className: 'exch-list-left' },
						_react2.default.createElement(
							'h3',
							null,
							_react2.default.createElement(
								_TextButton2.default,
								null,
								'第205期'
							),
							_react2.default.createElement(
								'span',
								null,
								'Apple/苹果iPhone6s 4.7英寸 4G手机'
							)
						),
						_react2.default.createElement(_ExchButton2.default, null),
						_react2.default.createElement(
							'p',
							{ className: 'exch-process' },
							'兑奖进度：',
							_react2.default.createElement(
								'span',
								null,
								'26%'
							)
						)
					)
				);
			}
		}]);

		return ExchList;
	}(_react.Component);

	exports.default = ExchList;

/***/ },

/***/ 242:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(162);

	var _react2 = _interopRequireDefault(_react);

	var _reactTappable = __webpack_require__(212);

	var _reactTappable2 = _interopRequireDefault(_reactTappable);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ExchButton = function (_Component) {
		_inherits(ExchButton, _Component);

		function ExchButton(props) {
			_classCallCheck(this, ExchButton);

			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ExchButton).call(this, props));

			_this.state = {
				touching: false
			};
			return _this;
		}

		_createClass(ExchButton, [{
			key: 'handleTouchStart',
			value: function handleTouchStart() {
				this.setState({ touching: true });
			}
		}, {
			key: 'handleTouchEnd',
			value: function handleTouchEnd() {
				this.setState({ touching: false });
			}
		}, {
			key: 'render',
			value: function render() {
				var _this2 = this;

				var onTap = this.state.touching ? 'on-tap' : '';
				return _react2.default.createElement(
					'div',
					{ className: 'exch-button-wrap' },
					_react2.default.createElement(
						'div',
						{ className: 'process-bg' },
						_react2.default.createElement('div', { className: 'process-ing' })
					),
					_react2.default.createElement(
						_reactTappable2.default,
						{
							onTouchStart: function onTouchStart() {
								return _this2.handleTouchStart();
							},
							onTouchEnd: function onTouchEnd() {
								return _this2.handleTouchEnd();
							},
							component: 'div',
							className: 'exch-button-bg ' + onTap },
						_react2.default.createElement(
							'div',
							{ className: 'exch-button' },
							'兑'
						)
					)
				);
			}
		}]);

		return ExchButton;
	}(_react.Component);

	exports.default = ExchButton;

/***/ },

/***/ 243:
/***/ function(module, exports, __webpack_require__) {

	var zepto = __webpack_require__(203);
		/*!
		 * Lazy Load - jQuery plugin for lazy loading images
		 *
		 * Copyright (c) 2007-2015 Mika Tuupola
		 *
		 * Licensed under the MIT license:
		 *   http://www.opensource.org/licenses/mit-license.php
		 *
		 * Project home:
		 *   http://www.appelsiini.net/projects/lazyload
		 *
		 * Version:  1.9.5
		 *
		 */

	module.exports = (function($, window, document, undefined) {
		var $window = $(window);

		$.fn.lazyload = function(options) {
			var elements = this;
			var $container;
			var settings = {
				threshold: 100,
				failure_limit: 0,
				event: "scroll",
				effect: "show",
				effect_speed:300,
				container: window,
				data_attribute: "img-url",
				skip_invisible: false,
				appear: null,
				load: null,
				placeholder: ({"host":"./build"}).host+"/htmlImg/placeholder.png"
			};

			function update() {
				var counter = 0;

				elements.each(function() {
					var $this = $(this);
					if (settings.skip_invisible && !$this.is(":visible")) {
						return;
					}
					if ($.abovethetop(this, settings) ||
						$.leftofbegin(this, settings)) {
						/* Nothing. */
					} else if (!$.belowthefold(this, settings) &&
						!$.rightoffold(this, settings)) {
						$this.trigger("appear");
						/* if we found an image we'll load, reset the counter */
						counter = 0;
					} else {
						if (++counter > settings.failure_limit) {
							return false;
						}
					}
				});
			}



			if (options) {
				/* Maintain BC for a couple of versions. */
				if (undefined !== options.failurelimit) {
					options.failure_limit = options.failurelimit;
					delete options.failurelimit;
				}
				if (undefined !== options.effectspeed) {
					options.effect_speed = options.effectspeed;
					delete options.effectspeed;
				}

				$.extend(settings, options);
			}

			/* Cache container as jQuery as object. */
			$container = (settings.container === undefined ||
				settings.container === window) ? $(window) : $(settings.container);

			/* Fire one scroll event per scroll. Not one scroll event per image. */
			if (0 === settings.event.indexOf("scroll")) {
				$container.bind(settings.event, function() {
					return update();
				});
			}

			this.each(function(index) {
				var self = this;
				var $self = $(self);

				self.loaded = false;

				/* If no src attribute given use data:uri. */
				if ($self.attr("src") === undefined || $self.attr("src") === false||$self.attr("src") === '') {
					if ($self.is("img")) {
						$self.attr("src", settings.placeholder);
					}
				}

				/* When appear is triggered load original image. */
				$self.one("appear", function() {
					if (!this.loaded) {
						if (settings.appear) {
							var elements_left = elements.length;
							settings.appear.call(self, elements_left, settings);
						};
						// B5MAppControl.loadimgforhybrid($self,index);
						// $("<img />").bind("load", function() {

								// var original = $self.attr("data-" + settings.data_attribute); // 修改使适应业务
								var original = $self.attr(settings.data_attribute);
								$self.hide();
								if ($self.is("img")) {
									$self.attr("src", original);
	                                $self.attr('data-loaded','1');

								} else {
									$self.css("background-image", "url('" + original + "')");
								}
								$self[settings.effect](settings.effect_speed);

								self.loaded = true;

								/* Remove image from array so it is not looped next time. */
								var temp = $.grep(elements, function(element) {
									return !element.loaded;
								});
								elements = $(temp);

								if (settings.load) {
									var elements_left = elements.length;
									settings.load.call(self, elements_left, settings);
								}
							// })
							// .attr("src", $self.attr("data-" + settings.data_attribute)); // 修改使适应业务
							// .attr("src", $self.attr(settings.data_attribute));
					}
				});

				/* When wanted event is triggered load original image */
				/* by triggering appear.                              */
				if (0 !== settings.event.indexOf("scroll")) {
					$(window).bind(settings.event, function() {
						if (!self.loaded) {
							$self.trigger("appear");
						}
					});
				}
			});

			/* Check if something appears when window is resized. */
			$window.bind("resize", function() {
				update();
			});

			/* With IOS5 force loading images when navigating with back button. */
			/* Non optimal workaround. */
			if ((/(?:iphone|ipod|ipad).*os 5/gi).test(navigator.appVersion)) {
				$window.bind("pageshow", function(event) {
					if (event.originalEvent && event.originalEvent.persisted) {
						elements.each(function() {
							$(this).trigger("appear");
						});
					}
				});
			}

			/* Force initial check if images should appear. */
			$(document).ready(function() {
				update();
			});

			return this;
		};
		$.belowthefold = function(element, settings) {
	        var fold;

	        if (settings.container === undefined || settings.container === window) {
	            fold = (window.innerHeight ? window.innerHeight : $window.height()) + $window.scrollTop();
	        } else {
	            fold = $(settings.container).offset().top + $(settings.container).height();
	        }

	        return fold <= $(element).offset().top - settings.threshold;
	    };

	    $.rightoffold = function(element, settings) {
	        var fold;

	        if (settings.container === undefined || settings.container === window) {
	            fold = $window.width() + $window.scrollLeft();
	        } else {
	            fold = $(settings.container).offset().left + $(settings.container).width();
	        }

	        return fold <= $(element).offset().left - settings.threshold;
	    };

	    $.abovethetop = function(element, settings) {
	        var fold;

	        if (settings.container === undefined || settings.container === window) {
	            fold = $window.scrollTop();
	        } else {
	            fold = $(settings.container).offset().top;
	        }

	        return fold >= $(element).offset().top + settings.threshold  + $(element).height();
	    };

	    $.leftofbegin = function(element, settings) {
	        var fold;

	        if (settings.container === undefined || settings.container === window) {
	            fold = $window.scrollLeft();
	        } else {
	            fold = $(settings.container).offset().left;
	        }

	        return fold >= $(element).offset().left + settings.threshold + $(element).width();
	    };

	    $.inviewport = function(element, settings) {
	         return !$.rightoffold(element, settings) && !$.leftofbegin(element, settings) &&
	                !$.belowthefold(element, settings) && !$.abovethetop(element, settings);
	     };
		return $;
	})(zepto, window, document);


/***/ }

});