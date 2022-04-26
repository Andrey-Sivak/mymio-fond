'use strict';

import {getUserDataFromElma} from "../api/elmaApi";

export const RefusalByApi = function (email) {
    const self = this;
    this.email = email;
    this.modalWindow = document.querySelector('.modal--register');

    this.modal = function () {
        const modal = self.modalWindow;
        const modalContent = modal.querySelector('.modal--content');
        const modalBtn = modal.querySelector('.modal--btn');

        this.changeContent = (text) => {
            modalContent.innerHTML = text;
        }

        this.finish = (text) => {
            if (text) {
                this.changeContent(text);
            }
            // loader('.modal--register');
            if (modalBtn.classList.contains('hide')) {
                modalBtn.classList.remove('hide');
            }
            modal.dataset.close = 'true';
            modal.addEventListener('click', this.hideModal);
            window.history.pushState(null, document.title, window.location.pathname);
        }

        this.hideModal = function (e) {
            e.preventDefault();
            const target = e.target;
            if (target.dataset.close) {
                self.modalWindow.classList.remove('active');
            }
        }
    }

    this.refusalRequest = async () => {
        const modal = new self.modal();
        const url = 'https://aeqlmvgvlxcee.elma365.ru/api/extensions/3d15932c-766e-4e91-b8ff-fed442649de2/script/old_base/cancel';
        const requestBody = JSON.stringify({
            email: email,
        });
        const requestOptions = {
            method: 'POST',
            body: requestBody,
        }

        getUserDataFromElma(url, requestOptions)
            .then(modal.finish())
            .catch(modal.finish('Ошибка сервера. <br>Попробуйте позднее'));
    }

    this.init = async () => {
        window.addEventListener('load', async () => {
            await this.refusalRequest();
        });
    }
}