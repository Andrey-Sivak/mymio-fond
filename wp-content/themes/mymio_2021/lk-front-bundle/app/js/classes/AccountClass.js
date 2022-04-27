'use strict';

import {getUserDataFromElma} from '../api/elmaApi';
import {loader} from "../mixins/loader";
import {TabClass} from "./TabClass";
import {BlockClass} from "./BlockClass";
import {calculateAge} from "../utils/dateUtils";

export const AccountClass = function () {
    const self = this;
    this.userData = null;
    this.filledMedicalFields = null;
    this.bloks = [];
    this.elmaId = $('#elma-id').html();
    this.tabs = new TabClass($('.lk-container'), 'lk-form', 'lk-tab');
    this.blocksList = $('.lk-form');

    this.getUserData = async (elmaId) => {
        try {
            const url = `https://aeqlmvgvlxcee.elma365.ru/api/extensions/3d15932c-766e-4e91-b8ff-fed442649de2/script/get/appgs?id=${elmaId}`;
            const requestOptions = {
                method: 'GET',
            };

            const rawData = await getUserDataFromElma(url, requestOptions);

            if (await rawData) {
                const data = await rawData.json();
                this.userData = await data.user_data;
                this.filledMedicalFields = await data.medical_fields;

                this.setUserData(await Object.entries(data.user_data));
                return true;
            }

            return false;
        } catch (e) {
            return false;
        }
    }

    this.setAge = () => {
        self.userData.age = calculateAge(self.userData.child_birthdate);
    }

    this.contentBlocks = async () => {
        this.blocksList.each(function (idx) {
            const block = new BlockClass($(this), idx, self.elmaId, self.userData, self.filledMedicalFields);
            block.init();
            self.bloks.push(block);
        })
    }

    this.setUserData = (data) => {
        for (const [key, value] of data) {
            const el = $(`[data-info=${key}]`);
            el.html(value);
        }
    }

    this.init = async () => {
        this.getUserData(this.elmaId)
            .then(() => {
                this.setAge();
                this.tabs.init();
                this.contentBlocks();
                loader('body', 'hide');
            })
            .catch((e) => {
                console.log(e);
            });
    }
}