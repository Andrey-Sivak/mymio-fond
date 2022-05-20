'use strict';

export const InputDateClass = function (element) {
    const self = this;
    this.input = element.find('input.date-mask');
    this.datepickerWrap = element.find('.datepicker');
    this.calendar = element.find('.calendar');

    this.calendarOptions = {
        changeMonth: true,
        changeYear: true,
        showButtonPanel: true,
        minDate: new Date(90, 1 - 1, 1),
        monthNamesShort: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн',
            'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'],
        dayNamesShort: ['вск', 'пнд', 'втр', 'срд', 'чтв', 'птн', 'сбт'],
        dayNamesMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
        weekHeader: 'Не',
        dateFormat: 'dd.mm.yy',
        firstDay: 1,
        onSelect: function () {
            const currentDate = $(this).val();
            self.input.val(currentDate);
            self.datepickerWrap.toggleClass('active');
        }
    }

    this.mask = ($) => {
        $(this.input).inputmask({
            mask: "99.99.9999",
            "clearIncomplete": true
        });
    }

    this.calendarInit = ($) => {
        $(this.datepickerWrap).datepicker(this.calendarOptions);

        this.calendar.on('click', this.displayCalendar);

        this.datepickerWrap.on('click', (e) => e.stopPropagation());
    }

    this.displayCalendar = function () {
        $(this).toggleClass('active');
        self.datepickerWrap.toggleClass('active');
    }

    this.hideCalendarByAwayClick = (e) => {
        const target = e.target;

        if ($(target).hasClass('calendar')) return;

        if (self.datepickerWrap.hasClass('active')) {
            self.datepickerWrap.removeClass('active');
        }
    }

    this.init = () => {
        this.mask(jQuery);
        this.calendarInit(jQuery);
        $(document).on('click', this.hideCalendarByAwayClick)
    }
}