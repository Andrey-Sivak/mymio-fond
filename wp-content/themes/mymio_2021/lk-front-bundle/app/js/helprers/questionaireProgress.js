export const questionaireProgress = () => {
    const container = $('.lk-progress-inner');
    const all = $('.lk-form__tabs').children().length;
    const locked = $('.lk-form__tab.locked').length;

    const string = `${locked}/${all}`;
    container.html(string);
}