'use strict';

import {localStorageGet, localStorageSet} from "../api/localStorage";

export const TabClass = function (wrapperSelector, contentClass, tabClass) {
    const self = this;
    self.activeClass = 'active'
    self.wrapper = $(`.${wrapperSelector}`);
    self.contentList = $(`.${wrapperSelector} .${contentClass}`);
    self.tabList = $(`.${wrapperSelector} .${tabClass}`)
    this.currentTab = null;

    self.Tab = new Proxy(self, {
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

    self.switchTabs = function (tabNumber) {
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

    self.tabHandler = function (e) {
        e.preventDefault();
        const index = self.tabList.index(this);
        self.Tab.currentTab = parseInt(index);
        localStorageSet(tabClass, index);
    }

    self.getLastActiveTab = (tabClass) => {
        return parseInt(localStorageGet(tabClass) || 0);
    }

    this.init = () => {

        self.tabList.each(function () {
            $(this).on('click', self.tabHandler);
        })

        if (!$(`.${tabClass}.${self.activeClass}`).length) {
            self.Tab.currentTab = self.getLastActiveTab(tabClass);
        }
    }
}