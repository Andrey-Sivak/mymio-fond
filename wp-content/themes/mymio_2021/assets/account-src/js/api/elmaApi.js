'use strict';

const TOKEN = 'a9521f77-657f-4830-9c9b-d81c3b6de22d';

export const getUserDataFromElma = async (url, options) => {

    const headers = {
        headers: {
            'Content-Type': 'application/json',
            'X-Token': TOKEN,
        },
    };

    const requestOptions = {...headers, ...options}

    try {
        return await fetch(url, requestOptions);
    } catch (e) {
        return false;
    }
}