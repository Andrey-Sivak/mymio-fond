'use strict';

export const CheckboxClass = function (element) {
    const self = this;
    this.checkboxes = element.find('input[type="checkbox"]');
    this.hiddenInput = element.find('input[type="hidden"]');
    this.customInput = element.find('input[type="text"]');

    this.checkHandler = function () {
        const is_check = $(this).prop("checked");
        const hiddenInputValue = self.hiddenInput.val();
        let valueArr = [];

        if (hiddenInputValue.length !== 0) {
            valueArr = hiddenInputValue.split(' | ');
        }

        if (is_check) {
            self.removeError();

            if ($(this).val().includes('(указать')) {
                return;
            }

            if (!valueArr.includes($(this).val())) {

                if (!valueArr.length) {
                    self.hiddenInput.val($(this).val());
                    return;
                }

                const string = valueArr.join(' | ');

                self.hiddenInput.val(`${string} | ${$(this).val()}`).trigger('change');
                return;
            }
            return;
        }

        if ($(this).val().includes('(указать')) {
            //TODO: fix me;
            //self.removeValueFromInput()
        }

        if (valueArr.includes($(this).val())) {
            const newValueArr = valueArr.filter(v => v !== $(this).val());
            const newValue = newValueArr.join(' | ');

            self.hiddenInput.val(newValue).trigger('change');
        }
    }

    this.removeError = () => {
        const err = element.find('span.error');
        const inputErr = element.find('input.error');

        if (err.length) {
            err.remove();
        }

        if (inputErr.length) {
            inputErr.removeClass('error');
        }
    }

    this.removeValueFromInput = function () {
        if ($(this).val() === '') return;

        const hiddenInputValue = self.hiddenInput.val();
        if (hiddenInputValue.includes($(this).val())) {
            const newValue = hiddenInputValue.replace(` | ${$(this).val()}`, '');
            self.hiddenInput.val(newValue).trigger('change');
        }
    }

    this.setValueFromInput = function () {
        if ($(this).val() === '') return;

        const hiddenInputValue = self.hiddenInput.val();
        self.hiddenInput.val(`${hiddenInputValue} | ${$(this).val()}`).trigger('change');
    }

    this.init = () => {
        this.checkboxes.each(function () {
            $(this).on('change', self.checkHandler);
        });
        this.customInput.on('focus', this.removeValueFromInput);
        this.customInput.on('blur', this.setValueFromInput);
    }
}