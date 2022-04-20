'use strict';

import {InputDateClass} from "./inputs/InputDateClass";
import {InputAddressClass} from "./inputs/InputAddressClass";
import {TrainClass} from "./inputs/TrainClass";
import {PhoneConfirmationClass} from "./inputs/PhoneConfirmationClass";

export const InputClass = function (formField, userData, blockIndex) {
    this.instance = null;

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

    this.init = () => {
        this.setType();

        const isYearInput = formField.find('.year-mask');

        if (isYearInput.length) {
            this.yearMask(jQuery, isYearInput);
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