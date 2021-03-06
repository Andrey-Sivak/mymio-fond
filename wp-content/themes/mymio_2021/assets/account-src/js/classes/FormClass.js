'use strict';

import {loader} from "../mixins/loader";
import {FormFieldClass} from "./FormFieldClass";
import {getUserDataFromElma} from "../api/elmaApi";

// set loader

export const FormClass = function (form, idx, elmaId, userData, parentBlock, filledMedicalFields) {
    const self = this;
    this.isFirstYear = parseInt($('#is-first-year').html());
    this.blockIndex = parentBlock.index;
    this.formIndex = parseInt(idx) + 1;
    this.formFieldsList = [];
    this.rules = Object.create({});
    this.actionUrl = form.data('action');
    this.resultMessage = form.find('.result');
    this.successMessage = form.data('success');
    this.submitButton = form.find('input[type="submit"]');

    this.setFormFields = () => {
        const fields = form.find('.contact-form__form-field')

        fields.each(function () {
            const formField = new FormFieldClass($(this), userData, self.blockIndex, filledMedicalFields);
            formField.init();
            self.formFieldsList.push(formField);
        })
    }

    this.setRule = (element) => {
        const name = element.attr('name');
        const validation = element.data('validation');

        let attributes = {
            value: {
                required: true,
            }
        }

        switch (validation) {
            case 'email':
                attributes = {
                    value: {
                        required: true,
                        email: true,
                    }
                }
                break;
            case 'name':
                attributes = {
                    value: {
                        required: true,
                        _name: true,
                    }
                }
                break;
        }

        Object.defineProperty(self.rules, name, attributes);
    }

    this.setRules = () => {
        self.formFieldsList.forEach(f => {
            if (f.requiredField.length) {
                self.setRule($(f.requiredField));
            }
        });
    }

    this.createContextObject = () => {
        const object = Object.create({});

        self.formFieldsList.forEach(f => {
            if (f.elmaField) {
                Object.defineProperty(object, f.elmaName, {
                    value: f.currentValue ? f.currentValue : '',
                    enumerable: true
                });
            }
        });

        return object;
    }

    this.setErrors = function (error, element) {
        const placement = $(element).data('error');
        if (placement) {
            $(placement).append(error);
        } else {
            error.insertBefore(element);
        }
    }

    this.submitResult = (msg, cssClass) => {
        self.resultMessage.html(msg);
        self.resultMessage.addClass(cssClass);
    }

    this.fillSameValues = () => {
        self.formFieldsList.forEach((f) => {
            if (f.sameDependency && !f.currentValue) {
                const dependField = self.formFieldsList.find((n) => n.sameFields === f.sameDependency);
                f.currentValue = dependField.currentValue;
            }
        });
    }

    this.setSubmitHandler = function () {
        loader(form, 'show');

        self.fillSameValues();

        const contextObject = self.createContextObject();
        const objectToSend = {
            id: elmaId,
            context: contextObject,
        }

        if (self.blockIndex === 1) {
            if (idx === 0) {
                objectToSend.is_first_year = true;
            }

            if (idx === 1) {
                objectToSend.mank_ill_stage = self.setStage();

                if (!self.isFirstYear) {
                    objectToSend.is_first_year = false;
                }
            }
        }

        if (self.isFirstYear) {
            if ((self.blockIndex === 1 && idx !== 0) || self.blockIndex === 3) {
                objectToSend.form_id = self.formIndex;
            }
        } else {
            if ((self.blockIndex === 1 && idx > 1) || self.blockIndex === 3) {
                objectToSend.form_id = self.formIndex;
            }
        }

        const requestBody = JSON.stringify(objectToSend);
        const requestOptions = {
            method: 'POST',
            body: requestBody,
        }

        getUserDataFromElma(self.actionUrl, requestOptions)
            .then(res => res.json())
            .then(() => {
                form.trigger('reset');
                self.submitResult(self.successMessage, 'success');
                form.trigger('submitSuccess', idx);
                loader(form);
            })
            .then(() => {

            })
            .catch(() => {
                self.submitResult('???????????? ????????????????. ?????????????????? ???????????? ?????? ???????????????????? ??????????.', 'err');
                loader(form);
            })
    }

    this.setStage = () => {
        const age = userData.age;
        const moveAbilities = $('select[data-elma="mank_motor_abilities_2"]').val();
        const lostAge = $('select[data-elma="mank_neuro_lost_ability"]').val();

        if (age <= 3) {
            return 1;
        }

        if (moveAbilities === '?????????? ??????') {
            return 2;
        }

        if (age >= 8 && moveAbilities === '?????????? ?????? (???? ????????????) ?????? ?? ????????????????????') {
            return 3;
        }

        if (parseInt(lostAge) <= age - 3) {

            if (moveAbilities === '???????????????????? ???????????????????? ?????????????? (???????????????? ?????? ????????????????), ???????????????? ???????????????????? ????????, ???? ?????????? ??????????????????????, ?????????????? ???????????????????? ????????????') {
                return 4;
            }
        }

        if (age - parseInt(lostAge) >= 4) {
            if (moveAbilities === '???????????????????? ???????????????????? ?????????????? (???????????????? ?????? ????????????????), ???????????????? ???????????????????? ????????, ???? ?????????? ??????????????????????, ?????????????? ???????????????????? ????????????'
                || moveAbilities === '???????????????????? ????????????, ?????????????????? ?????????????????? ???????? ?? ????????????. ???????????????????? ????????, ???? ???????????????????????????????? ??????????????') {
                return 5;
            }
        }

        return 0;
    }

    this.disableSubmitButton = () => {
        self.submitButton.addClass('disabled');
    }

    this.enableSubmitButton = () => {
        if (self.submitButton.hasClass('disabled')) {
            self.submitButton.removeClass('disabled');
        }
    }

    this.checkIsButtonEnable = () => {
        if (self.blockIndex !== 1) {
            return;
        }

        if (!parentBlock.tabs.lockedTabs.length && idx === 0) {
            self.enableSubmitButton();
            return;
        }

        if (parentBlock.tabs.lockedTabs.length === idx) {
            self.enableSubmitButton();
            return;
        }

        self.disableSubmitButton();
    }

    this.changeAction = () => {
        if (parentBlock.index === 1
            && self.formIndex === 2
            && !self.isFirstYear) {
            self.actionUrl = parentBlock.forms[self.formIndex - 2].actionUrl;
        }
    }

    this.init = ($) => {
        this.setFormFields();
        this.setRules();
        this.changeAction();
        this.checkIsButtonEnable();

        this.submitButton.on('click', function (e) {
            if ($(this).hasClass('disabled')) {
                e.preventDefault();
            }
        })

        $(form).validate({
            ignore: [],
            errorClass: 'error',
            validClass: 'success',
            rules: self.rules,
            errorElement: 'span',
            errorPlacement: self.setErrors,
            submitHandler: this.setSubmitHandler,
        });
    }
}