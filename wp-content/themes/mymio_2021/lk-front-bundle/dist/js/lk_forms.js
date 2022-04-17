!function(t){var e={};function i(s){if(e[s])return e[s].exports;var n=e[s]={i:s,l:!1,exports:{}};return t[s].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=e,i.d=function(t,e,s){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(s,n,function(e){return t[e]}.bind(null,n));return s},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=2)}([function(t,e,i){"use strict";i.d(e,"a",(function(){return s}));const s=(t="body",e,i="active")=>{let s;s="string"==typeof t?$(t).find(".loader"):t.find(".loader"),s&&("show"!==e?s.hasClass(i)&&s.removeClass(i):s.addClass(i))}},function(t,e,i){"use strict";i.d(e,"a",(function(){return s}));const s=async(t,e)=>{const i={...{headers:{"Content-Type":"application/json","X-Token":"8657d620-f5eb-4552-997d-d3ec43688c29"}},...e};try{return await fetch(t,i)}catch(t){return!1}}},function(t,e,i){"use strict";i.r(e);var s=i(1),n=i(0);const a=function(t,e,i){const s=this;s.activeClass="active",s.contentList=t.find("."+e),s.tabList=t.find("."+i),this.currentTab=null,this.Tab=new Proxy(s,{set:(t,e,i)=>("currentTab"===e&&t[e]!==i?(t[e]=i,t.switchTabs(i)):t[e]=i,!0)}),this.switchTabs=function(t){s.tabList.each((function(e){e===t?($(this).addClass(s.activeClass),$(s.contentList[e]).addClass(s.activeClass)):($(this).hasClass(s.activeClass)&&$(this).removeClass(s.activeClass),$(s.contentList[e]).hasClass(s.activeClass)&&$(s.contentList[e]).removeClass(s.activeClass))}))},this.tabHandler=function(t){t.preventDefault();const e=s.tabList.index(this);var n,a;s.Tab.currentTab=parseInt(e),n=i,a=e,window.localStorage.setItem(n,a)},this.getLastActiveTab=t=>{return parseInt((e=t,window.localStorage.getItem(e)||0));var e},this.init=()=>{s.tabList.each((function(){$(this).on("click",s.tabHandler)})),$(`.${i}.${s.activeClass}`).length||(this.Tab.currentTab=s.getLastActiveTab(i))}},r=function(t){const e=this;this.input=t.find("input.date-mask"),this.datepickerWrap=t.find(".datepicker"),this.calendar=t.find(".calendar"),this.calendarOptions={changeMonth:!0,changeYear:!0,showButtonPanel:!0,minDate:new Date(90,0,1),monthNamesShort:["Янв","Фев","Мар","Апр","Май","Июн","Июл","Авг","Сен","Окт","Ноя","Дек"],dayNamesShort:["вск","пнд","втр","срд","чтв","птн","сбт"],dayNamesMin:["Вс","Пн","Вт","Ср","Чт","Пт","Сб"],weekHeader:"Не",dateFormat:"dd.mm.yy",firstDay:1,onSelect:function(){const t=$(this).val();e.input.val(t),e.datepickerWrap.toggleClass("active")}},this.mask=t=>{t(this.input).inputmask({mask:"99.99.9999",clearIncomplete:!0})},this.calendarInit=t=>{t(this.datepickerWrap).datepicker(this.calendarOptions),this.calendar.on("click",this.displayCalendar),this.datepickerWrap.on("click",t=>t.stopPropagation())},this.displayCalendar=function(){$(this).toggleClass("active"),e.datepickerWrap.toggleClass("active")},this.hideCalendarByAwayClick=t=>{const i=t.target;$(i).hasClass("calendar")||e.datepickerWrap.hasClass("active")&&e.datepickerWrap.removeClass("active")},this.init=()=>{this.mask(jQuery),this.calendarInit(jQuery),$(document).on("click",this.hideCalendarByAwayClick)}},c=function(t){const e=this;this.input=t.find("input"),this.inputId=this.input.attr("id"),this.geocode=t=>{const i=$(t).val();ymaps.geocode(i).then((function(i){const s=i.geoObjects.get(0);let n,a;if(s)switch(s.properties.get("metaDataProperty.GeocoderMetaData.precision")){case"exact":break;case"number":case"near":case"range":n="Неточный адрес, требуется уточнение",a="Уточните номер дома";break;case"street":n="Неполный адрес, требуется уточнение",a="Уточните номер дома";break;case"other":default:n="Неточный адрес, требуется уточнение",a="Уточните адрес"}else n="Адрес не найден",a="Уточните адрес";n&&e.showError(t,n)}),(function(t){console.log(t)}))},this.showError=(t,e)=>{const i=t.parent().find(".error");$(i).text(e),$(t).addClass("error"),$(i).css("display","block")},this.init=()=>{new ymaps.SuggestView(e.inputId)&&e.input.on("blur",(function(){e.geocode(e.input)}))}},o=function(t){this.contextElement=$(t),this.input=this.contextElement.find(".train__hide-input"),this.trainItems=this.contextElement.find(".train__item_inner"),this.activeItems=this.contextElement.find(".train__item.active"),this.start=null,this.end=null,this.selectRange=t=>{const e=t.target;if(!e.classList.contains("train__item_inner"))return;const i=parseInt(e.innerHTML);if(!this.start)return this.start=i,e.parentElement.classList.add("active"),void this.setInput(this.start,this.end);this.start!==i&&this.end!==i?this.start>i?(this.end=this.start,this.start=i,this.activeRange(this.start,this.end)):i>this.start&&i<this.end?(this.start=i,this.activeRange(this.start,this.end)):(this.end=i,this.activeRange(this.start,this.end)):this.activeRange(0,0)},this.activeRange=(t,e)=>{if(this.setInput(t,e),this.activeItems=this.contextElement.find(".train__item.active"),this.activeItems.length&&this.activeItems.each((function(){$(this).removeClass("active")})),t===e)return this.start=null,void(this.end=null);this.trainItems.each((function(){const i=parseInt($(this).html());i>=t&&i<=e&&$(this).parent().addClass("active")}))},this.setInput=(t=0,e=0)=>{const i=t?t+"":0,s=e?e+"":0;i?s?this.input.val(`${i}-${s}`):this.input.val(i):this.input.val("")},this.init=()=>{this.contextElement.on("click",this.selectRange)}},l=function(t){this.instance=null,this.setType=()=>{t.hasClass("date")?this.instance=new r(t):t.find(".train").length?this.instance=new o(t):t.find("input.address").length&&(this.instance=new c(t))},this.yearMask=(t,e)=>{t(e).inputmask({mask:"9999",clearIncomplete:!0})},this.init=()=>{this.setType();const e=t.find(".year-mask");if(e.length&&this.yearMask(jQuery,e),this.instance){if(this.instance instanceof c)return void ymaps.ready(this.instance.init());this.instance.init()}}},h=function(t){const e=this;this.selectField=t.find("select"),this.inputWrap=t.find(".select-input"),this.input=this.inputWrap.find("input"),this.select2init=i=>{i(this.selectField).select2({minimumResultsForSearch:1/0,dropdownParent:i(t)}).on("select2:select",(function(){t.trigger("changeValue",[i(this).val()]),e.displayInput(e.selectField)}))},this.displayInput=function(t){if(!e.inputWrap.length)return;const i=t.val();i.includes("Другое")?(e.inputWrap.addClass("active"),e.input.trigger("focus")):!i.includes("Другое")&&e.inputWrap.hasClass("active")&&e.inputWrap.removeClass("active")},this.init=()=>{this.select2init(jQuery),this.inputWrap.length&&e.input.on("input",(function(){t.trigger("changeValue",[$(this).val()])}))}},d=function(t){const e=this;this.checkboxes=t.find('input[type="checkbox"]'),this.hiddenInput=t.find('input[type="hidden"]'),this.customInput=t.find('input[type="text"]'),this.checkHandler=function(){const t=$(this).prop("checked"),i=e.hiddenInput.val();if(t){if($(this).val().includes("(указать"))return;return i.includes($(this).val())?void 0:void e.hiddenInput.val(`${i} | ${$(this).val()}`)}if($(this).val().includes("(указать"),i.includes($(this).val())){const t=i.replace(" | "+$(this).val(),"");e.hiddenInput.val(t)}},this.removeValueFromInput=function(){if(""===$(this).val())return;const t=e.hiddenInput.val();if(t.includes($(this).val())){const i=t.replace(" | "+$(this).val(),"");e.hiddenInput.val(i)}},this.setValueFromInput=function(){if(""===$(this).val())return;const t=e.hiddenInput.val();e.hiddenInput.val(`${t} | ${$(this).val()}`)},this.init=()=>{this.checkboxes.each((function(){$(this).on("change",e.checkHandler)})),this.customInput.on("focus",this.removeValueFromInput),this.customInput.on("blur",this.setValueFromInput)}},u=function(t){const e=this;this.radioButtons=t.find('input[type="radio"]'),this.setEventListeners=function(){$(this).on("change",(function(){const e="Да"===$(this).val();t.trigger("changeValue",[e])}))},this.init=()=>{this.radioButtons.each(e.setEventListeners)}},f=function(t){const e=this;this.formFieldClass=null,this.currentValue=null,this.conditionRelation=t.data("condRelation"),this.conditionalFields=null,this.elmaField=null,this.elmaName=null,this.requiredField=t.find('[data-req="true"]'),this.type=()=>t.hasClass("check")?"checkbox":t.find(".select").length?"select":t.hasClass("radio")?"radio":"input",this.setElmaField=()=>{const e=t.find("[data-elma]");if(!e||!e.length)return;const i=e.data("elma");i&&(this.elmaField=e,this.elmaName=i)},this.setType=()=>{switch(this.type()){case"checkbox":this.formFieldClass=new d(t);break;case"select":this.formFieldClass=new h(t);break;case"radio":this.formFieldClass=new u(t);break;case"input":this.formFieldClass=new l(t)}},this.setConditionalFields=()=>{this.conditionRelation&&(this.conditionalFields=$(`[data-cond-dep-name="${this.conditionRelation}"]`))},this.multipleConditionValues=(t,e,i)=>{const s=e.split("|,|"),n=t.hasClass("show"),a=s.includes(i);a&&n||(!a||n?t.removeClass("show"):t.addClass("show"))},this.displayConditionFields=function(){const t=$(this).data("condDepValue");"string"==typeof t&&t.includes("|,|")?e.multipleConditionValues($(this),t,e.currentValue):t===e.currentValue&&$(this).hasClass("show")||(t!==e.currentValue||$(this).hasClass("show")?$(this).removeClass("show"):$(this).addClass("show"))},this.handleConditionFields=function(t,i){e.currentValue=i,null!==e.conditionalFields&&void 0!==e.currentValue&&e.conditionalFields.each(e.displayConditionFields)},this.init=()=>{this.setType(),this.setElmaField(),this.setConditionalFields(),this.formFieldClass&&(this.formFieldClass.init(),t.on("changeValue",this.handleConditionFields))}},p=function(t,e,i){const a=this;this.formIndex=parseInt(e)+1,this.formFieldsList=[],this.rules=Object.create({}),this.actionUrl=t.data("action"),this.resultMessage=t.find(".result"),this.successMessage=t.data("success"),(this.setFormFields=()=>{t.find(".contact-form__form-field").each((function(){const t=new f($(this));t.init(),a.formFieldsList.push(t)}))})(),this.setRule=t=>{const e=t.attr("name");let i={value:{required:!0}};switch(t.data("validation")){case"email":i={value:{required:!0,email:!0}};break;case"name":i={value:{required:!0,_name:!0}}}Object.defineProperty(a.rules,e,i)},(this.setRules=()=>{a.formFieldsList.forEach(t=>{t.requiredField.length&&a.setRule($(t.requiredField))})})(),this.createContextObject=()=>{const t=Object.create({});return a.formFieldsList.forEach(e=>{e.elmaField&&Object.defineProperty(t,e.elmaName,{value:e.currentValue?e.currentValue:"",enumerable:!0})}),t},this.setErrors=function(t,e){const i=$(e).data("error");i?$(i).append(t):t.insertBefore(e)},this.submitResult=(t,e)=>{a.resultMessage.html(t),a.resultMessage.addClass(e)},this.setSubmitHandler=function(){Object(n.a)(t,"show");const e=a.createContextObject(),r={method:"POST",body:JSON.stringify({id:i,form_id:a.formIndex,context:e})};Object(s.a)(a.actionUrl,r).then(t=>t.json()).then(()=>{t.trigger("reset"),a.submitResult(a.successMessage,"success"),Object(n.a)(t)}).then(()=>{}).catch(()=>{a.submitResult("Ошибка отправки. Проверьте данные или попробуйте позже.","err"),Object(n.a)(t)})},this.init=e=>{e(t).validate({ignore:[],errorClass:"error",validClass:"success",rules:a.rules,errorElement:"span",errorPlacement:a.setErrors,submitHandler:this.setSubmitHandler})}},m=function(t,e){this.tabs=$(t).find(".lk-form__tabs"),this.forms=$(t).find(".contact-form__form"),this.setTabs=()=>{this.tabs.length&&(this.tabs=new a(t,"lk-form__tab_content","lk-form__tab"),this.tabs.init())},this.setForms=()=>{this.forms.length&&this.forms.each((function(t){new p($(this),t,e).init(jQuery)}))},this.init=()=>{this.setTabs(),this.setForms()}};(new function(){const t=this;this.userData=null,this.elmaId=$("#elma-id").html(),this.tabs=new a($(".lk-container"),"lk-form","lk-tab"),this.blocks=$(".lk-form"),this.getUserData=async t=>{try{const e="https://aeqlmvgvlxcee.elma365.ru/api/extensions/3d15932c-766e-4e91-b8ff-fed442649de2/script/get/appgs?id="+t,i={method:"GET"},n=await Object(s.a)(e,i);if(await n){const t=await n.json();return this.userData=await t,this.setUserData(await Object.entries(t)),!0}return!1}catch(t){return!1}},this.contentBlocks=()=>{this.blocks.each((function(){new m($(this),t.elmaId).init()}))},this.setUserData=t=>{for(const[e,i]of t){$(`[data-info=${e}]`).html(i)}},this.init=()=>{this.getUserData(this.elmaId).then(()=>{this.tabs.init(),this.contentBlocks(),Object(n.a)("body","hide")}).catch(t=>{console.log(t)})}}).init()}]);