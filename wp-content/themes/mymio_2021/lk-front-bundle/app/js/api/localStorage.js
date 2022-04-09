export const localStorageSet = (name, value) => {
    window.localStorage.setItem(name, value);
}

export const localStorageGet = (name) => {
    return window.localStorage.getItem(name);
}

export const localStorageRemove = (name) => {
    window.localStorage.removeItem(name);
}