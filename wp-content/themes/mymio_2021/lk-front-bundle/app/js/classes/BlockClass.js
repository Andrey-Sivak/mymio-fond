'use strict';

import {TabClass} from "./TabClass";
import {FormClass} from "./FormClass";

export const BlockClass = function (blockElement, elmaId, email = '') {
    const  self = this;
    this.tabs = null;
    this.forms = $(blockElement).find('.contact-form__form');

    this.setTabs = async () => {
        const tabs = $(blockElement).find('.lk-form__tabs');

        if (tabs && tabs.length) {
            this.tabs = new TabClass(blockElement, 'lk-form__tab_content', 'lk-form__tab', email);
            await this.tabs.init();
        }
    }

    this.lockTab = function (e, value) {
        self.tabs.Tab.currentTab = value + 1;
        self.tabs.lockNewTab(value);
    }

    this.setForms = () => {
        if (this.forms.length) {
            this.forms.each(function (i) {
                const form = new FormClass($(this), i, elmaId);
                form.init(jQuery);
                $(this).on( 'submitSuccess', self.lockTab);
            })
        }
    }

    this.init = async () => {
        await this.setTabs();
        this.setForms();
    }
}