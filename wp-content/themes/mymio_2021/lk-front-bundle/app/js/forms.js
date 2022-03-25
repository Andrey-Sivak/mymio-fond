'use strict';

import {getInputNames} from "./utils/getInputNames";
import {formResultHandler} from "./utils/formResultHandler";
import {getNeededInputs} from "./utils/getNeededInputs";
import {fillSameValues} from "./mixins/fillSameValues";
import {goToNextForm} from "./mixins/goToNextForm";

const forms = jQuery('form.contact-form__form');

forms.each(function () {
    const rules = getInputNames(jQuery(this));
    const ctxForm = $(this);
    jQuery(this).validate({
        ignore: [],
        errorClass: 'error',
        validClass: 'success',
        rules: rules,
        errorElement: 'span',
        errorPlacement: function (error, element) {
            const placement = jQuery(element).data('error');
            if (placement) {
                jQuery(placement).append(error);
            } else {
                error.insertBefore(element);
            }
        },
        submitHandler: function () {
            const loader = ctxForm.find('.loader');
            loader.addClass('active');

            const formId = parseInt(ctxForm.parent().parent().parent().data('form'));
            const activeTabNumber = parseInt($('.lk-tab.active').data('tab'));

            // let urlParam = formId ? 'medical' : 'main';
            let urlParam;
            switch (activeTabNumber) {
                case 1:
                    urlParam = 'ward/main/update';
                    break;
                case 2:
                    urlParam = 'ward/medical/update';
                    break;
                case 4:
                    urlParam = 'create/apppr';
                    break;
            }
            const url = `https://aeqlmvgvlxcee.elma365.ru/api/extensions/3d15932c-766e-4e91-b8ff-fed442649de2/script/${urlParam}`;

            const contextObject = getNeededInputs(ctxForm);
            const userId = $('#elma-id').html();
            let requestBody;

            if (formId) {
                requestBody = JSON.stringify({
                    id: userId,
                    form_id: formId,
                    context: contextObject.context
                })
            } else {
                requestBody = JSON.stringify({
                    id: userId,
                    context: contextObject.context
                })
            }

            fillSameValues('main_info_address_reg_pod', ['main_info_address_act_pod', 'main_info_address_mail_pod']);


            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer 8657d620-f5eb-4552-997d-d3ec43688c29',
                },
                body: requestBody,
            })
                .then(res => res.json())
                .then(data => {
                    if (formResultHandler(data.msg, ctxForm)) {
                        goToNextForm(formId, $('.lk-form__tab_content[data-form]').length);
                    }
                })
                .catch(function (error) {
                    console.log('Request failed', error);
                });
        }
    })
});

jQuery.validator.addMethod('email', function (value, element) {
    return this.optional(element) || /\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,6}/.test(value);
}, 'Некорректный e-mail');
jQuery.validator.addMethod('_name', function (value, element) {
    return this.optional(element) || /^[а-яА-ЯёЁ\s]+$/.test(value);
}, 'Введите корректное имя');

// field dependencies
