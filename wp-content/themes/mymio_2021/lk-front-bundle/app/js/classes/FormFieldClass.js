'use strict';

import {InputClass} from "./FormFields/InputClass";
import {SelectClass} from "./FormFields/SelectClass";
import {CheckboxClass} from "./FormFields/CheckboxClass";
import {RadioClass} from "./FormFields/RadioClass";

export const FormFieldClass = function (formField) {
    const self = this;
    this.formFieldClass = null;
    this.currentValue = null;
    this.conditionRelation = formField.data('condRelation');
    this.conditionalFields = null;
    this.elmaField = null;
    this.elmaName = null;
    this.requiredField = formField.find('[data-req="true"]');

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

    this.setElmaField = () => {
        const elem = formField.find('[data-elma]');

        if (!elem || !elem.length) {
            return;
        }

        const elmaName = elem.data('elma');

        if (!elmaName) {
            return;
        }

        this.elmaField = elem;
        this.elmaName = elmaName;
    }

    this.setType = () => {
        switch (this.type()) {
            case 'checkbox':
                this.formFieldClass = new CheckboxClass(formField);
                break;
            case 'select':
                this.formFieldClass = new SelectClass(formField);
                break;
            case 'radio':
                this.formFieldClass = new RadioClass(formField);
                break;
            case 'input':
                this.formFieldClass = new InputClass(formField);
                break;
        }
    }

    this.setConditionalFields = () => {
        if (this.conditionRelation) {
            this.conditionalFields = $(`[data-cond-dep-name="${this.conditionRelation}"]`);
        }
    }

    this.multipleConditionValues = (element, needValue, currentValue) => {
        const needValuesArr = needValue.split('|,|');
        const isElementShow = element.hasClass('show');
        const isArrayIncludeValue = needValuesArr.includes(currentValue);

        if (isArrayIncludeValue && isElementShow) {
            return;
        }

        if (isArrayIncludeValue && !isElementShow) {
            element.addClass('show');
            return;
        }

        element.removeClass('show');
    }

    this.displayConditionFields = function () {
        const needValue = $(this).data('condDepValue');

        if (typeof needValue === 'string') {

            if (needValue.includes('|,|')) {
                self.multipleConditionValues($(this), needValue, self.currentValue);
                return;
            }
        }

        if (needValue === self.currentValue && $(this).hasClass('show')) {
            return;
        }

        if (needValue === self.currentValue && !$(this).hasClass('show')) {
            $(this).addClass('show');
            return;
        }

        $(this).removeClass('show');
    }

    this.handleConditionFields = function (e, value) {
        self.currentValue = value;

        if (self.conditionalFields === null
            || self.currentValue === undefined) return;

        self.conditionalFields.each(self.displayConditionFields);
    }

    this.init = () => {
        this.setType();
        this.setElmaField();
        this.setConditionalFields();

        if (this.formFieldClass) {
            this.formFieldClass.init();

            formField.on( 'changeValue', this.handleConditionFields);
        }
    }
}