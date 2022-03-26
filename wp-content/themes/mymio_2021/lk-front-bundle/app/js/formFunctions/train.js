(function train() {
    const trains = $('.train');

    trains.each(function () {
        const input = $(this).find('.train__hide-input');
        const trainItems = $(this).find('.train__item_inner');
        let start = null;
        let end = null;

        train.addEventListener('click', selectRange);

        function selectRange(e) {
            const target = e.target;

            if (!target.classList.contains('train__item_inner')) return;

            const value = parseInt(target.innerHTML);

            if (!start) {
                start = value;
                target.parentElement.classList.add('active');
                setInput(start, end);
                return;
            }

            if (start === value || end === value) {
                activeRange(0, 0);
                return;
            }

            if (start > value) {
                end = start;
                start = value;
                activeRange(start, end);
            } else if (value > start && value < end) {
                start = value;
                activeRange(start, end);
            } else {
                end = value;
                activeRange(start, end);
            }
        }

        function activeRange(start, end) {
            setInput(start, end);
            const activeItems = [...document.querySelectorAll('.train__item.active')];

            if (activeItems.length) {
                activeItems.forEach(a => a.classList.remove('active'));
            }

            if (start === end) {
                start = null;
                end = null;
                return;
            }

            trainItems.forEach(t => {
                const number = parseInt(t.innerHTML);
                if (number >= start && number <= end) t.parentElement.classList.add('active');
            })
        }

        function setInput(start = 0, end = 0) {
            const startStr = start ? start + '' : 0;
            const endStr = end ? end + '' : 0;

            if (!startStr) {
                input.val('');
                return;
            }

            if (!endStr) {
                input.val(startStr);
                return;
            }

            input.val(`${startStr}-${endStr}`);
        }
    });
})();