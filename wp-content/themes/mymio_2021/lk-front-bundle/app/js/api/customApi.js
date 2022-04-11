'use strict';

export const getDataFromDb = async (url) => {

    try {
        return await fetch(url, {
            method: method,
            headers: {
                'Content-Type': 'application/json',
            }
        })
    } catch (e) {
        return false;
    }
}