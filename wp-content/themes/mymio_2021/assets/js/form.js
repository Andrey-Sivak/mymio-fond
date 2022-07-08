function maskInit() {
    jQuery(".phone-mask").inputmask({
        mask: "+7(999)999-99-99",
        "clearIncomplete": true
    });

    jQuery(".date-mask").inputmask({
        mask: "99.99.9999",
        "clearIncomplete": true
    });
}

maskInit();

// select

if (jQuery('.select').length > 1) {
    jQuery('select').each(function () {
        let $this = jQuery(this).not('.select-search');
        let parent = jQuery(this).not('.select-search').parents('.select');
        $this.select2({
            minimumResultsForSearch: Infinity,
            dropdownParent: parent
        });
    });
    jQuery('.select-search').each(function () {
        let $this = jQuery(this);
        let parent = jQuery(this).parents('.select');
        $this.select2({
            dropdownParent: parent
        });
    });
} else {
    jQuery('select').select2({
        minimumResultsForSearch: Infinity,
        dropdownParent: jQuery('.select')
    });
}

$('.select').parent().on('click', function () {
    const ctx = $(this);
    const selectInput = ctx.find('.select-input');
    const inner = ctx.find('.select2-selection__rendered');

    inner.on('DOMSubtreeModified', function () {
        const content = $(this).html();

        if (content.includes('Другое')) {
            selectInput.addClass('active');
        } else if (!content.includes('Другое') && selectInput.hasClass('active')) {
            selectInput.removeClass('active');
        }
    });
});

// calendar

jQuery("#datepicker").datepicker({
    changeMonth: true,
    changeYear: true,
    showButtonPanel: true,
    minDate: new Date(90, 1 - 1, 1),
    monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
        'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
    monthNamesShort: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн',
        'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'],
    dayNames: ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'],
    dayNamesShort: ['вск', 'пнд', 'втр', 'срд', 'чтв', 'птн', 'сбт'],
    dayNamesMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
    weekHeader: 'Не',
    dateFormat: 'dd.mm.yy',
    yearRange: '1971:2022',
    firstDay: 1,
    onSelect: function () {
        const currentDate = $(this).val();
        $('.date-mask').val(currentDate);
        jQuery("#datepicker").toggleClass('active');
    }
});

jQuery('.calendar').on('click', function () {
    $(this).toggleClass('active');
    $('#datepicker').toggleClass('active');
});

