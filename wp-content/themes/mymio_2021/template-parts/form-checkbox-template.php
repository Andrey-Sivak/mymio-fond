<?php
$object = $args['object'];
$field_idx = $args['field_idx'];
$form_index = $args['form_index'];
$items = $object['items'];
$elmaName = $object['elma_name'];
$form_name = $args['form_name'];
$_name = $object['name'] ? $form_name . '_' . $object['name'] : '';
$required = $object['required'];
$question = $object['question'];
$is_input_exist = $object['is_input_exist'];
$input_label = $object['input_label'];
$condition = $object['condition'];
$condition_relation = $object['condition_relation'];
$require_value = $condition['require_value'];

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
        ?>

        <input type="checkbox"
               id="<?= $field_name ?: $form_index . '_' . $field_idx . '_' . $key; ?>"
               value="<?= $label; ?>"
               class="contact-form__input checkbox">
        <label for="<?= $field_name ?: $form_index . '_' . $field_idx . '_' . $key; ?>"
               class="contact-form__label checkbox"><?= $label; ?></label>

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
