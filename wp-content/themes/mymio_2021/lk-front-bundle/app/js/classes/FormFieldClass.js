'use strict';

import {InputClass} from "./FormFields/InputClass";
import {SelectClass} from "./FormFields/SelectClass";
import {CheckboxClass} from "./FormFields/CheckboxClass";
import {RadioClass} from "./FormFields/RadioClass";

export const FormFieldClass = function (formField, userData, blockIndex) {
    const self = this;
    this.formFieldClass = null;
    this.currentValue = null;
    this.conditionRelation = formField.data('condRelation');
    this.conditionalFields = null;
    this.elmaField = null;
    this.elmaName = null;
    this.requiredField = formField.find('[data-req="true"]');
    this.valueType = formField.data('valueType') || null;
    this.sameFields = formField.data('sameFields') || null;
    this.sameDependency = formField.data('sameDependency') || null;

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
                this.formFieldClass = new InputClass(formField, userData, blockIndex);
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

    this.handleConditionFields = function (value) {

        if (self.conditionalFields === null || value === undefined) {
            return;
        }

        self.conditionalFields.each(self.displayConditionFields);
    }

    this.changeValue = function (e, value) {
        const val = $(this).val() ? $(this).val() : value;

        if (self.valueType === 'int') {
            const intValue = parseFloat(val);
            if (!isNaN(intValue)) {
                self.currentValue = intValue;
            } else {
                self.currentValue = null;
            }
        }
        self.currentValue = val;

        self.handleConditionFields(self.currentValue);
    }

    this.init = () => {
        this.setType();
        this.setElmaField();
        this.setConditionalFields();

        if (this.formFieldClass) {
            this.formFieldClass.init();

            if (this.elmaField) {
                if (this.formFieldClass instanceof SelectClass) {
                    formField.on('changeValue', this.changeValue);
                    return;
                }

                this.elmaField.on('change', self.changeValue);
                this.elmaField.on('blur', self.changeValue);
            }
            formField.on('changeValue', this.changeValue);
        }
    }
}