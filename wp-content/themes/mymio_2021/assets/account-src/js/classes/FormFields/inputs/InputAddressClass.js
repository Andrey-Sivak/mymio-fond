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

            if (obj) {
                switch (obj.properties.get('metaDataProperty.GeocoderMetaData.precision')) {
                    case 'exact':
                        break;
                    case 'number':
                    case 'near':
                    case 'range':
                        error = 'Неточный адрес, требуется уточнение';
                        hint = 'Уточните номер дома';
                        break;
                    case 'street':
                        error = 'Неполный адрес, требуется уточнение';
                        hint = 'Уточните номер дома';
                        break;
                    case 'other':
                    default:
                        error = 'Неточный адрес, требуется уточнение';
                        hint = 'Уточните адрес';
                }
            } else {
                error = 'Адрес не найден';
                hint = 'Уточните адрес';
            }

            if (error) {
                self.showError(input, error);
            }

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

    this.getPostalCode = async (address) => {
        try {
            const res = await fetch(`https://mymiofond.ru/api/get-postal-code.php/?address=${address}`, {
                method: 'GET',
            });
            return await res.json();
        } catch (e) {
            return e;
        }
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
            self.geocode(self.input);
            const val = $(this).val();
            const postalCode = await self.getPostalCode(val);

            if (await postalCode && await postalCode.length) {

                const code = postalCode[0].postalCode;

                if (val.includes(code)) {
                    return;
                }

                const fullAddress = `${val}, ${code}`;

                element.trigger('changeValue', [fullAddress]);
            }
            self.textareaHandleInput();
        });

        this.input.on('change', async function () {
            const val = $(this).val();
            const postalCode = await self.getPostalCode(val);

            if (await postalCode && await postalCode.length) {

                const code = postalCode[0].postalCode;

                if (val.includes(code)) {
                    return;
                }

                const fullAddress = `${val}, ${code}`;

                element.trigger('changeValue', [fullAddress]);
            }
            self.textareaHandleInput();
        });

        this.input.on('input', this.textareaHandleInput);
    }
}