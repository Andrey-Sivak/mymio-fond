!function(e){var t={};function a(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,a),i.l=!0,i.exports}a.m=e,a.c=t,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)a.d(n,i,function(t){return e[t]}.bind(null,i));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a(a.s=4)}([function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));const n=(e="body",t,a="active")=>{const n=$(e).find(".loader");n&&("show"!==t?n.hasClass(a)&&n.removeClass(a):n.addClass(a))}},function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));const n=async(e,t)=>{const a={...{headers:{"Content-Type":"application/json","X-Token":"8657d620-f5eb-4552-997d-d3ec43688c29"}},...t};try{return await fetch(e,a)}catch(e){return!1}}},,,function(e,t,a){"use strict";a.r(t);var n=a(1);const i=homeUrl+"/custom_auth/",r=async(e,...t)=>{const a=Object.create({});Object.defineProperty(a,"user_data",{value:{},enumerable:!0,writable:!0}),t.forEach(e=>{const t=e.name,n=e.value||"";Object.defineProperty(a.user_data,t,{value:n,enumerable:!0,writable:!0})});const n=`${i}${e}.php`,r=new FormData;return r.set("user_data",JSON.stringify(a)),await(async(e="",t={})=>{try{return await fetch(e,{method:"POST",mode:"no-cors",body:t})}catch(e){return!1}})(n,r)};var s=a(0);if(registerEmail){new function(e){const t=this;this.email=e,this.modalWindow=document.querySelector(".modal--register"),this.checkUser=async()=>{try{const e=await(async(e,t)=>{const a={name:"user_email",value:e},n={name:"user_name",value:t};return await r("create-user",a,n)})(this.email);return await e.json()}catch(e){return!1}},this.getElmaIdByEmail=async()=>{try{const t="https://aeqlmvgvlxcee.elma365.ru/api/extensions/3d15932c-766e-4e91-b8ff-fed442649de2/script/search_guardianship_by_email",a={method:"POST",body:JSON.stringify({context:{email:e}})},i=await Object(n.a)(t,a);return await i.json()}catch(e){return!1}},this.sendUserPasswordToElma=async(e,t)=>{try{const a=JSON.stringify({context:{id:e,password:t}}),i="https://aeqlmvgvlxcee.elma365.ru/api/extensions/3d15932c-766e-4e91-b8ff-fed442649de2/script/old_base/appupdate",r={method:"POST",body:a},s=await Object(n.a)(i,r);return await s.json()}catch(e){return!1}},this.createNewUser=async e=>{try{return await(async(e,t)=>{const a={name:"user_email",value:e},n={name:"elma_id",value:t};return await r("create-user-elma-id",a,n)})(this.email,e)}catch(e){return!1}},this.check=async()=>{const e=await this.checkUser();let t=!0;const a=new this.modal;if(await e.status){a.changeContent("Создание id пользователя...");const n=await this.getElmaIdByEmail();if(await n.id){a.changeContent("Создание учетной записи...");const i=await this.createNewUser(n.id),r=await this.sendUserPasswordToElma(n.id,e);await i&&await r?a.finish("Готово!"):(t=!1,a.finish("Ошибка сервера. Попробуйте позже."))}else t=!1,a.finish("Ошибка сервера. Попробуйте позже.")}else a.finish(`Пользователь с email "${this.email}" уже зарегистрирован.`);t||await(async e=>{const t={name:"user_email",value:e};return await r("delete-user",t)})(this.email)},this.modal=function(){const e=t.modalWindow,a=e.querySelector(".modal--content"),n=e.querySelector(".modal--btn");this.changeContent=e=>{a.innerHTML=e},this.finish=t=>{this.changeContent(t),Object(s.a)(".modal--register"),n.classList.contains("hide")&&n.classList.remove("hide"),e.dataset.close="true",e.addEventListener("click",this.hideModal),window.history.pushState(null,document.title,window.location.pathname)},this.hideModal=function(e){e.preventDefault();e.target.dataset.close&&t.modalWindow.classList.remove("active")}},this.init=()=>{window.addEventListener("load",()=>{this.check()})}}(registerEmail).init()}}]);