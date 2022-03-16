export const formResultHandler = (response, currentForm) => {
    const loader = currentForm.find('.loader');
    // const disabler = currentForm.find('.disabler');
    const result = currentForm.find('.result');
    if (response === 'success') {
        currentForm.trigger('reset');
        result.html('Ответы сохранены, переход к следующему блоку');
        if (result.hasClass('success')) {
            result.removeClass('success');
        }
        result.addClass('success');
        loader.removeClass('active');
        // disabler.addClass('active');
        return true;
    }

    result.html('Ошибка отправки. Проверьте данные или попробуйте позже.');
    result.addClass('err');
    loader.removeClass('active');
    return false;
}