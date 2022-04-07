import {questionaireProgress} from "../helprers/questionaireProgress";
import {getStage} from "./getStage";

export const goToNextForm = (dataFormCurrent) => {

    const currentTopTab = $('.lk-form.active').data('form');
    const isNeurology = parseInt(currentTopTab) === 2;
    if (parseInt(currentTopTab) !== 2) return;

    const tabClass = 'lk-form__tab';
    const formClass = 'lk-form__tab_content';
    const tabs = $(`.${tabClass}`);

    const currentTab = $(`.${tabClass}[data-tab="${dataFormCurrent}"]`);
    const currentForm = $(`.${formClass}[data-form="${dataFormCurrent}"]`);
    currentTab.addClass('locked');
    currentForm.addClass('locked');

    if (isNeurology) {
        const stageDependForms = $('form[data-stage]');

        const moveAbilities = $('select[data-elma="mank_motor_abilities_2"]').val();
        const lostAge = $('select[data-elma="mank_neuro_lost_ability"]').val();
        const stage = getStage(2, moveAbilities, lostAge);

        if (stage) {
            stageDependForms.each(function () {
                const stages = $(this).data('stage');
                const currentStage = stage.toString();

                if (!stages.includes(currentStage)) {

                    const tabCount = $(this)
                        .parent().parent().parent()
                        .data('form');

                    const tab = $(`.${tabClass}[data-tab="${tabCount}"]`);

                    tab.addClass('locked');
                }
            })
        }
    }

    let tabsString = '';

    tabs.each(function () {
        if ($(this).hasClass('locked')) {
            tabsString += `${$(this).data('tab')},`;
        }
    })

    const formData = new FormData();
    formData.set('tabs_string', tabsString);
    formData.set('user_email', 'asdfd1231312312a@as.asa');

    fetch(`${homeUrl}/api/medical-questionnare-tabs.php`, {
        method: 'POST',
        body: formData,
    })

    const lockedTabs = $(`.${tabClass}.locked`);
    const isLastForm = lockedTabs.length === tabs.length;

    if (isLastForm) {
        const currentTopTab = $('.lk-tab.active');
        const currentTopTabCount = parseInt(currentTopTab.data('tab'));
        const nextTopTab = $(`.lk-tab[data-tab="${currentTopTabCount + 1}"]`);
        currentTab.removeClass('active');
        nextTopTab.trigger('click');
        return;
    }

    let nextTab;

    for (let i = dataFormCurrent; i < tabs.length; i++) {
        if (!$(tabs[i]).hasClass('locked')) {
            nextTab = tabs[i];
            break;
        }
    }

    if (!nextTab) {
        for (let i = 0; i < dataFormCurrent; i++) {
            if (!$(tabs[i]).hasClass('locked')) {
                nextTab = tabs[i];
                break;
            }
        }
    }

    questionaireProgress();

    setTimeout(() => {
        $(nextTab).trigger('click');

        /*setTimeout(() => {
            $('.lk-form__tab_content.active').animate({
                scrollTop: 0
            }, 1000);
        }, 300);*/
    }, 1500);
}