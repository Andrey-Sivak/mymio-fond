import {TabClass} from "./TabClass";

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

    this.init = () => {
        this.setTabs();
    }
}