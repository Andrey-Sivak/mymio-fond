export const getInputNames = (form) => {
    const requiredInputs = $(form).find('[data-req="true"]');
    const items = Object.create({});
    requiredInputs.each(function () {
        const name = $(this).attr('name');

        const validation = $(this).data('validation');

        let attributes = {
            value: {
                required: true,
            }
        }

        switch (validation) {
            case 'email':
                attributes = {
                    value: {
                        required: true,
                        email: true,
                    }
                }
                break;
            case 'name':
                attributes = {
                    value: {
                        required: true,
                        _name: true,
                    }
                }
                break;
        }

        Object.defineProperty(items, name, attributes);
    });

    return items;
}