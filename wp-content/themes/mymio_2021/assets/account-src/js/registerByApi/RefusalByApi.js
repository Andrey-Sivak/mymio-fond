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
        const url = 'https://3mxk6vwcpahuu.elma365.ru/api/extensions/49bd5171-49b3-4dec-aba8-be894465f9d9/script/old_base/cancel';
        const requestBody = JSON.stringify({
            email: email,
        });
        const requestOptions = {
            method: 'POST',
            body: requestBody,
        }

        getUserDataFromElma(url, requestOptions)
            .then((res) => res.json())
            .then(data => {
                if (data.status) {
                    modal.finish(`Нам очень жаль, что вы не смогли быть с нами.
                    <br>С уважением к Вашему решению,
                    <br>фонд "МойМио"`);
                } else {
                    modal.finish('Ошибка сервера. <br>Попробуйте позднее');
                }
            })
            .catch((e) => {
                modal.finish('Ошибка сервера. <br>Попробуйте позднее');
                console.log(e);
            });
    }

    this.init = async () => {
        window.addEventListener('load', async () => {
            await this.refusalRequest();
        });
    }
}