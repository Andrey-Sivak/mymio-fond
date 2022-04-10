'use strict';

import {TabClass} from "./TabClass";
import {FormClass} from "./FormClass";

export const BlockClass = function (blockElement) {
    const  self = this;
    this.element = blockElement;
    this.tabs = null;

    this.isTabs = () => {
        return Boolean($(this.element).find('.lk-form__tabs').length);
    }

    this.setTabs = () => {
        const isTabsInBlock = this.isTabs();

        if (isTabsInBlock) {
            this.tabs = new TabClass(self.element, 'lk-form__tab_content', 'lk-form__tab');
            this.tabs.init();
        }
    }

    this.setForms = () => {
        if (this.forms.length) {
            this.forms.each(function (i) {
                const form = new FormClass($(this), i);
                form.init();
            })
        }
    }

    this.init = () => {
        this.setTabs();
        this.setForms();
    }
}