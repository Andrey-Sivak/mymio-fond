'use strict';

import {RegisterByApi} from "./registerByApi/RegisterByApi";
import {RefusalByApi} from "./registerByApi/RefusalByApi";

if (registerEmail) {
    const registerNewUser = new RegisterByApi(registerEmail);
    registerNewUser.init();
}

if (wardRefusalEmail) {
    const registerNewUser = new RefusalByApi(wardRefusalEmail);
    registerNewUser.init();
}
