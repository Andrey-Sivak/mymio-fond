export const fillSameValues = (commonInputName, filledInputsNames) => {
    const commonValue = $(`[name="${commonInputName}"]`).val();

    console.log(commonValue);

    filledInputsNames.forEach(f => {
        const elem = $(`[name="${f}"]`);
        console.log('');
        console.log(elem);

        if (!elem.val()) {
            elem.val(commonValue);
        }
    });
}