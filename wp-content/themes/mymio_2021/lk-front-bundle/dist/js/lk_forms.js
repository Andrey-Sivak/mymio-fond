!function(t){var e={};function s(i){if(e[i])return e[i].exports;var n=e[i]={i:i,l:!1,exports:{}};return t[i].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=e,s.d=function(t,e,i){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},s.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(s.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(i,n,function(e){return t[e]}.bind(null,n));return i},s.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="",s(s.s=3)}([function(t,e,s){"use strict";s.d(e,"a",(function(){return i}));const i=async(t,e)=>{const s={...{headers:{"Content-Type":"application/json","X-Token":"8657d620-f5eb-4552-997d-d3ec43688c29"}},...e};try{return await fetch(t,s)}catch(t){return!1}}},function(t,e,s){"use strict";s.d(e,"a",(function(){return i}));const i=(t="body",e,s="active")=>{let i;i="string"==typeof t?$(t).find(".loader"):t.find(".loader"),i&&("show"!==e?i.hasClass(s)&&i.removeClass(s):i.addClass(s))}},function(t,e,s){"use strict";s.d(e,"a",(function(){return a})),s.d(e,"b",(function(){return r})),s.d(e,"c",(function(){return o}));const i=homeUrl+"/custom_auth/",n=async(t,...e)=>{const s=Object.create({});Object.defineProperty(s,"user_data",{value:{},enumerable:!0,writable:!0}),e.forEach(t=>{const e=t.name,i=t.value||"";Object.defineProperty(s.user_data,e,{value:i,enumerable:!0,writable:!0})});const n=`${i}${t}.php`,a=new FormData;return a.set("user_data",JSON.stringify(s)),await(async(t="",e={})=>{try{return await fetch(t,{method:"POST",mode:"no-cors",body:e})}catch(t){return!1}})(n,a)},a=async(t,e)=>{const s={name:"user_email",value:t},i={name:"user_name",value:e};return await n("create-user",s,i)},r=async t=>{const e={name:"user_email",value:t};return await n("delete-user",e)},o=async t=>{try{return await fetch(t,{headers:{Accept:"application/json","Content-Type":"application/json"},mode:"no-cors"})}catch(t){return!1}}},function(t,e,s){"use strict";s.r(e);var i=s(0),n=s(1);const a=function(t,e,s,i=""){const n=this;this.activeClass="active",this.lockedClass="locked",this.contentList=t.find("."+e),this.tabList=t.find("."+s),this.currentTab=null,this.lockedTabs=[],this.Tab=new Proxy(n,{set:(t,e,s)=>("currentTab"===e&&t[e]!==s?(t[e]=s,t.switchTabs(s)):t[e]=s,!0)}),this.switchTabs=function(t){n.tabList.each((function(e){e===t?($(this).addClass(n.activeClass),$(n.contentList[e]).addClass(n.activeClass)):($(this).hasClass(n.activeClass)&&$(this).removeClass(n.activeClass),$(n.contentList[e]).hasClass(n.activeClass)&&$(n.contentList[e]).removeClass(n.activeClass))}))},this.tabHandler=function(t){if(t.preventDefault(),$(this).hasClass("locked"))return;const e=n.tabList.index(this);var i,a;n.Tab.currentTab=parseInt(e),i=s,a=e,window.localStorage.setItem(i,a)},this.getLastActiveTab=t=>{return parseInt((e=t,window.localStorage.getItem(e)||0));var e},this.saveLockedTabs=()=>{let t="";return this.tabList.each((function(e){$(this).hasClass("locked")&&(t+=e+",")})),t},this.lockNewTab=t=>{const e=parseInt(t);if(isNaN(e))return;n.lockTab(e);const s=n.saveLockedTabs(),a=new FormData;a.set("tabs_string",s),a.set("user_email",i),fetch(homeUrl+"/api/medical-questionnare-tabs.php",{method:"POST",body:a})},this.lockTab=t=>{const e=parseInt(t);isNaN(e)||($(n.tabList[e]).addClass(n.lockedClass),$(n.contentList[e]).addClass(n.lockedClass),n.lockedTabs.push(n.tabList[e]))},this.getLockedTabs=async()=>{try{const t=await fetch(`${homeUrl}/api/medical-questionnare-tabs.php?user_email=${i}`,{method:"GET"}),e=await t.text();return!!e&&await e.split(",")}catch(t){return!1}},this.init=async()=>{if(""!==i)try{const t=await this.getLockedTabs();await t&&t.forEach(n.lockTab)}catch(t){return!1}n.tabList.each((function(){$(this).on("click",n.tabHandler)})),$(`.${s}.${n.activeClass}`).length||(this.Tab.currentTab=n.getLastActiveTab(s))}},r=function(t){const e=this;this.input=t.find("input.date-mask"),this.datepickerWrap=t.find(".datepicker"),this.calendar=t.find(".calendar"),this.calendarOptions={changeMonth:!0,changeYear:!0,showButtonPanel:!0,minDate:new Date(90,0,1),monthNamesShort:["Янв","Фев","Мар","Апр","Май","Июн","Июл","Авг","Сен","Окт","Ноя","Дек"],dayNamesShort:["вск","пнд","втр","срд","чтв","птн","сбт"],dayNamesMin:["Вс","Пн","Вт","Ср","Чт","Пт","Сб"],weekHeader:"Не",dateFormat:"dd.mm.yy",firstDay:1,onSelect:function(){const t=$(this).val();e.input.val(t),e.datepickerWrap.toggleClass("active")}},this.mask=t=>{t(this.input).inputmask({mask:"99.99.9999",clearIncomplete:!0})},this.calendarInit=t=>{t(this.datepickerWrap).datepicker(this.calendarOptions),this.calendar.on("click",this.displayCalendar),this.datepickerWrap.on("click",t=>t.stopPropagation())},this.displayCalendar=function(){$(this).toggleClass("active"),e.datepickerWrap.toggleClass("active")},this.hideCalendarByAwayClick=t=>{const s=t.target;$(s).hasClass("calendar")||e.datepickerWrap.hasClass("active")&&e.datepickerWrap.removeClass("active")},this.init=()=>{this.mask(jQuery),this.calendarInit(jQuery),$(document).on("click",this.hideCalendarByAwayClick)}},o=function(t){const e=this;this.input=t.find("input"),this.inputId=this.input.attr("id"),this.geocode=t=>{const s=$(t).val();ymaps.geocode(s).then((function(s){const i=s.geoObjects.get(0);let n,a;if(i)switch(i.properties.get("metaDataProperty.GeocoderMetaData.precision")){case"exact":break;case"number":case"near":case"range":n="Неточный адрес, требуется уточнение",a="Уточните номер дома";break;case"street":n="Неполный адрес, требуется уточнение",a="Уточните номер дома";break;case"other":default:n="Неточный адрес, требуется уточнение",a="Уточните адрес"}else n="Адрес не найден",a="Уточните адрес";n&&e.showError(t,n),setTimeout(()=>{t.trigger("change")},500)}),(function(t){console.log(t)}))},this.showError=(t,e)=>{const s=t.parent().find(".error");$(s).text(e),$(t).addClass("error"),$(s).css("display","block")},this.getPostalCode=async t=>{try{const e=await fetch("https://mymiofond.ru/api/get-postal-code.php/?address="+t,{method:"GET"});return await e.json()}catch(t){return t}},this.init=()=>{ymaps.ready({successCallback:()=>{new ymaps.SuggestView(e.inputId)}}),e.input.on("blur",(async function(){e.geocode(e.input)})),e.input.on("change",(async function(){console.log(123);const s=$(this).val(),i=await e.getPostalCode(s);if(await i&&await i.length){const e=i[0].postalCode;if(s.includes(e))return;const n=`${s}, ${e}`;t.trigger("changeValue",[n])}}))}},c=function(t){this.contextElement=$(t),this.input=this.contextElement.find(".train__hide-input"),this.trainItems=this.contextElement.find(".train__item_inner"),this.activeItems=this.contextElement.find(".train__item.active"),this.start=null,this.end=null,this.selectRange=t=>{const e=t.target;if(!e.classList.contains("train__item_inner"))return;const s=parseInt(e.innerHTML);if(!this.start)return this.start=s,e.parentElement.classList.add("active"),void this.setInput(this.start,this.end);this.start!==s&&this.end!==s?this.start>s?(this.end=this.start,this.start=s,this.activeRange(this.start,this.end)):s>this.start&&s<this.end?(this.start=s,this.activeRange(this.start,this.end)):(this.end=s,this.activeRange(this.start,this.end)):this.activeRange(0,0)},this.activeRange=(t,e)=>{if(this.setInput(t,e),this.activeItems=this.contextElement.find(".train__item.active"),this.activeItems.length&&this.activeItems.each((function(){$(this).removeClass("active")})),t===e)return this.start=null,void(this.end=null);this.trainItems.each((function(){const s=parseInt($(this).html());s>=t&&s<=e&&$(this).parent().addClass("active")}))},this.setInput=(t=0,e=0)=>{const s=t?t+"":0,i=e?e+"":0;s?i?this.input.val(`${s}-${i}`).trigger("change"):this.input.val(s).trigger("change"):this.input.val("").trigger("change")},this.init=()=>{this.contextElement.on("click",this.selectRange)}};var l=s(2);const h=function(t,e,s){const i=this;this.selectors={phoneInput:null,codeInput:t.find('input[type="text"]'),phoneConfirmInput:t.find('input[type="hidden"]'),sendConfirmationBtn:t.find(".phone-confirm__btn.send"),checkConfirmationBtn:t.find(".phone-confirm__btn.check"),errorWrap:t.find(".phone-confirm-error"),successMessage:t.find(".phone-confirm-message"),resendText:t.find(".phone-confirm-resend")},this.isMainInformBlock=$(".lk-tab.active"),this.phoneNumber=null,this.message=null,this.resendDelay=3e5,this.project="mymiofond.ru",this.apiKey="82dc53f1bd307d163827a6b216690f34",this.isBtnActive=!0,this.isFirstTime=!0,this.setPhoneNumber=t=>{this.phoneNumber=this.sanitizePhoneNumber(t)},this.setPhoneInput=()=>{this.selectors.phoneInput=$('input[name="main_info_phone1"]')||null},this.createRandomFourDigit=()=>Math.floor(1e3+9e3*Math.random()),this.sanitizePhoneNumber=t=>{if(!t)return!1;const e=t.replace(/[^0-9#*]/g,"");return 11===e.length&&e},this.blockBtn=t=>{t.hasClass("block")||(i.isBtnActive=!1,t.addClass("block"))},this.unblockBtn=(t,e=0)=>{setTimeout(()=>{t.hasClass("block")&&t.removeClass("block"),i.isBtnActive=!0},e)},this.changeSendBtnText=()=>{i.isFirstTime&&i.selectors.sendConfirmationBtn.html("Получить повторно"),i.isFirstTime=!1},this.showResendMessage=()=>{i.selectors.resendText.hasClass("active")||i.selectors.resendText.addClass("active")},this.hideResendMessage=()=>{i.selectors.resendText.hasClass("active")&&i.selectors.resendText.addClass("active")},this.activeConfirmationBtn=()=>{i.selectors.checkConfirmationBtn.hasClass("active")||i.selectors.checkConfirmationBtn.addClass("active")},this.passiveConfirmationBtn=()=>{i.selectors.checkConfirmationBtn.hasClass("active")&&i.selectors.checkConfirmationBtn.removeClass("active")},this.clearError=()=>{this.selectors.errorWrap.html("")},this.setSuccess=()=>{i.selectors.successMessage.hasClass("error")&&i.selectors.successMessage.removeClass("error"),i.selectors.successMessage.addClass("success")},this.checkCode=()=>parseInt(i.selectors.codeInput.val())===parseInt(i.message),this.setConfirmMessage=t=>{if(t)return i.setSuccess(),i.passiveConfirmationBtn(),i.selectors.sendConfirmationBtn.hasClass("active")&&i.selectors.sendConfirmationBtn.removeClass("active"),void i.selectors.successMessage.html("Успешно!");i.selectors.successMessage.hasClass("success")&&i.selectors.successMessage.removeClass("success"),i.selectors.successMessage.addClass("error"),i.selectors.successMessage.html("Ошибка!")},this.confirmation=()=>{const t=i.checkCode();i.setConfirmMessage(t),t&&(i.hideResendMessage(),i.selectors.phoneConfirmInput.val("true").trigger("change"))},this.sendConfirmation=async function(t){t.preventDefault();const e=$(this);if(i.isBtnActive)if(i.blockBtn(e),i.phoneNumber){i.message=i.createRandomFourDigit();const s=`https://sms.notisend.ru/api/message/send/?project=${i.project}&recipients=${i.phoneNumber}&message=${i.message}&apikey=${i.apiKey}`;try{const t=await Object(l.c)(s);await t&&(i.unblockBtn(e,i.resendDelay),i.changeSendBtnText(),i.showResendMessage(),i.activeConfirmationBtn())}catch(t){return!1}}else i.selectors.errorWrap.html("Неверный формат номера телефона."),i.unblockBtn(e,0)},this.init=()=>{0===s?(this.setPhoneInput(),this.selectors.phoneInput.on("keypress",(function(){i.phoneNumber=i.sanitizePhoneNumber($(this).val()),i.clearError(),i.hideResendMessage(),i.unblockBtn(i.selectors.sendConfirmationBtn,0)}))):1===s&&this.setPhoneNumber(e.contact_phone.tel),this.selectors.sendConfirmationBtn.on("click",this.sendConfirmation),this.selectors.checkConfirmationBtn.on("click",this.confirmation)}},d=function(t){const e=this;this.mkbList=null,this.input=t.find("input.mkb"),this.tips=null,this.inputHandler=function(){const t=$(this).val().toLowerCase();if(t.length<2)return;e.tips.hasClass("active")||e.tips.addClass("active");const s=$.grep(e.mkbList,(function(e){return e.title.toLowerCase().includes(t)}));e.addTips(s)},this.hideCityTipsByClickAway=t=>{const s=t.target;e.tips.hasClass("active")&&!$(s).hasClass("tip")&&e.tips.removeClass("active")},this.selectTip=function(t){const s=$(t.target).html();e.input.val(s).trigger("change"),e.hideTips()},this.hideTips=()=>{e.tips.hasClass("active")&&e.tips.removeClass("active")},this.addTips=t=>{e.tips.html(""),t.forEach(t=>{e.tips.append(`<span class="tip">${t.title}</span>`)})},this.addTipsWrap=()=>{t.append('<div class="tips"></div>'),e.tips=t.find(".tips"),e.tips.on("click",e.selectTip)},this.getMkbJSON=async()=>{try{const t=await fetch(homeUrl+"/mkb.json"),e=await t.json();return await e}catch(t){return console.log(t),t}},this.init=async()=>{this.mkbList=await this.getMkbJSON(),await this.mkbList&&(this.addTipsWrap(),this.input.on("keypress",e.inputHandler),$(window).on("click",e.hideCityTipsByClickAway))}},u=function(t,e,s){const i=this;this.instance=null,this.isYearInput=t.find(".year-mask"),this.isYearMonthInput=t.find(".year-month-mask"),this.isPhoneInput=t.find(".phone-mask"),this.setType=()=>{t.hasClass("date")?this.instance=new r(t):t.find(".train").length?this.instance=new c(t):t.find("input.address").length?this.instance=new o(t):t.find("input.mkb").length?this.instance=new d(t):t.hasClass("phone-confirm")&&(this.instance=new h(t,e,s))},this.yearMask=(t,e)=>{t(e).inputmask({mask:"9999",clearIncomplete:!0})},this.yearMonthMask=(t,e)=>{t(e).inputmask({mask:"99.9999",clearIncomplete:!0})},this.phoneMask=(t,e)=>{t(e).inputmask({mask:"+7(999)999-99-99",clearIncomplete:!0})},this.changeVal=e=>{e.on("keypress",(function(){t.trigger("changeValue",[$(this).val()])})),e.on("blur",(function(){t.trigger("changeValue",[$(this).val()])}))},this.init=()=>{if(this.setType(),i.isYearInput.length&&(this.yearMask(jQuery,i.isYearInput),this.changeVal(i.isYearInput)),i.isPhoneInput&&(this.phoneMask(jQuery,i.isPhoneInput),this.changeVal(i.isPhoneInput)),i.isYearMonthInput&&(this.yearMonthMask(jQuery,i.isYearMonthInput),this.changeVal(i.isYearMonthInput)),this.instance){if(this.instance instanceof o)return void ymaps.ready(this.instance.init());this.instance.init()}}},p=function(t){const e=this;this.selectField=t.find("select"),this.inputWrap=t.find(".select-input"),this.input=this.inputWrap.find("input"),this.select2init=s=>{s(this.selectField).select2({minimumResultsForSearch:1/0,dropdownParent:s(t)}).on("select2:select",(function(){t.trigger("changeValue",[s(this).val()]),e.displayInput(e.selectField),e.removeError()}))},this.removeError=()=>{const s=t.find("span.error");s.length&&s.remove(),e.selectField.hasClass("error")&&e.selectField.removeClass("error")},this.displayInput=function(t){if(!e.inputWrap.length)return;const s=t.val();s.includes("(указать")?(e.inputWrap.addClass("active"),e.input.trigger("focus")):!s.includes("(указать")&&e.inputWrap.hasClass("active")&&e.inputWrap.removeClass("active")},this.init=()=>{this.select2init(jQuery),this.inputWrap.length&&e.input.on("input",(function(){t.trigger("changeValue",[$(this).val()])}))}},m=function(t){const e=this;this.checkboxes=t.find('input[type="checkbox"]'),this.hiddenInput=t.find('input[type="hidden"]'),this.customInput=t.find('input[type="text"]'),this.checkHandler=function(){const t=$(this).prop("checked"),s=e.hiddenInput.val();let i=[];if(0!==s.length&&(i=s.split(" | ")),t){if(e.removeError(),$(this).val().includes("(указать"))return;if(!i.includes($(this).val())){if(!i.length)return void e.hiddenInput.val($(this).val());const t=i.join(" | ");return void e.hiddenInput.val(`${t} | ${$(this).val()}`).trigger("change")}}else if($(this).val().includes("(указать"),i.includes($(this).val())){const t=i.filter(t=>t!==$(this).val()).join(" | ");e.hiddenInput.val(t).trigger("change")}},this.removeError=()=>{const e=t.find("span.error"),s=t.find("input.error");e.length&&e.remove(),s.length&&s.removeClass("error")},this.removeValueFromInput=function(){if(""===$(this).val())return;const t=e.hiddenInput.val();if(t.includes($(this).val())){const s=t.replace(" | "+$(this).val(),"");e.hiddenInput.val(s).trigger("change")}},this.setValueFromInput=function(){if(""===$(this).val())return;const t=e.hiddenInput.val();e.hiddenInput.val(`${t} | ${$(this).val()}`).trigger("change")},this.init=()=>{this.checkboxes.each((function(){$(this).on("change",e.checkHandler)})),this.customInput.on("focus",this.removeValueFromInput),this.customInput.on("blur",this.setValueFromInput)}},f=function(t){const e=this;this.radioButtons=t.find('input[type="radio"]'),this.setEventListeners=function(){$(this).on("change",(function(){t.trigger("changeValue",[$(this).val()])}))},this.init=()=>{this.radioButtons.each(e.setEventListeners)}},g=function(t,e,s,i){const n=this;this.formFieldClass=null,this.currentValue=null,this.conditionRelation=t.data("condRelation"),this.conditionalFields=null,this.elmaField=null,this.elmaName=null,this.requiredField=t.find('[data-req="true"]'),this.valueType=t.data("valueType")||null,this.sameFields=t.data("sameFields")||null,this.sameDependency=t.data("sameDependency")||null,this.ageDependency=t.data("condAge")||null,this.fillMedicalFields=()=>{if(i&&0!==Object.keys(i).length)for(const[t,e]of Object.entries(i))t===n.elmaName&&(n.currentValue=e,this.handleConditionFields(e))},this.computeAgeDependency=()=>{if(n.ageDependency){const t=parseInt(n.ageDependency),s=parseInt(e.age);(n.ageDependency.includes("+")&&s>=t||n.ageDependency.includes("-")&&s<=t)&&n.showFormField()}},this.type=()=>t.hasClass("check")?"checkbox":t.find(".select").length?"select":t.hasClass("radio")?"radio":"input",this.setElmaField=()=>{const e=t.find("[data-elma]");if(!e||!e.length)return;const s=e.data("elma");s&&(this.elmaField=e,this.elmaName=s)},this.setType=()=>{switch(this.type()){case"checkbox":this.formFieldClass=new m(t);break;case"select":this.formFieldClass=new p(t);break;case"radio":this.formFieldClass=new f(t);break;case"input":this.formFieldClass=new u(t,e,s)}},this.showFormField=()=>{t.hasClass("show")||t.addClass("show")},this.setConditionalFields=()=>{this.conditionRelation&&(this.conditionalFields=$(`[data-cond-dep-name="${this.conditionRelation}"]`))},this.multipleConditionValues=(t,e,s)=>{const i=e.split("|,|"),n=t.hasClass("show"),a=i.includes(s);a&&n||(!a||n?t.removeClass("show"):t.addClass("show"))},this.displayConditionFields=function(){const t=$(this).data("condDepValue");"string"==typeof t&&t.includes("|,|")?n.multipleConditionValues($(this),t,n.currentValue):t===n.currentValue&&$(this).hasClass("show")||(t!==n.currentValue||$(this).hasClass("show")?$(this).removeClass("show"):$(this).addClass("show"))},this.handleConditionFields=function(t){null!==n.conditionalFields&&void 0!==t&&n.conditionalFields.each(n.displayConditionFields)},this.changeValue=function(t,e){const s=$(this).val()?$(this).val():e;if("int"===n.valueType){const t=parseFloat(s);isNaN(t)?n.currentValue=null:n.currentValue=t}n.currentValue=s,n.handleConditionFields(n.currentValue)},this.init=()=>{if(this.setType(),this.setElmaField(),this.setConditionalFields(),this.formFieldClass){if(this.formFieldClass.init(),this.elmaField){if(this.computeAgeDependency(),this.fillMedicalFields(),this.formFieldClass instanceof p)return void t.on("changeValue",this.changeValue);this.elmaField.on("change",n.changeValue),this.elmaField.on("blur",n.changeValue)}t.on("changeValue",this.changeValue)}}},b=function(t,e,s,a,r,o){const c=this;this.isFirstYear=parseInt($("#is-first-year").html()),this.blockIndex=r.index,this.formIndex=parseInt(e)+1,this.formFieldsList=[],this.rules=Object.create({}),this.actionUrl=t.data("action"),this.resultMessage=t.find(".result"),this.successMessage=t.data("success"),this.submitButton=t.find('input[type="submit"]'),this.setFormFields=()=>{t.find(".contact-form__form-field").each((function(){const t=new g($(this),a,c.blockIndex,o);t.init(),c.formFieldsList.push(t)}))},this.setRule=t=>{const e=t.attr("name");let s={value:{required:!0}};switch(t.data("validation")){case"email":s={value:{required:!0,email:!0}};break;case"name":s={value:{required:!0,_name:!0}}}Object.defineProperty(c.rules,e,s)},this.setRules=()=>{c.formFieldsList.forEach(t=>{t.requiredField.length&&c.setRule($(t.requiredField))})},this.createContextObject=()=>{const t=Object.create({});return c.formFieldsList.forEach(e=>{e.elmaField&&Object.defineProperty(t,e.elmaName,{value:e.currentValue?e.currentValue:"",enumerable:!0})}),t},this.setErrors=function(t,e){const s=$(e).data("error");s?$(s).append(t):t.insertBefore(e)},this.submitResult=(t,e)=>{c.resultMessage.html(t),c.resultMessage.addClass(e)},this.fillSameValues=()=>{c.formFieldsList.forEach(t=>{if(t.sameDependency&&!t.currentValue){const e=c.formFieldsList.find(e=>e.sameFields===t.sameDependency);t.currentValue=e.currentValue}})},this.setSubmitHandler=function(){Object(n.a)(t,"show"),c.fillSameValues();const a=c.createContextObject(),r={id:s,context:a};1===c.blockIndex&&(0===e&&(r.is_first_year=!0),1===e&&(r.mank_ill_stage=c.setStage(),c.isFirstYear||(r.is_first_year=!1))),c.isFirstYear?(1===c.blockIndex&&0!==e||3===c.blockIndex)&&(r.form_id=c.formIndex):(1===c.blockIndex&&e>1||3===c.blockIndex)&&(r.form_id=c.formIndex);const o={method:"POST",body:JSON.stringify(r)};Object(i.a)(c.actionUrl,o).then(t=>t.json()).then(()=>{t.trigger("reset"),c.submitResult(c.successMessage,"success"),t.trigger("submitSuccess",e),Object(n.a)(t)}).then(()=>{}).catch(()=>{c.submitResult("Ошибка отправки. Проверьте данные или попробуйте позже.","err"),Object(n.a)(t)})},this.setStage=()=>{const t=a.age,e=$('select[data-elma="mank_motor_abilities_2"]').val(),s=$('select[data-elma="mank_neuro_lost_ability"]').val();return t<=3?1:"Ходит сам"===e?2:t>=8&&"Ходит сам (но тяжело) или с поддержкой"===e?3:parseInt(s)<=t-3&&"Пользуется инвалидным креслом (скутером или подобным), способен удерживать тело, не нужен подголовник, активно пользуется руками"===e?4:t-parseInt(s)>=4&&("Пользуется инвалидным креслом (скутером или подобным), способен удерживать тело, не нужен подголовник, активно пользуется руками"===e||"Использует кресло, требуется поддержка тела и головы. использует руки, но функциональность снижена"===e)?5:0},this.disableSubmitButton=()=>{c.submitButton.addClass("disabled")},this.enableSubmitButton=()=>{c.submitButton.hasClass("disabled")&&c.submitButton.removeClass("disabled")},this.checkIsButtonEnable=()=>{1===c.blockIndex&&((r.tabs.lockedTabs.length||0!==e)&&r.tabs.lockedTabs.length!==e?c.disableSubmitButton():c.enableSubmitButton())},this.changeAction=()=>{console.log(c.isFirstYear),1!==r.index||2!==c.formIndex||c.isFirstYear||(c.actionUrl=r.forms[c.formIndex-2].actionUrl)},this.init=e=>{this.setFormFields(),this.setRules(),this.changeAction(),this.checkIsButtonEnable(),this.submitButton.on("click",(function(t){e(this).hasClass("disabled")&&t.preventDefault()})),e(t).validate({ignore:[],errorClass:"error",validClass:"success",rules:c.rules,errorElement:"span",errorPlacement:c.setErrors,submitHandler:this.setSubmitHandler})}},v=function(t,e,s){const n=this;this.parentBlock=e,this.index=parseInt(t),this.documentsList=[],this.container=$(e.block).find(".documents__wrap"),this.apiUrl="",this.getDocs=async()=>{const t=`${n.apiUrl}?id=${s}`,e=await Object(i.a)(t,{method:"GET"}),a=await e.json();return await a.files},this.editNotice=()=>{const t=$(n.parentBlock.block).find(".documents__notice");let e="";switch(n.index){case 2:e="Документы";break;case 4:e="Архив мед.анкет"}t.length&&t.html(e)},this.setApiUrl=t=>{const e="https://aeqlmvgvlxcee.elma365.ru/api/extensions/3d15932c-766e-4e91-b8ff-fed442649de2/script/ward/";switch(t){case 2:n.apiUrl=e+"documents";break;case 4:n.apiUrl=n.apiUrl=e+"med_anks"}},this.createDocumentItem=(t,e,s)=>$(`<div class="documents__item">\n                    <span class="documents__item_idx">${parseInt(t)+1}.</span>\n                    <p class="documents__item_title">${e}</p>\n                    <a href="${s}" class="documents__item_link">Скачать</a>\n                </div>`),this.createDocumentsList=()=>{this.documentsList.forEach((t,e)=>{const s=n.createDocumentItem(e,t.docname,t.url);n.container.append(s)})},this.displayDocumentsList=()=>{this.documentsList.length&&(this.editNotice(),this.createDocumentsList())},this.init=async()=>{this.setApiUrl(n.index),this.documentsList=await this.getDocs(),this.documentsList.length&&this.displayDocumentsList()}},k=function(t,e,s,i,n){const r=this;this.tabs=null,this.block=t,this.forms=[],this.index=parseInt(e),this.formsList=$(r.block).find(".contact-form__form"),this.questionnaireProgress=$(r.block).find(".lk-progress-inner"),this.documentsBlock=null,this.setTabs=async()=>{const t=$(r.block).find(".lk-form__tabs");t&&t.length&&(1===this.index?this.tabs=new a(r.block,"lk-form__tab_content","lk-form__tab",i.email):this.tabs=new a(r.block,"lk-form__tab_content","lk-form__tab"),await this.tabs.init())},this.formHandler=function(t,e){1===r.index&&(r.tabs.Tab.currentTab=e+1,r.tabs.lockNewTab(e),r.questionnaireProgressCount(),r.forms[e+1].checkIsButtonEnable())},this.setContent=()=>{this.formsList.length&&this.formsList.each((function(t){const e=new b($(this),t,s,i,r,n);e.init(jQuery),$(this).on("submitSuccess",r.formHandler),r.forms.push(e)})),2!==this.index&&4!==this.index||(this.documentsBlock=new v(this.index,this,s),this.documentsBlock.init())},this.questionnaireProgressCount=()=>{const t=r.tabs.tabList.length,e=`${r.tabs.lockedTabs.length}/${t}`;r.questionnaireProgress.html(e)},this.init=async()=>{await this.setTabs(),this.setContent(),await this.tabs&&this.questionnaireProgress.length&&this.questionnaireProgressCount()}},C=t=>{const e=(t=>{const e=t.split(".");return new Date(e[2],e[1]-1,e[0]).toDateString()})(t),s=Date.now()-new Date(e).getTime(),i=new Date(s);return Math.abs(i.getUTCFullYear()-1970)},y=function(){const t=this;this.userData=null,this.filledMedicalFields=null,this.bloks=[],this.elmaId=$("#elma-id").html(),this.tabs=new a($(".lk-container"),"lk-form","lk-tab"),this.blocksList=$(".lk-form"),this.checkNotisendApi=()=>{},this.getUserData=async t=>{try{const e="https://aeqlmvgvlxcee.elma365.ru/api/extensions/3d15932c-766e-4e91-b8ff-fed442649de2/script/get/appgs?id="+t,s={method:"GET"},n=await Object(i.a)(e,s);if(await n){const t=await n.json();return this.userData=await t.user_data,this.filledMedicalFields=await t.medical_fields,this.setUserData(await Object.entries(t.user_data)),!0}return!1}catch(t){return!1}},this.setAge=()=>{t.userData.age=C(t.userData.child_birthdate)},this.contentBlocks=async()=>{this.blocksList.each((function(e){const s=new k($(this),e,t.elmaId,t.userData,t.filledMedicalFields);s.init(),t.bloks.push(s)}))},this.setUserData=t=>{for(const[e,s]of t){$(`[data-info=${e}]`).html(s)}},this.init=async()=>{this.getUserData(this.elmaId).then(()=>{this.setAge(),this.tabs.init(),this.contentBlocks(),Object(n.a)("body","hide")}).catch(t=>{console.log(t)})}};!async function(){const t=new y;await t.init()}()}]);