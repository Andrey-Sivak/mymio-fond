(function ($) {
    const dateFields = $('.contact-form__form-field.date');

    if (!dateFields.length) return;

    dateFields.each(function () {
        const datepickerWrap = $(this).find('.datepicker');
        const input = $(this).find('.date-mask');
        const calendar = $(this).find('.calendar');

        datepickerWrap.datepicker({
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
            firstDay: 1,
            onSelect: function () {
                const currentDate = $(this).val();
                input.val(currentDate);
                datepickerWrap.toggleClass('active');
            }
        });

        calendar.on('click', function () {
            $(this).toggleClass('active');
            datepickerWrap.toggleClass('active');
        });

        $(datepickerWrap).on('click', function (e) {
            e.stopPropagation();
        })

        $(document).on('click', function (e) {
            const target = e.target;

            if ($(target).hasClass('calendar')) return;

            const activeCalendar = $('.datepicker.active');

            if (activeCalendar.length) {
                activeCalendar.each(function () {
                    $(this).removeClass('active');
                })
            }
        })
    })
})(jQuery);