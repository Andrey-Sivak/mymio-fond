'use strict';

export const loader = (loaderContainer = 'body', mode, activeClass = 'active') => {
    let currentLoader;

    if (typeof loaderContainer === 'string') {
        currentLoader = $(loaderContainer).find('.loader');
    } else {
        currentLoader = loaderContainer.find('.loader');
    }

    if (!currentLoader) return;

    if (mode === 'show') {
        currentLoader.addClass(activeClass);
        return;
    }

    if (currentLoader.hasClass(activeClass)) {
        currentLoader.removeClass(activeClass);
    }
}