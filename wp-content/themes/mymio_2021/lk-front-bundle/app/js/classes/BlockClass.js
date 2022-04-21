'use strict';

import {TabClass} from "./TabClass";
import {FormClass} from "./FormClass";

export const BlockClass = function (blockElement, blockIndex, elmaId, userData) {
    const self = this;
    this.tabs = null;
    this.forms = $(blockElement).find('.contact-form__form');
    this.questionnaireProgress = $(blockElement).find('.lk-progress-inner');

    this.setTabs = async () => {
        const tabs = $(blockElement).find('.lk-form__tabs');

        if (tabs && tabs.length) {
            if (blockIndex === 1) {
                this.tabs = new TabClass(blockElement, 'lk-form__tab_content', 'lk-form__tab', userData.email);
            } else {
                this.tabs = new TabClass(blockElement, 'lk-form__tab_content', 'lk-form__tab');
            }
            await this.tabs.init();
        }
    }

    this.lockTab = function (e, value) {
        self.tabs.Tab.currentTab = value + 1;
        self.tabs.lockNewTab(value);
        self.questionnaireProgressCount();
    }

    this.setForms = () => {
        if (this.forms.length) {
            this.forms.each(function (i) {
                const form = new FormClass($(this), i, elmaId, userData, blockIndex);
                form.init(jQuery);
                $(this).on('submitSuccess', self.lockTab);
            })
        }
    }

    this.questionnaireProgressCount = () => {
        const tabsCount = self.tabs.tabList.length;
        const lockedTabsCount = self.tabs.lockedTabs.length;
        const string = `${lockedTabsCount}/${tabsCount}`;
        self.questionnaireProgress.html(string);
    }

    this.init = async () => {
        await this.setTabs();
        this.setForms();
        if (await this.tabs && this.questionnaireProgress.length) {
            this.questionnaireProgressCount();
        }
    }
}