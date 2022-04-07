export const fillSameValues = (commonInputName, filledInputsNames) => {
    const commonValue = $(`[name="${commonInputName}"]`).val();

    console.log(commonValue);

    filledInputsNames.forEach(f => {
        const elem = $(`[name="${f}"]`);

        if (!elem.val()) {
            elem.val(commonValue);
        }
    });
}