'use strict';

// get start data
import './getUserDataFromElma';

// view
import './formFunctions/select';
import './formFunctions/checkboxes';
import './formFunctions/datepicker';
import './formFunctions/train';
import {maskInit} from "./formFunctions/inputMask";
import {selectMkb} from "./formFunctions/selectMkb";
import {tabs, checkLastActiveTabs, checkLockedTabs} from "./utils/tabs";
import './forms';
import './mixins/conditionFields';

'./helprers/questionaireProgress';

checkLastActiveTabs('.lk-tab');
checkLastActiveTabs('.lk-form__tab');
checkLockedTabs();

tabs('.lk-tab', '.lk-form');
tabs('.lk-form__tab', '.lk-form__tab_content');

maskInit();

selectMkb('mank_accompanying_diagnosis_2');

//TODO: fix if error

// import './formFunctions/yaMaps';

//Новый тест пароль - of_0xKtBV7