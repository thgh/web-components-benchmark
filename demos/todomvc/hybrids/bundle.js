!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e){return e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}function i(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return e.dispatchEvent(new CustomEvent(t,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){o(e,t,n[t])})}return e}({bubbles:!1},n)))}function a(e,t){var n=window.ShadyCSS;return n&&!n.nativeShadow?e(n):t}function c(e){var t=String(e.tagName).toLowerCase();return"<".concat(t,">")}n.r(t);var u="ActiveXObject"in window;function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var f=function(e){return e},s=function(e){if("object"!==l(e))throw TypeError("Assigned value must be an object: ".concat("undefined"==typeof v?"undefined":l(v)));return e&&Object.freeze(e)};function d(e,t){var n=l(e),o=f;switch(n){case"string":o=String;break;case"number":o=Number;break;case"boolean":o=Boolean;break;case"function":e=(o=e)();break;case"object":e&&Object.freeze(e),o=s}return{get:function(t){return arguments.length>1&&void 0!==arguments[1]?arguments[1]:e},set:function(e,t,n){return o(t,n)},connect:"object"!==n&&"undefined"!==n?function(n,o,i){if(n[o]===e){var a=r(o);if(n.hasAttribute(a)){var c=n.getAttribute(a);n[o]=""===c||c}}return t&&t(n,o,i)}:t}}function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function y(e){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var b=new WeakMap,h=new WeakMap,m=1e3/60,g=[];function w(e){var t=e.composedPath()[0];t===e.currentTarget&&(g[0]||requestAnimationFrame(function(){return function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;if(n&&performance.now()-n>m)requestAnimationFrame(function(){return e(t)});else{var o=g[t],r=performance.now();if(o){if(b.has(o)){var i=b.get(o),c=h.get(o);try{var u=o[i];u!==c&&(h.set(o,u),u(),c||a(function(e){return e.styleElement(o)}))}catch(n){throw e(t+1,r),n}}e(t+1,r)}else a(function(e){return g.forEach(function(t){return e.styleSubtree(t)})}),g=[]}}()}),-1===g.indexOf(t)&&g.push(t))}function x(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if("function"!=typeof e)throw TypeError("The first argument must be a function: ".concat(y(e)));var n=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.forEach(function(t){p(e,t,n[t])})}return e}({shadowRoot:!0},t);return{get:function(t){var o=e(t);return function(){return o(t,n.shadowRoot?t.shadowRoot:t)}},connect:function(e,t){if(b.has(e))throw Error("Render factory already used in '".concat(b.get(e),"' key"));if(n.shadowRoot&&!e.shadowRoot){var o={mode:"open"};"object"===y(n.shadowRoot)&&Object.assign(o,n.shadowRoot),e.attachShadow(o)}return e.addEventListener("@invalidate",w),b.set(e,t),function(){e.removeEventListener("@invalidate",w),b.delete(e)}}}}var S=new WeakMap;function k(e,t){var n=S.get(e);n||(n=new Map,S.set(e,n));var o=n.get(t);return o||(o={target:e,key:t,value:void 0,deps:new Set,state:1,checksum:0},n.set(t,o)),o}function E(e){var t=e.state,n=e.deps,o=t;return n.forEach(function(e){e.target[e.key],o+=e.state}),o}var O=null;function N(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function j(e,t){return!t||"object"!==P(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function T(e){var t="function"==typeof Map?new Map:void 0;return(T=function(e){if(null===e||(n=e,-1===Function.toString.call(n).indexOf("[native code]")))return e;var n;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,o)}function o(){return C(e,arguments,M(this).constructor)}return o.prototype=Object.create(e.prototype,{constructor:{value:o,enumerable:!1,writable:!0,configurable:!0}}),A(o,e)})(e)}function C(e,t,n){return(C=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}()?Reflect.construct:function(e,t,n){var o=[null];o.push.apply(o,t);var r=new(Function.bind.apply(e,o));return n&&A(r,n.prototype),r}).apply(null,arguments)}function A(e,t){return(A=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function M(e){return(M=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function P(e){return(P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _(e){i(e,"@invalidate",{bubbles:!0,composed:!0})}var W=function(e,t){return t};function R(e,t){e.hybrids=t,e.connects=[],Object.keys(t).forEach(function(n){var o,r=t[n],i=P(r);o="function"===i?"render"===n?x(r):{get:r}:null!==r&&"object"===i&&("object"!==i||r.get||r.set||r.connect)?{get:r.get||W,set:r.set||!r.get&&W||void 0,connect:r.connect}:d(r),Object.defineProperty(e.prototype,n,{get:function(){return function(e,t,n){var o=k(e,t);if(O===o)throw O=null,Error("Circular '".concat(t,"' get invocation in '").concat(c(e),"'"));O&&O.deps.add(o);var r=O;if(O=o,o.checksum&&o.checksum===E(o))return O=r,o.value;o.deps.clear();try{var i=n(e,o.value);i!==o.value&&(o.state+=1,o.value=i),o.checksum=E(o),O=r}catch(e){throw O=null,e}return o.value}(this,n,o.get)},set:o.set&&function(e){var t=this;!function(e,t,n,o,r){if(O)throw O=null,Error("Try to set '".concat(t,"' of '").concat(c(e),"' in get call"));var i=k(e,t),a=n(e,o,i.value);a!==i.value&&(i.state+=1,i.value=a,r())}(this,n,o.set,e,function(){return _(t)})},enumerable:!0,configurable:!1}),o.connect&&e.connects.push(function(e){return o.connect(e,n,function(){(!(arguments.length>0&&void 0!==arguments[0])||arguments[0])&&function(e,t,n){if(O)throw O=null,Error("Try to invalidate '".concat(t,"' in '").concat(c(e),"' get call"));var o=k(e,t);o.checksum=0,n&&(o.value=void 0)}(e,n),_(e)})})})}var L=new WeakMap;function $(e,t){var n=P(t);if("object"!==n&&"function"!==n)throw TypeError("Second argument must be an object or a function: ".concat(n));var o=window.customElements.get(e);if("function"===n)return o!==t?window.customElements.define(e,t):o;if(o){if(o.hybrids===t)return o;throw Error("Element '".concat(e,"' already defined"))}var r=function(t){function n(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),j(this,M(n).apply(this,arguments))}var o,r,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&A(e,t)}(n,T(HTMLElement)),o=n,i=[{key:"name",get:function(){return e}}],(r=[{key:"connectedCallback",value:function(){var e=this,t=this.constructor.connects.reduce(function(t,n){var o=n(e);return o&&t.add(o),t},new Set);L.set(this,t),_(this)}},{key:"disconnectedCallback",value:function(){L.get(this).forEach(function(e){return e()})}}])&&N(o.prototype,r),i&&N(o,i),n}();return R(r,t),customElements.define(e,r),r}function z(e){return Object.keys(e).reduce(function(t,n){var o=r(n.replace(/((?!([A-Z]{2}|^))[A-Z])/g,"-$1"));return t[n]=$(o,e[n]),t},{})}function D(){return"object"===P(arguments.length<=0?void 0:arguments[0])?z(arguments.length<=0?void 0:arguments[0]):$.apply(void 0,arguments)}var B=new WeakMap;document.addEventListener("@invalidate",function(e){var t=B.get(e.composedPath()[0]);t&&t.forEach(function(e){return e()})});var F=new WeakMap,H={get:function(e,t){return F.has(e)?F.get(e):(void 0!==t&&F.set(e,t),t)},set:function(e,t){return F.set(e,t),t}};function q(e){for(var t;e&&(t=H.get(e))&&t.endNode;)e=t.endNode;return e}function X(e){var t=H.get(e),n=t.startNode;if(n)for(var o=n,r=q(t.endNode).nextSibling;o;){var i=o.nextSibling;o.parentNode.removeChild(o),o=i!==r&&i}}var I=new WeakMap;function Z(e,t,n){var o=I.get(t),r=n.map(function(e,t){return{id:Object.prototype.hasOwnProperty.call(e,"id")?e.id:t,value:e,placeholder:null,available:!0}});if(I.set(t,r),o){var i=new Set;r.forEach(function(e){return i.add(e.id)}),o=o.filter(function(e){return!!i.has(e.id)||(X(e.placeholder),e.placeholder.parentNode.removeChild(e.placeholder),!1)})}var a=t,c=n.length-1,u=H.get(t);r.forEach(function(t,n){var r,i=o&&o.find(function(e){return e.available&&e.id===t.id});i?(i.available=!1,(r=i.placeholder).previousSibling!==a&&function(e,t){var n=H.get(e),o=n.startNode,r=q(n.endNode);t.parentNode.insertBefore(e,t.nextSibling);for(var i=e,a=o;a;){var c=a.nextSibling;i.parentNode.insertBefore(a,i.nextSibling),i=a,a=c!==r.nextSibling&&c}}(r,a),i.value!==t.value&&K(e,r,t.value)):(r=document.createTextNode(""),a.parentNode.insertBefore(r,a.nextSibling),K(e,r,t.value)),a=q(H.get(r).endNode||r),0===n&&(u.startNode=r),n===c&&(u.endNode=a),t.placeholder=r}),o&&o.forEach(function(e){e.available&&(X(e.placeholder),e.placeholder.parentNode.removeChild(e.placeholder))})}function G(e){return(G="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function K(e,t,n){var o=Array.isArray(n)?"array":G(n),r=H.get(t,{});switch(r.type!==o&&(X(t),r=H.set(t,{type:o}),""!==t.textContent&&(t.textContent="")),o){case"function":n(e,t);break;case"array":Z(e,t,n);break;default:t.textContent="number"===o||n?n:""}}function U(e){return(U="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var V=new WeakMap;function J(e){return(J="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var Q=new WeakMap;function Y(e,t,n){var o=Q.get(t)||new Set,r=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new Set;return Array.isArray(e)?e.forEach(function(e){return t.add(e)}):null!==e&&"object"===J(e)?Object.keys(e).forEach(function(n){return e[n]&&t.add(n)}):t.add(e),t}(n);Q.set(t,r),r.forEach(function(e){t.classList.add(e),o.delete(e)}),o.forEach(function(e){t.classList.remove(e)})}function ee(e){return(ee="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var te=new WeakMap;function ne(e,t,n){if(null===n||"object"!==ee(n))throw TypeError("Style value must be an object in ".concat(c(t),":"),n);var o=te.get(t)||new Map,i=Object.keys(n).reduce(function(e,i){var a=r(i),c=n[i];return c||0===c?t.style.setProperty(a,c):t.style.removeProperty(a),e.set(a,c),o.delete(a),e},new Map);o.forEach(function(e,n){t.style[n]=""}),te.set(t,i)}function oe(e,t,n){if("on"===t.substr(0,2))return function(e){return function(t,n,o,r){if(r&&n.removeEventListener(e,V.get(r),void 0!==r.options&&r.options),o){if("function"!=typeof o)throw Error("Event listener must be a function: ".concat(U(o)));V.set(o,o.bind(null,t)),n.addEventListener(e,V.get(o),void 0!==o.options&&o.options)}}}(t.substr(2));switch(e){case"class":return Y;case"style":return ne;default:return function(o,r,i){if(n||r instanceof SVGElement||!(t in r))if(!1===i||null==i)r.removeAttribute(e);else{var a=!0===i?"":String(i);r.setAttribute(e,a)}else r[t]!==i&&(r[t]=i)}}}function re(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],o=!0,r=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(o=(a=c.next()).done)&&(n.push(a.value),!t||n.length!==t);o=!0);}catch(e){r=!0,i=e}finally{try{o||null==c.return||c.return()}finally{if(r)throw i}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function ie(e){return(ie="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var ae=Date.now(),ce=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return"{{h-".concat(ae,"-").concat(e,"}}")},ue=ce("(\\d+)"),le=new RegExp("^".concat(ue,"$")),fe=new RegExp(ue,"g"),se="--".concat(ae,"--"),de=new RegExp(se,"g"),pe=new WeakMap;var ye="object"===ie(window.ShadyDOM)&&window.ShadyDOM.inUse?function(e){var t;return{get currentNode(){return t},nextNode:function(){return!!(t=void 0===t?e.childNodes[0]:t.childNodes.length?t.childNodes[0]:t.nextSibling?t.nextSibling:t.parentNode.nextSibling)}}}:function(e){return document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT|NodeFilter.SHOW_TEXT,null,!1)},be=document.createElement("div");function ve(e,t,n){var o=document.createElement("template"),r=[],i=function(e,t){var n=e.reduce(function(t,n,o){return 0===o?n:e.slice(o).join("").match(/\s*<\/\s*(table|tr|thead|tbody|tfoot|colgroup)>/)?"".concat(t,"\x3c!--").concat(ce(o-1),"--\x3e").concat(n):t+ce(o-1)+n},"");return t&&(n+="<style>\n".concat(t.join("\n/*------*/\n"),"\n</style>")),u?n.replace(/style\s*=\s*(["][^"]+["]|['][^']+[']|[^\s"'<>\/]+)/g,function(e){return"".concat(se).concat(e)}):n}(e,n);if(t&&(i="<svg>".concat(i,"</svg>")),u?o.innerHTML=i:(be.innerHTML="<template>".concat(i,"</template>"),o.content.appendChild(be.children[0].content)),t){var c=o.content.firstChild;o.content.removeChild(c),Array.from(c.childNodes).forEach(function(e){return o.content.appendChild(e)})}!function(e){for(var t,n=document.createNodeIterator(e,NodeFilter.SHOW_COMMENT,null,!1);t=n.nextNode();)le.test(t.textContent)&&(t.parentNode.insertBefore(document.createTextNode(t.textContent),t),t.parentNode.removeChild(t))}(o.content);for(var l=ye(o.content),f=0,s=function(){var n=l.currentNode;if(n.nodeType===Node.TEXT_NODE){var o=n.textContent;if(!o.match(le)){var i=o.match(fe);if(i){var a=n;i.reduce(function(e,t){var n=re(e.pop().split(t),2),o=n[0],r=n[1];return o&&e.push(o),e.push(t),r&&e.push(r),e},[o]).forEach(function(e,t){0===t?a.textContent=e:a=a.parentNode.insertBefore(document.createTextNode(e),a.nextSibling)})}}var c=n.textContent.match(le);c&&(u||(n.textContent=""),r[c[1]]=[f,K])}else n.nodeType===Node.ELEMENT_NODE&&Array.from(n.attributes).forEach(function(o){var i=o.value.trim(),a=u?o.name.replace(se,""):o.name,c=i.match(le);if(c){var l=e[c[1]].replace(/\s*=\s*['"]*$/g,"").split(" ").pop();r[c[1]]=[f,oe(a,l,t)],n.removeAttribute(o.name)}else{var s=i.match(fe);if(s){var d="attr__".concat(a);s.forEach(function(e,t){var n=re(e.match(le),2)[1];r[n]=[f,function(n,o,r){var c=H.get(o,{});c[d]=(c[d]||i).replace(e,null==r?"":r),1!==s.length&&t+1!==s.length||(o.setAttribute(a,c[d]),c[d]=void 0)}]}),o.value="",u&&a!==o.name&&(n.removeAttribute(o.name),n.setAttribute(a,""))}}});f+=1};l.nextNode();)s();return function(e,t,n){var i=H.get(t,{type:"function"});if(o!==i.template){i.template&&X(t);var c=document.importNode(function(e,t){return t?a(function(n){var o=pe.get(e);o||(o=new Map,pe.set(e,o));var r=o.get(t);if(!r){(r=document.createElement("template")).content.appendChild(e.content.cloneNode(!0)),o.set(t,r);var i=r.content.querySelectorAll("style");Array.from(i).forEach(function(e){for(var t=e.childNodes.length+1,n=0;n<t;n+=1)e.parentNode.insertBefore(document.createTextNode(ce()),e)}),n.prepareTemplate(r,t.toLowerCase())}return r},e):e}(o,e.tagName).content,!0),l=ye(c),f=r.slice(0),s=0,d=f.shift(),p=[];for(Object.assign(i,{template:o,markers:p});l.nextNode();){var y=l.currentNode;for(y.nodeType===Node.TEXT_NODE&&(le.test(y.textContent)?y.textContent="":u&&(y.textContent=y.textContent.replace(de,"")));d&&d[0]===s;)p.push([y,d[1]]),d=f.shift();s+=1}var b=Array.from(c.childNodes);if(i.startNode=b[0],i.endNode=b[b.length-1],t.nodeType===Node.TEXT_NODE){var v=t;b.forEach(function(e){t.parentNode.insertBefore(e,v.nextSibling),v=e})}else t.appendChild(c)}i.markers.forEach(function(t,o){var r=re(t,2),a=r[0],c=r[1];i.lastArgs&&i.lastArgs[o]===n[o]||c(e,a,n[o],i.lastArgs?i.lastArgs[o]:void 0)}),i.lastArgs=n}}var he=new WeakMap;function me(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:200;return function(o,r){var i;t&&(i=setTimeout(function(){i=void 0,requestAnimationFrame(function(){t(o,r)})},n)),he.set(r,e),e.then(function(t){i&&clearTimeout(i),he.get(r)===e&&(t(o,r),he.set(r,null))})}}var ge=ce(),we=new Map,xe=new WeakMap,Se={define:function(e){return D(e),this},key:function(e){return this.id=e,this},style:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return xe.set(this,t),this}};function ke(e,t,n){return Object.assign(function o(r){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:r,a=xe.get(o),c="".concat(e.join(ge)).concat(a?a.join(ge):"").concat(n?"svg":""),u=we.get(c);u||(u=ve(e,n,a),we.set(c,u)),u(r,i,t)},Se)}function Ee(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];return ke(e,n)}Object.assign(Ee,{resolve:me}),Object.assign(function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];return ke(e,n,!0)},{resolve:me});D("my-todo",{list:[{id:0,text:"my initial todo",checked:!1},{id:1,text:"Learn about Web Components",checked:!0}],render:({list:e})=>Ee`
    <style>
    h1 {
        font-size: 100px;
        font-weight: 100;
        text-align: center;
        color: rgba(175, 47, 47, 0.15);
    }
    
    section {
        background: #fff;
        margin: 130px 0 40px 0;
        position: relative;
        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);
    }
    
    #list-container {
        margin: 0;
        padding: 0;
        list-style: none;
        border-top: 1px solid #e6e6e6;
    }
    </style>
    <h1>Todos Hybrids</h1>
    <todo-input onsubmit=${(e,t)=>{e.list=[...e.list,{id:e.list.length,text:t.detail,checked:!1}]}}></todo-input>
    <ul id="list-container">
        ${e.map((e,t)=>Ee`<todo-item text="${e.text}" checked="${e.checked}" index="${t}" onremoved="${(e,t)=>{e.list=[...e.list.slice(0,t.detail),...e.list.slice(t.detail+1)]}}" onchecked=${(e,t)=>{const n=e.list[t.detail],o=e.list.slice(0);o[t.detail]=Object.assign({},n,{checked:!n.checked}),e.list=[...o]}}></todo-item>`)}
    </ul>
    `});D("todo-input",{val:"",render:()=>Ee`
    <style>
    #new-todo-form {
        position: relative;
        font-size: 24px;
        border-bottom: 1px solid #ededed;
    }

    #new-todo {
        padding: 16px 16px 16px 60px;
        border: none;
        background: rgba(0, 0, 0, 0.003);
        position: relative;
        margin: 0;
        width: 100%;
        font-size: 24px;
        font-family: inherit;
        font-weight: inherit;
        line-height: 1.4em;
        border: 0;
        outline: none;
        color: inherit;
        padding: 6px;
        border: 1px solid #CCC;
        box-shadow: inset 0 -1px 5px 0 rgba(0, 0, 0, 0.2);
        box-sizing: border-box;
    }
</style>
<form id="new-todo-form" onsubmit="${(e,t)=>{t.preventDefault(),i(e,"submit",{detail:e.val});let n=e.shadowRoot.querySelector("#new-todo");n.value="",n.blur()}}">
    <input id="new-todo" type="text" placeholder="What needs to be done?" oninput="${(e,t)=>{e.val=t.target.value}}"/>
</form>
      `});D("todo-item",{text:d("text"),checked:d("checked"),index:d("index"),render:({text:e})=>Ee`
    <style>
    :host {
        display: block;
    }

    li.item {
        font-size: 24px;
        display: block;
        position: relative;
        border-bottom: 1px solid #ededed;
    }

    li.item input {
        text-align: center;
        width: 40px;
        /* auto, since non-WebKit browsers doesn't support input styling */
        height: auto;
        position: absolute;
        top: 9px;
        bottom: 0;
        margin: auto 0;
        border: none;
        /* Mobile Safari */
        -webkit-appearance: none;
        appearance: none;
    }

    li.item input:after {
        content: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="-10 -18 100 135"><circle cx="50" cy="50" r="50" fill="none" stroke="#ededed" stroke-width="3"/></svg>');
    }

    li.item input:checked:after {
        content: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="-10 -18 100 135"><circle cx="50" cy="50" r="50" fill="none" stroke="#bddad5" stroke-width="3"/><path fill="#5dc2af" d="M72 25L42 71 27 56l-4 4 20 20 34-52z"/></svg>');
    }

    li.item label {
        white-space: pre;
        word-break: break-word;
        padding: 15px 60px 15px 15px;
        margin-left: 45px;
        display: block;
        line-height: 1.2;
        transition: color 0.4s;
    }

    li.item.completed label {
        color: #d9d9d9;
        text-decoration: line-through;
    }

    li.item button,
        li.item input[type="checkbox"] {
        outline: none;
    }

    li.item button {
        margin: 0;
        padding: 0;
        border: 0;
        background: none;
        font-size: 100%;
        vertical-align: baseline;
        font-family: inherit;
        font-weight: inherit;
        color: inherit;
        -webkit-appearance: none;
        appearance: none;
        -webkit-font-smoothing: antialiased;
        -moz-font-smoothing: antialiased;
        font-smoothing: antialiased;
    }

    li.item .destroy {
        position: absolute;
        top: 0;
        right: 10px;
        bottom: 0;
        width: 40px;
        height: 40px;
        margin: auto 0;
        font-size: 30px;
        color: #cc9a9a;
        margin-bottom: 11px;
        transition: color 0.2s ease-out;
    }

    li.item .destroy:hover {
        color: #af5b5e;
    }
</style>
<li class="item">
    <input type="checkbox" onchange="${(e,t)=>{i(e,"checked",{detail:parseInt(e.index)})}}">
    <label>${e}</label>
    <button class="destroy" onclick="${(e,t)=>{i(e,"removed",{detail:parseInt(e.index)})}}">x</button>
</li>`})}]);