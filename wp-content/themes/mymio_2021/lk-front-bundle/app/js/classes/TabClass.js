'use strict';

export const TabClass = function (wrapperSelector, contentSelector, tabSelector) {
    this.activeClass = 'active';
    this.wrapper = $(wrapperSelector);
    this.content = $(`${wrapperSelector} ${contentSelector}`);
    this.tab = $(`${wrapperSelector} ${tabSelector}`);

    this.switchTabs = function () {
        if (this.tab.hasClass(this.activeClass)) return;

        $(tabSelector).each(this.unsetActive);
        this.tab.addClass(this.activeClass);
        $(contentSelector).each(this.unsetActive);
        this.content.addClass(this.activeClass);
    }

    this.unsetActive = function () {
        if ($(this).hasClass(this.activeClass)) {
            $(this).removeClass(this.activeClass);
        }
    }

    this.init = () => {
        this.tab.on('click', this.switchTabs);
    }
}