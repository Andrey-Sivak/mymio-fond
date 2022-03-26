'use strict';

// get start data
import './getUserDataFromElma';

// view
import './formFunctions/select';
import './formFunctions/checkboxes';
import './formFunctions/datepicker';
// import './formFunctions/train';
import {maskInit} from "./formFunctions/inputMask";
import {selectMkb} from "./formFunctions/selectMkb";
import {checkLastActiveTabs, checkLockedTabs, tabs} from "./utils/tabs";
import './forms';
import './mixins/conditionFields';
import './formFunctions/yaMaps';

'./helprers/questionaireProgress';

checkLastActiveTabs('.lk-tab');
checkLastActiveTabs('.lk-form__tab');
checkLockedTabs();

tabs('.lk-tab', '.lk-form');
tabs('.lk-form__tab', '.lk-form__tab_content');

maskInit();

selectMkb('mank_accompanying_diagnosis_2');

//TODO: fix if error

//Новый тест пароль - of_0xKtBV7

/*
const requestBody = JSON.stringify({
    "filter": {
        "email": {
            "type": "home",
            "email": "asdfd1231312312a@as.asa",
        }
    },
    "from": 0,
    "size": 1,
    "sortExpressions": [
        {
            "ascending": true,
            "field": "id"
        }
    ]
})
const url = `https://aeqlmvgvlxcee.elma365.ru/pub/v1/user/list`;

fetch(url, {
    method: 'POST',
    mode: 'no-cors',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer 8657d620-f5eb-4552-997d-d3ec43688c29',
    },
    body: requestBody,
}).then(data => console.log(data))*/
