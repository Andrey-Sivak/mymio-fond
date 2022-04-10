'use strict';

import {loader} from "../mixins/loader";
import {FormFieldClass} from "./FormFieldClass";

// get formId
// set loader

export const FormClass = function (form, idx) {
    this.formIndex = parseInt(idx) + 1;
    this.formFieldsList = form.find('.contact-form__form-field');

    this.setFormFields = () => {
        this.formFieldsList.each(function () {
            const formField = new FormFieldClass($(this));
            formField.init();
        })
    }

    this.init = () => {
        this.setFormFields();
    }
}