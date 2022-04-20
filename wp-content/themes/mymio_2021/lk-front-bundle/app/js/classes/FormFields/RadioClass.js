'use strict';

export const RadioClass = function (element) {
    const self = this;
    this.radioButtons = element.find('input[type="radio"]');

    this.setEventListeners = function () {
        $(this).on('change', function () {
            element.trigger('changeValue', [$(this).val()]);
        });
    }

    this.init = () => {
        this.radioButtons.each(self.setEventListeners);
    }
}