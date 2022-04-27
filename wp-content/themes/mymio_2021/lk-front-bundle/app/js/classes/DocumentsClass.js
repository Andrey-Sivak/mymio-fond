'use strict';

import {getUserDataFromElma} from "../api/elmaApi";

export const DocumentsClass = function (parentBlock, elmaId) {
    const self = this;

    this.getDocs = () => {
        const url = `https://aeqlmvgvlxcee.elma365.ru/api/extensions/3d15932c-766e-4e91-b8ff-fed442649de2/script/ward/documents?id=${elmaId}`;

        getUserDataFromElma(url, {
            method: 'GET',
            mode: 'no-cors',
        })
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(e => console.log(e));
    }



    this.init = () => {
        this.getDocs();
        console.log(parentBlock);
    }
}