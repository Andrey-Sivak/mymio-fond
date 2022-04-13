'use strict';

const TOKEN = '8657d620-f5eb-4552-997d-d3ec43688c29';

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
        return e;
    }
}