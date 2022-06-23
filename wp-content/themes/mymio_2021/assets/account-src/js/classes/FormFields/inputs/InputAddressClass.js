'use strict';

export const InputAddressClass = function (element) {
    const self = this;
    this.input = element.find('textarea');
    this.inputId = this.input.attr('id');

    this.geocode = (input) => {
        const request = $(input).val();

        ymaps.geocode(request).then(function (res) {
            const obj = res.geoObjects.get(0);
            let error, hint;


            setTimeout(() => {
                input.trigger('change');
            }, 500);
        }, function (e) {
            console.log(e)
        });
    }

    this.showError = (input, message) => {
        const inputParent = input.parent();
        const notice = inputParent.find('.error');
        $(notice).text(message);
        $(input).addClass('error');
        $(notice).css('display', 'block');
    }

    this.textareaHandleInput = () => {
        const input = self.input.get(0);

        if (input.value === '') {
            input.style.height = '50px';
            return;
        }

        if (input.scrollHeight > input.clientHeight) {
            input.style.height = input.scrollHeight + 'px';
        }
    }

    this.init = () => {
        ymaps.ready({
            successCallback: () => {
                const suggestView = new ymaps.SuggestView(self.inputId);
            }
        });

        this.input.on('blur', async function () {
            const val = $(this).val();

            element.trigger('changeValue', [val]);

            self.textareaHandleInput();
        });

        this.input.on('change', async function () {
            const val = $(this).val();

            element.trigger('changeValue', [val]);

            self.textareaHandleInput();
        });

        this.input.on('input', this.textareaHandleInput);
    }
}