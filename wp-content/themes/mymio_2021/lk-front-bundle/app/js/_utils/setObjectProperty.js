export const setObjectProperty = (object, elem) => {
    const elmaName = elem.data('elma');

    if (elmaName === '') return;

    const value = elem.val();

    Object.defineProperty(object, elmaName, {
        value: value,
        enumerable: true
    });
}