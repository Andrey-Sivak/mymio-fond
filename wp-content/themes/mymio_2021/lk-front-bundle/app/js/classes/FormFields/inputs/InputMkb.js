'use strict';

export const InputMkb = function (formField) {
    const self = this;
    this.mkbList = null;
    this.input = formField.find('input.mkb');
    this.tips = null;

    this.inputHandler = function () {
        const value = $(this).val().toLowerCase();

        if (value.length < 2) {
            return;
        }

        if (!self.tips.hasClass('active')) {
            self.tips.addClass('active');
        }

        const arr = $.grep(self.mkbList, function (string) {
            return string.title.toLowerCase().includes(value);
        })

        self.addTips(arr);
    }

    this.hideCityTipsByClickAway = (e) => {
        const target = e.target;

        if (!self.tips.hasClass('active') || $(target).hasClass('tip')) {
            return;
        }

        self.tips.removeClass('active');
    }

    this.selectTip = function (e) {
        const value = $(e.target).html();
        self.input.val(value).trigger('change');
        self.hideTips();
    }

    this.hideTips = () => {
        if (self.tips.hasClass('active')) {
            self.tips.removeClass('active');
        }
    }

    this.addTips = (tipsArray) => {
        self.tips.html('');

        tipsArray.forEach(c => {
            self.tips.append(`<span class="tip">${c.title}</span>`);
        })
    }

    this.addTipsWrap = () => {
        formField.append('<div class="tips"></div>');
        self.tips = formField.find('.tips');
        self.tips.on('click', self.selectTip);
    }

    this.getMkbJSON = async () => {
        try {
            const response = await fetch(`${homeUrl}/mkb.json`);
            const mkbArray = await response.json();
            return await mkbArray;
        } catch (e) {
            console.log(e);
            return e;
        }
    }

    this.init = async () => {
        this.mkbList = await this.getMkbJSON();
        if (await this.mkbList) {
            this.addTipsWrap();
            this.input.on('keypress', self.inputHandler);
            $(window).on('click', self.hideCityTipsByClickAway);
        }
    }
}