'use strict';

import {getUserDataFromElma} from '../api/elmaApi';
import {loader} from "../mixins/loader";
import {TabClass} from "./TabClass";
import {BlockClass} from "./BlockClass";

export const AccountClass = function () {
    this.userData = null;
    this.elmaId = $('#elma-id').html();
    this.tabs = new TabClass($('.lk-container'), 'lk-form', 'lk-tab');
    this.blocks = $('.lk-form');

    this.getUserData = async (elmaId) => {
        try {
            const url = `https://aeqlmvgvlxcee.elma365.ru/api/extensions/3d15932c-766e-4e91-b8ff-fed442649de2/script/get/appgs?id=${elmaId}`;

            const rawData = await getUserDataFromElma(url, 'GET');

            if (await rawData) {
                const data = await rawData.json();
                this.userData = await data;

                this.setUserData(await Object.entries(data));
                return true;
            }

            return false;
        } catch (e) {
            return false;
        }
    }

    this.contentBlocks = () => {
        this.blocks.each(function () {
            const block = new BlockClass($(this));
            block.init();
        })
    }

    this.setUserData = (data) => {
        for (const [key, value] of data) {
            const el = $(`[data-info=${key}]`);
            el.html(value);
        }
    }

    this.init = () => {
        this.getUserData(this.elmaId)
            .then(() => {
                this.tabs.init();
                this.contentBlocks();
                loader('body', 'hide');
            })
            .catch((e) => {
                console.log(e);
            });
    }
}