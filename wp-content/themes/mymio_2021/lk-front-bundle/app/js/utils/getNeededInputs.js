import {setObjectProperty} from "./setObjectProperty";

export const getNeededInputs = (form) => {
    const inputsList = form.find('[data-elma]');
    const object = Object.create({});
    Object.defineProperty(object, 'context', {
        value: {},
        enumerable: true
    });

    inputsList.each(function () {
        if ($(this).is('select')) {

            const selectValue = $(this).val();

            if (selectValue.includes('(указать')) {
                const selectParent = $(this).parent().parent();
                const selectInput = $(selectParent).find('.select-input .select-input__input');
                const elmaName = $(this).data('elma');
                selectInput.data('elma', elmaName);

                setObjectProperty(object.context, selectInput);
                return;
            }
        }

        if ($(this).attr('type') === 'radio') {
            if (!$(this).prop('checked')) {
                return;
            }
        }

        setObjectProperty(object.context, $(this));
    });

    return object;
}