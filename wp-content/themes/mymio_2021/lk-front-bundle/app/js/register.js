'use strict';

import {RegisterByApi} from "./registerByApi/RegisterByApi";

if (registerEmail) {
    window.addEventListener('load', async () => {
        const registerNewUser = new RegisterByApi(registerEmail);

        const checkUserRes = await registerNewUser.checkUser();

        if (await checkUserRes) {
            const elmaId = await registerNewUser.getElmaIdByEmail();

            if (await elmaId.id) {
                const created = await registerNewUser.createNewUser(elmaId.id);
                const register = await registerNewUser.sendUserPasswordToElma(elmaId.id, checkUserRes);

                if (await created && await register) {
                    registerNewUser.hideModal();
                }
            }
        }
    });
}