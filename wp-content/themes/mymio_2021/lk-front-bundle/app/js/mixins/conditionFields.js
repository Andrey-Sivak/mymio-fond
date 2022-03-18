const fieldsRelation = $('[data-cond-relation]');

fieldsRelation.each(function () {
    if ($(this).is('select')) {
        return;
    }
    const conditionName = $(this).data('condRelation');
    const dependFields = $(`[data-cond-dep-name="${conditionName}"]`);

    $(this).on('change', function () {
        let value = $(this).val();

        if ($(this).attr('type') === 'checkbox') {
            value = $(this).prop('checked');
        } else if ($(this).attr('type') === 'radio') {
            value = $(this).val() === 'Да';
        }

        dependFields.each(function () {
            const needValue = $(this).data('condDepValue');

            if (typeof needValue === 'string') {

                if (needValue.includes('|,|')) {
                    const needValuesArr = needValue.split('|,|');

                    if (needValuesArr.includes(value) && $(this).hasClass('show')) {
                        return;
                    }

                    if (needValuesArr.includes(value) && !$(this).hasClass('show')) {
                        $(this).addClass('show');
                        return;
                    }

                    $(this).removeClass('show');
                    return;
                }
            }

            if (needValue === value && $(this).hasClass('show')) {
                return;
            }

            if (needValue === value && !$(this).hasClass('show')) {
                $(this).addClass('show');
                return;
            }

            $(this).removeClass('show');
        })
    })
})