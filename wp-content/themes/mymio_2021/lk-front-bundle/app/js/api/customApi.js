'use strict';

const apiUrl = `${homeUrl}/custom_auth/`;

export const getDataFromDb = async (url) => {

    try {
        return await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })
    } catch (e) {
        return false;
    }
}

const postData = async (url = '', data = {}) => {

    try {
        return await fetch(url, {
            method: 'POST',
            mode: 'no-cors',
            body: data,
        });
    } catch (e) {
        return false;
    }
}

const postDataToDb = async (method, ...args) => {
    const userData = Object.create({});

    Object.defineProperty(userData, 'user_data', {
        value: {},
        enumerable: true,
        writable: true,
    });

    args.forEach(a => {
        const propName = a.name;
        const propVal = a.value || '';
        Object.defineProperty(userData.user_data, propName, {
            value: propVal,
            enumerable: true,
            writable: true,
        });
    });

    const url = `${apiUrl}${method}.php`;
    const formData = new FormData();
    formData.set('user_data', JSON.stringify(userData));

    return await postData(url, formData);
}

export const checkUserExist = async (email, name) => {

    const emailObj = {
        name: 'user_email',
        value: email,
    };

    const nameObj = {
        name: 'user_name',
        value: name,
    }

    return await postDataToDb('create-user', emailObj, nameObj);
}

export const createUser = async (email, elamId) => {

    const emailObj = {
        name: 'user_email',
        value: email,
    };

    const elmaIdObj = {
        name: 'elma_id',
        value: elamId,
    }

    return await postDataToDb('create-user-elma-id', emailObj, elmaIdObj);
}

export const deleteUserData = async (email) => {
    const emailObj = {
        name: 'user_email',
        value: email,
    };

    return await postDataToDb('delete-user', emailObj);
}