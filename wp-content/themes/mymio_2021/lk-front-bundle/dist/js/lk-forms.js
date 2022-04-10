!function(t){var i={};function e(s){if(i[s])return i[s].exports;var n=i[s]={i:s,l:!1,exports:{}};return t[s].call(n.exports,n,n.exports,e),n.l=!0,n.exports}e.m=t,e.c=i,e.d=function(t,i,s){e.o(t,i)||Object.defineProperty(t,i,{enumerable:!0,get:s})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,i){if(1&i&&(t=e(t)),8&i)return t;if(4&i&&"object"==typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(e.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&i&&"string"!=typeof t)for(var n in t)e.d(s,n,function(i){return t[i]}.bind(null,n));return s},e.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(i,"a",i),i},e.o=function(t,i){return Object.prototype.hasOwnProperty.call(t,i)},e.p="",e(e.s=0)}([function(t,i,e){"use strict";e.r(i);const s=function(t,i,e){const s=this;s.activeClass="active",s.contentList=t.find("."+i),s.tabList=t.find("."+e),this.currentTab=null,s.Tab=new Proxy(s,{set:(t,i,e)=>("currentTab"===i&&t[i]!==e?(t[i]=e,t.switchTabs(e)):t[i]=e,!0)}),this.switchTabs=function(t){s.tabList.each((function(i){i===t?($(this).addClass(s.activeClass),$(s.contentList[i]).addClass(s.activeClass)):($(this).hasClass(s.activeClass)&&$(this).removeClass(s.activeClass),$(s.contentList[i]).hasClass(s.activeClass)&&$(s.contentList[i]).removeClass(s.activeClass))}))},this.tabHandler=function(t){t.preventDefault();const i=s.tabList.index(this);var n,a;s.Tab.currentTab=parseInt(i),n=e,a=i,window.localStorage.setItem(n,a)},this.getLastActiveTab=t=>{return parseInt((i=t,window.localStorage.getItem(i)||0));var i},this.init=()=>{s.tabList.each((function(){$(this).on("click",s.tabHandler)})),$(`.${e}.${s.activeClass}`).length||(s.Tab.currentTab=s.getLastActiveTab(e))}},n=function(t){const i=this;this.input=t.find("input.date-mask"),this.datepickerWrap=t.find(".datepicker"),this.calendar=t.find(".calendar"),this.calendarOptions={changeMonth:!0,changeYear:!0,showButtonPanel:!0,minDate:new Date(90,0,1),monthNamesShort:["Янв","Фев","Мар","Апр","Май","Июн","Июл","Авг","Сен","Окт","Ноя","Дек"],dayNamesShort:["вск","пнд","втр","срд","чтв","птн","сбт"],dayNamesMin:["Вс","Пн","Вт","Ср","Чт","Пт","Сб"],weekHeader:"Не",dateFormat:"dd.mm.yy",firstDay:1,onSelect:function(){const t=$(this).val();i.input.val(t),i.datepickerWrap.toggleClass("active")}},this.mask=t=>{t(this.input).inputmask({mask:"99.99.9999",clearIncomplete:!0})},this.calendarInit=t=>{t(this.datepickerWrap).datepicker(this.calendarOptions),this.calendar.on("click",this.displayCalendar),this.datepickerWrap.on("click",t=>t.stopPropagation())},this.displayCalendar=function(){$(this).toggleClass("active"),i.datepickerWrap.toggleClass("active")},this.hideCalendarByAwayClick=t=>{const e=t.target;$(e).hasClass("calendar")||i.datepickerWrap.hasClass("active")&&i.datepickerWrap.removeClass("active")},this.init=()=>{this.mask(jQuery),this.calendarInit(jQuery),$(document).on("click",this.hideCalendarByAwayClick)}},a=function(t){const i=this;this.input=t.find("input"),this.inputId=this.input.attr("id"),this.geocode=t=>{const e=$(t).val();ymaps.geocode(e).then((function(e){const s=e.geoObjects.get(0);let n,a;if(s)switch(s.properties.get("metaDataProperty.GeocoderMetaData.precision")){case"exact":break;case"number":case"near":case"range":n="Неточный адрес, требуется уточнение",a="Уточните номер дома";break;case"street":n="Неполный адрес, требуется уточнение",a="Уточните номер дома";break;case"other":default:n="Неточный адрес, требуется уточнение",a="Уточните адрес"}else n="Адрес не найден",a="Уточните адрес";n&&i.showError(t,n)}),(function(t){console.log(t)}))},this.showError=(t,i)=>{const e=t.parent().find(".error");$(e).text(i),$(t).addClass("error"),$(e).css("display","block")},this.init=()=>{new ymaps.SuggestView(i.inputId);i.input.on("blur",(function(){i.geocode(i.input)}))}},c=function(t){this.contextElement=$(t),this.input=this.contextElement.find(".train__hide-input"),this.trainItems=this.contextElement.find(".train__item_inner"),this.activeItems=this.contextElement.find(".train__item.active"),this.start=null,this.end=null,this.selectRange=t=>{const i=t.target;if(!i.classList.contains("train__item_inner"))return;const e=parseInt(i.innerHTML);if(!this.start)return this.start=e,i.parentElement.classList.add("active"),void this.setInput(this.start,this.end);this.start!==e&&this.end!==e?this.start>e?(this.end=this.start,this.start=e,this.activeRange(this.start,this.end)):e>this.start&&e<this.end?(this.start=e,this.activeRange(this.start,this.end)):(this.end=e,this.activeRange(this.start,this.end)):this.activeRange(0,0)},this.activeRange=(t,i)=>{if(this.setInput(t,i),this.activeItems=this.contextElement.find(".train__item.active"),this.activeItems.length&&this.activeItems.each((function(){$(this).removeClass("active")})),t===i)return this.start=null,void(this.end=null);this.trainItems.each((function(){const e=parseInt($(this).html());e>=t&&e<=i&&$(this).parent().addClass("active")}))},this.setInput=(t=0,i=0)=>{const e=t?t+"":0,s=i?i+"":0;e?s?this.input.val(`${e}-${s}`):this.input.val(e):this.input.val("")},this.init=()=>{this.contextElement.on("click",this.selectRange)}},r=function(t){this.instance=null,this.setType=()=>{t.hasClass("date")?this.instance=new n(t):t.find(".train").length?this.instance=new c(t):t.find("input.address").length&&(this.instance=new a(t))},this.yearMask=(t,i)=>{t(i).inputmask({mask:"9999",clearIncomplete:!0})},this.init=()=>{this.setType();const i=t.find(".year-mask");if(i.length&&this.yearMask(jQuery,i),this.instance){if(this.instance instanceof a)return void ymaps.ready(this.instance.init());this.instance.init()}}},h=function(t){const i=this;this.selectField=t.find("select"),this.inputWrap=t.find(".select-input"),this.input=this.inputWrap.find("input"),this.select2init=e=>{e(this.selectField).select2({minimumResultsForSearch:1/0,dropdownParent:e(t)}).on("select2:select",(function(){i.displayInput(i.selectField)}))},this.displayInput=function(t){if(!i.inputWrap.length)return;const e=t.val();e.includes("Другое")?(i.inputWrap.addClass("active"),i.input.trigger("focus")):!e.includes("Другое")&&i.inputWrap.hasClass("active")&&i.inputWrap.removeClass("active")},this.init=()=>{this.select2init(jQuery)}},o=function(t){const i=this;this.checkboxes=t.find('input[type="checkbox"]'),this.hiddenInput=t.find('input[type="hidden"]'),this.customInput=t.find('input[type="text"]'),this.checkHandler=function(){const t=$(this).prop("checked"),e=i.hiddenInput.val();if(t){if($(this).val().includes("(указать"))return;return e.includes($(this).val())?void 0:void i.hiddenInput.val(`${e} | ${$(this).val()}`)}if($(this).val().includes("(указать"),e.includes($(this).val())){const t=e.replace(" | "+$(this).val(),"");i.hiddenInput.val(t)}},this.removeValueFromInput=function(){if(""===$(this).val())return;const t=i.hiddenInput.val();if(t.includes($(this).val())){const e=t.replace(" | "+$(this).val(),"");i.hiddenInput.val(e)}},this.setValueFromInput=function(){if(""===$(this).val())return;const t=i.hiddenInput.val();i.hiddenInput.val(`${t} | ${$(this).val()}`)},this.init=()=>{this.checkboxes.each((function(){$(this).on("change",i.checkHandler)})),this.customInput.on("focus",this.removeValueFromInput),this.customInput.on("blur",this.setValueFromInput)}},l=function(t){this.instance=null,this.setType=()=>{t.hasClass("check")?this.instance=new o(t):t.find(".select").length?this.instance=new h(t):t.hasClass("radio")||(this.instance=new r(t))},this.init=()=>{this.setType(),this.instance&&this.instance.init()}},d=function(t,i){this.formIndex=parseInt(i)+1,this.formFieldsList=t.find(".contact-form__form-field"),this.setFormFields=()=>{this.formFieldsList.each((function(){new l($(this)).init()}))},this.init=()=>{this.setFormFields()}},u=function(t){this.tabs=$(t).find(".lk-form__tabs"),this.forms=$(t).find(".contact-form__form"),this.setTabs=()=>{this.tabs.length&&(this.tabs=new s(t,"lk-form__tab_content","lk-form__tab"),this.tabs.init())},this.setForms=()=>{this.forms.length&&this.forms.each((function(t){new d($(this),t).init()}))},this.init=()=>{this.setTabs(),this.setForms()}};(new function(){this.userData=null,this.elmaId=$("#elma-id").html(),this.tabs=new s($(".lk-container"),"lk-form","lk-tab"),this.blocks=$(".lk-form"),this.getUserData=async t=>{try{const i="https://aeqlmvgvlxcee.elma365.ru/api/extensions/3d15932c-766e-4e91-b8ff-fed442649de2/script/get/appgs?id="+t,e=await(async(t,i)=>{try{return await fetch(t,{method:i,headers:{"Content-Type":"application/json","X-Token":"8657d620-f5eb-4552-997d-d3ec43688c29"}})}catch(t){return!1}})(i,"GET");if(await e){const t=await e.json();return this.userData=await t,this.setUserData(await Object.entries(t)),!0}return!1}catch(t){return!1}},this.contentBlocks=()=>{this.blocks.each((function(){new u($(this)).init()}))},this.setUserData=t=>{for(const[i,e]of t){$(`[data-info=${i}]`).html(e)}},this.init=()=>{this.getUserData(this.elmaId).then(()=>{this.tabs.init(),this.contentBlocks(),((t="body",i,e="active")=>{const s=$(t).find(".loader");s&&("show"!==i?s.hasClass(e)&&s.removeClass(e):s.addClass(e))})("body","hide")}).catch(t=>{console.log(t)})}}).init()}]);