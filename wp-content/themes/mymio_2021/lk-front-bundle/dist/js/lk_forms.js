!function(t){var e={};function a(s){if(e[s])return e[s].exports;var n=e[s]={i:s,l:!1,exports:{}};return t[s].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=e,a.d=function(t,e,s){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(a.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)a.d(s,n,function(e){return t[e]}.bind(null,n));return s},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="",a(a.s=8)}([function(t,e,a){"use strict";const s="https://aeqlmvgvlxcee.elma365.ru/api/extensions/3d15932c-766e-4e91-b8ff-fed442649de2/script/get/appgs?id="+$("#elma-id").html();!async function(){try{const t=await async function(t){return await fetch(t,{method:"GET",headers:{"Content-Type":"application/json","X-Token":"8657d620-f5eb-4552-997d-d3ec43688c29"}})}(s),e=await t.json(),a=await Object.entries(e);for(const[t,e]of a){$(`[data-info=${t}]`).html(e)}}catch(t){throw console.log(t),t}}()},function(t,e){function a(t){const e=t.val(),a=t.data("condRelation");if(!a)return;$(`[data-cond-dep-name="${a}"]`).each((function(){const t=$(this).data("condDepValue");if(t.includes("|,|")){const a=t.split("|,|");if(a.includes(e)&&$(this).hasClass("show"))return;return a.includes(e)&&!$(this).hasClass("show")?void $(this).addClass("show"):void $(this).removeClass("show")}t===e&&$(this).hasClass("show")||(t!==e||$(this).hasClass("show")?$(this).removeClass("show"):$(this).addClass("show"))}))}jQuery(".select").length>1?(jQuery("select").each((function(){let t=jQuery(this).not(".select-search"),e=jQuery(this).not(".select-search").parents(".select");t.select2({minimumResultsForSearch:1/0,dropdownParent:e}).on("select2:select",(function(e){a(t)}))})),jQuery(".select-search").each((function(){let t=jQuery(this),e=jQuery(this).parents(".select");t.select2({dropdownParent:e}).on("select2:select",(function(e){a(t)}))}))):jQuery("select").select2({minimumResultsForSearch:1/0,dropdownParent:jQuery(".select")}),$(".select").parent().on("click",(function(){const t=$(this),e=t.find(".select-input");t.find(".select2-selection__rendered").on("DOMSubtreeModified",(function(){const t=$(this).html();t.includes("(указать")?e.addClass("active"):!t.includes("(указать")&&e.hasClass("active")&&e.removeClass("active")}))}))},function(t,e){$(".contact-form__form-field.check").each((function(){const t=$(this).find('input[type="checkbox"]'),e=$(this).find('input[type="hidden"]'),a=$(this).find('input[type="text"]');t.each((function(){$(this).on("change",(function(){const t=$(this).prop("checked"),a=e.val();if(t)return a.includes($(this).val())?void 0:void e.val(`${a} | ${$(this).val()}`);if(a.includes($(this).val())){const t=a.replace(" | "+$(this).val(),"");e.val(t)}}))})),a.on("focus",(function(){if(""===$(this).val())return;const t=e.val();if(t.includes($(this).val())){const a=t.replace(" | "+$(this).val(),"");e.val(a)}})),a.on("blur",(function(){if(""===$(this).val())return;const t=e.val();e.val(`${t} | ${$(this).val()}`)}))}))},function(t,e){!function(t){const e=t(".contact-form__form-field.date");e.length&&e.each((function(){const e=t(this).find(".datepicker"),a=t(this).find(".date-mask"),s=t(this).find(".calendar");e.datepicker({changeMonth:!0,changeYear:!0,showButtonPanel:!0,minDate:new Date(90,0,1),monthNames:["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"],monthNamesShort:["Янв","Фев","Мар","Апр","Май","Июн","Июл","Авг","Сен","Окт","Ноя","Дек"],dayNames:["воскресенье","понедельник","вторник","среда","четверг","пятница","суббота"],dayNamesShort:["вск","пнд","втр","срд","чтв","птн","сбт"],dayNamesMin:["Вс","Пн","Вт","Ср","Чт","Пт","Сб"],weekHeader:"Не",dateFormat:"dd.mm.yy",firstDay:1,onSelect:function(){const s=t(this).val();a.val(s),e.toggleClass("active")}}),s.on("click",(function(){t(this).toggleClass("active"),e.toggleClass("active")})),t(e).on("click",(function(t){t.stopPropagation()})),t(document).on("click",(function(e){const a=e.target;if(t(a).hasClass("calendar"))return;const s=t(".datepicker.active");s.length&&s.each((function(){t(this).removeClass("active")}))}))}))}(jQuery)},function(t,e){function a(t){this.contextElement=$(t),this.input=this.contextElement.find(".train__hide-input"),this.trainItems=this.contextElement.find(".train__item_inner"),this.activeItems=this.contextElement.find(".train__item.active"),this.start=null,this.end=null,this.selectRange=t=>{const e=t.target;if(!e.classList.contains("train__item_inner"))return;const a=parseInt(e.innerHTML);if(!this.start)return this.start=a,e.parentElement.classList.add("active"),void this.setInput(this.start,this.end);this.start!==a&&this.end!==a?this.start>a?(this.end=this.start,this.start=a,this.activeRange(this.start,this.end)):a>this.start&&a<this.end?(this.start=a,this.activeRange(this.start,this.end)):(this.end=a,this.activeRange(this.start,this.end)):this.activeRange(0,0)},this.activeRange=(t,e)=>{if(this.setInput(t,e),this.activeItems=this.contextElement.find(".train__item.active"),this.activeItems.length&&this.activeItems.each((function(){$(this).removeClass("active")})),t===e)return this.start=null,void(this.end=null);this.trainItems.each((function(){const a=parseInt($(this).html());a>=t&&a<=e&&$(this).parent().addClass("active")}))},this.setInput=(t=0,e=0)=>{const a=t?t+"":0,s=e?e+"":0;a?s?this.input.val(`${a}-${s}`):this.input.val(a):this.input.val("")},this.init=()=>{this.contextElement.on("click",this.selectRange)}}$(".train").each((function(){new a($(this).parent()).init()}))},function(t,e){$("[data-cond-relation]").each((function(){if($(this).is("select"))return;const t=$(this).data("condRelation"),e=$(`[data-cond-dep-name="${t}"]`);$(this).on("change",(function(){let t=$(this).val();"checkbox"===$(this).attr("type")?t=$(this).prop("checked"):"radio"===$(this).attr("type")&&(t="Да"===$(this).val()),e.each((function(){const e=$(this).data("condDepValue");if("string"==typeof e&&e.includes("|,|")){const a=e.split("|,|");if(a.includes(t)&&$(this).hasClass("show"))return;return a.includes(t)&&!$(this).hasClass("show")?void $(this).addClass("show"):void $(this).removeClass("show")}e===t&&$(this).hasClass("show")||(e!==t||$(this).hasClass("show")?$(this).removeClass("show"):$(this).addClass("show"))}))}))}))},function(t,e){ymaps.ready((function(){function t(t){var e=$(t).val();ymaps.geocode(e).then((function(e){var a,s=e.geoObjects.get(0);if(s)switch(s.properties.get("metaDataProperty.GeocoderMetaData.precision")){case"exact":break;case"number":case"near":case"range":a="Неточный адрес, требуется уточнение","Уточните номер дома";break;case"street":a="Неполный адрес, требуется уточнение","Уточните номер дома";break;case"other":default:a="Неточный адрес, требуется уточнение","Уточните адрес"}else a="Адрес не найден","Уточните адрес";a&&function(t,e){const a=t.parent().find(".error");$(a).text(e),$(t).addClass("error"),$(a).css("display","block")}(t,a)}),(function(t){console.log(t)}))}$("input.address").parent().each((function(){const e=$(this).find("input"),a=e.attr("id");new ymaps.SuggestView(a);e.on("blur",(function(){t(e)}))}))}))},,function(t,e,a){"use strict";a.r(e);a(0),a(1),a(2),a(3),a(4);const s=async()=>{try{const t=await fetch(homeUrl+"/mkb.json"),e=await t.json();return await e}catch(t){console.log(t)}};window.addEventListener("click",(function(t){const e=t.target,a=document.querySelector(".tips.active")||null;a&&(e.classList.contains("tip")||e.classList.contains("city")||a.classList.remove("active"))}));const n=t=>{console.log(t);const e=document.querySelector(".tips");e.innerHTML="",t.forEach(t=>{const a=document.createElement("span");a.classList.add("tip"),a.innerHTML=t.title,a.addEventListener("click",i),e.appendChild(a)})},i=function(t){document.querySelector('[data-elma="mank_accompanying_diagnosis_2"]').value=this.innerHTML,(()=>{const t=$(".tips.active");t&&t.removeClass("active")})()},o=()=>{const t=$(".lk-progress-inner"),e=$('.lk-form[data-form="2"] .lk-form__tabs').children().length,a=`${$(".lk-form__tab.locked").length}/${e}`;t.html(a)},c=(t,e)=>{$(t).each((function(){$(this).on("click",(function(a){if(a.preventDefault(),$(this).hasClass("active"))return;const s=$(this).data("tab"),n=$(`${e}[data-form="${s}"]`);var i,o;$(t+".active").removeClass("active"),$(e+".active").removeClass("active"),$(this).addClass("active"),n.addClass("active"),i=t,o=`${e}, ${s}`,window.localStorage.setItem(i,o)}))}))},r=t=>{const e=(a=t,window.localStorage.getItem(a));var a;if(!e)return;const s=e.split(","),n=s[0],i=s[1];l(t,n,i)},l=(t,e,a)=>{const s=Number(a),n=$(t)[s-1],i=$(e+"[data-form]")[s-1];$(n).hasClass("active")||($(t+".active")&&($(t+".active").removeClass("active"),$(e+".active").removeClass("active")),$(n).addClass("active"),$(i).addClass("active"))},d=t=>{const e=$(t).find('[data-req="true"]'),a=Object.create({});return e.each((function(){const t=$(this).attr("name");let e={value:{required:!0}};switch($(this).data("validation")){case"email":e={value:{required:!0,email:!0}};break;case"name":e={value:{required:!0,_name:!0}}}Object.defineProperty(a,t,e)})),a},h=(t,e)=>{const a=e.data("elma");if(""===a)return;const s=e.val();Object.defineProperty(t,a,{value:s,enumerable:!0})},u=t=>{const e=t.find("[data-elma]"),a=Object.create({});return Object.defineProperty(a,"context",{value:{},enumerable:!0}),e.each((function(){if($(this).is("select")){if($(this).val().includes("(указать")){const t=$(this).parent().parent(),e=$(t).find(".select-input .select-input__input"),s=$(this).data("elma");return e.data("elma",s),void h(a.context,e)}}("radio"!==$(this).attr("type")||$(this).prop("checked"))&&h(a.context,$(this))})),a},f=(t,e)=>{const a=$(".lk-form.active").data("form"),s=2===parseInt(a);if(2!==parseInt(a))return;const n=$(".lk-form__tab"),i=$(`.lk-form__tab[data-tab="${t}"]`),c=$(`.lk-form__tab_content[data-form="${t}"]`);if(i.addClass("locked"),c.addClass("locked"),s&&e){$("form[data-stage]").each((function(){const t=$(this).data("stage"),a=e.toString();if(!t.includes(a)){const t=$(this).parent().parent().parent().data("form");$(`.lk-form__tab[data-tab="${t}"]`).addClass("locked")}}))}let r="";n.each((function(){$(this).hasClass("locked")&&(r+=$(this).data("tab")+",")}));const l=new FormData;l.set("tabs_string",r),l.set("user_email","asdfd1231312312a@as.asa"),fetch(homeUrl+"/api/medical-questionnare-tabs.php",{method:"POST",body:l});if($(".lk-form__tab.locked").length===n.length){const t=$(".lk-tab.active"),e=parseInt(t.data("tab")),a=$(`.lk-tab[data-tab="${e+1}"]`);return i.removeClass("active"),void a.trigger("click")}let d;for(let e=t;e<n.length;e++)if(!$(n[e]).hasClass("locked")){d=n[e];break}if(!d)for(let e=0;e<t;e++)if(!$(n[e]).hasClass("locked")){d=n[e];break}o(),setTimeout(()=>{$(d).trigger("click")},1500)};jQuery("form.contact-form__form").each((function(){const t=d(jQuery(this)),e=$(this);jQuery(this).validate({ignore:[],errorClass:"error",validClass:"success",rules:t,errorElement:"span",errorPlacement:function(t,e){const a=jQuery(e).data("error");a?jQuery(a).append(t):t.insertBefore(e)},submitHandler:function(){e.find(".loader").addClass("active");const t=parseInt(e.parent().parent().parent().data("form")),a=parseInt($(".lk-tab.active").data("tab"));let s;switch(((t,e)=>{const a=$(`[name="${t}"]`).val();e.forEach(t=>{const e=$(`[name="${t}"]`);e.val()||e.val(a)})})("main_info_address_act_pod",["main_info_address_reg_pod","main_info_address_mail_pod"]),a){case 1:s="ward/main/update";break;case 2:s="ward/medical/update";break;case 4:s="create/apppr"}const n="https://aeqlmvgvlxcee.elma365.ru/api/extensions/3d15932c-766e-4e91-b8ff-fed442649de2/script/"+s,i=u(e),o=$("#elma-id").html();let c;if(t)if(2===t){const e=((t=0,e,a)=>t<=3?1:"Ходит сам"===e?2:t>=8&&"Ходит сам (но тяжело) или с поддержкой"===e?3:parseInt(a)<=t-3&&"Пользуется инвалидным креслом (скутером или подобным), способен удерживать тело, не нужен подголовник, активно пользуется руками"===e?4:t-parseInt(a)>=4&&("Пользуется инвалидным креслом (скутером или подобным), способен удерживать тело, не нужен подголовник, активно пользуется руками"===e||"Использует кресло, требуется поддержка тела и головы. использует руки, но функциональность снижена"===e)?5:0)(2,$('select[data-elma="mank_motor_abilities_2"]').val(),$('select[data-elma="mank_neuro_lost_ability"]').val());c=JSON.stringify({id:o,form_id:t,mank_ill_stage:e,context:i.context})}else c=JSON.stringify({id:o,form_id:t,context:i.context});else c=JSON.stringify({id:o,context:i.context});fetch(n,{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer 8657d620-f5eb-4552-997d-d3ec43688c29"},body:c}).then(t=>t.json()).then(a=>{((t,e)=>{const a=e.find(".loader"),s=e.find(".result");if("success"===t){e.trigger("reset");return 2===parseInt($(".lk-tab.active").data("tab"))?s.html("Ответы сохранены, переход к следующему блоку"):s.html("Заявка успешно отправлена!"),s.hasClass("success")&&s.removeClass("success"),s.addClass("success"),a.removeClass("active"),!0}return s.html("Ошибка отправки. Проверьте данные или попробуйте позже."),s.addClass("err"),a.removeClass("active"),!1})(a.msg,e)&&f(t,$(".lk-form__tab_content[data-form]").length)}).catch((function(t){console.log("Request failed",t)}))}})})),jQuery.validator.addMethod("email",(function(t,e){return this.optional(e)||/\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,6}/.test(t)}),"Некорректный e-mail"),jQuery.validator.addMethod("_name",(function(t,e){return this.optional(e)||/^[а-яА-ЯёЁ\s]+$/.test(t)}),"Введите корректное имя");a(5),a(6);r(".lk-tab"),r(".lk-form__tab"),fetch(homeUrl+"/api/medical-questionnare-tabs.php?user_email=asdfd1231312312a@as.asa",{method:"GET"}).then(t=>t.text()).then(t=>{t&&t.split(",").forEach(t=>{const e=parseInt(t),a=$(`.lk-form[data-form="2"] .lk-form__tab[data-tab="${e}"]`),s=$(`.lk-form[data-form="2"] .lk-form__tab_content[data-form="${e}"]`);a.addClass("locked"),s.addClass("locked")})}).then(()=>{o()}),c(".lk-tab",".lk-form"),c(".lk-form__tab",".lk-form__tab_content"),jQuery(".phone-mask").inputmask({mask:"+7(999)999-99-99",clearIncomplete:!0}),jQuery(".date-mask").inputmask({mask:"99.99.9999",clearIncomplete:!0}),jQuery(".year-mask").inputmask({mask:"9999",clearIncomplete:!0}),(async t=>{const e=$(`[data-elma="${t}"]`);if(!e)return;const a=await s();e.on("keypress",(function(){const t=$(this).val().toLowerCase(),e=$(this).parent().find(".tips");if(t.length<2)return;e.hasClass("active")||e.addClass("active");const s=a.filter(e=>e.title.toLowerCase().includes(t));n(s)}))})("mank_accompanying_diagnosis_2")}]);