'use strict';

import {getUserDataFromElma} from "../api/elmaApi";
import {checkUserExist, deleteUserData} from "../api/customApi";
import {loader} from "../mixins/loader";

export const RegisterByApi = function (email) {
    const self = this;
    this.email = email;
    this.modalWindow = document.querySelector('.modal--register');

    this.checkUser = async () => {
        try {
            const result = await checkUserExist(this.email);
            return await result.json();
        } catch (e) {
            return false;
        }
    }

    this.getElmaIdByEmail = async () => {
        try {
            const url = 'https://3mxk6vwcpahuu.elma365.ru/api/extensions/49bd5171-49b3-4dec-aba8-be894465f9d9/script/search_guardianship_by_email';
            const requestBody = JSON.stringify({
                context: {
                    email: email,
                }
            });
            const requestOptions = {
                method: 'POST',
                body: requestBody,
            }

            const result = await getUserDataFromElma(url, requestOptions);

            return await result.json();
        } catch (e) {
            return false;
        }
    }

    this.sendUserPasswordToElma = async (elmaId, pass) => {
        try {
            const requestBody = JSON.stringify({
                context: {
                    id: elmaId,
                    password: pass.user_pass,
                }
            });
            const url = 'https://3mxk6vwcpahuu.elma365.ru/api/extensions/49bd5171-49b3-4dec-aba8-be894465f9d9/script/old_base/appupdate';

            const requestOptions = {
                method: 'POST',
                body: requestBody,
            }

            const result = await getUserDataFromElma(url, requestOptions);
            return await result.json();
        } catch (e) {
            return false;
        }
    }

    this.check = async () => {

        const checkUserRes = await this.checkUser();
        let success = true;
        //TODO: fix me
        const modal = new this.modal();

        if (await checkUserRes.status) {
            modal.changeContent('???????????????? id ????????????????????????...');
            const elmaId = await this.getElmaIdByEmail();

            if (await elmaId.id) {
                modal.changeContent('???????????????? ?????????????? ????????????...');
                const register = await this.sendUserPasswordToElma(elmaId.id, checkUserRes);

                if (await register) {
                    modal.finish('????????????!');
                } else {
                    success = false;
                    modal.finish('???????????? ??????????????. ???????????????????? ??????????.');
                }
            } else {
                success = false;
                modal.finish('???????????? ??????????????. ???????????????????? ??????????.');
            }
        } else {
            modal.finish(`???????????????????????? ?? email "${this.email}" ?????? ??????????????????????????????.`);
        }

        if (success) {
            return;
        }

        await deleteUserData(this.email);
    }

    this.modal = function () {
        const modal = self.modalWindow;
        const modalContent = modal.querySelector('.modal--content');
        const modalBtn = modal.querySelector('.modal--btn');

        this.changeContent = (text) => {
            modalContent.innerHTML = text;
        }

        this.finish = (text) => {
            this.changeContent(text);
            loader('.modal--register');
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

    this.init = () => {
        window.addEventListener('load', async () => {
            await this.check();
        });
    }
}