!function(t){var e={};function a(n){if(e[n])return e[n].exports;var s=e[n]={i:n,l:!1,exports:{}};return t[n].call(s.exports,s,s.exports,a),s.l=!0,s.exports}a.m=t,a.c=e,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)a.d(n,s,function(e){return t[e]}.bind(null,s));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="",a(a.s=6)}([function(t,e,a){"use strict";const n="https://aeqlmvgvlxcee.elma365.ru/api/extensions/3d15932c-766e-4e91-b8ff-fed442649de2/script/get/appgs?id="+$("#elma-id").html();!async function(){try{const t=await async function(t){return await fetch(t,{method:"GET",headers:{"Content-Type":"application/json","X-Token":"8657d620-f5eb-4552-997d-d3ec43688c29"}})}(n),e=await t.json(),a=await Object.entries(e);for(const[t,e]of a){$(`[data-info=${t}]`).html(e)}}catch(t){throw console.log(t),t}}()},function(t,e){function a(t){const e=t.val(),a=t.data("condRelation");if(!a)return;$(`[data-cond-dep-name="${a}"]`).each((function(){const t=$(this).data("condDepValue");if(t.includes("|,|")){const a=t.split("|,|");if(a.includes(e)&&$(this).hasClass("show"))return;return a.includes(e)&&!$(this).hasClass("show")?void $(this).addClass("show"):void $(this).removeClass("show")}t===e&&$(this).hasClass("show")||(t!==e||$(this).hasClass("show")?$(this).removeClass("show"):$(this).addClass("show"))}))}jQuery(".select").length>1?(jQuery("select").each((function(){let t=jQuery(this).not(".select-search"),e=jQuery(this).not(".select-search").parents(".select");t.select2({minimumResultsForSearch:1/0,dropdownParent:e}).on("select2:select",(function(e){a(t)}))})),jQuery(".select-search").each((function(){let t=jQuery(this),e=jQuery(this).parents(".select");t.select2({dropdownParent:e}).on("select2:select",(function(e){a(t)}))}))):jQuery("select").select2({minimumResultsForSearch:1/0,dropdownParent:jQuery(".select")}),$(".select").parent().on("click",(function(){const t=$(this),e=t.find(".select-input");t.find(".select2-selection__rendered").on("DOMSubtreeModified",(function(){const t=$(this).html();t.includes("Другое")?e.addClass("active"):!t.includes("Другое")&&e.hasClass("active")&&e.removeClass("active")}))}))},function(t,e){$(".contact-form__form-field.check").each((function(){const t=$(this).find('input[type="checkbox"]'),e=$(this).find('input[type="hidden"]'),a=$(this).find('input[type="text"]');t.each((function(){$(this).on("change",(function(){const t=$(this).prop("checked"),a=e.val();if(t)return a.includes($(this).val())?void 0:(e.val(`${a} | ${$(this).val()}`),void console.log(e.val()));if(a.includes($(this).val())){const t=a.replace(" | "+$(this).val(),"");e.val(t),console.log(e.val())}}))})),a.on("focus",(function(){if(""===$(this).val())return;const t=e.val();if(t.includes($(this).val())){const a=t.replace(" | "+$(this).val(),"");e.val(a),console.log(e.val())}})),a.on("blur",(function(){if(""===$(this).val())return;const t=e.val();e.val(`${t} | ${$(this).val()}`),console.log(e.val())}))}))},function(t,e){jQuery("#datepicker").datepicker({changeMonth:!0,changeYear:!0,showButtonPanel:!0,minDate:new Date(90,0,1),monthNames:["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"],monthNamesShort:["Янв","Фев","Мар","Апр","Май","Июн","Июл","Авг","Сен","Окт","Ноя","Дек"],dayNames:["воскресенье","понедельник","вторник","среда","четверг","пятница","суббота"],dayNamesShort:["вск","пнд","втр","срд","чтв","птн","сбт"],dayNamesMin:["Вс","Пн","Вт","Ср","Чт","Пт","Сб"],weekHeader:"Не",dateFormat:"dd.mm.yy",firstDay:1,onSelect:function(){const t=$(this).val();$(".date-mask").val(t),jQuery("#datepicker").toggleClass("active")}}),jQuery(".calendar").on("click",(function(){$(this).toggleClass("active"),$("#datepicker").toggleClass("active")}))},function(t,e){!function(){const t=document.querySelector(".train"),e=$(".train__hide-input"),a=[...document.querySelectorAll(".train__item_inner")];let n=null,s=null;function i(t,e){o(t,e);const n=[...document.querySelectorAll(".train__item.active")];if(n.length&&n.forEach(t=>t.classList.remove("active")),t===e)return t=null,void(e=null);a.forEach(a=>{const n=parseInt(a.innerHTML);n>=t&&n<=e&&a.parentElement.classList.add("active")})}function o(t=0,a=0){const n=t?t+"":0,s=a?a+"":0;n?s?e.val(`${n}-${s}`):e.val(n):e.val("")}t.addEventListener("click",(function(t){const e=t.target;if(!e.classList.contains("train__item_inner"))return;const a=parseInt(e.innerHTML);if(!n)return n=a,e.parentElement.classList.add("active"),void o(n,s);if(n===a||s===a)return void i(0,0);n>a?(s=n,n=a,i(n,s)):a>n&&a<s?(n=a,i(n,s)):(s=a,i(n,s))}))}()},function(t,e){$("[data-cond-relation]").each((function(){if($(this).is("select"))return;const t=$(this).data("condRelation"),e=$(`[data-cond-dep-name="${t}"]`);$(this).on("change",(function(){let t=$(this).val();"checkbox"===$(this).attr("type")?t=$(this).prop("checked"):"radio"===$(this).attr("type")&&(t="Да"===$(this).val()),e.each((function(){const e=$(this).data("condDepValue");if("string"==typeof e&&e.includes("|,|")){const a=e.split("|,|");if(a.includes(t)&&$(this).hasClass("show"))return;return a.includes(t)&&!$(this).hasClass("show")?void $(this).addClass("show"):void $(this).removeClass("show")}e===t&&$(this).hasClass("show")||(e!==t||$(this).hasClass("show")?$(this).removeClass("show"):$(this).addClass("show"))}))}))}))},function(t,e,a){"use strict";a.r(e);a(0),a(1),a(2),a(3),a(4);const n=async()=>{try{const t=await fetch(homeUrl+"/mkb.json"),e=await t.json();return await e}catch(t){console.log(t)}};window.addEventListener("click",(function(t){const e=t.target,a=document.querySelector(".tips.active")||null;a&&(e.classList.contains("tip")||e.classList.contains("city")||a.classList.remove("active"))}));const s=t=>{console.log(t);const e=document.querySelector(".tips");e.innerHTML="",t.forEach(t=>{const a=document.createElement("span");a.classList.add("tip"),a.innerHTML=t.title,a.addEventListener("click",i),e.appendChild(a)})},i=function(t){document.querySelector('[data-elma="mank_accompanying_diagnosis_2"]').value=this.innerHTML,(()=>{const t=$(".tips.active");t&&t.removeClass("active")})()},o=(t,e)=>{$(t).each((function(){$(this).on("click",(function(a){if(a.preventDefault(),$(this).hasClass("active"))return;const n=$(this).data("tab"),s=$(`${e}[data-form="${n}"]`);var i,o;$(t+".active").removeClass("active"),$(e+".active").removeClass("active"),$(this).addClass("active"),s.addClass("active"),i=t,o=`${e}, ${n}`,window.localStorage.setItem(i,o)}))}))},c=t=>{const e=(a=t,window.localStorage.getItem(a));var a;if(!e)return;const n=e.split(","),s=n[0],i=n[1];r(t,s,i)},r=(t,e,a)=>{const n=Number(a),s=$(t)[n-1],i=$(e+"[data-form]")[n-1];$(s).hasClass("active")||($(t+".active")&&($(t+".active").removeClass("active"),$(e+".active").removeClass("active")),$(s).addClass("active"),console.log($(i)),$(i).addClass("active"))},l=t=>{const e=$(t).find('[data-req="true"]'),a=Object.create({});return e.each((function(){const t=$(this).attr("name");let e={value:{required:!0}};switch($(this).data("validation")){case"email":e={value:{required:!0,email:!0}};break;case"name":e={value:{required:!0,_name:!0}}}Object.defineProperty(a,t,e)})),a},d=(t,e)=>{const a=e.data("elma");if(""===a)return;const n=e.val();Object.defineProperty(t,a,{value:n,enumerable:!0})},u=t=>{const e=t.find("[data-elma]"),a=Object.create({});return Object.defineProperty(a,"context",{value:{},enumerable:!0}),e.each((function(){if($(this).is("select")){if($(this).val().includes("Другое")){const t=$(this).parent().parent(),e=$(t).find(".select-input .select-input__input"),n=$(this).data("elma");return e.data("elma",n),void d(a.context,e)}}("radio"!==$(this).attr("type")||$(this).prop("checked"))&&d(a.context,$(this))})),a},h=t=>{const e=$(".lk-form__tab"),a=$(`.lk-form__tab[data-tab="${t}"]`),n=$(`.lk-form__tab_content[data-form="${t}"]`);a.addClass("locked"),n.addClass("locked");let s="";e.each((function(){$(this).hasClass("locked")&&(s+=$(this).data("tab")+",")}));const i=new FormData;i.set("tabs_string",s),i.set("user_email","asdfd1231312312a@as.asa"),fetch(homeUrl+"/api/medical-questionnare-tabs.php",{method:"POST",body:i});if($(".lk-form__tab.locked").length===e.length){const t=$(".lk-tab.active"),e=parseInt(t.data("tab")),n=$(`.lk-tab[data-tab="${e+1}"]`);return a.removeClass("active"),void n.trigger("click")}let o;for(let a=t;a<e.length;a++)if(!$(e[a]).hasClass("locked")){o=e[a];break}if(!o)for(let a=0;a<t;a++)if(!$(e[a]).hasClass("locked")){o=e[a];break}setTimeout(()=>{$(o).trigger("click")},1500)};jQuery("form.contact-form__form").each((function(){const t=l(jQuery(this)),e=$(this);jQuery(this).validate({ignore:[],errorClass:"error",validClass:"success",rules:t,errorElement:"span",errorPlacement:function(t,e){const a=jQuery(e).data("error");a?jQuery(a).append(t):t.insertBefore(e)},submitHandler:function(){e.find(".loader").addClass("active");const t=parseInt(e.parent().parent().parent().data("form")),a=`https://aeqlmvgvlxcee.elma365.ru/api/extensions/3d15932c-766e-4e91-b8ff-fed442649de2/script/ward/${t?"medical":"main"}/update`,n=u(e),s=$("#elma-id").html();let i;i=t?JSON.stringify({id:s,form_id:t,context:n.context}):JSON.stringify({id:s,context:n.context}),((t,e)=>{const a=$(`[name=${t}]`).val();e.forEach(t=>{const e=$(`[name=${t}]`);e.val()||e.val(a)})})("main_info_address_reg_pod",["main_info_address_act_pod","main_info_address_mail_pod"]),fetch(a,{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer 8657d620-f5eb-4552-997d-d3ec43688c29"},body:i}).then(t=>t.json()).then(a=>{((t,e)=>{const a=e.find(".loader"),n=e.find(".result");return"success"===t?(e.trigger("reset"),n.html("Ответы сохранены, переход к следующему блоку"),n.hasClass("success")&&n.removeClass("success"),n.addClass("success"),a.removeClass("active"),!0):(n.html("Ошибка отправки. Проверьте данные или попробуйте позже."),n.addClass("err"),a.removeClass("active"),!1)})(a.msg,e)&&h(t,$(".lk-form__tab_content[data-form]").length)}).catch((function(t){console.log("Request failed",t)}))}})})),jQuery.validator.addMethod("email",(function(t,e){return this.optional(e)||/\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,6}/.test(t)}),"Некорректный e-mail"),jQuery.validator.addMethod("_name",(function(t,e){return this.optional(e)||/^[а-яА-ЯёЁ\s]+$/.test(t)}),"Введите корректное имя");a(5);c(".lk-tab"),c(".lk-form__tab"),fetch(homeUrl+"/api/medical-questionnare-tabs.php?user_email=asdfd1231312312a@as.asa",{method:"GET"}).then(t=>t.text()).then(t=>{t&&t.split(",").forEach(t=>{const e=parseInt(t),a=$(`.lk-form__tab[data-tab="${e}"]`),n=$(`.lk-form__tab_content[data-form="${e}"]`);a.addClass("locked"),n.addClass("locked")})}),o(".lk-tab",".lk-form"),o(".lk-form__tab",".lk-form__tab_content"),jQuery(".phone-mask").inputmask({mask:"+7(999)999-99-99",clearIncomplete:!0}),jQuery(".date-mask").inputmask({mask:"99.99.9999",clearIncomplete:!0}),(async t=>{const e=$(`[data-elma="${t}"]`);if(!e)return;const a=await n();e.on("keypress",(function(){const t=$(this).val().toLowerCase(),e=$(this).parent().find(".tips");if(t.length<2)return;e.hasClass("active")||e.addClass("active");const n=a.filter(e=>e.title.toLowerCase().includes(t));s(n)}))})("mank_accompanying_diagnosis_2")}]);