'use strict';

import {RegisterByApi} from "./registerByApi/RegisterByApi";

if (registerEmail) {
    const registerNewUser = new RegisterByApi(registerEmail);
    registerNewUser.init();
}
