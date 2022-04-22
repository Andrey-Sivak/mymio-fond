<?php
$object = $args['object'];
$field_idx = $args['field_idx'] ?? null;
$required = $object['required'] ?? null;
$elmaName = $object['elma_name'] ?? null;
$form_index = $args['form_index'] ?? null;
$items = $object['items'] ?? null;
$question = $object['question'] ?? null;
$field_name = $object['name'] ?? $form_index . '_' . $field_idx;
$condition_relation = $object['condition_relation'] ?? null;
$condition = $object['condition'] ?? null;
$require_value = $condition['require_value'] ?? null;
$condition_age = $object['condition_age'] ?? null;

if (is_array($require_value)) {
    $require_value = implode('|,|', $require_value);
} ?>

<div class="contact-form__form-field radio"
    <?php if ($require_value) : ?>
        data-cond-dep-value="<?php echo $require_value; ?>"
    <?php endif;
    if ($condition['condition_dependency']) : ?>
        data-cond-dep-name="<?php echo $condition['condition_dependency']; ?>"
    <?php endif;
    if ($condition_relation) : ?>
        data-cond-relation="<?php echo $condition_relation; ?>"
    <?php endif;
    if ($condition_age) : ?>
        data-cond-age="<?php echo $condition_age; ?>"
    <?php endif; ?>
>

    <?php if ($question) : ?>
        <p class="contact-form__form-field_note"><?php echo $question; ?></p>
    <?php endif; ?>

    <?php foreach ($items as $key => $item) : ?>

        <input type="radio"
               value="<?php echo $item; ?>"
               data-elma="<?php echo $elmaName; ?>"
            <?php if ($required && ($key == 1)) : ?>
                data-req="true"
            <?php endif; ?>
               name="<?php echo $field_name; ?>"
               id="<?php echo $form_index . '_' . $field_idx . '_' . $key; ?>"
               class="contact-form__input checkbox">
        <label for="<?php echo $form_index . '_' . $field_idx . '_' . $key; ?>"
               class="contact-form__label checkbox"><?php echo $item; ?></label>

    <?php endforeach; ?>

</div>
