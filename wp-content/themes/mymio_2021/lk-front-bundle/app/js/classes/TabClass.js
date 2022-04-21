'use strict';

import {localStorageGet, localStorageSet} from "../api/localStorage";

export const TabClass = function (wrapper, contentClass, tabClass, email = '') {
    const self = this;
    this.activeClass = 'active'
    this.lockedClass = 'locked';
    this.contentList = wrapper.find(`.${contentClass}`);
    this.tabList = wrapper.find(`.${tabClass}`)
    this.currentTab = null;
    this.lockedTabs = [];

    this.Tab = new Proxy(self, {
        set(target, prop, value) {
            if (prop === 'currentTab' && target[prop] !== value) {
                target[prop] = value;
                target.switchTabs(value);
            } else {
                target[prop] = value;
            }
            return true;
        }
    })

    this.switchTabs = function (tabNumber) {
        self.tabList.each(function (i) {
            if (i === tabNumber) {
                $(this).addClass(self.activeClass);
                $(self.contentList[i]).addClass(self.activeClass);
            } else {

                if ($(this).hasClass(self.activeClass)) {
                    $(this).removeClass(self.activeClass);
                }

                if ($(self.contentList[i]).hasClass(self.activeClass)) {
                    $(self.contentList[i]).removeClass(self.activeClass);
                }
            }
        })
    }

    this.tabHandler = function (e) {
        e.preventDefault();
        const index = self.tabList.index(this);
        self.Tab.currentTab = parseInt(index);
        localStorageSet(tabClass, index);
    }

    this.getLastActiveTab = (tabClass) => {
        return parseInt(localStorageGet(tabClass) || 0);
    }

    this.saveLockedTabs = () => {
        let tabsString = '';

        this.tabList.each(function (i) {
            if ($(this).hasClass('locked')) {
                tabsString += `${i},`;
            }
        });

        return tabsString;
    }

    this.lockNewTab = (idx) => {
        const index = parseInt(idx);
        if (isNaN(index)) {
            return;
        }

        self.lockTab(index);
        const tabsToSave = self.saveLockedTabs();

        const formData = new FormData();
        formData.set('tabs_string', tabsToSave);
        formData.set('user_email', email);

        fetch(`${homeUrl}/api/medical-questionnare-tabs.php`, {
            method: 'POST',
            body: formData,
        })
    }

    this.lockTab = (idx) => {
        const index = parseInt(idx);
        if (isNaN(index)) {
            return;
        }

        $(self.tabList[index]).addClass(self.lockedClass);
        $(self.contentList[index]).addClass(self.lockedClass);

        self.lockedTabs.push(self.tabList[index]);
    }

    this.getLockedTabs = async () => {
        try {
            const res = await fetch(`${homeUrl}/api/medical-questionnare-tabs.php?user_email=${email}`, {
                method: 'GET',
            });
            const data = await res.text();
            return await data.split(',');
        } catch (e) {
            return false;
        }
    }

    this.init = async () => {
        if (email !== '') {
            try {
                const lockedTabsArr = await this.getLockedTabs();
                await lockedTabsArr.forEach(self.lockTab);
            } catch (e) {
                return false;
            }
        }

        self.tabList.each(function () {
            $(this).on('click', self.tabHandler);
        })

        if (!$(`.${tabClass}.${self.activeClass}`).length) {
            this.Tab.currentTab = self.getLastActiveTab(tabClass);
        }
    }
}