'use strict';

export const RadioClass = function (element) {
    const self = this;
    this.radioButtons = element.find('input[type="radio"]');

    this.setEventListeners = function () {
        $(this).on('change', function () {
            const value = $(this).val() === 'Да';
            element.trigger('changeValue', [value]);
        });
    }

    this.init = () => {
        this.radioButtons.each(self.setEventListeners);
    }
}