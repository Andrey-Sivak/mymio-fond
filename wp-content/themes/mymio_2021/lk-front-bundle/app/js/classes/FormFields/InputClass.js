'use strict';

import {InputDateClass} from "./inputs/InputDateClass";
import {InputAddressClass} from "./inputs/InputAddressClass";
import {TrainClass} from "./inputs/TrainClass";
import {PhoneConfirmationClass} from "./inputs/PhoneConfirmationClass";

export const InputClass = function (formField, userData, blockIndex) {
    const self = this;
    this.instance = null;
    this.isYearInput = formField.find('.year-mask');
    this.isPhoneInput = formField.find('.phone-mask');

    this.setType = () => {
        if (formField.hasClass('date')) {
            this.instance = new InputDateClass(formField);
            return;
        }

        if (formField.find('.train').length) {
            this.instance = new TrainClass(formField);
            return;
        }

        if (formField.find('input.address').length) {
            this.instance = new InputAddressClass(formField);
            return;
        }

        if (formField.hasClass('phone-confirm')) {
            this.instance = new PhoneConfirmationClass(formField, userData, blockIndex);
            return;
        }
    }

    this.yearMask = ($, input) => {
        $(input).inputmask({
            mask: "9999",
            "clearIncomplete": true
        })
    }

    this.phoneMask = ($, input) => {
        $(input).inputmask({
            mask: "+7(999)999-99-99",
            "clearIncomplete": true
        })
    }

    this.init = () => {
        this.setType();

        if (self.isYearInput.length) {
            this.yearMask(jQuery, self.isYearInput);
        }

        if (self.isPhoneInput) {
            this.phoneMask(jQuery, self.isPhoneInput);
        }

        if (this.instance) {

            if (this.instance instanceof InputAddressClass) {
                ymaps.ready(this.instance.init());
                return;
            }

            this.instance.init();
        }
    }
}