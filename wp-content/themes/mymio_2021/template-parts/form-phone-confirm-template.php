<?php
$object = $args['object'];
$form_name = $args['form_name'];
$elmaName = $object['elma_name'];
$field_name = $object['name'] ? $form_name . '_' . $object['name'] : '';
$required = $object['required'];
$question = $object['question'];
?>
<div class="contact-form__form-field phone-confirm">

    <?php if ($question) : ?>
        <p class="contact-form__form-field_note"><?= $question; ?></p>
    <?php endif; ?>

    <span class="phone-confirm-error"></span>

    <div class="phone-confirm__wrap">
        <input type="text"
               name="<?= $field_name; ?>"
               id="<?= $field_name; ?>"
               placeholder="****"
               class="contact-form__input">
        <span class="phone-confirm__btn check">Проверить</span>
        <span class="phone-confirm__btn send active">Получить код</span>
        <input type="hidden"
               name="<?= $field_name; ?>"
               id="<?= $field_name; ?>"
               value=""
            <?php if ($elmaName) : ?>
                data-elma="<?= $elmaName; ?>"
            <?php endif; ?>
            <?php if ($required) : ?>
                data-req="true"
            <?php endif; ?>
        >
    </div>
    <p class="phone-confirm-resend">Код придет в течение 5 минут. Если код не пришел, нажмите "Отправить повторно"</p>
    <p class="phone-confirm-message"></p>
</div>