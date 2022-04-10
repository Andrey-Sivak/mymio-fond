'use strict';

import {InputClass} from "./FormFields/InputClass";
import {SelectClass} from "./FormFields/SelectClass";
import {CheckboxClass} from "./FormFields/CheckboxClass";

export const FormFieldClass = function (formField) {
    this.instance = null;

    this.setType = () => {
        if (formField.hasClass('check')) {
            this.instance = new CheckboxClass(formField);
            return;
        }

        if (formField.find('.select').length) {
            this.instance = new SelectClass(formField);
            return;
        }

        if (formField.hasClass('radio')) {
            return;
        }

        this.instance = new InputClass(formField);
    }

    this.init = () => {
        this.setType();

        if (this.instance) {
            this.instance.init();
        }
    }
}