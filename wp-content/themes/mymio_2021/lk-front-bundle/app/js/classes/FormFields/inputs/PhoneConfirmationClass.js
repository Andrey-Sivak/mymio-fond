'use strict';

import {getData} from "../../../api/customApi";

export const PhoneConfirmationClass = function (formField, userData, blockIndex) {
    const self = this;
    this.selectors = {
        phoneInput: null,
        codeInput: formField.find('input[type="text"]'),
        phoneConfirmInput: formField.find('input[type="hidden"]'),
        sendConfirmationBtn: formField.find('.phone-confirm__btn.send'),
        checkConfirmationBtn: formField.find('.phone-confirm__btn.check'),
        errorWrap: formField.find('.phone-confirm-error'),
        successMessage: formField.find('.phone-confirm-message'),
        resendText: formField.find('.phone-confirm-resend'),
    }

    this.isMainInformBlock = $('.lk-tab.active');
    this.phoneNumber = null;
    this.message = null;
    this.resendDelay = 5 * 60 * 1000;
    this.project = 'mymiofond.ru';
    this.apiKey = '82dc53f1bd307d163827a6b216690f34';
    this.isBtnActive = true;
    this.isFirstTime = true;

    this.setPhoneNumber = (number) => {
        this.phoneNumber = this.sanitizePhoneNumber(number);
    }

    this.setPhoneInput = () => {
        this.selectors.phoneInput = $('input[name="main_info_phone1"]') || null;
    }

    this.createRandomFourDigit = () => {
        return Math.floor(1000 + Math.random() * 9000);
    }

    this.sanitizePhoneNumber = (number) => {
        if (!number) {
            return false;
        }

        const sanitizeNumber = number.replace(/[^0-9#*]/g, '');

        if (sanitizeNumber.length === 11) {
            return sanitizeNumber;
        }

        return false;
    }

    this.blockBtn = (btn) => {
        if (!btn.hasClass('block')) {
            self.isBtnActive = false;
            btn.addClass('block');
        }
    }

    this.unblockBtn = (btn, delay = 0) => {
        setTimeout(() => {
            if (btn.hasClass('block')) {
                btn.removeClass('block');
            }
            self.isBtnActive = true;
        }, delay);
    }

    this.changeSendBtnText = () => {
        if (self.isFirstTime) {
            self.selectors.sendConfirmationBtn.html('Получить повторно');
        }

        self.isFirstTime = false;
    }

    this.showResendMessage = () => {
        if (!self.selectors.resendText.hasClass('active')) {
            self.selectors.resendText.addClass('active');
        }
    }

    this.hideResendMessage = () => {
        if (self.selectors.resendText.hasClass('active')) {
            self.selectors.resendText.addClass('active');
        }
    }

    this.activeConfirmationBtn = () => {
        if (!self.selectors.checkConfirmationBtn.hasClass('active')) {
            self.selectors.checkConfirmationBtn.addClass('active');
        }
    }

    this.passiveConfirmationBtn = () => {
        if (self.selectors.checkConfirmationBtn.hasClass('active')) {
            self.selectors.checkConfirmationBtn.removeClass('active');
        }
    }

    this.clearError = () => {
        this.selectors.errorWrap.html('');
    }

    this.setSuccess = () => {
        if (self.selectors.successMessage.hasClass('error')) {
            self.selectors.successMessage.removeClass('error');
        }

        self.selectors.successMessage.addClass('success');
    }


    this.checkCode = () => {
        return parseInt(self.selectors.codeInput.val()) === parseInt(self.message);
    }

    this.setConfirmMessage = (isSuccess) => {
        if (isSuccess) {
            self.setSuccess();
            self.passiveConfirmationBtn();
            if (self.selectors.sendConfirmationBtn.hasClass('active')) {
                self.selectors.sendConfirmationBtn.removeClass('active');
            }
            self.selectors.successMessage.html('Успешно!');

            return;
        }

        if (self.selectors.successMessage.hasClass('success')) {
            self.selectors.successMessage.removeClass('success');
        }

        self.selectors.successMessage.addClass('error');
        self.selectors.successMessage.html('Ошибка!');
    }

    this.confirmation = () => {
        const isCorrect = self.checkCode();
        self.setConfirmMessage(isCorrect);
        if (isCorrect) {
            self.hideResendMessage();
            self.selectors.phoneConfirmInput.val('true').trigger('change');
        }
    }

    this.sendConfirmation = async function (e) {
        e.preventDefault();
        const currentButton = $(this);

        if (!self.isBtnActive) return;

        self.blockBtn(currentButton);

        if (self.phoneNumber) {
            self.message = self.createRandomFourDigit();
            const url = `https://sms.notisend.ru/api/message/send/?project=${self.project}&recipients=${self.phoneNumber}&message=${self.message}&apikey=${self.apiKey}`;

            try {
                const res = await getData(url);

                if (await res) {
                    self.unblockBtn(currentButton, self.resendDelay);
                    self.changeSendBtnText();
                    self.showResendMessage();
                    self.activeConfirmationBtn();
                }
            } catch (e) {
                //TODO:set error
                return false;
            }
        } else {
            self.selectors.errorWrap.html('Неверный формат номера телефона.');
            self.unblockBtn(currentButton, 0);
        }
    }

    this.init = () => {
        if (blockIndex === 0) {
            this.setPhoneInput();
            this.selectors.phoneInput.on('keypress', function () {
                self.phoneNumber = self.sanitizePhoneNumber($(this).val());
                self.clearError();
                self.hideResendMessage();
                self.unblockBtn(self.selectors.sendConfirmationBtn, 0);
            })
        } else if (blockIndex === 1) {
            this.setPhoneNumber(userData.contact_phone.tel);
        }

        this.selectors.sendConfirmationBtn.on('click', this.sendConfirmation);
        this.selectors.checkConfirmationBtn.on('click', this.confirmation);
    }
}