'use strict';

import {getUserDataFromElma} from "../api/elmaApi";

export const DocumentsClass = function (idx, parentBlock, elmaId) {
    const self = this;
    this.parentBlock = parentBlock;
    this.index = parseInt(idx);
    this.documentsList = [];
    this.container = $(parentBlock.block).find('.documents__wrap');
    this.apiUrl = '';

    this.getDocs = async () => {
        const url = `${self.apiUrl}?id=${elmaId}`;

        const result = await getUserDataFromElma(url, {
            method: 'GET',
        });
        const data = await result.json();

        return await data.files;
    }

    // c?igy6%Vb7

    this.editNotice = () => {
        const notice = $(self.parentBlock.block).find('.documents__notice');
        let text = '';

        switch (self.index) {
            case 2 :
                text = 'Документы';
                break;
            case 4 :
                text = 'Архив мед.анкет';
                break;
        }

        if (notice.length) {
            notice.html(text);
        }
    }

    this.setApiUrl = (idx) => {
        const baseUrl = 'https://aeqlmvgvlxcee.elma365.ru/api/extensions/3d15932c-766e-4e91-b8ff-fed442649de2/script/ward/';
        switch (idx) {
            case 2 :
                self.apiUrl = `${baseUrl}documents`;
                break;
            case 4 :
                self.apiUrl = self.apiUrl = `${baseUrl}med_anks`;
                break;
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
        this.setApiUrl(self.index);
        this.documentsList = await this.getDocs();

        if (this.documentsList.length) {
            this.displayDocumentsList();
        }
    }
}