// validate

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
            const userEmailToCheck = ctxForm.find('input[name="contact_email"]').val();
            const userNameToCheck = ctxForm.find('input[name="contact_parent_fio"]').val();
            checkUserExist(userEmailToCheck, userNameToCheck)
                .then(res => res.json())
                .then(data => {
                    const pass = data.user_pass;
                    if (pass) {
                        const contextObject = getNeededInputs(pass);
                        const url = 'https://mymiofond.ru/Scripts/handler.php';
                        const formData = new FormData();
                        formData.set('context', JSON.stringify(contextObject));

                        postData(url, formData)
                            .then(res => res.json())
                            .then(data => formResultHandler(data, ctxForm))
                            .catch(function (error) {
                                $('.loader.active').removeClass('active');
                                $('.result').addClass('err').html('Ошибка сервера. Попробуте повторить попытку позже');
                                console.log('Request failed', error);
                            });

                        return;
                    }

                    $('.loader.active').removeClass('active');
                    $('.result').addClass('err').html('Пользователь с таким email уже существует');
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

function formResultHandler(response, currentForm) {
    const loader = currentForm.find('.loader');
    // const disabler = currentForm.find('.disabler');
    const result = currentForm.find('.result');

    const formatResponse = JSON.parse(response);

    if (formatResponse.success) {
        const elmaId = formatResponse.item.__id;
        const email = formatResponse.item.email[0].email;

        createUser(email, elmaId);

        currentForm.trigger('reset');
        result.html('Заявка успешно отправлена! Координатор свяжется с вами в течение 3-4 рабочих дней по указанному телефону.');
        if (result.hasClass('success')) {
            result.removeClass('success');
        }
        result.addClass('success');
        loader.removeClass('active');
        // disabler.addClass('active');
        return true;
    }

    result.html('Ошибка отправки. Проверьте данные или попробуйте позже.');
    result.addClass('err');
    loader.removeClass('active');
}

function getNeededInputs(pass) {
    const inputsList = $('[data-elma]');
    const object = Object.create({});
    Object.defineProperty(object, 'context', {
        value: {},
        enumerable: true
    });

    inputsList.each(function () {
        if ($(this).is('select')) {

            const selectValue = $(this).val();

            if (selectValue.includes('Другое')) {
                const selectParent = $(this).parent().parent();
                const selectInput = $(selectParent).find('.select-input .select-input__input');
                const elmaName = $(this).data('elma');
                selectInput.data('elma', elmaName);

                setObjectProperty(object.context, selectInput);
                return;
            }
        }

        setObjectProperty(object.context, $(this));
    });

    Object.defineProperty(object.context, 'password', {
        value: pass,
        writable: true,
        enumerable: true,
    })

    return object;
}

function setObjectProperty(object, elem) {
    const elmaName = elem.data('elma');

    if (elmaName === '') return;

    const value = elem.val();

    Object.defineProperty(object, elmaName, {
        value: value,
        enumerable: true
    });
}

function getInputNames(form) {
    const requiredInputs = $(form).find('[data-req="true"]');
    const items = Object.create({});
    requiredInputs.each(function () {
        const name = $(this).attr('name');

        const validation = $(this).data('validation');

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

        Object.defineProperty(items, name, attributes);
    });

    return items;
}

async function postData(url = '', data = {}) {
    return await fetch(url, {
        method: 'POST',
        mode: 'no-cors',
        body: data,
    });
}

function createUser(email, elamId) {
    const userData = Object.create({});

    Object.defineProperty(userData, 'user_data', {
        value: {},
        enumerable: true,
        writable: true,
    });

    Object.defineProperties(userData.user_data, {
        'user_email': {
            value: email,
            enumerable: true,
            writable: true,
        },
        'elma_id': {
            value: elamId,
            enumerable: true,
            writable: true,
        }
    });

    const url = 'https://mymiofond.ru/custom_auth/create-user-elma-id.php';
    const formData = new FormData();
    formData.set('user_data', JSON.stringify(userData));

    postData(url, formData)
        .then(res => console.log(2, res));
    // .then(rawData => console.log(rawData));
}

async function checkUserExist(email, name) {
    const userData = Object.create({});

    Object.defineProperty(userData, 'user_data', {
        value: {},
        enumerable: true,
        writable: true,
    });

    Object.defineProperties(userData.user_data, {
        'user_email': {
            value: email,
            enumerable: true,
            writable: true,
        },
        'user_name': {
            value: name,
            enumerable: true,
            writable: true,
        }
    });

    const url = 'https://mymiofond.ru/custom_auth/create-user.php';
    const formData = new FormData();
    formData.set('user_data', JSON.stringify(userData));

    return await postData(url, formData);
}

// city validation

async function selectCity() {
    const response = await fetch(`${homeUrl}/russia.json`);
    const citiesArray = await response.json();

    const cityInput = $('input.city');

    cityInput.on('keypress', function () {
        const value = $(this).val().toLowerCase();
        const wrap = $(this).parent();
        const tips = wrap.find('.tips');

        if (value.length < 2) return;

        if (!tips.hasClass('active')) {
            tips.addClass('active');
        }

        const arr = citiesArray.filter(c => {
            return c.city.toLowerCase().includes(value)
        });
        addCities(arr);
    });

    window.addEventListener('click', function (e) {
        const target = e.target;
        const tipsActive = document.querySelector('.tips.active') || null;

        if (!tipsActive) return;

        if (target.classList.contains('tip') || target.classList.contains('city')) return;

        tipsActive.classList.remove('active');
    })
}

selectCity();

function addCities(citiesArr) {
    const tips = document.querySelector('.tips');
    tips.innerHTML = '';

    citiesArr.forEach(c => {
        const span = document.createElement('span');
        span.classList.add('tip');
        span.innerHTML = c.city;
        span.addEventListener('click', citySelect);
        tips.appendChild(span);
    })
}

function hideCityTips() {
    const activeTips = $('.tips.active');
    if (activeTips) {
        activeTips.removeClass('active');
    }
}

function citySelect(e) {
    document.querySelector('input.city').value = this.innerHTML;
    hideCityTips();
}


