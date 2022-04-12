'use strict';

import {InputClass} from "./FormFields/InputClass";
import {SelectClass} from "./FormFields/SelectClass";
import {CheckboxClass} from "./FormFields/CheckboxClass";

export const FormFieldClass = function (formField) {
    this.formFieldClass = null;
    this.type = () => {
        if (formField.hasClass('check')) {
            return 'checkbox';
        } else if (formField.find('.select').length) {
            return 'select';
        } else if (formField.hasClass('radio')) {
            return 'radio';
        } else {
            return 'input';
        }
    }

    this.setType = () => {
        switch (this.type()) {
            case 'checkbox':
                this.formFieldClass = new CheckboxClass(formField);
                break;
            case 'select':
                this.formFieldClass = new SelectClass(formField);
                break;
            case 'input':
                this.formFieldClass = new InputClass(formField);
                break;
        }
    }

    this.init = () => {
        this.setType();

        if (this.formFieldClass) {
            this.formFieldClass.init();
        }
    }
}