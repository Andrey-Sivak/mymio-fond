'use strict';

import {getUserDataFromElma} from '../api/getDataFromElma';
import {loader} from "../mixins/loader";
import {TabClass} from "./TabClass";

export const AccountClass = function () {
    this.userData = null;
    this.elmaId = $('#elma-id').html();
    this.tabs = $('.lk-tab');

    this.getUserData = async (elmaId) => {
        try {
            const url = `https://aeqlmvgvlxcee.elma365.ru/api/extensions/3d15932c-766e-4e91-b8ff-fed442649de2/script/get/appgs?id=${elmaId}`;

            const rawData = await getUserDataFromElma(url, 'GET');

            if (await rawData) {
                const data = await rawData.json();
                this.userData = await Object.entries(data);

                this.setUserData(await this.userData);
                return true;
            }

            return false;
        } catch (e) {
            return false;
        }
    }

    this.setUserData = (data) => {
        for (const [key, value] of data) {
            const el = $(`[data-info=${key}]`);
            el.html(value);
        }
    }

    this.setTabs = () => {
        const tabs = new TabClass('lk-container', 'lk-form', 'lk-tab');
        tabs.init();
    }

    this.init = () => {
        this.getUserData(this.elmaId)
            .then(() => {
                this.setTabs();
                loader('body', 'hide');
            })
            .catch(() => false);
    }
}