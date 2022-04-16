'use strict';

import {loader} from "../mixins/loader";
import {FormFieldClass} from "./FormFieldClass";
import {getUserDataFromElma} from "../api/elmaApi";

// get formId
// set loader

export const FormClass = function (form, idx, elmaId) {
    const self = this;
    this.formIndex = parseInt(idx) + 1;
    this.formFieldsList = [];
    this.rules = Object.create({});
    this.actionUrl = form.data('action');

    (this.setFormFields = () => {
        const fields = form.find('.contact-form__form-field')

        fields.each(function () {
            const formField = new FormFieldClass($(this));
            formField.init();
            self.formFieldsList.push(formField);
        })
    })()

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
            if (f.elmaField.length) {
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

    this.setSubmitHandler = function (form) {
        loader(form, 'show');
        const contextObject = self.createContextObject();
        const requestBody =  JSON.stringify({
            id: elmaId,
            form_id: self.formIndex,
            context: contextObject
        });
        const requestOptions = {
            method: 'POST',
            body: requestBody,
        }

        getUserDataFromElma(self.actionUrl, requestOptions)
            .then(res => res.json())
            .then(data => console.log(data));

        loader(form);
    }

    this.init = ($) => {

        jQuery(form).validate({
            ignore: [],
            errorClass: 'error',
            validClass: 'success',
            rules: self.rules,
            errorElement: 'span',
            errorPlacement: self.setErrors,
            submitHandler: self.setSubmitHandler,
        })

        /*form.on('submit', function (e) {
            e.preventDefault();
            console.log(test);
        })*/
    }
}