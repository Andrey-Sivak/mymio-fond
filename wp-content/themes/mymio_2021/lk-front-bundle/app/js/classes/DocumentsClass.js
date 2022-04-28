'use strict';

import {getUserDataFromElma} from "../api/elmaApi";

export const DocumentsClass = function (parentBlock, elmaId) {
    const self = this;
    this.documentsList = [];
    this.container = $('.documents__wrap');

    this.getDocs = async () => {
        const url = `https://aeqlmvgvlxcee.elma365.ru/api/extensions/3d15932c-766e-4e91-b8ff-fed442649de2/script/ward/documents?id=${elmaId}`;

        const result = await getUserDataFromElma(url, {
            method: 'GET',
        });
        const data = await result.json();

        return await data.files;
    }

    this.editNotice = () => {
        const notice = $('.documents__notice');

        if (notice.length) {
            notice.html('Документы');
        }
    }

    this.createDocumentItem = (idx, documentTitle, documentUrl) => {
        return $(`<div class="documents__item">
                    <span class="documents__item_idx">${parseInt(idx) + 1}.</span>
                    <p class="documents__item_title">${documentTitle}</p>
                    <a href="${documentUrl}" class="documents__item_link">Скачать</a>
                </div>`);
    }

    this.createDocumentsList = () => {
        this.documentsList.forEach((d, i) => {
            const elem = self.createDocumentItem(i, d.docname, d.url);
            self.container.append(elem);
        })
    }

    this.displayDocumentsList = () => {
        if (!this.documentsList.length) {
            return;
        }

        this.editNotice();
        this.createDocumentsList();
    }

    this.init = async () => {
        this.documentsList = await this.getDocs();

        if (this.documentsList.length) {
            this.displayDocumentsList();
        }
    }
}