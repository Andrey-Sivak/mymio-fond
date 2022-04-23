'use strict';

import {loader} from "../mixins/loader";
import {FormFieldClass} from "./FormFieldClass";
import {getUserDataFromElma} from "../api/elmaApi";

// set loader

export const FormClass = function (form, idx, elmaId, userData, blockIndex, filledMedicalFields) {
    const self = this;
    this.formIndex = parseInt(idx) + 1;
    this.formFieldsList = [];
    this.rules = Object.create({});
    this.actionUrl = form.data('action');
    this.resultMessage = form.find('.result');
    this.successMessage = form.data('success');

    this.setFormFields = () => {
        const fields = form.find('.contact-form__form-field')

        fields.each(function () {
            const formField = new FormFieldClass($(this), userData, blockIndex, filledMedicalFields);
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

    (this.setRules = () => {
        self.formFieldsList.forEach(f => {
            if (f.requiredField.length) {
                self.setRule($(f.requiredField));
            }
        });
    })()

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

        if (blockIndex === 1 && idx === 1) {
            objectToSend.mank_ill_stage = self.setStage();
        }

        if ((blockIndex === 1 && idx !== 0) || blockIndex === 3) {
            objectToSend.form_id = self.formIndex;
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
                self.submitResult('Ошибка отправки. Проверьте данные или попробуйте позже.', 'err');
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

        if (moveAbilities === 'Ходит сам') {
            return 2;
        }

        if (age >= 8 && moveAbilities === 'Ходит сам (но тяжело) или с поддержкой') {
            return 3;
        }

        if (parseInt(lostAge) <= age - 3) {

            if (moveAbilities === 'Пользуется инвалидным креслом (скутером или подобным), способен удерживать тело, не нужен подголовник, активно пользуется руками') {
                return 4;
            }
        }

        if (age - parseInt(lostAge) >= 4) {
            if (moveAbilities === 'Пользуется инвалидным креслом (скутером или подобным), способен удерживать тело, не нужен подголовник, активно пользуется руками'
                || moveAbilities === 'Использует кресло, требуется поддержка тела и головы. использует руки, но функциональность снижена') {
                return 5;
            }
        }

        return 0;
    }

    this.init = ($) => {
        this.setFormFields();

        const valid = $(form).validate({
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