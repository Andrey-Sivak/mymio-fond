export const loader = (loaderContainer = 'body', mode, activeClass = 'active') => {
    const currentLoader = $(loaderContainer).find('.loader');

    if (!currentLoader) return;

    if (mode === 'show') {
        currentLoader.addClass(activeClass);
        return;
    }

    if (currentLoader.hasClass(activeClass)) {
        currentLoader.removeClass(activeClass);
    }
}