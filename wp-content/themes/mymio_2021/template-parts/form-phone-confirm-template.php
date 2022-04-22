<?php
$object = $args['object'];
$form_name = $args['form_name'] ?? null;
$elmaName = $object['elma_name'] ?? null;
$field_name = $object['name'] ? $form_name . '_' . $object['name'] : '';
$required = $object['required'] ?? null;
$question = $object['question'] ?? null;
?>
<div class="contact-form__form-field phone-confirm">

    <?php if ($question) : ?>
        <p class="contact-form__form-field_note"><?php echo $question; ?></p>
    <?php endif; ?>

    <span class="phone-confirm-error"></span>

    <div class="phone-confirm__wrap">
        <input type="text"
               name="<?php echo $field_name . '_'; ?>"
               id="<?php echo $field_name . '_'; ?>"
               placeholder="****"
               class="contact-form__input">
        <span class="phone-confirm__btn check">Проверить</span>
        <span class="phone-confirm__btn send active">Получить код</span>
        <input type="hidden"
               name="<?php echo $field_name; ?>"
               id="<?php echo $field_name; ?>"
               value=""
            <?php if ($elmaName) : ?>
                data-elma="<?php echo $elmaName; ?>"
            <?php endif; ?>
            <?php if ($required) : ?>
                data-req="true"
            <?php endif; ?>
        >
    </div>
    <p class="phone-confirm-resend">Код придет в течение 5 минут. Если код не пришел, нажмите "Отправить повторно"</p>
    <p class="phone-confirm-message"></p>
</div>