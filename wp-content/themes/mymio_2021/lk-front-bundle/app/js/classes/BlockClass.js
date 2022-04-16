'use strict';

import {TabClass} from "./TabClass";
import {FormClass} from "./FormClass";

export const BlockClass = function (blockElement, elmaId) {
    const  self = this;
    this.tabs = $(blockElement).find('.lk-form__tabs');
    this.forms = $(blockElement).find('.contact-form__form');

    this.setTabs = () => {
        if (this.tabs.length) {
            //TODO: is this correct ??
            this.tabs = new TabClass(blockElement, 'lk-form__tab_content', 'lk-form__tab');
            this.tabs.init();
        }
    }

    this.setForms = () => {
        if (this.forms.length) {
            this.forms.each(function (i) {
                const form = new FormClass($(this), i, elmaId);
                form.init(jQuery);
            })
        }
    }

    this.init = () => {
        this.setTabs();
        this.setForms();
    }
}