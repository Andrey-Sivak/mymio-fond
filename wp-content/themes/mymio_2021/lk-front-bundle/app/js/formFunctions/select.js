if (jQuery('.select').length > 1) {
    jQuery('select').each(function () {
        let $this = jQuery(this).not('.select-search');
        let parent = jQuery(this).not('.select-search').parents('.select');
        $this.select2({
            minimumResultsForSearch: Infinity,
            dropdownParent: parent
        }).on('select2:select', function (e) {
            conditionFields($this);
        });
    });
    jQuery('.select-search').each(function () {
        let $this = jQuery(this);
        let parent = jQuery(this).parents('.select');
        $this.select2({
            dropdownParent: parent
        }).on('select2:select', function (e) {
            conditionFields($this);
        });
    });
} else {
    jQuery('select').select2({
        minimumResultsForSearch: Infinity,
        dropdownParent: jQuery('.select')
    });
}

$('.select').parent().on('click', function () {
    const ctx = $(this);
    const selectInput = ctx.find('.select-input');
    const inner = ctx.find('.select2-selection__rendered');

    inner.on('DOMSubtreeModified', function () {
        const content = $(this).html();

        if (content.includes('(указать')) {
            selectInput.addClass('active');
        } else if (!content.includes('(указать') && selectInput.hasClass('active')) {
            selectInput.removeClass('active');
        }
    });
});

function conditionFields(elem) {
    const value = elem.val();
    const conditionName = elem.data('condRelation');

    if (!conditionName) return;

    const dependFields = $(`[data-cond-dep-name="${conditionName}"]`);

    dependFields.each(function () {
        const needValue = $(this).data('condDepValue');

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

        if (needValue === value && $(this).hasClass('show')) {
            return;
        }

        if (needValue === value && !$(this).hasClass('show')) {
            $(this).addClass('show');
            return;
        }

        $(this).removeClass('show');
    })
}