!function(t){var e={};function s(n){if(e[n])return e[n].exports;var a=e[n]={i:n,l:!1,exports:{}};return t[n].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=t,s.c=e,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(n,a,function(e){return t[e]}.bind(null,a));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="",s(s.s=0)}([function(t,e,s){"use strict";s.r(e);const n=function(t,e,s){const n=this;n.activeClass="active",n.contentList=t.find("."+e),n.tabList=t.find("."+s),this.currentTab=null,n.Tab=new Proxy(n,{set:(t,e,s)=>("currentTab"===e&&t[e]!==s?(t[e]=s,t.switchTabs(s)):t[e]=s,!0)}),this.switchTabs=function(t){n.tabList.each((function(e){e===t?($(this).addClass(n.activeClass),$(n.contentList[e]).addClass(n.activeClass)):($(this).hasClass(n.activeClass)&&$(this).removeClass(n.activeClass),$(n.contentList[e]).hasClass(n.activeClass)&&$(n.contentList[e]).removeClass(n.activeClass))}))},this.tabHandler=function(t){t.preventDefault();const e=n.tabList.index(this);var a,i;n.Tab.currentTab=parseInt(e),a=s,i=e,window.localStorage.setItem(a,i)},this.getLastActiveTab=t=>{return parseInt((e=t,window.localStorage.getItem(e)||0));var e},this.init=()=>{n.tabList.each((function(){$(this).on("click",n.tabHandler)})),$(`.${s}.${n.activeClass}`).length||(n.Tab.currentTab=n.getLastActiveTab(s))}},a=function(t){const e=this;this.element=t,this.tabs=null,this.isTabs=()=>Boolean($(this.element).find(".lk-form__tabs").length),this.setTabs=()=>{this.isTabs()&&(this.tabs=new n(e.element,"lk-form__tab_content","lk-form__tab"),this.tabs.init())},this.init=()=>{this.setTabs()}};(new function(){this.userData=null,this.elmaId=$("#elma-id").html(),this.tabs=new n($(".lk-container"),"lk-form","lk-tab"),this.blocks=$(".lk-form"),this.getUserData=async t=>{try{const e="https://aeqlmvgvlxcee.elma365.ru/api/extensions/3d15932c-766e-4e91-b8ff-fed442649de2/script/get/appgs?id="+t,s=await(async(t,e)=>{try{return await fetch(t,{method:e,headers:{"Content-Type":"application/json","X-Token":"8657d620-f5eb-4552-997d-d3ec43688c29"}})}catch(t){return!1}})(e,"GET");if(await s){const t=await s.json();return this.userData=await t,this.setUserData(await Object.entries(t)),!0}return!1}catch(t){return!1}},this.contentBlocks=()=>{this.blocks.each((function(){new a($(this)).init()}))},this.setUserData=t=>{for(const[e,s]of t){$(`[data-info=${e}]`).html(s)}},this.init=()=>{this.getUserData(this.elmaId).then(()=>{this.tabs.init(),this.contentBlocks(),((t="body",e,s="active")=>{const n=$(t).find(".loader");n&&("show"!==e?n.hasClass(s)&&n.removeClass(s):n.addClass(s))})("body","hide")}).catch(t=>(console.log(t),!1))}}).init()}]);