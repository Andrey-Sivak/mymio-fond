'use strict';

import {getUserDataFromElma} from "../api/elmaApi";
import {checkUserExist, createUser, postData} from "../api/customApi";

export const RegisterByApi = function (email) {
    this.email = email;

    this.checkUser = async () => {
        try {
            const result = await checkUserExist(this.email);
            return await result.text();
        } catch (e) {
            return `User with email ${this.email} already exist`;
        }
    }

    this.getElmaIdByEmail = async () => {
        try {
            const url = 'https://aeqlmvgvlxcee.elma365.ru/api/extensions/3d15932c-766e-4e91-b8ff-fed442649de2/script/search_guardianship_by_email';
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
            return e;
        }
    }

    this.sendUserPasswordToElma = async (elmaId, pass) => {
        try {
            const requestBody = JSON.stringify({
                context: {
                    id: elmaId,
                    password: pass,
                }
            });
            const url = 'https://aeqlmvgvlxcee.elma365.ru/api/extensions/3d15932c-766e-4e91-b8ff-fed442649de2/script/old_base/appupdate';

            const requestOptions = {
                method: 'POST',
                body: requestBody,
            }

            const result = await getUserDataFromElma(url, requestOptions);
            return await result.json();
        } catch (e) {
            return 'Failed to create password';
        }
    }

    this.createNewUser = async (elmaId) => {
        try {
            return await createUser(this.email, elmaId);
        } catch (e) {
            return 'Error';
        }
    }

    this.hideModal = () => {
        const modal = document.querySelector('.modal--register');
        modal.parentElement.removeChild(modal);
    }
}