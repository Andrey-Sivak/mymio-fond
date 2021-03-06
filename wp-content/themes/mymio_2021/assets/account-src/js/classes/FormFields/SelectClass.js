'use strict';

export const SelectClass = function (element) {
    const self = this;
    this.selectField = element.find('select');
    this.inputWrap = element.find('.select-input');
    this.input = this.inputWrap.find('input');

    this.select2init = ($) => {
        $(this.selectField).select2({
            minimumResultsForSearch: Infinity,
            dropdownParent: $(element),
        }).on('select2:select', function () {
            element.trigger('changeValue', [$(this).val()]);
            self.displayInput(self.selectField);
            self.removeError();
        });
    }

    this.removeError = () => {
        const err = element.find('span.error');

        if (err.length) {
            err.remove();
        }

        if (self.selectField.hasClass('error')) {
            self.selectField.removeClass('error');
        }
    }

    this.displayInput = function (elem) {
        if (!self.inputWrap.length) return;

        const content = elem.val();

        if (content.includes('(указать')) {
            self.inputWrap.addClass('active');
            self.input.trigger('focus');
        } else if (!content.includes('(указать') && self.inputWrap.hasClass('active')) {
            self.inputWrap.removeClass('active');
        }
    }

    this.init = () => {
        this.select2init(jQuery);

        if (this.inputWrap.length) {
            self.input.on('input', function () {
                element.trigger('changeValue', [$(this).val()]);
            });
        }
    }
}