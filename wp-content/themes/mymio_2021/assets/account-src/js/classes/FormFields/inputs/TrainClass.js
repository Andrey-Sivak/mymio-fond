'use strict';

export const TrainClass = function(element) {
    this.contextElement = $(element);
    this.input = this.contextElement.find('.train__hide-input');
    this.trainItems = this.contextElement.find('.train__item_inner');
    this.activeItems = this.contextElement.find('.train__item.active');
    this.start = null;
    this.end = null;

    this.selectRange = (e) => {
        const target = e.target;

        if (!target.classList.contains('train__item_inner')) return;

        const value = parseInt(target.innerHTML);

        if (!this.start) {
            this.start = value;
            target.parentElement.classList.add('active');
            this.setInput(this.start, this.end);
            return;
        }

        if (this.start === value || this.end === value) {
            this.activeRange(0, 0);
            return;
        }

        if (this.start > value) {
            this.end = this.start;
            this.start = value;
            this.activeRange(this.start, this.end);
        } else if (value > this.start && value < this.end) {
            this.start = value;
            this.activeRange(this.start, this.end);
        } else {
            this.end = value;
            this.activeRange(this.start, this.end);
        }
    }

    this.activeRange = (start, end) => {
        this.setInput(start, end);

        this.activeItems = this.contextElement.find('.train__item.active');

        if (this.activeItems.length) {
            this.activeItems.each(function () {
                $(this).removeClass('active');
            });
        }

        if (start === end) {
            this.start = null;
            this.end = null;
            return;
        }

        this.trainItems.each(function () {
            const number = parseInt($(this).html());
            if (number >= start && number <= end) $(this).parent().addClass('active');
        })
    }

    this.setInput = (start = 0, end = 0) => {
        const startStr = start ? start + '' : 0;
        const endStr = end ? end + '' : 0;

        if (!startStr) {
            this.input.val('').trigger('change');
            return;
        }

        if (!endStr) {
            this.input.val(startStr).trigger('change');
            return;
        }

        this.input.val(`${startStr}-${endStr}`).trigger('change');
    }

    this.init = () => {
        this.contextElement.on('click', this.selectRange);
    }
}