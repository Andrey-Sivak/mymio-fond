'use strict';

const TOKEN = '8657d620-f5eb-4552-997d-d3ec43688c29';

export const getUserDataFromElma = async (url, method, body) => {

    this.options;

    if (body) {
        this.options = {
            method: method,
            headers: {
                'Content-Type': 'application/json',
                'X-Token': TOKEN,
            },
            body: body,
        }
    } else {
        this.options = {
            method: method,
            headers: {
                'Content-Type': 'application/json',
                'X-Token': TOKEN,
            }
        }
    }

    try {
        return await fetch(url, this.options)
    } catch (e) {
        return false;
    }
}