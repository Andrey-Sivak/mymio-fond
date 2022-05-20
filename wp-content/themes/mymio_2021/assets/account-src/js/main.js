'use strict';

import {AccountClass} from "./classes/AccountClass";
(async function () {
    const account = new AccountClass();
    await account.init();
})();