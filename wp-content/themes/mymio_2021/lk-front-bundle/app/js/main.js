'use strict';

// get start data
// import './getUserDataFromElma';
//
// view
// import './formFunctions/select';
// import './formFunctions/checkboxes';
// import './formFunctions/datepicker';
// import './formFunctions/train';
// import {maskInit} from "./formFunctions/inputMask";
// import {selectMkb} from "./formFunctions/selectMkb";
// import {checkLastActiveTabs, checkLockedTabs, tabs} from "./_utils/tabs";
// import './forms';
// import './_mixins/conditionFields';
// import './formFunctions/yaMaps';
//
// './helprers/questionaireProgress';
//
// checkLastActiveTabs('.lk-tab');
// checkLastActiveTabs('.lk-form__tab');
// checkLockedTabs();
//
// tabs('.lk-tab', '.lk-form');
// tabs('.lk-form__tab', '.lk-form__tab_content');
//
// maskInit();
//
// selectMkb('mank_accompanying_diagnosis_2');
//
// account



/*const checkIndex = async (address) => {
    try {
        return await fetch(`https://api.delivery.yandex.ru/location/postal-code?address=${address}`, {
            mode: 'no-cors',
            headers: {
                'Authorization': 'OAuth AQAAAAAVRvWoAAfalxYmEomWdkEBpAEL6shsLUQ',
            },
        });
    } catch (e) {
        return e;
    }
}

checkIndex('Россия, Москва, Мясницкая улица, 24/7с1')
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((e) => console.log(e));*/

import {AccountClass} from "./classes/AccountClass";
(async function () {
    const account = new AccountClass();
    await account.init();
})();