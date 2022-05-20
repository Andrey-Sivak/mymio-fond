'use strict';

import {TabClass} from "./TabClass";
import {FormClass} from "./FormClass";
import {DocumentsClass} from "./DocumentsClass";

export const BlockClass = function (blockElement, blockIndex, elmaId, userData, filledMedicalFields) {
    const self = this;
    this.tabs = null;
    this.block = blockElement;
    this.forms = [];
    this.index = parseInt(blockIndex);
    this.formsList = $(self.block).find('.contact-form__form');
    this.questionnaireProgress = $(self.block).find('.lk-progress-inner');
    this.documentsBlock = null;

    this.setTabs = async () => {
        const tabs = $(self.block).find('.lk-form__tabs');

        if (tabs && tabs.length) {
            if (this.index === 1) {
                this.tabs = new TabClass(self.block, 'lk-form__tab_content', 'lk-form__tab', userData.email);
            } else {
                this.tabs = new TabClass(self.block, 'lk-form__tab_content', 'lk-form__tab');
            }
            await this.tabs.init();
        }
    }

    this.formHandler = function (e, value) {
        if (self.index === 1) {
            self.tabs.Tab.currentTab = value + 1;
            self.tabs.lockNewTab(value);
            self.questionnaireProgressCount();
            self.forms[value + 1].checkIsButtonEnable();
        }
    }

    this.setContent = () => {
        if (this.formsList.length) {
            this.formsList.each(function (i) {
                const form = new FormClass($(this), i, elmaId, userData, self, filledMedicalFields);
                form.init(jQuery);
                $(this).on('submitSuccess', self.formHandler);
                self.forms.push(form);
            })
        }

        if (this.index === 2 || this.index === 4) {
            this.documentsBlock = new DocumentsClass(this.index, this, elmaId);
            this.documentsBlock.init();
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
        this.setContent();
        if (await this.tabs && this.questionnaireProgress.length) {
            this.questionnaireProgressCount();
        }
    }
}