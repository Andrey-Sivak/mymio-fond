'use strict';

export const CheckboxClass = function (element) {
    const self = this;
    this.checkboxes = element.find('input[type="checkbox"]');
    this.hiddenInput = element.find('input[type="hidden"]');
    this.customInput = element.find('input[type="text"]');

    this.checkHandler = function () {
        const is_check = $(this).prop("checked");
        const hiddenInputValue = self.hiddenInput.val();

        if (is_check) {

            if ($(this).val().includes('(указать')) return;

            if (!hiddenInputValue.includes($(this).val())) {

                self.hiddenInput.val(`${hiddenInputValue} | ${$(this).val()}`).trigger('change');
                return;
            }
            return;
        }

        if ($(this).val().includes('(указать')) {
            //TODO: fix me;
            // self.removeValueFromInput()
        }

        if (hiddenInputValue.includes($(this).val())) {
            const newValue = hiddenInputValue.replace(` | ${$(this).val()}`, '');
            self.hiddenInput.val(newValue).trigger('change');
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