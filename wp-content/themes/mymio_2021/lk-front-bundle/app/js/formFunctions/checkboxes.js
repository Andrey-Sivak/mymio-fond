const checkboxesList = $('.contact-form__form-field.check');

checkboxesList.each(function () {

    const checks = $(this).find('input[type="checkbox"]');
    const hiddenInput = $(this).find('input[type="hidden"]');
    const customInput = $(this).find('input[type="text"]');

    checks.each(function () {
        $(this).on('change', function () {
            const is_check = $(this).prop("checked");
            const hiddenInputValue = hiddenInput.val();

            if (is_check) {

                if (!hiddenInputValue.includes($(this).val())) {

                    hiddenInput.val(`${hiddenInputValue} | ${$(this).val()}`);
                    return;
                }
                return;
            }

            if (hiddenInputValue.includes($(this).val())) {
                const newValue = hiddenInputValue.replace(` | ${$(this).val()}`, '');
                hiddenInput.val(newValue);
            }
        })
    });

    customInput.on('focus', function () {
        if ($(this).val() === '') return;

        const hiddenInputValue = hiddenInput.val();
        if (hiddenInputValue.includes($(this).val())) {
            const newValue = hiddenInputValue.replace(` | ${$(this).val()}`, '');
            hiddenInput.val(newValue);
        }
    });

    customInput.on('blur', function () {
        if ($(this).val() === '') return;

        const hiddenInputValue = hiddenInput.val();
        hiddenInput.val(`${hiddenInputValue} | ${$(this).val()}`);
    })
});