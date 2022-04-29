<?php
$object = $args['object'];
$field_idx = $args['field_idx'] ?? null;
$form_index = $args['form_index'] ?? null;
$items = $object['items'] ?? null;
$elmaName = $object['elma_name'] ?? null;
$form_name = $args['form_name'] ?? null;
$_name = $object['name'] ? $form_name . '_' . $object['name'] : '';
$required = $object['required'] ?? null;
$question = $object['question'] ?? null;
$is_input_exist = $object['is_input_exist'] ?? null;
$input_label = $object['input_label'] ?? null;
$condition = $object['condition'] ?? null;
$condition_relation = $object['condition_relation'] ?? null;
$require_value = $condition['require_value'] ?? null;

if (is_array($require_value)) {
    $require_value = implode('|,|', $require_value);
} ?>

<div class="contact-form__form-field check"
    <?php if ($require_value) : ?>
        data-cond-dep-value="<?= $require_value; ?>"
    <?php endif;
    if ($condition['condition_dependency']) : ?>
        data-cond-dep-name="<?= $condition['condition_dependency']; ?>"
    <?php endif;
    if ($condition_relation) : ?>
        data-cond-relation="<?= $condition_relation; ?>"
    <?php endif; ?>
>

    <?php if ($question) : ?>
        <p class="contact-form__form-field_note"><?= $question; ?></p>
    <?php endif; ?>

    <?php foreach ($items as $key => $item) :
        $field_name = $item['name'];
        $label = $item['label'];
        $condition_relation = $item['condition_relation'];

        $is_privacy_confirmation = $label == 'Согласен на обработку персональных данных'
            ? 'Согласен на обработку <a href="https://mymiofond.ru/docs/privacy_police.pdf" target="_blank">персональных данных</a>' : null;
        ?>

        <input type="checkbox"
               id="<?= $field_name ?: $form_index . '_' . $field_idx . '_' . $key; ?>"
               value="<?= $label; ?>"
               class="contact-form__input checkbox">
        <label for="<?= $field_name ?: $form_index . '_' . $field_idx . '_' . $key; ?>"
               class="contact-form__label checkbox"><?php echo $is_privacy_confirmation ?? $label; ?></label>

    <?php endforeach; ?>

    <?php if ($is_input_exist) : ?>
        <div class="checkbox-input">
            <input type="text"
                   class="select-input__input">
            <label class="contact-form__label">Указать</label>
        </div>
    <?php endif; ?>

    <input type="hidden"
           data-elma="<?= $elmaName; ?>"
        <?php if ($required) : ?>
            data-req="true"
        <?php endif; ?>
           name="<?= $_name; ?>">

</div>
